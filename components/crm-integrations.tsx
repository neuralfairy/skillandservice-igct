"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function CRMIntegrations() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const integrations = [
    {
      name: "Salesforce",
      description: "Complete CRM integration with call logging and contact sync",
      logo: "/placeholder.svg?height=60&width=120",
      features: ["Auto call logging", "Contact sync", "Lead tracking"],
    },
    {
      name: "HubSpot",
      description: "Marketing automation with integrated telephony",
      logo: "/placeholder.svg?height=60&width=120",
      features: ["Marketing automation", "Deal tracking", "Analytics"],
    },
    {
      name: "Microsoft Dynamics",
      description: "Enterprise-grade CRM with advanced call management",
      logo: "/placeholder.svg?height=60&width=120",
      features: ["Enterprise features", "Advanced reporting", "Team collaboration"],
    },
    {
      name: "Pipedrive",
      description: "Sales-focused CRM with streamlined call workflows",
      logo: "/placeholder.svg?height=60&width=120",
      features: ["Sales pipeline", "Activity tracking", "Mobile app"],
    },
    {
      name: "Zoho CRM",
      description: "All-in-one business suite with integrated communications",
      logo: "/placeholder.svg?height=60&width=120",
      features: ["Business suite", "Workflow automation", "Custom fields"],
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % integrations.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + integrations.length) % integrations.length)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="text-black border-gray-300 bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex-1 mx-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <img
                  src={integrations[currentIndex].logo || "/placeholder.svg"}
                  alt={`${integrations[currentIndex].name} logo`}
                  className="h-16 mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4">{integrations[currentIndex].name}</h3>
                <p className="text-gray-600 mb-6">{integrations[currentIndex].description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {integrations[currentIndex].features.map((feature, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="bg-sky-500 hover:bg-sky-600 text-black font-medium">PSA Integrations</Button>
              </CardContent>
            </Card>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="text-black border-gray-300 bg-transparent"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center space-x-2">
          {integrations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-sky-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
