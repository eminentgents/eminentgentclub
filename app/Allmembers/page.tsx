"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AllMembers() {
  const members = [
    { id: 1, name: "Eminent (Otunba) Olumide OWOSENI", position: "President", bio: "Visionary leader dedicated to the growth and development of EGIC", image: "/owoseni.jpg" },
    { id: 2, name: "Eminent Aare (Engr) Ajibola Fagade", position: "Vice President", bio: "Engineering expert with years of leadership experience", image: "/fagade.jpg" },
    { id: 3, name: "Eminent (Prince) ADEDEJI Babatunde Abiodun", position: "General Secretary", bio: "Academic leader committed to organizational excellence", image: "/abiodun.jpg" },
    { id: 4, name: "Eminent ABDUL Olatunji Segunmaru", position: "Treasurer", bio: "Financial expert ensuring fiscal responsibility", image: "/segunmaru.jpg" },
    { id: 5, name: "Eminent AKINSANYA Olaseni", position: "Financial Secretary", bio: "Financial expert managing club finances", image: "/olaseni.jpg" },
    { id: 6, name: "Eminent (Barrister) AKODU Abayomi", position: "PRO", bio: "Communications expert handling public relations", image: "/abayomi.jpg" },
  ]

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-primary text-primary-foreground py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm mb-6 hover:underline"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Leadership Team</h1>
            <p className="text-lg text-primary-foreground/90">
              Meet the dedicated leaders guiding EGIC towards excellence and empowerment
            </p>
          </div>
        </div>

        {/* Members Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
                <div key={member.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-full bg-primary/10 flex items-center justify-center mb-4 overflow-hidden rounded-lg">
                        <img
                        src={member.image}
                        alt={member.name}
                        className="w-[100%] h-auto object-cover"
                        style={{ height: '300px' }}
                        />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm font-semibold text-secondary">{member.position}</p>
                    </div>
                </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-3">Join Our Leadership</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Interested in becoming part of our leadership team? We're always looking for dedicated individuals 
              who share our vision of empowerment and knowledge.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}