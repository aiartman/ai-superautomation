'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Video, Users, Calendar, ChevronRight, ChevronLeft, AlertCircle } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import Script from 'next/script'

// Add these interfaces at the top of your file
interface FormData {
  fullName: string;
  email: string;
  company: string;
  jobTitle: string;
  linkedInProfile: string;
  goals: string;
  timestamp?: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  linkedInProfile?: string;
}

interface Notification {
  type: 'success' | 'error';
  message: string;
}

interface SubmissionResponse {
  status: 'success' | 'error';
  message: string;
}

// Update the submitFormToGoogleSheets function with proper typing
const submitFormToGoogleSheets = async (data: FormData): Promise<SubmissionResponse> => {
  try {
    // Convert form data to URL-encoded format
    const formData = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Create the URL with the deployment ID
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwSLH4PHAcwox1Q7Dww_aKHtzf8g4CAPjAPV09Wr7hWbMlt-nXcx1lUkt2P2TrTwd95/exec';
    
    // Make the fetch request
    await fetch(SCRIPT_URL, {
      redirect: 'follow',
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      mode: 'no-cors' // This is important for CORS issues
    });

    // Since we're using no-cors, we can't actually read the response
    // So we'll return a success status
    return { 
      status: 'success', 
      message: 'Form submitted successfully' 
    };
    
  } catch (error) {
    console.error('Submission error:', error);
    throw new Error('Failed to submit form');
  }
};

