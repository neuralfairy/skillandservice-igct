import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Globe, Zap, Shield, BarChart3, Headphones, Settings, Users } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      icon: Phone,
      title: "Smart Call Routing",
      description:
        "Intelligent call distribution with advanced routing algorithms, skills-based routing, and real-time queue management.",
      benefits: ["Reduce wait times by 60%", "Improve first-call resolution", "24/7 automated routing"],
    },
    {
      icon: Globe,
      title: "Global VoIP Network",
      description:
        "Crystal-clear international calling with 99.9% uptime, redundant infrastructure, and global presence.",
      benefits: ["150+ countries coverage", "Sub-100ms latency", "Carrier-grade reliability"],
    },
    {
      icon: Zap,
      title: "CRM Integration",
      description:
        "Seamless sync with your existing business tools, automatic call logging, and unified customer data.",
      benefits: ["50+ CRM integrations", "Real-time data sync", "Automated workflows"],
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level encryption, HIPAA compliance, and advanced security protocols to protect your communications.",
      benefits: ["End-to-end encryption", "SOC 2 compliant", "Advanced threat protection"],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Comprehensive reporting and analytics to optimize your communication strategy and improve performance.",
      benefits: ["Real-time dashboards", "Custom reports", "Performance insights"],
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support with dedicated account managers and priority response times.",
      benefits: ["<2 minute response", "Dedicated support team", "Proactive monitoring"],
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Powerful Features for Modern Business</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Everything you need to transform your business communications with enterprise-grade cloud telephony
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-black font-medium">
              Interactive Demo
            </Button>
            <Button size="lg" variant="outline" className="text-black border-gray-300 bg-transparent">
              Voice AI Agent
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-sky-500 mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div id="routing" className="bg-gradient-to-br from-sky-50 to-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Smart Call Routing</h3>
            <p className="text-gray-600 mb-6">
              Our intelligent routing system ensures every call reaches the right person at the right time, maximizing
              efficiency and customer satisfaction.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <Settings className="h-5 w-5 text-sky-500 mr-3" />
                <span>Skills-based routing</span>
              </li>
              <li className="flex items-center">
                <Users className="h-5 w-5 text-sky-500 mr-3" />
                <span>Queue management</span>
              </li>
              <li className="flex items-center">
                <BarChart3 className="h-5 w-5 text-sky-500 mr-3" />
                <span>Real-time analytics</span>
              </li>
            </ul>
            <Button className="bg-sky-500 hover:bg-sky-600 text-black font-medium">Try Interactive Demo</Button>
          </div>

          <div id="voip" className="bg-gradient-to-br from-gray-50 to-sky-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Global VoIP Network</h3>
            <p className="text-gray-600 mb-6">
              Connect with customers worldwide through our premium VoIP network with crystal-clear quality and
              enterprise-grade reliability.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <Globe className="h-5 w-5 text-sky-500 mr-3" />
                <span>150+ countries coverage</span>
              </li>
              <li className="flex items-center">
                <Shield className="h-5 w-5 text-sky-500 mr-3" />
                <span>99.9% uptime SLA</span>
              </li>
              <li className="flex items-center">
                <Zap className="h-5 w-5 text-sky-500 mr-3" />
                <span>Sub-100ms latency</span>
              </li>
            </ul>
            <Button className="bg-sky-500 hover:bg-sky-600 text-black font-medium">Voice AI Agent</Button>
          </div>
        </div>

        {/* CRM Integration Section */}
        <div id="crm" className="text-center bg-gray-900 text-white p-12 rounded-lg">
          <h3 className="text-3xl font-bold mb-6">Seamless CRM Integration</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect with over 50 popular CRM and business tools to streamline your workflow and maximize productivity.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            {["Salesforce", "HubSpot", "Pipedrive", "Zoho", "Dynamics"].map((crm) => (
              <div key={crm} className="bg-white/10 p-4 rounded-lg">
                <img
                  src={`/placeholder.svg?height=40&width=80&query=${crm} logo`}
                  alt={`${crm} logo`}
                  className="h-10 mx-auto"
                />
              </div>
            ))}
          </div>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-medium">
            View All Integrations
          </Button>
        </div>
      </div>
    </div>
  )
}
