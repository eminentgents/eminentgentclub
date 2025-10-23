"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import Navigation from "@/components/navigation"
import { useRouter } from "next/navigation"

export default function FullGalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const router = useRouter()

  const allGalleryImages = [
    { id: 1, title: "Members Gathering 2024", description: "Annual gathering", src: "/a.jpg" },
    { id: 2, title: "Leadership Summit", description: "Executive council meeting", src: "/b.jpg" },
    { id: 3, title: "Community Outreach", description: "Community engagement", src: "/c.jpg" },
    { id: 4, title: "Inaugural Event", description: "EGIC inaugural ceremony 2020", src: "/d.jpg" },
    { id: 5, title: "Networking Event", description: "Members collaboration", src: "/e.jpg" },
    { id: 6, title: "Annual Conference", description: "EGIC annual conference 2023", src: "/f.jpg" },
    { id: 7, title: "Inaugural Event", description: "EGIC inaugural ceremony 2020", src: "/g.jpg" },
    { id: 8, title: "Networking Event", description: "Members collaboration", src: "/h.jpg" },
    { id: 9, title: "Annual Conference", description: "EGIC annual conference 2023", src: "/i.jpg" },
    // Add more images here for the full gallery page
    { id: 10, title: "Additional Event 1", description: "More events", src: "/j.jpg" },
    { id: 11, title: "Additional Event 2", description: "More events", src: "/k.jpg" },
    { id: 12, title: "Additional Event 3", description: "More events", src: "/l.jpg" },
  ]

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage % allGalleryImages.length) + 1)
    }
  }

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 1 ? allGalleryImages.length : selectedImage - 1)
    }
  }

  // Close modal when clicking on the backdrop (dark area)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null)
    }
  }

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    if (selectedImage !== null) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  return (
    <div className="min-h-screen bg-card">
      <Navigation />
      
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Full Gallery</h1>
            <p className="text-md text-muted-foreground">All moments from our events</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allGalleryImages.map((image) => (
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
          </div>
        </div>
      </section>

      {/* Full Screen Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col">
            {/* Close Button - Top Right */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 text-white hover:text-secondary transition p-2 bg-black/50 rounded-full"
            >
              <X size={28} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Container */}
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              <img
                src={allGalleryImages[selectedImage - 1].src}
                alt={allGalleryImages[selectedImage - 1].title}
                className="w-full h-full object-contain max-w-full max-h-full"
                onClick={() => setSelectedImage(null)} // Close when clicking on image
              />
            </div>

            {/* Image Info */}
            <div className="text-center mt-4 p-4 bg-black/50 rounded-lg">
              <h3 className="text-white text-lg font-bold">{allGalleryImages[selectedImage - 1].title}</h3>
              <p className="text-white/70 text-sm mt-1">{allGalleryImages[selectedImage - 1].description}</p>
              <p className="text-white/50 text-xs mt-2">
                {selectedImage} of {allGalleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}