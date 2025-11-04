"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import Navigation from "@/components/navigation"
import { useRouter } from "next/navigation"

interface GalleryImage {
  id: string
  src: string
  title: string
  description: string
  folderTitle: string
}

interface FolderData {
  id: number
  title: string
  description: string
  folder: string
  images: string[]
}

export default function FullGalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [allGalleryImages, setAllGalleryImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Fetch images from API
  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/main-gallery')
        const data: FolderData[] = await response.json()
        
        if (!response.ok) {
          throw new Error('Failed to fetch gallery images')
        }

        // Flatten all images from all folders with their metadata
        const formattedImages: GalleryImage[] = []
        
        data.forEach((folder) => {
          folder.images.forEach((imageSrc, index) => {
            formattedImages.push({
              id: `${folder.id}-${index}`,
              src: imageSrc,
              title: folder.title,
              description: folder.description,
              folderTitle: folder.title
            })
          })
        })
        
        setAllGalleryImages(formattedImages)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        console.error('Error fetching gallery images:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchGalleryImages()
  }, [])

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = allGalleryImages.findIndex(img => img.id === selectedImage)
      const nextIndex = (currentIndex + 1) % allGalleryImages.length
      setSelectedImage(allGalleryImages[nextIndex].id)
    }
  }

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIndex = allGalleryImages.findIndex(img => img.id === selectedImage)
      const prevIndex = currentIndex === 0 ? allGalleryImages.length - 1 : currentIndex - 1
      setSelectedImage(allGalleryImages[prevIndex].id)
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
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  // Get currently selected image data
  const currentImage = selectedImage 
    ? allGalleryImages.find(img => img.id === selectedImage)
    : null

  const currentImageIndex = selectedImage 
    ? allGalleryImages.findIndex(img => img.id === selectedImage) + 1
    : 0

  if (loading) {
    return (
      <div className="min-h-screen bg-card">
        <Navigation />
        <div className="flex justify-center items-center py-32">
          <div className="text-lg text-muted-foreground">Loading gallery images...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-card">
        <Navigation />
        <div className="flex justify-center items-center py-32">
          <div className="text-lg text-red-600">Error: {error}</div>
        </div>
      </div>
    )
  }

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
            <p className="text-md text-muted-foreground">
              {allGalleryImages.length} moments from our events
            </p>
          </div>

          {allGalleryImages.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No images found in the gallery</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allGalleryImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image.id)}
                  className="group relative cursor-pointer overflow-hidden rounded-lg aspect-square bg-muted"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-4 text-white w-full">
                      <p className="text-sm font-semibold line-clamp-2">{image.title}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Full Screen Lightbox Modal */}
      {selectedImage !== null && currentImage && (
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
                src={currentImage.src}
                alt={currentImage.title}
                className="w-full h-full object-contain max-w-full max-h-full"
              />
            </div>

            {/* Image Info & Counter */}
            <div className="bg-black/70 backdrop-blur-sm p-6 mt-4 rounded-lg">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-white text-lg font-semibold mb-2">
                  {currentImage.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {currentImage.description}
                </p>
                <p className="text-white/50 text-xs text-center">
                  {currentImageIndex} of {allGalleryImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}