import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of Cloud Telephony: 5 Trends to Watch in 2024",
      excerpt:
        "Discover the latest innovations shaping the cloud telephony landscape and how they'll impact your business communications.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Industry Trends",
      image: "/placeholder.svg?height=200&width=400",
      slug: "future-cloud-telephony-trends-2024",
    },
    {
      title: "How Enterprise VoIP Adoption is Transforming Remote Work",
      excerpt:
        "Learn how businesses are leveraging VoIP technology to enable seamless remote collaboration and improve productivity.",
      author: "Michael Chen",
      date: "March 10, 2024",
      category: "Remote Work",
      image: "/placeholder.svg?height=200&width=400",
      slug: "enterprise-voip-remote-work-transformation",
    },
    {
      title: "ROI Calculator: Measuring the True Value of Cloud Communications",
      excerpt: "A comprehensive guide to calculating the return on investment for your cloud telephony implementation.",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      category: "Business Strategy",
      image: "/placeholder.svg?height=200&width=400",
      slug: "roi-calculator-cloud-communications-value",
    },
    {
      title: "Security Best Practices for Cloud-Based Phone Systems",
      excerpt:
        "Essential security measures every business should implement to protect their cloud telephony infrastructure.",
      author: "David Kim",
      date: "February 28, 2024",
      category: "Security",
      image: "/placeholder.svg?height=200&width=400",
      slug: "security-best-practices-cloud-phone-systems",
    },
    {
      title: "Integration Guide: Connecting Your CRM with Cloud Telephony",
      excerpt: "Step-by-step instructions for integrating popular CRM platforms with your cloud telephony solution.",
      author: "Sarah Johnson",
      date: "February 20, 2024",
      category: "Integrations",
      image: "/placeholder.svg?height=200&width=400",
      slug: "crm-integration-guide-cloud-telephony",
    },
    {
      title: "Cost Comparison: Traditional PBX vs Cloud Telephony Solutions",
      excerpt: "An in-depth analysis of the total cost of ownership for traditional and cloud-based phone systems.",
      author: "Michael Chen",
      date: "February 15, 2024",
      category: "Cost Analysis",
      image: "/placeholder.svg?height=200&width=400",
      slug: "traditional-pbx-vs-cloud-telephony-cost-comparison",
    },
  ]

  const categories = [
    "All",
    "Industry Trends",
    "Remote Work",
    "Business Strategy",
    "Security",
    "Integrations",
    "Cost Analysis",
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cloud Telephony Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay ahead with the latest trends, best practices, and insights in cloud telephony and business
            communications.
          </p>
          <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-black font-medium">
            Download Free Guide
          </Button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-sky-500 hover:bg-sky-600 text-black" : "text-black border-gray-300"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img
                src={posts[0].image || "/placeholder.svg"}
                alt={posts[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-sky-500 text-black px-3 py-1 rounded-full text-sm font-medium">Featured</span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span className="bg-gray-100 px-3 py-1 rounded-full">{posts[0].category}</span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {posts[0].date}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {posts[0].author}
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{posts[0].title}</h2>
              <p className="text-gray-600 mb-6">{posts[0].excerpt}</p>
              <Link href={`/blog/${posts[0].slug}`}>
                <Button className="bg-sky-500 hover:bg-sky-600 text-black font-medium">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.slice(1).map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="outline" className="w-full text-black border-gray-300 bg-transparent">
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-sky-500 to-gray-600 text-white">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-xl mb-8 text-gray-100">
              Get the latest cloud telephony insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-white text-black hover:bg-gray-100 font-medium px-8">Subscribe</Button>
            </div>
            <p className="text-sm text-gray-200 mt-4">No spam, unsubscribe at any time</p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Communications?</h3>
          <p className="text-gray-600 mb-8">Download our comprehensive guide to cloud telephony implementation</p>
          <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-black font-medium">
            Download Free Guide
          </Button>
        </div>
      </div>
    </div>
  )
}
