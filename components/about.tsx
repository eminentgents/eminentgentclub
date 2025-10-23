"use client"

import { Users, Lightbulb, MessageSquare, BookOpen, Handshake, Zap } from "lucide-react"

export default function About() {
  const objectives = [
    {
      icon: Users,
      title: "Platform for Unity",
      description: "Meet and share ideas for Nigeria's development",
    },
    {
      icon: Zap,
      title: "Foster Cooperation",
      description: "Build unity and solidarity among citizens",
    },
    {
      icon: Lightbulb,
      title: "Explore Talents",
      description: "Promote economic, cultural and social growth",
    },
    {
      icon: MessageSquare,
      title: "Critical Examination",
      description: "Examine issues and evolve collective solutions",
    },
    {
      icon: BookOpen,
      title: "Disseminate Information",
      description: "Share knowledge through seminars and workshops",
    },
    {
      icon: Handshake,
      title: "Build Trust",
      description: "Promote understanding and goodwill among members",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">About EGIC</h2>
          <p className="text-sm md:text-base text-muted-foreground">Our Aims & Objectives</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {objectives.slice(0, 3).map((obj, idx) => {
            const Icon = obj.icon
            return (
              <div key={idx} className="card-hover">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{obj.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{obj.description}</p>
              </div>
            )
          })}
          {objectives.slice(3).map((obj, idx) => {
            const Icon = obj.icon
            return (
              <div key={idx + 3} className="card-hover hidden md:block">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{obj.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{obj.description}</p>
              </div>
            )
          })}
        </div>

        {/* Motto Section */}
        <div className="bg-card rounded-lg border border-border p-8 md:p-12">
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Our Motto</h3>
          <p className="text-lg md:text-xl font-bold text-secondary mb-4">"Empowerment & Knowledge"</p>
          <p className="text-sm md:text-base text-foreground leading-relaxed">
            The formal greeting symbol among members is <span className="font-bold text-primary">"GREAT EMINENT"</span>{" "}
            with thumb up, and every member must reply by saying{" "}
            <span className="font-bold text-secondary">"GREAT"</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
