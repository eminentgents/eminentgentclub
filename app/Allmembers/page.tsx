"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AllMembers() {
  const members = [
    { id: 1, name: "Eminent Otunba Olumide Owoseni Fca. Work at Chairman/ CEO Lumie. Group of Companies.", position: "President", bio: "Visionary leader dedicated to the growth and development of EGIC", image: "/owoseni.jpg" },
    { id: 2, name: "Eminent Aare (Engr) Ajibola Fagade CEO of JFA Nig.Ltd", position: "Vice President", bio: "Engineering expert with years of leadership experience", image: "/fagade.jpg" },
    { id: 3, name: "Eminent (Prince) ADEDEJI Babatunde Abiodun", position: "General Secretary", bio: "Academic leader committed to organizational excellence", image: "/abiodun.jpg" },
    { id: 4, name: "Eminent ABDUL Olatunji Segunmaru", position: "Treasurer", image: "/segunmaru.jpg" },
    { id: 5, name: "Eminent AKINSANYA Olaseni", position: "Financial Secretary",  image: "/olaseni.jpg" },
    { id: 6, name: "Eminent (Barrister) AKODU Abayomi", position: "PRO", image: "/abayomi.jpg" },
    { id: 7, name: "Eminent Alhaji Segun Fetuga", position: "Social Secretary/Event Planner",  image: "/fetuga.jpg" },
    { id: 8, name: "HRM Oba Dr (AMB) Adetokunbo Gbadegeshin Okikiola Tejuosho. PHD, DPHIL (Dr of Philosophy) Kesari Adabonyin - Ekun 1 The Olu Kemta Orile. Abeokuta.", position: "Royal Advisor",  image: "/Tejuosho.jpg" },
    { id: 9, name: "Alhaji Rasheed Adenusi & co. Chartered Accountant FCCA, FCA, FCTI. Member, Governor Advisory Council (GAC)", position: "Grand Patron",  image: "/Adenusi.jpg" },
    { id: 10, name: "Otunba Barrister Olufemi Okenla. (LLP) Mountain  Solicitors UK. CEO at HDV Nig Ltd.", position: "Patron",  image: "/Okenla.jpg" },
    { id: 11, name: "Otunba Barrister Kunle Kalejaye SAN, FcArb. Chairman Eagle FM.", position: "Special Advisor",  image: "/Kalejaye.jpg" },
    { id: 12, name: "Chief Mrs Bisi Osibogun. The Iyalode of ljebu Land..", position: "Matron",  image: "/Osibogun.jpg" },
    { id: 13, name: "High Chief, Abiodun Odeyemi. The Baale of ILOGBO OLOFIN. Abeokuta.", position: "Club Governor General",  image: "/Odeyemi.jpg" },
    { id: 14, name: "Chief Mrs Dr Atinuke Abioro. PHD, Chartered Member of the Nigeria Institute of Management (NIOM)", position: "Advisor",  image: "/Abioro.jpg" },
    { id: 15, name: "Eminent Barrister Mike Olorunwa", position: "Assistant General Secretary",  image: "/Olorunwa.jpg" },
    { id: 16, name: "Eminent Moshood Adebisi Yusuf. Works at, Chairman, Demolish Venture LTD Importer and Exporter of Household Goods", position: "Member",  image: "/Yusuf.jpg" },
    { id: 17, name: "Eminent  Ariyo Abass Olalekan. CEO Aribass Global Logistics Freight Forwarder & Maritime", position: "Member",  image: "/Olalekan.jpg" },
    { id: 18, name: "Eminent Ganiyu Omotayo Lateef. Survey Technician", position: "Member",  image: "/Lateef.jpg" },
    { id: 19, name: "Eminent Oyesanya Olatunji. Work at MD, Corner Breeks Building Company Nig, Limited.", position: "Member",  image: "/Olatunji.jpg" },
    { id: 20, name: "Eminent Jayesimi Ademuyiwa. Work at The MD Jayetech Level Plus Limited.", position: "Member",  image: "/Ademuyiwa.jpg" },
    { id: 21, name: "Eminent Ayenogun Segun. Work at Bureau of Local Government Pensions, Office of the Executive Governor,  Oke-Mosan, Abeokuta, Ogun State", position: "Member",  image: "/Segun.jpg" },
  ]

  const allMembersList = [
    "Eminent Otunba Olumide Owoseni",
    "Eminent Alhaji Aare Ajibola Fagade",
    "Eminent (Prince) Abiodun Adedeji",
    "Eminent Abdullah Olatunji",
    "Eminent Barrister Abayomi Akodu",
    "Eminent Barrister Mike Olorunwa",
    "Eminent Olaseni Akinsanya",
    "Eminent Alhaji Segun Fetuga",
    "Eminent Hon Dare Alebiosu",
    "Eminent Abiodun Banjoko",
    "Eminent Ade Osibote",
    "Eminent Otunba Ola Agboola",
    "Eminent Olufunso Oyetesu",
    "Eminent Ariyo Olamilekan Abass",
    "Eminent Segun Ayenogun",
    "Eminent Ayodele Omotosho",
    "Eminent Bisi Yusuf",
    "Eminent Tunji Oyesanya",
    "Eminent Femi Adekoya",
    "Eminent Femi Akoje",
    "Eminent Kingsly Arase",
    "Eminent Lateef Omotayo",
    "Eminent Adewale Makanjuola",
    "Eminent Muyiwa Jayesimi",
    "Eminent Olajuwon Ismail",
    "Eminent Otunba Akinwolemiwa Awobodu",
    "Eminent Prince Omololu Ajayi",
    "Eminent Prince Tayo Okubadejo",
    "Eminent Hon Supo Anifata",
    "Eminent Segun Adekoya",
    "Eminent Segun Oseni",
    "Eminent Barrister Oluwaseun Basorun",
    "Eminent Sodiq Fatai",
    "Eminent Barrister Taiwo Odumosu",
    "Eminent Hon Tayo Alawiye",
    "Eminent Tunde Ayodele",
    "Eminent Abayomi Abudu",
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

          {/* Complete Members List */}
          <div className="mt-20 bg-card border border-border rounded-lg p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Complete Members Registry
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Eminent Gents International Club Members as of 30th October 2025
              </p>
              <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto">
              {allMembersList.map((member, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-foreground pt-1 flex-1">{member}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
                <span className="text-2xl font-bold text-primary">{allMembersList.length}</span>
                <span className="text-muted-foreground">Total Members</span>
              </div>
            </div>
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