"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface GalleryFolder {
  id: number
  title: string
  description: string
  folder: string
  images: string[]
}

export default function Gallery() {
  const [selectedFolder, setSelectedFolder] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
  const [galleryFolders, setGalleryFolders] = useState<GalleryFolder[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch('/api/main-gallery')
        const data = await response.json()
        setGalleryFolders(data)
      } catch (error) {
        console.error('Error fetching gallery data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGalleryData()
  }, [])

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>Loading gallery...</p>
          </div>
        </div>
      </section>
    )
  }

  const getSelectedFolder = () => {
    return galleryFolders.find(folder => folder.id === selectedFolder)
  }

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Gallery</h2>
          <p className="text-sm md:text-base text-muted-foreground">Moments from our events</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryFolders.slice(0, 3).map((folder) => (
            <div
              key={folder.id}
              onClick={() => {
                setSelectedFolder(folder.id)
                setCurrentImageIndex(0)
              }}
              className="group relative cursor-pointer overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={folder.images[0] || '/placeholder.jpg'}
                alt={folder.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-sm">{folder.title}</h3>
                <p className="text-white/80 text-xs">{folder.description}</p>
                <p className="text-white/60 text-xs mt-1">{folder.images.length} photos</p>
              </div>
            </div>
          ))}
          {galleryFolders.slice(3).map((folder) => (
            <div
              key={folder.id}
              onClick={() => {
                setSelectedFolder(folder.id)
                setCurrentImageIndex(0)
              }}
              className="group relative cursor-pointer overflow-hidden rounded-lg aspect-square hidden md:block"
            >
              <img
                src={folder.images[0] || '/placeholder.jpg'}
                alt={folder.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-sm">{folder.title}</h3>
                <p className="text-white/80 text-xs">{folder.description}</p>
                <p className="text-white/60 text-xs mt-1">{folder.images.length} photos</p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-8">
          <Link 
            href="/gallery" 
            className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
          >
            See All More
          </Link>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedFolder !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full">
            <button
              onClick={() => {
                setSelectedFolder(null)
                setCurrentImageIndex(0)
              }}
              className="absolute -top-10 right-0 text-white hover:text-secondary transition z-10"
            >
              <X size={28} />
            </button>

            <div className="relative aspect-square rounded-lg overflow-hidden bg-black">
              <img
                src={getSelectedFolder()?.images[currentImageIndex] || '/placeholder.jpg'}
                alt={`${getSelectedFolder()?.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            <button
              onClick={() => setCurrentImageIndex((prev) => 
                prev === 0 ? (getSelectedFolder()?.images.length || 1) - 1 : prev - 1
              )}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => setCurrentImageIndex((prev) => 
                prev === (getSelectedFolder()?.images.length || 1) - 1 ? 0 : prev + 1
              )}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
            >
              <ChevronRight size={20} />
            </button>

            <div className="text-center mt-4">
              <h3 className="text-white text-base font-bold">{getSelectedFolder()?.title}</h3>
              <p className="text-white/70 text-sm mt-1">{getSelectedFolder()?.description}</p>
              <p className="text-white/60 text-xs mt-2">
                {currentImageIndex + 1} of {getSelectedFolder()?.images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}