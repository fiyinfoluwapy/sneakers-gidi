import React from 'react'
import { ProductCard } from './productcard'
import { ArrowRightIcon } from 'lucide-react'

export const ProductShowcase = () => {
  const products = [
    {
      image:
        'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
      name: 'Nike Air Jordan 1',
      price: '₦45,000',
      size: '43',
      condition: 'Near Mint',
      origin: 'UK Drop',
    },
    {
      image:
        'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      name: 'Adidas Yeezy 350',
      price: '₦38,000',
      size: '44',
      condition: 'Excellent',
      origin: 'US Plug',
    },
    {
      image:
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      name: 'Nike Air Force 1',
      price: '₦32,000',
      size: '42',
      condition: 'Very Good',
      origin: 'UK Drop',
    },
  ]

  return (
    <section className="py-20 bg-[#000]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-white animate__animated animate__fadeInLeft">
            Fresh <span className="text-[#EA7000]">Stock</span>
          </h2>
          <button className="text-white flex items-center space-x-2 hover:text-[#EA7000] transition-colors group">
            <span>View all</span>
            <ArrowRightIcon size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div className="animate__animated animate__fadeInUp" key={index}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
