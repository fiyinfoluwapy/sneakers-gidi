import React from 'react'

export const WhyWeExist = () => {
  return (
    <section className="py-20 bg-[#28251F]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Playfair_Display']">
              Because Everyone Deserves Authentic Sneakers.
            </h2>
            <div className="space-y-4 text-lg text-white">
              <p>
                Everyone deserves to feel like a million bucks, but not everyone can drop 150k on a
                pair of Jordans. At **Sneakers Gidi**, we source thrifted{' '}
                <span className="text-[#927556] font-semibold">original sneakers</span> — thoroughly
                cleaned, authenticated, and ready to elevate your next Owambe or street flex.
              </p>
              <p className="text-xl font-medium">
                No fakes. No China-gen. Just{' '}
                <span className="text-[#927556] font-semibold">100% original drip</span> — style,
                quality, and authenticity, without the crazy markup.
              </p>
            </div>
            <div className="mt-8 inline-block border-b-2 border-[#7C1009] pb-1 font-medium text-shadow-white">
              Our Story
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-gray-600 absolute -left-6 -top-6 right-6 bottom-6 rounded-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1600054904350-1d493ae5f922?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              alt="Authentic sneakers collection"
              className="w-full h-[450px] object-cover rounded-lg relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
