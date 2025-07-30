import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per user/month",
      description: "Perfect for small teams getting started with cloud telephony",
      features: [
        "Up to 10 users",
        "Basic call routing",
        "Standard support",
        "Mobile app access",
        "Call recording (30 days)",
        "Basic analytics",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$59",
      period: "per user/month",
      description: "Advanced features for growing businesses",
      features: [
        "Up to 100 users",
        "Smart call routing",
        "Priority support",
        "CRM integrations",
        "Call recording (90 days)",
        "Advanced analytics",
        "API access",
        "Custom workflows",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited users",
        "AI-powered routing",
        "24/7 dedicated support",
        "All integrations",
        "Unlimited call recording",
        "Custom analytics",
        "White-label options",
        "SLA guarantees",
        "On-premise deployment",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our core features with no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-black font-medium">
              Plans Overview
            </Button>
            <Button size="lg" variant="outline" className="text-black border-gray-300 bg-transparent">
              Enterprise & Custom
            </Button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-lg transition-shadow ${plan.popular ? "border-sky-500 border-2" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-sky-500 text-black px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-600 ml-2">{plan.period}</span>}
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full font-medium ${
                    plan.popular ? "bg-sky-500 hover:bg-sky-600 text-black" : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Feature Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">Starter</th>
                  <th className="text-center py-4 px-4">Professional</th>
                  <th className="text-center py-4 px-4">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="py-3 px-4">Users</td>
                  <td className="text-center py-3 px-4">Up to 10</td>
                  <td className="text-center py-3 px-4">Up to 100</td>
                  <td className="text-center py-3 px-4">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Call Recording</td>
                  <td className="text-center py-3 px-4">30 days</td>
                  <td className="text-center py-3 px-4">90 days</td>
                  <td className="text-center py-3 px-4">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">CRM Integrations</td>
                  <td className="text-center py-3 px-4">Basic</td>
                  <td className="text-center py-3 px-4">Advanced</td>
                  <td className="text-center py-3 px-4">All</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Support</td>
                  <td className="text-center py-3 px-4">Standard</td>
                  <td className="text-center py-3 px-4">Priority</td>
                  <td className="text-center py-3 px-4">24/7 Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg border">
              <h4 className="font-semibold mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h4 className="font-semibold mb-2">Is there a setup fee?</h4>
              <p className="text-gray-600">
                No setup fees for any plan. Get started immediately with our quick onboarding process.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600">
                We accept all major credit cards, ACH transfers, and wire transfers for enterprise customers.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-sky-500 to-gray-600 text-white p-12 rounded-lg">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8">Join thousands of businesses already using our platform</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-medium">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black bg-white hover:bg-gray-100 font-medium"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
