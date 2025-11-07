import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const galleryFolders = [
      { 
        id: 1, 
        title: "ANNUAL PROJECT (Year 2020): Community Outreach (Ogun State)", 
        description: "Covid-19 Palliative Support (Ijebu-Ode City, Imosan-Ijebu and Imodi-Ijebu Towns)",
        folder: "annual-project-2020"
      },
      { 
        id: 2, 
        title: "ANNUAL PROJECT (Year 2020): Health Outreach", 
        description: "Medical Bill Payment Support for In-Patients (Ijebu-Ode State Hospital)",
        folder: "health-outreach"
      },
      { 
        id: 3, 
        title: "ANNUAL PROJECT (Year 2022): Community Outreach", 
        description: "Cash Support to the Aged and the less privileged (Ayetoro-Yewa Town)",
        folder: "community-outreach"
      },
      { 
        id: 4, 
        title: "ANNUAL PROJECT (Year 2024): Health Outreach", 
        description: "Medical Bill Payment Support for In-Patients (Ring Road State Hospital, Ibadan, Oyo State)",
        folder: "health-outreach2"
      },
      { 
        id: 5, 
        title: "CLUB EVENT", 
        description: "Visitation to our Patron, Barrister Olufemi Okenla",
        folder: "club-event"
      },
      { 
        id: 6, 
        title: "CLUB EVENT", 
        description: "Visitation to our Grand Patron, Alhaji Rasheed Adenus",
        folder: "club-event2"
      },
    ]

    const galleryData = await Promise.all(
      galleryFolders.map(async (folder) => {
        const folderPath = path.join(process.cwd(), 'public', 'gallery', folder.folder)
        
        try {
          const files = fs.readdirSync(folderPath)
          const images = files
            .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
            .map(file => `/gallery/${folder.folder}/${file}`)
          
          return {
            ...folder,
            images: images.length > 0 ? images : ['/placeholder.jpg'] // fallback
          }
        } catch (error) {
          console.error(`Error reading folder ${folder.folder}:`, error)
          return {
            ...folder,
            images: ['/placeholder.jpg']
          }
        }
      })
    )

    return NextResponse.json(galleryData)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load gallery' }, { status: 500 })
  }
}