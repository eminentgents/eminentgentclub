"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <div>
                <div className="text-xs font-bold">EGIC</div>
                <div className="text-xs text-white/70">Eminent Gents</div>
              </div>
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              Empowerment & Knowledge - A platform for like-minded people.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-white/80">
                <MapPin size={14} />
                <span>Ijebu-Ode, Ogun State</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone size={14} />
                <span>+234-916-539-6659;  +234-803-716-7373 (PRO) </span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail size={14} />
                <span>egic.contact@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-bold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-white/20 hover:bg-secondary rounded-full flex items-center justify-center transition"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/20 hover:bg-secondary rounded-full flex items-center justify-center transition"
              >
                <Youtube size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/20 hover:bg-secondary rounded-full flex items-center justify-center transition"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/70">
          <p>&copy; 2025 Eminent Gents International Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
