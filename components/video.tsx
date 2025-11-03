"use client"

export default function Video() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Inaugural Event</h2>
          <p className="text-sm md:text-base text-muted-foreground">Watch highlights from our ceremony</p>
        </div>

        <div className="mb-12">
          <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-md">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0wBSxc51qGY"
              title="EGIC Inaugural Event"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

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
