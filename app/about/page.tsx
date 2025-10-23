import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">About EGIC</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
            Eminent Gents International Club - A beacon of empowerment and knowledge
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              Eminent Gents International Club was founded on January 1st, 2020, as a non-religious, non-profit, and
              non-partisan organization dedicated to contributing to the cultural and non-partisan development of
              Nigeria.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              After several meetings of like-minded citizens of Nigeria, it was resolved that we form a club to serve as
              a platform for unity, cooperation, and collective development. Today, EGIC stands as a testament to the
              power of organized effort and shared vision.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Our members come from diverse backgrounds and professions, united by a common purpose to contribute
              meaningfully to national development and personal growth through knowledge sharing and collaborative
              efforts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              To provide a platform where like-minded people can meet, share ideas, and make collective decisions toward
              the development of Nigeria. We foster a spirit of active cooperation, unity, and solidarity among citizens
              while exploring and exploiting diverse talents and potential abilities.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Through seminars, workshops, symposia, and public lectures, we disseminate useful information and promote
              critical examination of issues affecting our society and the world at large.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              To become a leading organization recognized for fostering unity, promoting knowledge, and driving positive
              change across Nigeria and beyond. We envision a society where eminent individuals collaborate to build a
              better future for all.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Values</h2>
            <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Unity:</strong> Living in harmony as one indivisible entity under God
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Solidarity:</strong> Promoting peace, cooperation, and understanding
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Excellence:</strong> Striving for the highest standards in all endeavors
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Empowerment:</strong> Building capacity and knowledge among members
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Integrity:</strong> Maintaining trust and goodwill in all relationships
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Community Service:</strong> Contributing to the development of our nation and society
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Aims & Objectives</h2>
            <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span>
                  Provide a platform where like-minded people can meet, share ideas and make decisions for Nigeria's
                  development
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span>Foster spirit of active cooperation, unity and solidarity among citizens of Nigeria</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span>
                  Explore and exploit diverse talents and potential abilities to promote economic, cultural and social
                  growth
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span>
                  Provide a forum for critical examination of issues and evolve collective resolution on matters of
                  universal interest
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span>
                  Help build a better society by disseminating useful information through seminars, workshops and public
                  lectures
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span>Promote unique interpersonal understanding, trust and goodwill among members</span>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">Headquarters</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-2">
              <strong>Location:</strong> Ijebu-Ode, Ogun State, Nigeria
            </p>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              The club operates a Secretariat at locations proposed by the Executive Council and approved by the General
              House.
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              <strong>Motto:</strong> "Empowerment & Knowledge"
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
