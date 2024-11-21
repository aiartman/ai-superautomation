export interface Feature {
  icon: string
  title: string
  description: string
  hoverText: string
  bgImage: string
}

export interface FAQ {
  question: string
  answer: string
}

export const features: Feature[] = [
  {
    icon: "dna-icon.svg",
    title: "Automated Outreach Sequences",
    description: "Clone your proven LinkedIn outreach process.",
    hoverText: "Our AI-powered outreach sequences learn from your best-performing campaigns and automatically optimize for maximum engagement.",
    bgImage: "/images/feature-automation.svg"
  },
  {
    icon: "setup-icon.svg",
    title: "Full Setup and Support",
    description: "Experience seamless integration. We handle everything for you.",
    hoverText: "From account setup to ongoing optimization, our team of experts ensures your LinkedIn automation is always performing at its peak.",
    bgImage: "/images/feature-setup.svg"
  },
  {
    icon: "message-icon.svg",
    title: "Personalized Messaging at Scale",
    description: "Get in front of 10x larger audience at zero personal or reputation risk",
    hoverText: "Our advanced AI crafts personalized messages for each prospect, ensuring high engagement rates while maintaining your brand's voice and integrity.",
    bgImage: "/images/feature-messaging.svg"
  }
]

export const faqs: FAQ[] = [
  {
    question: "Will this affect my brand's reputation?",
    answer: "Our AI-powered system is designed to maintain your brand's voice and integrity. It enhances your outreach while preserving your unique brand identity."
  },
  {
    question: "How fast can we get started?",
    answer: "We can typically get you set up within 24-48 hours. Our streamlined onboarding process ensures you can start leveraging AI Superautomation quickly."
  },
  {
    question: "Will this work for me?",
    answer: "AI Superautomation is designed to work for a wide range of businesses. Whether you're a solopreneur or a growing company, our system can be tailored to your specific needs and goals."
  }
]
