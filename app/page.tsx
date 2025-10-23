import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import Video from "@/components/video"
import Members from "@/components/members"
import Stats from "@/components/stats"
import Events from "@/components/events"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Gallery />
      <Video />
      <Events />
      <Members />
      <Testimonials />
      <Footer />
    </main>
  )
}
