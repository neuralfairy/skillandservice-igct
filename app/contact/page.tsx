"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    employees: "",
    message: "",
    inquiryType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to transform your business communications? Our team is here to help you find the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-black font-medium">
              Contact Form
            </Button>
            <Button size="lg" variant="outline" className="text-black border-gray-300 bg-transparent">
              Support Request
            </Button>
            <Button size="lg" variant="outline" className="text-black border-gray-300 bg-transparent">
              Submit Ticket
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-sky-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+1-800-SKILL-SS</p>
                    <p className="text-sm text-gray-500">Mon-Fri 8AM-8PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-sky-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">hello@skillandservice.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-sky-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-gray-600">123 Innovation Drive</p>
                    <p className="text-gray-600">Albany, NY 12205</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-sky-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8AM - 8PM EST</p>
                    <p className="text-gray-600">Saturday: 9AM - 5PM EST</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-sky-500 hover:bg-sky-600 text-black font-medium">Schedule Demo</Button>
                <Button variant="outline" className="w-full text-black border-gray-300 bg-transparent">
                  Download Brochure
                </Button>
                <Button variant="outline" className="w-full text-black border-gray-300 bg-transparent">
                  Live Chat
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="employees">Company Size</Label>
                      <Select onValueChange={(value) => handleInputChange("employees", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-1000">201-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="inquiry-type">Inquiry Type</Label>
                      <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">Sales Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={5}
                      className="mt-1"
                      placeholder="Tell us about your communication needs and how we can help..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-sky-500 hover:bg-sky-600 text-black font-medium">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How quickly can I get started?</h3>
                <p className="text-gray-600 text-sm">
                  Most customers are up and running within 24-48 hours. Our onboarding team will guide you through the
                  entire process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you offer 24/7 support?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, our Enterprise customers receive 24/7 dedicated support. Professional plan customers have
                  priority support during business hours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I keep my existing phone numbers?</h3>
                <p className="text-gray-600 text-sm">
                  We handle number porting at no additional cost and ensure zero downtime during the transition.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What integrations do you support?</h3>
                <p className="text-gray-600 text-sm">
                  We integrate with 50+ popular CRM and business tools including Salesforce, HubSpot, Microsoft Teams,
                  and more.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
