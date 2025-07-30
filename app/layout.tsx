import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExitIntentPopup } from "@/components/exit-intent-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Skillandservice Solutions - Global Cloud Telephony (iGCT)",
  description:
    "Reliable cloud telephony infrastructure to expand your reach. Connect globally, communicate instantly with our scalable VoIP solutions.",
  keywords: "cloud telephony, global calling, voice solutions, B2B sales tools, VoIP, enterprise communication",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Skillandservice Solutions",
              description: "Global Cloud Telephony (iGCT) SaaS provider",
              url: "https://skillandservice.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Albany",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-SKILL-SS",
                contactType: "sales",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ExitIntentPopup />
      </body>
    </html>
  )
}
