import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function CaseStudies() {
  const caseStudies = [
    {
      company: "TechCorp Solutions",
      industry: "Technology",
      challenge: "Managing 500+ remote employees across 15 countries",
      result: "60% reduction in communication costs, 99.9% uptime achieved",
      metrics: {
        costSaving: "60%",
        uptime: "99.9%",
        employees: "500+",
      },
    },
    {
      company: "Global Sales Inc",
      industry: "Sales & Marketing",
      challenge: "Scaling international sales operations",
      result: "300% increase in call volume capacity, 45% faster response times",
      metrics: {
        capacity: "300%",
        response: "45%",
        revenue: "$2M+",
      },
    },
    {
      company: "Healthcare Partners",
      industry: "Healthcare",
      challenge: "HIPAA-compliant communication for patient care",
      result: "100% compliance maintained, 50% improvement in patient satisfaction",
      metrics: {
        compliance: "100%",
        satisfaction: "50%",
        patients: "10K+",
      },
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {caseStudies.map((study, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">{study.company}</h3>
            <p className="text-sm text-gray-500 mb-4">{study.industry}</p>

            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-2">Challenge:</h4>
              <p className="text-gray-600 text-sm">{study.challenge}</p>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-2">Result:</h4>
              <p className="text-gray-600 text-sm">{study.result}</p>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-6">
              {Object.entries(study.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-lg font-bold text-sky-600">{value}</div>
                  <div className="text-xs text-gray-500 capitalize">{key}</div>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full text-black border-gray-300 bg-transparent">
              PSA Success Stories
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
