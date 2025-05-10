'use client'

import React from 'react'
import { CheckIcon } from 'lucide-react'

interface ProductCardProps {
  image: string
  name: string
  price: string
  size: string
  condition: string
  origin: string
}

export const ProductCard = ({
  image,
  name,
  price,
  size,
  condition,
  origin,
}: ProductCardProps) => {
  return (
    <div className="bg-[#F3D723] rounded-lg overflow-hidden transition-transform hover:-translate-y-1 duration-300 group cursor-pointer">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        <div className="absolute top-4 right-4">
          <span className="bg-[#C44A00] text-white px-3 py-1 text-sm rounded-full">
            {origin}
          </span>
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-[#EA7000] hover:bg-[#C44A00] transition-colors px-6 py-2 rounded-lg text-white transform group-hover:scale-105 duration-200">
            View Details
          </button>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-semibold text-black">{name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-black">{price}</span>
          <span className="bg-[#7C1009] px-3 py-1 rounded-full text-sm text-white">
            Size {size}
          </span>
        </div>
        <div className="flex items-center text-sm text-black/80">
          <CheckIcon size={16} className="text-white mr-2" />
          <span>{condition}</span>
        </div>
      </div>
    </div>
  )
}
