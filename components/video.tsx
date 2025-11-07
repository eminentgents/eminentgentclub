"use client"

import { useState } from "react"

export default function Video() {
  const videos = [
    {
      id: "0wBSxc51qGY",
      title: "EGIC Inaugural Event",
      description: "Main ceremony highlights"
    },
    // Add more videos here  https://youtu.be/ICqQvn-q7Fk?si=hrFSd6aKs3orQizG
    {
      id: "SOo9gpddOII",
      title: "Club event",
      description: "Video description"
    },
    {
      id: "7cg8XDhsmjw",
      title: "ANNUAL PROJECT (Year 2024): Health Outreach",
      description: "Medical Bill Payment Support for In-Patients (Ring Road State Hospital, Ibadan, Oyo State)"
    },
    {
      id: "ICqQvn-q7Fk",
      title: "ANNUAL PROJECT (Year 2020): Health Outreach",
      description: "Medical Bill Payment Support for In-Patients (Ijebu-Ode General Hospital, Ogun State)"
    },
  ]

  const [selectedVideo, setSelectedVideo] = useState(videos[0])

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Inaugural Event</h2>
          <p className="text-sm md:text-base text-muted-foreground">Watch highlights from our ceremony</p>
        </div>

        {/* Main Video Player */}
        <div className="mb-8">
          <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-md">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo.id}`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-foreground">{selectedVideo.title}</h3>
            <p className="text-sm text-muted-foreground">{selectedVideo.description}</p>
          </div>
        </div>

        {/* Video Thumbnails Grid */}
        {videos.length > 1 && (
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-4">More Videos</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {videos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className={`group relative aspect-video rounded-lg overflow-hidden transition-all ${
                    selectedVideo.id === video.id
                      ? "ring-2 ring-primary shadow-lg"
                      : "hover:ring-2 hover:ring-primary/50 shadow-md"
                  }`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-black border-y-[8px] border-y-transparent ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                    <p className="text-white text-xs font-medium line-clamp-2">{video.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card-hover text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">2006</div>
            <p className="text-sm text-muted-foreground">Club Founded</p>
          </div>

          <div className="card-hover text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">500+</div>
            <p className="text-sm text-muted-foreground">Active Members</p>
          </div>

          <div className="card-hover text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50+</div>
            <p className="text-sm text-muted-foreground">Events Hosted</p>
          </div>
        </div>
      </div>
    </section>
  )
}