export default function PaymentSuccessPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [showWistiaVideo, setShowWistiaVideo] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    linkedInProfile: '',
    goals: '',
  })

  // Update the errors state to use the FormErrors interface
  const [errors, setErrors] = useState<FormErrors>({})
  const [formProgress, setFormProgress] = useState(0)

  // Add loading state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add this state for notification
  const [notification, setNotification] = useState<Notification | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  // Update the validateForm function to be more flexible with LinkedIn URLs
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {}
    if (!formData.fullName) newErrors.fullName = 'Full Name is required.'
    if (!formData.email) {
      newErrors.email = 'Email is required.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.'
    }
    
    // Clean and validate LinkedIn URL if provided
    if (formData.linkedInProfile) {
      const cleanUrl = formData.linkedInProfile.trim().toLowerCase();
      if (!cleanUrl.includes('linkedin.com/')) {
        newErrors.linkedInProfile = 'Please enter a valid LinkedIn URL';
      }
    }
    
    return newErrors;
  }

  // Update the handleSubmit function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Clean up LinkedIn URL before submission
        const cleanedFormData = {
          ...formData,
          linkedInProfile: formatLinkedInUrl(formData.linkedInProfile),
          timestamp: new Date().toISOString()
        };

        await submitFormToGoogleSheets(cleanedFormData);
        
        // Show success notification
        setNotification({
          type: 'success',
          message: 'Profile saved successfully! Moving to the next step...'
        });

        // Clear notification after 5 seconds
        setTimeout(() => {
          setNotification(null);
        }, 5000);

        // Move to next step after a short delay
        setTimeout(() => {
          setActiveStep(2);
        }, 1500);
        
      } catch (error) {
        console.error('Error submitting form:', error);
        setNotification({
          type: 'error',
          message: 'Failed to save profile. Please try again.'
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  // Add this helper function to format LinkedIn URLs
  const formatLinkedInUrl = (url: string): string => {
    if (!url) return '';
    
    let cleanUrl = url.trim().toLowerCase();
    
    // Remove any existing protocol
    cleanUrl = cleanUrl.replace(/^(https?:\/\/)?(www\.)?/i, '');
    
    // Add https:// if not present
    if (!cleanUrl.startsWith('linkedin.com/')) {
      // If it's just a profile ID/username, add the full path
      if (!cleanUrl.includes('linkedin.com/')) {
        cleanUrl = `linkedin.com/in/${cleanUrl}`;
      }
    }
    
    return `https://www.${cleanUrl}`;
  };

  useEffect(() => {
    const totalFields = 5
    let filledFields = 0
    if (formData.fullName) filledFields++
    if (formData.email) filledFields++
    if (formData.company) filledFields++
    if (formData.jobTitle) filledFields++
    if (formData.linkedInProfile) filledFields++
    setFormProgress((filledFields / totalFields) * 100)
  }, [formData])

  const steps = [
    {
      title: "Watch Welcome Video",
      icon: <Video className="h-6 w-6" />,
      content: (
        <>
          {/* Include Wistia Scripts */}
          {showWistiaVideo && (
            <>
              <Script
                src="https://fast.wistia.com/embed/medias/rjbvajo9ud.jsonp"
                strategy="afterInteractive"
              />
              <Script
                src="https://fast.wistia.com/assets/external/E-v1.js"
                strategy="afterInteractive"
              />
            </>
          )}
          <div className="relative aspect-video w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            {!showWistiaVideo ? (
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setShowWistiaVideo(true)}
              >
                <Image
                  src="/images/video-thumbnail1.svg"
                  alt="Video thumbnail"
                  fill
                  className="object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300">
                  <Button
                    className="cosmic-button flex items-center space-x-2 transform scale-100 group-hover:scale-105 transition-transform duration-300"
                  >
                    <Video className="h-5 w-5" />
                    <span>Play Video</span>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
                <div className="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
                  <div className="wistia_embed wistia_async_rjbvajo9ud seo=true videoFoam=true" style={{height:'100%',position:'relative',width:'100%'}}>
                    <div className="wistia_swatch" style={{height:'100%',left:0,opacity:0,overflow:'hidden',position:'absolute',top:0,transition:'opacity 200ms',width:'100%'}}>
                      <Image
                        src="https://fast.wistia.com/embed/medias/rjbvajo9ud/swatch"
                        alt=""
                        fill
                        style={{filter:'blur(5px)', objectFit:'contain'}}
                        aria-hidden="true"
                        onLoad={(e) => (e.currentTarget.parentNode as HTMLElement).style.opacity = '1'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )
    },
    {
      title: "Complete Your Profile",
      icon: <Users className="h-6 w-6" />,
      content: (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className="bg-black h-2.5 rounded-full"
              style={{ width: `${formProgress}%` }}
            ></div>
          </div>

          <h3 className="text-2xl font-bold text-center text-black mb-6">
            Complete Your Profile
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name<span className="text-red-500">*</span>
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="block w-full pr-10 border-gray-300 focus:ring-black focus:border-black rounded-md"
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                )}
              </div>
              {errors.fullName && (
                <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email<span className="text-red-500">*</span>
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="block w-full pr-10 border-gray-300 focus:ring-black focus:border-black rounded-md"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                )}
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 focus:ring-black focus:border-black rounded-md"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                id="jobTitle"
                name="jobTitle"
                type="text"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 focus:ring-black focus:border-black rounded-md"
                placeholder="Your job title"
              />
            </div>

            <div className="md:col-span-2 relative">
              <label htmlFor="linkedInProfile" className="block text-sm font-medium text-gray-700">
                LinkedIn Profile URL
                <span className="ml-1 text-gray-400 cursor-pointer" title="You can enter your full LinkedIn URL or just your profile ID">
                  ⓘ
                </span>
              </label>
              <input
                id="linkedInProfile"
                name="linkedInProfile"
                type="text"
                value={formData.linkedInProfile}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 focus:ring-black focus:border-black rounded-md"
                placeholder="linkedin.com/in/yourprofile or just yourprofile"
              />
              {errors.linkedInProfile && (
                <p className="mt-2 text-sm text-red-600">{errors.linkedInProfile}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label htmlFor="goals" className="block text-sm font-medium text-gray-700">
                What are your main goals with our platform?
              </label>
              <textarea
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleInputChange}
                rows={4}
                className="mt-1 block w-full border-gray-300 focus:ring-black focus:border-black rounded-md"
                placeholder="Share your goals with us..."
              />
            </div>
          </div>
          <div className="text-center">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="cosmic-button w-full md:w-auto px-12 py-3"
            >
              {isSubmitting ? 'Submitting...' : 'Save Profile'}
            </Button>
          </div>
        </form>
      )
    },
    {
      title: "Join Community",
      icon: <Users className="h-6 w-6" />,
      content: (
        <div className="text-center max-w-xl mx-auto">
          <Image
            src="/images/join-our-community.png"
            alt="Join our community illustration"
            width={300}
            height={200}
            className="mx-auto mb-6 rounded-lg object-cover"
            priority
          />
          <p className="mb-6 text-black text-lg">
            Connect with other members and start collaborating in our exclusive community.
          </p>
          <Link href="https://superautomation-d70cc6.circle.so/join?invitation_token=66ddef92455c6ccc8ab7d2cd6a4f3d83adadec09-a20be59d-c1d5-4cc0-ace3-1bde4e7e6d70">
            <Button className="cosmic-button w-full py-3">
              Join Community
            </Button>
          </Link>
        </div>
      )
    },
    {
      title: "Book Onboarding Call",
      icon: <Calendar className="h-6 w-6" />,
      content: (
        <div className="text-center max-w-xl mx-auto">
          <Image
            src="/images/book-an-on-boarding-call.png"
            alt="Book an onboarding call illustration"
            width={300}
            height={200}
            className="mx-auto mb-6 rounded-lg object-cover"
            priority
          />
          <p className="mb-6 text-black text-lg">
            Schedule a personalized onboarding call with our team to get started.
          </p>
          <Button asChild className="cosmic-button w-full py-3">
            <Link href="https://calendly.com/pascal-aisuperautomation/onboarding">Schedule Call</Link>
          </Button>
        </div>
      )
    }
  ]

  useEffect(() => {
    // Update progress bar width based on active step
    const progress = document.querySelector('.progress-bar') as HTMLElement
    if (progress) {
      progress.style.width = `${(activeStep / (steps.length - 1)) * 100}%`
    }
  }, [activeStep, steps.length])

  // Add this notification component
  const NotificationComponent = () => {
    if (!notification) return null;

    return (
      <div
        className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg transition-all duration-500 transform translate-y-0 ${
          notification.type === 'success' ? 'bg-gray-500' : 'bg-red-500'
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="flex items-center text-white">
          {notification.type === 'success' ? (
            <CheckCircle className="h-5 w-5 mr-2" />
          ) : (
            <AlertCircle className="h-5 w-5 mr-2" />
          )}
          <p>{notification.message}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Add the notification component at the top level */}
      <NotificationComponent />
      
      {/* Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 animate-pulse">
            <CheckCircle className="h-10 w-10 text-black" />
          </div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-black">
            Payment Successful
          </h2>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-5xl font-bold text-black mb-2">You&apos;re In!</p>
          <p className="text-xl text-gray-600">Welcome to AI Superautomation</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-16 sm:mx-auto sm:w-full sm:max-w-4xl">
        <Card className="border-0 shadow-2xl bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl overflow-hidden">
          <CardContent className="p-8">
            {/* Progress Steps */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-center text-black mb-8">Your Journey Begins</h3>
              <div className="flex justify-between items-center relative">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center z-10">
                    <div 
                      className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                        index === activeStep ? 'bg-black text-white scale-110 shadow-lg' : 
                        index < activeStep ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {index < activeStep ? <CheckCircle className="h-10 w-10" /> : step.icon}
                    </div>
                    <p className="mt-3 text-sm text-gray-600 text-center max-w-[100px] font-medium">{step.title}</p>
                  </div>
                ))}
                <div className="absolute left-0 top-10 w-full h-2 bg-gray-200 rounded-full -z-10"></div>
                <div className="progress-bar absolute left-0 top-10 h-2 bg-black rounded-full transition-all duration-1000 ease-out -z-10"></div>
              </div>
            </div>
            
            {/* Step Content */}
            <div className="mt-12 transition-all duration-500 ease-in-out transform">
              {steps[activeStep].content}
            </div>

            {/* Navigation Buttons */}
            <div className="mt-12 flex justify-between">
              <Button 
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className="cosmic-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="mr-2 h-5 w-5 inline" /> Previous
              </Button>
              <Button 
                onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                disabled={activeStep === steps.length - 1}
                className="cosmic-button pulse disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next <ChevronRight className="ml-2 h-5 w-5 inline" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-md text-center">
        <p className="text-gray-600 font-medium">Need help? <a href="mailto:support@aisuperautomation.com" className="text-black underline">Contact our support team</a></p>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          }
        }
        @keyframes cosmic-shine {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .cosmic-button {
          background: linear-gradient(45deg, #000000, #333333, #666666);
          background-size: 200% 200%;
          animation: cosmic-shine 5s ease infinite;
          border: none;
          color: white;
          font-weight: bold;
          padding: 12px 24px;
          border-radius: 30px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }
        .cosmic-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2);
        }
        .cosmic-button:active {
          transform: translateY(1px);
        }
        .cosmic-button::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0));
          transform: rotate(45deg);
          transition: all 0.3s ease;
        }
        .cosmic-button:hover::after {
          transform: rotate(45deg) translate(50%, 50%);
        }
        .pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  )
} 