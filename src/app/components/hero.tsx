import React from 'react'
import { ArrowRightIcon } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#28251F]/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Premium sneakers on Lagos streets"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-2xl">
          <span className="inline-block bg-[#7C1009] text-white px-3 py-1 text-sm rounded-full mb-3 mt-6">
            Fresh Drops Weekly
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-['Playfair_Display'] leading-tight text-[#FBBC05]">
            Real Heat. <br />
            Authentic Sneakers. <br />
            <span className="text-[#927556]">No Fakes, No Markup, Just Gidi Style.</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-lg">
            Authentic sneakers straight from the UK & US, minus the fakes and high prices. Get
            the **real heat** for the **Gidi streets**.
          </p>
          <button className="bg-[#480800] hover:bg-[#7C1009] transition-colors px-8 py-4 rounded-lg font-medium flex items-center space-x-2 text-lg text-white">
            <span>Find Your Perfect Sneaker</span>
            <ArrowRightIcon size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
