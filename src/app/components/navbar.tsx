'use client'

import React, { useState, useEffect } from 'react'
import { MenuIcon, ShoppingBagIcon, XIcon } from 'lucide-react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Close drawer when escape is pressed or background is clicked
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="bg-[#28251F] py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 border-b border-[#927556]/20">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold font-['Playfair_Display']">
          <span className="text-[#7C1009]">Sneakers</span> Gidi
        </h1>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8 text-white">
        <a href="#" className="hover:text-[#927556] transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-[#927556] transition-colors">
          Shop
        </a>
        <a href="#" className="hover:text-[#927556] transition-colors">
          About
        </a>
        <a href="#" className="hover:text-[#927556] transition-colors">
          Contact
        </a>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4 text-white">
        <a
          href="#"
          className="p-2 hover:bg-[#480800]/10 rounded-full transition-colors"
          aria-label="Cart"
        >
          <ShoppingBagIcon size={20} />
        </a>
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 hover:bg-[#480800]/10 rounded-full transition-colors"
          aria-label="Menu"
        >
          <MenuIcon size={20} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={closeMenu}
          ></div>

          {/* Drawer Panel */}
          <div className="fixed top-0 left-0 w-64 h-full bg-[#28251F] z-50 shadow-lg p-6 flex flex-col space-y-6 transition-all duration-300">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#927556]">Menu</h2>
              <button
                onClick={closeMenu}
                className="text-white hover:text-[#927556] transition"
              >
                <XIcon size={22} />
              </button>
            </div>

            <a
              href="#"
              onClick={closeMenu}
              className="text-white hover:text-[#927556] transition"
            >
              Home
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="text-white hover:text-[#927556] transition"
            >
              Shop
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="text-white hover:text-[#927556] transition"
            >
              About
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="text-white hover:text-[#927556] transition"
            >
              Contact
            </a>
          </div>
        </>
      )}
    </nav>
  )
}
