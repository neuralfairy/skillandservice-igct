"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How quickly can I get started with your cloud telephony service?",
          answer:
            "Most customers are up and running within 24-48 hours. Our streamlined onboarding process includes account setup, number porting (if needed), and team training. Enterprise customers with complex requirements may take 3-5 business days for full deployment.",
        },
        {
          question: "Can I keep my existing phone numbers?",
          answer:
            "Yes! We handle number porting at no additional cost. The process typically takes 3-5 business days for local numbers and up to 10 business days for toll-free numbers. We ensure zero downtime during the transition.",
        },
        {
          question: "What equipment do I need?",
          answer:
            "Our cloud-based system works with any internet-connected device. You can use IP phones, softphones on computers, or mobile apps. We also support existing analog phones with our adapter solutions.",
        },
      ],
    },
    {
      category: "Features & Functionality",
      questions: [
        {
          question: "What calling features are included?",
          answer:
            "All plans include call forwarding, voicemail, caller ID, call waiting, conference calling, auto-attendant, and call recording. Advanced features like IVR, call analytics, and CRM integration are available on Professional and Enterprise plans.",
        },
        {
          question: "How does call routing work?",
          answer:
            "Our intelligent routing system can distribute calls based on various criteria including time of day, caller location, agent skills, queue length, and custom business rules. You can set up complex routing scenarios through our intuitive web interface.",
        },
        {
          question: "Can I integrate with my existing CRM?",
          answer:
            "Yes! We integrate with 50+ popular CRM platforms including Salesforce, HubSpot, Pipedrive, Zoho, and Microsoft Dynamics. Integration includes automatic call logging, contact synchronization, and click-to-dial functionality.",
        },
      ],
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "Are there any setup fees or hidden costs?",
          answer:
            "No setup fees for any plan. Our pricing is transparent with no hidden costs. You only pay for the features you use. Additional charges may apply for premium numbers or international calling based on usage.",
        },
        {
          question: "Can I change my plan anytime?",
          answer:
            "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately for upgrades, or at the next billing cycle for downgrades. No penalties or fees for plan changes.",
        },
        {
          question: "Do you offer volume discounts?",
          answer:
            "Yes! We offer significant discounts for larger deployments. Enterprise customers with 100+ users receive custom pricing. Contact our sales team for a personalized quote based on your specific needs.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What kind of support do you provide?",
          answer:
            "We offer multiple support channels including phone, email, live chat, and our knowledge base. Professional plan customers get priority support during business hours, while Enterprise customers receive 24/7 dedicated support with guaranteed response times.",
        },
        {
          question: "What is your uptime guarantee?",
          answer:
            "We guarantee 99.9% uptime with our redundant infrastructure across multiple data centers. If we fail to meet this SLA, you'll receive service credits. Our average uptime over the past 12 months has been 99.97%.",
        },
        {
          question: "How do you handle system maintenance?",
          answer:
            "All maintenance is performed during scheduled windows with advance notice. Most updates are deployed seamlessly without service interruption. Critical maintenance is scheduled during low-usage periods, typically late nights or weekends.",
        },
      ],
    },
    {
      category: "Security & Compliance",
      questions: [
        {
          question: "How secure is your platform?",
          answer:
            "We use bank-level encryption (AES-256) for all communications, maintain SOC 2 Type II compliance, and follow industry best practices for security. Our platform includes advanced threat protection, fraud detection, and regular security audits.",
        },
        {
          question: "Are you HIPAA compliant?",
          answer:
            "Yes, we offer HIPAA-compliant solutions for healthcare organizations. This includes signed Business Associate Agreements (BAA), encrypted communications, audit logs, and secure data handling procedures.",
        },
        {
          question: "Where is my data stored?",
          answer:
            "Data is stored in secure, geographically distributed data centers within your region. We maintain redundant backups and can accommodate data residency requirements for international customers.",
        },
      ],
    },
  ]

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((category) =>
      category.questions.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    ),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }} />
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to common questions about our cloud telephony solutions. Can't find what you're looking for?
            </p>
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-black font-medium">
              <MessageCircle className="h-5 w-5 mr-2" />
              Live Chat
            </Button>
          </div>

          {/* FAQ Sections */}
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 10 + questionIndex
                    const isOpen = openItems.includes(globalIndex)

                    return (
                      <Card key={questionIndex} className="overflow-hidden">
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex justify-between items-center"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            )}
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16 bg-gray-50 p-12 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team of cloud telephony experts is here to help. Get in touch for personalized assistance with your
              specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-black font-medium">
                <MessageCircle className="h-5 w-5 mr-2" />
                Live Chat
              </Button>
              <Button size="lg" variant="outline" className="text-black border-gray-300 bg-transparent">
                Schedule Call
              </Button>
              <Button size="lg" variant="outline" className="text-black border-gray-300 bg-transparent">
                Email Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
