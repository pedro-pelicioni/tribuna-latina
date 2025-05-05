"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 relative">
            <Image src="/images/sphere.png" alt="Tribuna Latina" fill className="object-contain" />
          </div>
          <span className="text-white font-bold text-xl hidden sm:inline-block">Tribuna Latina</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-white/80 hover:text-white transition-colors">
            Players
          </Link>
          <Link href="#" className="text-white/80 hover:text-white transition-colors">
            Collectibles
          </Link>
          <Link href="#" className="text-white/80 hover:text-white transition-colors">
            News
          </Link>
          <Link href="#" className="text-white/80 hover:text-white transition-colors">
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/95 p-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="#"
              className="text-white/80 hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Players
            </Link>
            <Link
              href="#"
              className="text-white/80 hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Collectibles
            </Link>
            <Link
              href="#"
              className="text-white/80 hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              News
            </Link>
            <Link
              href="#"
              className="text-white/80 hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
