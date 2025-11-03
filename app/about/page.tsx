import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Heart, Globe, Target, Users, Shield, BookOpen, Building, Handshake } from "lucide-react"

export default function AboutPage() {
  const focusAreas = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "Medical missions, health awareness campaigns, and partnering with local healthcare providers to enhance facilities in underserved areas."
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "Scholarship programs, mentorship initiatives, and provision of educational resources to equip underprivileged students for success."
    },
    {
      icon: Target,
      title: "Empowerment",
      description: "Vocational training, entrepreneurship programs, and financial literacy workshops to enhance economic well-being."
    },
    {
      icon: Building,
      title: "Community Development",
      description: "Infrastructure projects, social cohesion initiatives, and sustainable development programs for lasting impact."
    }
  ]

  const values = [
    {
      icon: Users,
      title: "Unity",
      description: "Living in harmony as one indivisible entity under God"
    },
    {
      icon: Handshake,
      title: "Solidarity",
      description: "Promoting peace, cooperation, and understanding"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest standards in all endeavors"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Maintaining trust and goodwill in all relationships"
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero.jpg')" }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-sm font-semibold text-white">Since 2006</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-primary">EGIC</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Eminent Gents International Club - Building a better future through{" "}
            <span className="font-semibold text-white">unity, empowerment, and global collaboration</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story & Mission Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded on May 12th, 2006 by Eminent Otunba Olumide Owoseni. Eminent Gents International Club stands as a non-religious, non-profit, 
                    and non-partisan organization dedicated to Nigeria's development through organized effort and shared vision.
                  </p>
                  <p>
                    After several meetings of like-minded citizens, we resolved to form a club serving as a platform for 
                    unity, cooperation, and collective development.
                  </p>
                  <p>
                    Our diverse members unite through common purpose—contributing meaningfully to national development 
                    and personal growth through knowledge sharing and collaborative efforts.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Mission & Vision</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="font-semibold text-foreground mb-3">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To provide a platform for like-minded individuals to share ideas, foster cooperation, 
                      and drive Nigeria's development through collective action and talent exploration.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="font-semibold text-foreground mb-3">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To become a leading organization recognized for fostering unity, promoting knowledge, 
                      and driving positive change across Nigeria and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Philanthropic Approach */}
          <div className="bg-gradient-to-r from-card to-card/80 border border-border rounded-3xl p-12 mb-20">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Philanthropic Approach</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Creating sustainable change through strategic initiatives and collective action
              </p>
            </div>
            <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto">
              At Eminent Gents International Club, we strongly believe in the power of giving back to society. 
              Our overarching philosophy revolves around pooling our skills, resources, and experiences to create 
              sustainable change and improve the lives of those in need. We passionately engage in targeted initiatives 
              addressing critical issues affecting the less privileged, including healthcare disparities, educational 
              barriers, economic empowerment, and more.
            </p>
          </div>

          {/* Global Reach */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Global Reach</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Spanning continents and borders, our membership comprises proud Nigerians residing across Europe, 
                Africa, America, Asia, and within Nigeria itself. This diverse geographical representation enables 
                us to understand and tackle challenges from a global perspective, sharing ideas and best practices 
                from different cultures and backgrounds.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Our international presence strengthens our commitment to creating positive impact on disadvantaged 
                communities both within Nigeria and abroad.
              </p>
            </div>
            <div className="bg-muted/50 rounded-2xl p-8 border border-border">
              <div className="grid grid-cols-2 gap-4 text-center">
                {["Europe", "Africa", "America", "Asia"].map((continent) => (
                  <div key={continent} className="bg-background rounded-xl p-4 border border-border">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-sm font-bold text-primary">🌍</span>
                    </div>
                    <span className="font-semibold text-foreground">{continent}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Areas of Focus */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Areas of Focus</h2>
              <p className="text-xl text-muted-foreground">Strategic initiatives driving meaningful impact</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {focusAreas.map((area, index) => (
                <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <area.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground">The principles that guide our actions</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Headquarters & Motto */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Foundation</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-foreground mb-4">Headquarters</h3>
                <p className="text-muted-foreground mb-2">
                  <strong>Location:</strong> Ijebu-Ode, Ogun State, Nigeria
                </p>
                <p className="text-muted-foreground">
                  The club operates a Secretariat at locations proposed by the Executive Council 
                  and approved by the General House.
                </p>
              </div>
              <div className="bg-background/50 rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-semibold text-secondary mb-4">Our Motto</h3>
                <p className="text-2xl font-bold text-primary mb-4">"Empowerment & Knowledge"</p>
                <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}