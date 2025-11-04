"use client"

import { Calendar, Clock, MapPin, ArrowRight, Tag, TrendingUp, Users, Heart, Award, BookOpen, ExternalLink, Filter } from "lucide-react"
import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"



export default function EventsNewsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const upcomingEvents = [
    {
      id: 1,
      title: "Monthly General Meeting",
      date: "TBD",
      location: "Ijebu-Ode",
      category: "Meeting",
      featured: false
    },
    {
      id: 2,
      title: "Ileya 2026 Outing",
      date: "2026",
      location: "Ijebu-Ode",
      category: "Events",
      featured: false
    },
    {
      id: 3,
      title: "Community Outreach",
      date: "TBD",
      location: "Various",
      category: "Community",
      featured: false
    },
    {
      id: 4,
      title: "Year 2026 Project",
      date: "2026",
      location: "Various",
      category: "Projects",
      featured: false
    }
  ]

  const newsArticles = [
    {
      id: 1,
      title: "EGIC Celebrates 19 Years of Impact and Service",
      date: "November 1, 2025",
      category: "Milestone",
      excerpt: "Reflecting on nearly two decades of transformative work across healthcare, education, and community development.",
      image: "/news/anniversary.jpg",
      author: "EGIC Communications Team",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Partnership with Local Hospitals Expands Healthcare Access",
      date: "October 25, 2025",
      category: "Healthcare",
      excerpt: "New collaboration brings medical services to three additional underserved communities in Ogun State.",
      image: "/news/hospital.jpg",
      author: "Dr. Adebayo Johnson",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "100 Students Receive EGIC Scholarships for 2025/2026",
      date: "October 15, 2025",
      category: "Education",
      excerpt: "Record number of scholarships awarded to underprivileged students across Nigeria, opening doors to quality education.",
      image: "/news/students.jpg",
      author: "Education Committee",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Global Members Convene for Annual Strategy Meeting",
      date: "October 5, 2025",
      category: "Events",
      excerpt: "Members from Europe, Africa, America, and Asia gather virtually to chart the course for 2026 initiatives.",
      image: "/news/meeting.jpg",
      author: "Executive Council",
      readTime: "3 min read"
    }
  ]

  const impactStats = [
    { icon: Users, label: "Lives Impacted", value: "50,000+", color: "text-blue-600" },
    { icon: Heart, label: "Health Outreaches", value: "120+", color: "text-red-600" },
    { icon: Award, label: "Scholarships Awarded", value: "500+", color: "text-yellow-600" },
    { icon: BookOpen, label: "Training Programs", value: "75+", color: "text-green-600" }
  ]

  const categories = [
    { value: "all", label: "All Events" },
    { value: "Meeting", label: "Meeting" },
    { value: "Events", label: "Events" },
    { value: "Community", label: "Community" },
    { value: "Projects", label: "Projects" }
  ]

  const filteredEvents = activeFilter === "all" 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === activeFilter)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Stay Connected</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Events & <span className="text-primary">News</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us in making a difference. Explore our upcoming events and stay updated with our latest initiatives.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-background border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${stat.color} bg-current/10`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Upcoming Events</h2>
              <p className="text-muted-foreground">Join us in creating positive change</p>
            </div>
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveFilter(cat.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeFilter === cat.value
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Events */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {filteredEvents.filter(e => e.featured).map((event) => (
              <div key={event.id} className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                  <Calendar className="w-24 h-24 text-primary/40" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">{event.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{event.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Users className="w-5 h-5 text-primary" />
                      <span>{event.attendees} Expected Attendees</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Events */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredEvents.filter(e => !e.featured).map((event) => (
              <div key={event.id} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Calendar className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Latest News</h2>
            <p className="text-muted-foreground">Stay informed about our impact and initiatives</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {newsArticles.map((article) => (
              <article key={article.id} className="bg-background border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-56 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                  <BookOpen className="w-20 h-20 text-primary/40" />
                  <div className="absolute top-4 right-4 bg-background/90 px-3 py-1 rounded-full text-xs font-semibold text-foreground">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">By {article.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}