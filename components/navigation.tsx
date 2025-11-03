"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/logo.jpg"
                alt="EGIC Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-xs font-bold text-primary">EGIC</div>
              <div className="text-xs text-muted-foreground">Eminent Gents</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition">
              Contact
            </Link>
            <Link href="/Allmembers" className="text-sm font-medium text-foreground hover:text-primary transition">
              Leadership
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
            {isOpen ? <X size={20} className="text-primary" /> : <Menu size={20} className="text-primary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-card rounded-lg p-4">
            <Link
              href="/"
              className="block px-3 py-2 hover:bg-muted rounded-lg transition text-sm font-medium text-primary"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 hover:bg-muted rounded-lg transition text-sm font-medium text-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 hover:bg-muted rounded-lg transition text-sm font-medium text-primary"
            >
              Contact
            </Link>
            <Link
              href="/Allmembers"
              className="block px-3 py-2 hover:bg-muted rounded-lg transition text-sm font-medium text-primary"
            >
              Leadership
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
