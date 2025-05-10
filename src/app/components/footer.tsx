'use client'
import React from 'react'
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-[#C44A00] text-white"
    >
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <motion.h3
              className="text-2xl font-bold mb-6 font-['Playfair_Display']"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span>Sneakers</span> Gidi
            </motion.h3>
            <p className="mb-6 text-white/80">
              We do not sell shoes. We sell second chances at first impressions.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<InstagramIcon size={20} />} />
              <SocialLink icon={<FacebookIcon size={20} />} />
              <SocialLink icon={<TwitterIcon size={20} />} />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink text="Home" />
              <FooterLink text="Shop" />
              <FooterLink text="About Us" />
              <FooterLink text="Contact" />
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Help</h4>
            <ul className="space-y-3">
              <FooterLink text="FAQ" />
              <FooterLink text="Shipping & Returns" />
              <FooterLink text="Size Guide" />
              <FooterLink text="Authentication" />
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>123 Balogun Street, Lagos Island, Lagos</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={20} className="mr-3 flex-shrink-0" />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex items-center">
                <MailIcon size={20} className="mr-3 flex-shrink-0" />
                <span>info@sneakersgidi.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Sneakers Gidi. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}

// Bounce the icons independently
const SocialLink = ({ icon }: { icon: React.ReactNode }) => (
  <motion.a
    href="#"
    className="bg-[#EA7000] p-2 rounded-full hover:bg-[#81181C] transition-colors"
    animate={{ y: [0, -4, 0] }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1,
      ease: 'easeInOut',
    }}
  >
    {icon}
  </motion.a>
)

const FooterLink = ({ text }: { text: string }) => (
  <li>
    <a
      href="#"
      className="hover:text-[#927556] transition-colors relative"
    >
      {text}
    </a>
  </li>
)
