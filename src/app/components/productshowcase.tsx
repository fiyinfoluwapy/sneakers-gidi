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
    <section className="py-20 bg-[#28251F]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-white">
            Fresh <span className="text-[#927556]">Stock</span>
          </h2>
          <button className=" text-white flex items-center space-x-2  hover:text-gray-700 transition-colors ">
            <span>View all</span>
            <ArrowRightIcon size={18} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
