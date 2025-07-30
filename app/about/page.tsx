import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Globe, Award, TrendingUp } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Globe, value: "150+", label: "Countries Served" },
    { icon: Award, value: "99.9%", label: "Uptime SLA" },
    { icon: TrendingUp, value: "$50M+", label: "Cost Savings Delivered" },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former VP of Engineering at major telecom company with 15+ years experience",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Cloud infrastructure expert, previously led engineering teams at Fortune 500 companies",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Sales",
      bio: "B2B SaaS sales leader with proven track record of scaling revenue from $1M to $100M",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Full-stack engineer passionate about building scalable, reliable communication systems",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Connecting the World Through Innovation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Founded in Albany, NY, Skillandservice Solutions is on a mission to democratize global communications
            through cutting-edge cloud telephony technology.
          </p>
          <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-black font-medium">
            Leadership Team
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="pt-6">
                <stat.icon className="h-12 w-12 text-sky-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              We believe that every business, regardless of size or location, should have access to enterprise-grade
              communication tools. Our cloud telephony platform breaks down barriers and enables organizations to
              connect with customers and teams anywhere in the world.
            </p>
            <p className="text-gray-600 mb-4">
              Founded by telecommunications veterans who experienced firsthand the limitations of traditional phone
              systems, we set out to build something better. Our platform combines the reliability of enterprise
              infrastructure with the simplicity of modern software.
            </p>
            <p className="text-gray-600">
              Today, we serve over 10,000 customers across 150 countries, from startups to Fortune 500 companies,
              helping them reduce costs, improve efficiency, and scale their communications globally.
            </p>
          </div>
          <div className="bg-gradient-to-br from-sky-50 to-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-4"></div>
                <div>
                  <strong>Proven Reliability:</strong> 99.9% uptime with redundant infrastructure
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-4"></div>
                <div>
                  <strong>Global Reach:</strong> Presence in 150+ countries with local numbers
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-4"></div>
                <div>
                  <strong>Expert Support:</strong> 24/7 technical support from telecom experts
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-4"></div>
                <div>
                  <strong>Continuous Innovation:</strong> Regular updates and new features
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-sky-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-900 text-white p-12 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-gray-300">
                Every decision we make is guided by what's best for our customers and their success.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
              <p className="text-gray-300">
                We're building technology that connects people and businesses across the world.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-300">
                We strive for excellence in everything we do, from product quality to customer service.
              </p>
            </div>
          </div>
        </div>

        {/* Office Location */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Albany Office</h2>
          <p className="text-xl text-gray-600 mb-8">
            Located in the heart of New York's Capital Region, our headquarters serves as the hub for innovation and
            customer success.
          </p>
          <div className="bg-gray-50 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Skillandservice Solutions HQ</h3>
            <p className="text-gray-600 mb-2">123 Innovation Drive</p>
            <p className="text-gray-600 mb-2">Albany, NY 12205</p>
            <p className="text-gray-600 mb-6">United States</p>
            <Button className="bg-sky-500 hover:bg-sky-600 text-black font-medium">Schedule a Visit</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
