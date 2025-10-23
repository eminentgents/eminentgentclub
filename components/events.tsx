import { Calendar, MapPin } from "lucide-react"

export default function Events() {
  const events = [
    { title: "Monthly Meeting", date: "First Friday", location: "Ijebu-Ode" },
    { title: "Quarterly Summit", date: "Every Quarter", location: "Lagos" },
    { title: "Annual Conference", date: "December", location: "Abuja" },
    { title: "Community Outreach", date: "Monthly", location: "Various" },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Upcoming Events</h2>
          <p className="text-sm md:text-base text-muted-foreground">Join us at our events</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, idx) => (
            <div key={idx} className="card-hover">
              <h3 className="text-base font-bold text-foreground mb-3">{event.title}</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} className="text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-primary" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
