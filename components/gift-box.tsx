"use client"

import { useState } from "react"
import { Gift } from "lucide-react"
import { cn } from "@/lib/utils"

interface GiftBoxProps {
  onClick: () => void
  number: number
}

export function GiftBox({ onClick, number }: GiftBoxProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Generate alternating red and blue colors for gift boxes
  const colors = ["bg-red-200 hover:bg-red-300 border-red-400", "bg-blue-200 hover:bg-blue-300 border-blue-400"]

  const colorIndex = number % 2
  const color = colors[colorIndex]

  return (
    <div
      className={cn(
        "gift-box relative aspect-square rounded-lg shadow-md cursor-pointer transition-all duration-300 border-2",
        color,
        isHovered && "transform scale-105",
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Gift className={`h-8 w-8 mb-1 ${colorIndex === 0 ? "text-red-600" : "text-blue-600"}`} />
        <span className={`text-sm font-medium ${colorIndex === 0 ? "text-red-600" : "text-blue-600"}`}>#{number}</span>
      </div>

      {/* Ribbon decoration */}
      <div
        className={`absolute top-0 right-0 w-4 h-8 ${colorIndex === 0 ? "bg-blue-500" : "bg-red-500"} rounded-tr-lg`}
      ></div>
      <div
        className={`absolute top-0 left-0 w-8 h-4 ${colorIndex === 0 ? "bg-blue-500" : "bg-red-500"} rounded-tl-lg`}
      ></div>
    </div>
  )
}
