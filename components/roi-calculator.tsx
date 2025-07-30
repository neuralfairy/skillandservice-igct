"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ROICalculator() {
  const [employees, setEmployees] = useState(50)
  const [currentCost, setCurrentCost] = useState(5000)
  const [callVolume, setCallVolume] = useState(1000)

  const calculateSavings = () => {
    const monthlySavings = currentCost * 0.4 // 40% average savings
    const annualSavings = monthlySavings * 12
    const productivityGain = employees * 2 * 52 // 2 hours per week per employee

    return {
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      productivityHours: Math.round(productivityGain),
    }
  }

  const savings = calculateSavings()

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl">ROI Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="employees">Number of Employees</Label>
                <Input
                  id="employees"
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="current-cost">Current Monthly Telecom Cost ($)</Label>
                <Input
                  id="current-cost"
                  type="number"
                  value={currentCost}
                  onChange={(e) => setCurrentCost(Number(e.target.value))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="call-volume">Monthly Call Volume</Label>
                <Input
                  id="call-volume"
                  type="number"
                  value={callVolume}
                  onChange={(e) => setCallVolume(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Your Potential Savings</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monthly Savings:</span>
                  <span className="text-2xl font-bold text-green-600">${savings.monthlySavings.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Annual Savings:</span>
                  <span className="text-2xl font-bold text-green-600">${savings.annualSavings.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Productivity Hours Gained:</span>
                  <span className="text-2xl font-bold text-sky-600">{savings.productivityHours.toLocaleString()}</span>
                </div>
              </div>

              <Button className="w-full mt-6 bg-sky-500 hover:bg-sky-600 text-black font-medium">
                Get Detailed ROI Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
