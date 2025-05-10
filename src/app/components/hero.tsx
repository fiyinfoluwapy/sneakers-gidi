'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from 'lucide-react'
import { GiConverseShoe } from 'react-icons/gi'

export const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#271A10]/70 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Premium sneakers on Lagos streets"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-2xl">

          {/* Animated Badge */}
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 bg-[#C44A00] text-white px-3 py-1 text-sm rounded-full mb-3 mt-6"
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              className="w-4 h-4"
            >
              <GiConverseShoe className="text-white w-full h-full" />
            </motion.div>
            Fresh Drops Weekly
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-['Playfair_Display'] leading-tight text-white">
            Real Heat. <br />
            Straight from the UK & US <br />
            <span className="text-[#F3D723]">
              No Fakes, No Markup, Just Gidi Style.
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-lg">
            Authentic sneakers straight from the UK & US, minus the fakes and high prices. Get
            the true stuff.
          </p>

          <button className="bg-[#EA7000] hover:bg-[#81181C] transition-colors px-8 py-4 rounded-lg font-bold flex items-center space-x-2 text-lg text-black">
            <span>Find Your Perfect Sneaker</span>
            <ArrowRightIcon size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
