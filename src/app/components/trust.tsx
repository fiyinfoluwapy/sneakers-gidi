import React from 'react'
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WalletIcon,
} from 'lucide-react'

export const TrustSection = () => {
  return (
    <section className="py-20 bg-[#28251F]/90">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Playfair_Display'] text-white">
            Not Fakes. Not Washed.{' '}
            <span className="text-[#DDAF72]">Real Originals.</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Every pair we sell has been through our rigorous verification
            process to ensure authenticity and quality.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TrustCard
            icon={<CheckCircleIcon size={32} className="text-[#DDAF72]" />}
            title="Verified Originals"
            description="Every pair authenticated by our expert team"
          />
          <TrustCard
            icon={<ShieldCheckIcon size={32} className="text-[#DDAF72]" />}
            title="Thrifted, Not Trashed"
            description="Premium condition, carefully selected inventory"
          />
          <TrustCard
            icon={<SparklesIcon size={32} className="text-[#DDAF72]" />}
            title="Cleaned & Sanitized"
            description="Professional cleaning for like-new condition"
          />
          <TrustCard
            icon={<WalletIcon size={32} className="text-[#DDAF72]" />}
            title="Affordable"
            description="Real brands without the retail markup"
          />
        </div>
      </div>
    </section>
  )
}

interface TrustCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const TrustCard = ({ icon, title, description }: TrustCardProps) => {
  return (
    <div className="bg-[#624226]/30 rounded-lg p-6 text-center hover:bg-[#624226]/50 transition-colors">
      <div className="flex justify-center mb-4">
        <div className="animate-bounce">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-[#DDAF72] mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  )
}
