"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GiftModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  description?: string
}

export function GiftModal({ isOpen, onClose, imageSrc, description }: GiftModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, onClose])

  // Check if this is the biggest gift (gift23.jpg)
  const isBiggestGift = imageSrc.includes("gift15.jpg")

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div
        className={`relative bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden ${isBiggestGift ? "border-4 border-red-500" : ""}`}
      >
        <Button variant="ghost" size="icon" className="absolute top-2 right-2 z-10" onClick={onClose}>
          <X className="h-6 w-6" />
        </Button>

        <div className="p-4 flex flex-col items-center justify-center h-full">
          {imageSrc ? (
            <>
              <div className={`relative w-full ${isBiggestGift ? "h-[70vh]" : "h-[60vh]"} min-h-[300px]`}>
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt="Gift Image"
                  fill
                  className="object-contain"
                  onError={(e) => {
                    // If image fails to load, show a placeholder
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=400&width=400"
                  }}
                />
              </div>
              {description && (
                <div
                  className={`mt-4 text-center ${isBiggestGift ? "bg-gradient-to-r from-red-100 to-blue-100 p-3 rounded-lg border border-red-200" : ""}`}
                >
                  <p className={`${isBiggestGift ? "text-2xl font-bold text-red-600" : "text-lg text-gray-700"}`}>
                    {description}
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-64 w-full">
              <p className="text-gray-500">No image available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
