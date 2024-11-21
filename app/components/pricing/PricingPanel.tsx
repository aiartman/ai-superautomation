import { Button } from "../../components/ui/button"
import { useRouter } from 'next/navigation'

interface PricingPanelProps {
  title: string
  headline: string
  price: string
  features: string[]
  idealFor: string[]
  ctaText: string
  footnote: string
  additionalInfo?: string
  isDark?: boolean
}

export function PricingPanel({
  title,
  headline,
  price,
  features,
  idealFor,
  ctaText,
  footnote,
  additionalInfo,
  isDark = false
}: PricingPanelProps) {
  const router = useRouter()
  const bgColor = isDark ? 'bg-gray-800' : 'bg-gray-200'
  const textColor = isDark ? 'text-white' : 'text-gray-800'
  const buttonColors = isDark 
    ? 'border-white text-white hover:text-gray-800' 
    : 'border-gray-800 text-gray-800 hover:text-white'
  const gradientColors = isDark
    ? 'from-white via-gray-200 to-white'
    : 'from-gray-800 via-gray-700 to-gray-800'

  return (
    <div className={`${bgColor} ${textColor} rounded-lg p-8 flex flex-col h-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl`}>
      <div className="mb-6 text-center">
        <h3 className="text-lg font-semibold mb-2 underline">{title}</h3>
        <h2 className="text-3xl font-bold mb-2">{headline}</h2>
        <p className="text-4xl font-bold">{price}</p>
      </div>
      <div className="flex flex-grow">
        <div className="w-1/2 pr-4">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          {additionalInfo && <p className="mt-4 text-sm">{additionalInfo}</p>}
        </div>
        <div className="w-1/2 pl-4">
          <h4 className="font-semibold mb-2">{isDark ? 'Perfect for:' : 'Ideal for:'}</h4>
          <ul className="space-y-2">
            {idealFor.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">{index + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6">
        <Button 
          className={`group relative w-full py-4 bg-transparent border-2 ${buttonColors} overflow-hidden`}
          onClick={() => router.push('/deals')}
        >
          <span className="relative z-10 transition-colors duration-300">
            {ctaText}
          </span>
          <div className={`absolute inset-0 bg-gradient-to-r ${gradientColors} transform translate-y-full group-hover:translate-y-0 transition-transform duration-300`} />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle,_white_10%,_transparent_50%)] animate-pulse" />
          </div>
        </Button>
      </div>
      <p className="mt-4 text-sm">{footnote}</p>
    </div>
  )
}
