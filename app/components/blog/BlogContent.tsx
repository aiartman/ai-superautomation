import Image from 'next/image'
import VideoSection from './VideoSection'

export default function BlogContent() {
  return (
    <div className="md:w-[70%]">
      <div className="bg-[#f2f3f5] p-8 rounded-lg">
        <p className="text-sm uppercase mb-2">VIDEO CASE STUDY</p>
        <h1 className="text-4xl font-bold mb-4 font-['loos-normal']">
          How we used "Superautomation" to generate 400 connection requests/week and 3x sales in ⅓ the time
        </h1>
        <p className="text-lg mb-6">
          In the email I sent you, I said I will show you exactly which automation tools we use. This case study goes into a ton of detail on that topic.
        </p>

        <div className="flex items-center mb-8">
          <Image 
            src="/images/blog/author-avatar.svg" 
            alt="Charlie Harper" 
            width={48} 
            height={48} 
            className="rounded-full mr-4" 
          />
          <p className="text-sm">Charlie Harper / Tech Visionary / Total Rockstar</p>
        </div>

        <p className="text-lg mb-6">
          As promised, I've written a case study that shows you exactly how we were able to use Superautomation™ to generate 400 connection requests/week. This is a completely new way of doing automation, nothing like you have seen before.
        </p>

        <div className="md:hidden">
          <VideoSection />
        </div>

        <h2 className="text-2xl font-bold mb-4">Want more info about the "Superautomation" case study?</h2>

        <p className="text-lg mb-4">
          It's not short, it's around 10-15 minutes, depending on your reading speed. (If you don't have the time right now, you would rather get it via email in small chunks, click here.)
        </p>

        <p className="text-lg mb-4">
          I go into massive detail, revealing the breakthrough that allowed us to achieve these incredible results. But if you're looking for a quick overview first, you'll find the core findings and benefits clearly highlighted throughout the case study.
        </p>

        <p className="text-lg mb-4">
          We've broken down the process step-by-step, so you don't need to be a tech whiz to follow along. The automation tools are beginner-friendly and intuitive. By the end of 15 minutes, you'll see exactly how they can apply to your unique situation.
        </p>

        <p className="text-lg mb-4">
          We believe in transparency, so we've dedicated a section to addressing potential drawbacks and risks associated with this automation approach. We want you to make an informed decision about whether this idea makes sense for you.
        </p>

        <p className="text-lg mb-8">
          One last thing it is in a clear, digestible format, striking a balance between high-level insights and practical steps you can take right away. You'll find best practices and specific action items to ensure your success.
        </p>
      </div>
    </div>
  )
} 