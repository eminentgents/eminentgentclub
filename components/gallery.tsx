"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    { id: 1, title: "Members Gathering", description: "Annual gathering", src: "/f.jpg" },
    { id: 2, title: "Visit to our Governor General", description: "EGIC meeting", src: "/a1.jpg" },
    { id: 3, title: "Community Outreach", description: "Community engagement", src: "/e.jpg" },
    { id: 4, title: "", description: "", src: "/d.jpg" },
    { id: 5, title: "", description: "", src: "/c.jpg" },
    { id: 6, title: "", description: "", src: "/a.jpg" },
  ]

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage % galleryImages.length) + 1)
    }
  }

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 1 ? galleryImages.length : selectedImage - 1)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Gallery</h2>
          <p className="text-sm md:text-base text-muted-foreground">Moments from our events</p>
        </div>

        {/* Show 3 images on mobile, all 6 on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.slice(0, 3).map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="group relative cursor-pointer overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                <p className="text-white/80 text-xs">{image.description}</p>
              </div>
            </div>
          ))}
          {galleryImages.slice(3).map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="group relative cursor-pointer overflow-hidden rounded-lg aspect-square hidden md:block"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                <p className="text-white/80 text-xs">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button that navigates to full gallery page */}
        <div className="text-center mt-8">
          <Link 
            href="/gallery" 
            className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
          >
            See More
          </Link>
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-secondary transition"
            >
              <X size={28} />
            </button>

            <div className="relative aspect-square rounded-lg overflow-hidden bg-black">
              <img
                src={galleryImages[selectedImage - 1].src}
                alt={galleryImages[selectedImage - 1].title}
                className="w-full h-full object-cover"
              />
            </div>

            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
            >
              <ChevronRight size={20} />
            </button>

            <div className="text-center mt-4">
              <h3 className="text-white text-base font-bold">{galleryImages[selectedImage - 1].title}</h3>
              <p className="text-white/70 text-sm mt-1">{galleryImages[selectedImage - 1].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}