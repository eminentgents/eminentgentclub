import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    { name: "Adekunle Okafor", role: "Member", text: "EGIC has transformed my perspective on community development." },
    {
      name: "Oluwaseun Adeyemi",
      role: "Member",
      text: "The networking opportunities here are invaluable for business growth.",
    },
    {
      name: "Babatunde Ogunleye",
      role: "Member",
      text: "A platform that truly empowers and promotes knowledge sharing.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">What Members Say</h2>
          <p className="text-sm md:text-base text-muted-foreground">Testimonials from our community</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="card-hover">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-sm text-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <p className="text-sm font-bold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Motto Section */}
        <div className="text-center  mt-8">
          <p className="text-xl font-bold text-secondary mb-2">"Empowerment & Knowledge"</p>
          <p className="text-sm text-muted-foreground">
            Greeting: <span className="font-medium text-foreground">"GREAT EMINENT"</span> • 
            Response: <span className="font-medium text-foreground">"GREAT"</span>
          </p>
        </div>
    </section>
  )
}
