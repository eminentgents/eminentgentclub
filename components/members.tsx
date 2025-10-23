"use client"

import { Mail, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Members() {
  const members = [
    { id: 1, name: "Eminent (Otunba) Olumide OWOSENI", position: "President", bio: "Visionary leader", image: "/owoseni.jpg" },
    { id: 2, name: "Eminent Aare (Engr) Ajibola  Fagade", position: "Vice President", bio: "Engineering expert", image: "/fagade.jpg" },
    { id: 3, name: "Eminent (Prince) ADEDEJI Babatunde Abiodun", position: "General Secretary", bio: "Academic leader", image: "/abiodun.jpg" },
    { id: 4, name: "Eminent ABDUL Olatunji Segunmaru", position: "Treasurer", bio: "Financial expert", image: "/segunmaru.jpg" },
    { id: 5, name: "Eminent AKINSANYA Olaseni", position: "Financial Secretary", bio: "Financial expert", image: "/olaseni.jpg" },
    { id: 6, name: "Eminent (Barrister) AKODU Abayomi", position: "PRO", bio: "Communications expert", image: "/abayomi.jpg" },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Leadership Team</h2>
          <p className="text-sm md:text-base text-muted-foreground">Meet our dedicated leaders</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.slice(0, 3).map((member) => (
            <div key={member.id} className="card-hover">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-14 h-14 rounded-md object-cover"
                />
              </div>

              <h3 className="text-base font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-xs font-semibold text-secondary mb-2">{member.position}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>

              
            </div>
          ))}
          {members.slice(3).map((member) => (
            <div key={member.id} className="card-hover hidden md:block">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-14 h-14 rounded-md object-cover"
                />
              </div>

              <h3 className="text-base font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-xs font-semibold text-secondary mb-2">{member.position}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/Allmembers" 
            className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
          >
            See All Leadership Members
          </Link>
        </div>
      </div>
    </section>
  )
}