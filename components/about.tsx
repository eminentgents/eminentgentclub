"use client"

import { Users, Globe, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function About() {
  const cards = [
    {
      icon: Users,
      title: "Who We Are",
      content: "Eminent Gents International Club unites Nigerians worldwide to drive development through strategic collaboration and shared vision for progress.",
    },
    {
      icon: Globe,
      title: "Our Reach",
      content: "With members across continents, we leverage global perspectives to create local impact in healthcare, education, and community development initiatives.",
    },
    {
      icon: Target,
      title: "Our Mission",
      content: "To empower communities through philanthropy, foster unity among members, and create sustainable change through targeted social interventions.",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-3">About EGIC</h1>
          <p className="text-muted-foreground">Eminent Gents International Club - Excellence Through Unity</p>
        </div>

        {/* Three Horizontal Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, idx) => {
            const Icon = card.icon
            return (
              <div key={idx} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{card.content}</p>
                <Link 
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}