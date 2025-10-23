import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})


export const metadata: Metadata = {
  title: {
    default: 'EMINENT GENTS INTERNATIONAL CLUB - Empowerment & Knowledge',
    template: '%s | EMINENT GENTS'
  },
  description: 'EGIC - A premier platform for like-minded individuals to connect, share ideas, and drive positive development in Nigeria and beyond. Join our community of leaders and change-makers.',
  keywords: [
    "EGIC",
    "Eminent Gents International Club",
    "Nigeria development",
    "leadership",
    "networking",
    "community",
    "empowerment",
    "professional development",
    "Nigeria",
  ],
  authors: [{ name: "Eminent Gents International Club" }],
  creator: "Eminent Gents International Club",
  publisher: "Eminent Gents International Club",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://egic.org",
    siteName: "Eminent Gents International Club",
    title: "EMINENT GENTS INTERNATIONAL CLUB - Empowerment & Knowledge",
    description: "Join EGIC - A premier platform for like-minded individuals to connect, share ideas, and drive positive development in Nigeria and beyond.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eminent Gents International Club - Community of Leaders',
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square.jpg', 
        width: 1200,
        height: 1200,
        alt: 'Eminent Gents International Club Logo',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EMINENT GENTS INTERNATIONAL CLUB - Empowerment & Knowledge",
    description: "Join EGIC - A premier platform for like-minded individuals to connect, share ideas, and drive positive development.",
    images: ['/twitter-image.jpg'],
    creator: '@eminentgents',
    site: '@eminentgents',
  },
  alternates: {
    canonical: 'https://eminentgents.com',
  },
  category: 'business',
  classification: 'International Club',
  other: {
    'business:contact_data:street_address': 'Lagos, Nigeria',
    'business:contact_data:locality': 'Lagos',
    'business:contact_data:region': 'Lagos State',
    'business:contact_data:country_name': 'Nigeria',
    'og:phone_number': '+234-XXX-XXXX-XXX',
    'og:email': 'info@eminentgents.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      {/* <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head> */}

      <head>
        {/* Favicon and App Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        
        {/* Theme and Browser Configuration */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        {/* <meta name="msapplication-config" content="/browserconfig.xml" /> */}
        
        {/* Additional SEO and Performance */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="EMINENT GENTS INTERNATIONAL CLUB" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for common external resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Structured Data for Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "EMINENT GENTS INTERNATIONAL CLUB",
              "alternateName": "EEMINENT GENTS INTERNATIONAL CLUB - Empowerment & Knowledge",
              "url": "https://eminentgents.com",
              "logo": "https://eminentgents.com/logo.png",
              "description": "Join EGIC - A premier platform for like-minded individuals to connect, share ideas, and drive positive development.",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lagos",
                "addressLocality": "Lagos",
                "addressRegion": "Lagos State", 
                "addressCountry": "NG"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+234-XXX-XXXX-XXX",
                "contactType": "customer service",
                "email": "info@eminentgents.com",
                "availableLanguage": ["English"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/eminentgents",
                "https://twitter.com/eminentgents",
                "https://www.facebook.com/eminentgents"
              ],
            })
          }}
        />
      </head>
      <body className={`font-sans antialiased bg-white text-gray-900 min-h-screen flex flex-col`}>
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}