"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative animate-fade-in">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Wait! Need Scalable Calling Infrastructure?</h3>
          <p className="text-gray-600 mb-6">
            {
              "Don't miss out on our enterprise-grade cloud telephony solutions. Get a custom quote tailored to your business needs."
            }
          </p>
          <Button
            className="w-full bg-sky-500 hover:bg-sky-600 text-black font-medium"
            onClick={() => setIsVisible(false)}
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </div>
  )
}
