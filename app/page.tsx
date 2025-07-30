import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Globe, Zap, Shield, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { ROICalculator } from "@/components/roi-calculator"
import { CaseStudies } from "@/components/case-studies"
import { CRMIntegrations } from "@/components/crm-integrations"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Connect Globally. Communicate Instantly.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-slide-up">
            Reliable cloud telephony infrastructure to expand your reach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-medium">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black bg-white hover:bg-gray-100 font-medium"
            >
              Book Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Enterprise-Grade Cloud Telephony</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scale your communications with our comprehensive suite of cloud telephony solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Phone className="h-12 w-12 text-sky-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Call Routing</h3>
                <p className="text-gray-600 mb-4">Intelligent call distribution with advanced routing algorithms</p>
                <Link href="/features#routing">
                  <Button variant="outline" className="text-black border-gray-300 bg-transparent">
                    Interactive Demo
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-sky-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global VoIP Network</h3>
                <p className="text-gray-600 mb-4">Crystal-clear international calling with 99.9% uptime</p>
                <Link href="/features#voip">
                  <Button variant="outline" className="text-black border-gray-300 bg-transparent">
                    Voice AI Agent
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-sky-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">CRM Integration</h3>
                <p className="text-gray-600 mb-4">Seamless sync with your existing business tools</p>
                <Link href="/features#crm">
                  <Button variant="outline" className="text-black border-gray-300 bg-transparent">
                    View Integrations
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calculate Your ROI</h2>
            <p className="text-xl text-gray-600">See how much you can save with our cloud telephony solutions</p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">See how businesses like yours are transforming with our solutions</p>
          </div>
          <CaseStudies />
        </div>
      </section>

      {/* CRM Integrations */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-600">Connect with your favorite business tools</p>
          </div>
          <CRMIntegrations />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Shield className="h-12 w-12 text-sky-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">99.9% Uptime</h3>
              <p className="text-gray-300">Enterprise-grade reliability you can count on</p>
            </div>
            <div>
              <Users className="h-12 w-12 text-sky-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">10,000+ Customers</h3>
              <p className="text-gray-300">Trusted by businesses worldwide</p>
            </div>
            <div>
              <TrendingUp className="h-12 w-12 text-sky-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">40% Cost Savings</h3>
              <p className="text-gray-300">Average savings compared to traditional systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Communications?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Join thousands of businesses already using our cloud telephony solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-medium">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black bg-white hover:bg-gray-100 font-medium"
            >
              Book Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
