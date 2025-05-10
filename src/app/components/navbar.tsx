'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { MenuIcon, ShoppingBagIcon, XIcon } from 'lucide-react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="bg-white py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold font-['Playfair_Display'] text-black hover:text-[#C44A00] transition-colors">
          <span className="text-[#C44A00]">Sneakers</span>{' '}
          <span className="text-black">Gidi</span>
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8 text-black">
        <a href="#" className="hover:text-[#F3D723] transition-colors">Home</a>
        <a href="#" className="hover:text-[#F3D723] transition-colors">Shop</a>
        <a href="#" className="hover:text-[#F3D723] transition-colors">About</a>
        <a href="#" className="hover:text-[#F3D723] transition-colors">Contact</a>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4 text-black">
        <a
          href="#"
          className="p-2 hover:bg-[#EA7000]/10 rounded-full transition-colors"
          aria-label="Cart"
        >
          <ShoppingBagIcon size={20} />
        </a>
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 hover:bg-[#EA7000]/10 rounded-full transition-colors"
          aria-label="Menu"
        >
          <MenuIcon size={20} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40" onClick={closeMenu}></div>

          <div className="fixed top-0 left-0 w-64 h-full bg-[#fff] z-50 shadow-lg p-6 flex flex-col space-y-6 transition-all duration-300">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#C44A00]">Menu</h2>
              <button onClick={closeMenu} className="text-black hover:text-[#C44A00] transition">
                <XIcon size={22} />
              </button>
            </div>

            <a href="#" onClick={closeMenu} className="text-black hover:text-[#EA7000] transition">
              Home
            </a>
            <a href="#" onClick={closeMenu} className="text-black hover:text-[#EA7000] transition">
              Shop
            </a>
            <a href="#" onClick={closeMenu} className="text-black hover:text-[#EA7000] transition">
              About
            </a>
            <a href="#" onClick={closeMenu} className="text-black hover:text-[#EA7000] transition">
              Contact
            </a>
          </div>
        </>
      )}
    </nav>
  )
}
