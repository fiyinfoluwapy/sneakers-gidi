'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const WhyWeExist = () => {
  return (
    <section className="py-20 bg-[#FFFFFF]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-black mb-6 font-['Playfair_Display']"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Because Everyone Deserves Authentic Sneakers.
            </motion.h2>
            <div className="space-y-4 text-lg text-black">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Everyone deserves to feel like a million bucks, but not everyone can drop 150k on a
                pair of Jordans. At <span className="text-[#C44A00] font-semibold">Sneakers Gidi</span>, we source thrifted{' '}
                <span className="text-[#EA7000] font-semibold">original sneakers</span> — thoroughly
                cleaned, authenticated, and ready to elevate your next Owambe or street flex.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-xl font-medium"
              >
                No fakes. No China-gen. Just{' '}
                <span className="text-[#C44A00] font-semibold">100% original drip</span> — style,
                quality, and authenticity, without the crazy markup.
              </motion.p>
            </div>
            <motion.div
              className="mt-8 inline-block border-b-2 border-[#C44A00] pb-1 font-medium text-[#EA7000]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Our Story
            </motion.div>
          </div>

          {/* Right Side: Image with Parallax */}
          <div className="md:w-1/2 relative">
            <motion.div
              className="bg-[#EA7000] absolute -left-6 -top-6 right-6 bottom-6 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1600054904350-1d493ae5f922?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              alt="Authentic sneakers collection"
              className="w-full h-[450px] object-cover rounded-lg relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: 'transform' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
