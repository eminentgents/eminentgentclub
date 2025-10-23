export default function Stats() {
  const stats = [
    { label: "Years Active", value: "5+" },
    { label: "Members", value: "500+" },
    { label: "Events", value: "50+" },
    { label: "States", value: "10+" },
  ]

  return (
    <section className="py-12 md:py-16 bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">{stat.value}</div>
              <p className="text-xs md:text-sm text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
