"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Phone className="h-8 w-8 text-sky-500" />
            <span className="text-xl font-bold text-gray-900">Skillandservice</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-sky-500 transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-sky-500 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-sky-500 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-sky-500 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-sky-500 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-sky-500 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="text-black border-gray-300 hover:bg-gray-50 bg-transparent">
              Start Free Trial
            </Button>
            <Button className="bg-sky-500 hover:bg-sky-600 text-black font-medium">Book Demo</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-sky-500 transition-colors">
                Home
              </Link>
              <Link href="/features" className="text-gray-700 hover:text-sky-500 transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-sky-500 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-sky-500 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-sky-500 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-sky-500 transition-colors">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="text-black border-gray-300 bg-transparent">
                  Start Free Trial
                </Button>
                <Button className="bg-sky-500 hover:bg-sky-600 text-black font-medium">Book Demo</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
