"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GiftBox } from "@/components/gift-box"
import { GiftModal } from "@/components/gift-modal"

export default function GiftsPage() {
  const [selectedGift, setSelectedGift] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showGift = (imageName: string) => {
    setSelectedGift(imageName)
    setIsModalOpen(true)
  }

  const closeGift = () => {
    setIsModalOpen(false)
  }

  // Gift images data - replace descriptions with your own
  const gifts = [
    { id: 1, image: "gift1.jpg", description: "Special memory #1" },
    { id: 2, image: "gift2.jpg", description: "Special memory #2" },
    { id: 3, image: "gift3.jpg", description: "Special memory #3" },
    { id: 4, image: "gift4.jpg", description: "Special memory #4" },
    { id: 5, image: "gift5.jpg", description: "Special memory #5" },
    { id: 6, image: "gift6.jpg", description: "Special memory #6" },
    { id: 7, image: "gift7.jpg", description: "Special memory #7" },
    { id: 8, image: "gift8.jpg", description: "Special memory #8" },
    { id: 9, image: "gift9.jpg", description: "Special memory #9" },
    { id: 10, image: "gift10.jpg", description: "Special memory #10" },
    { id: 11, image: "gift11.jpg", description: "Special memory #11" },
    { id: 12, image: "gift12.jpg", description: "Special memory #12" },
    { id: 13, image: "gift13.jpg", description: "Special memory #13" },
    { id: 14, image: "gift14.jpg", description: "Special memory #14" },
    { id: 15, image: "gift23.jpg", description: "Special memory #15" },
    { id: 16, image: "gift16.jpg", description: "Special memory #16" },
    { id: 17, image: "gift17.jpg", description: "Special memory #17" },
    { id: 18, image: "gift18.jpg", description: "Special memory #18" },
    { id: 19, image: "gift19.jpg", description: "Special memory #19" },
    { id: 20, image: "gift20.jpg", description: "Special memory #20" },
    { id: 21, image: "gift21.jpg", description: "Special memory #21" },
    { id: 22, image: "gift22.jpg", description: "Special memory #22" },
    { id: 23, image: "gift15.jpg", description: "THE BIGGEST GIFT! 💖" },
  ]

  // Separate the biggest gift (23rd) from the rest
  const regularGifts = gifts.slice(0, 22)
  const biggestGift = gifts[22]

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/">
          <Button variant="outline" className="mb-6 bg-white/80">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="gifts-container bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-600">
            🎁 23 Surprise Gifts for Vimu! 🎁
          </h1>

          <div className="gift-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {regularGifts.map((gift) => (
              <GiftBox key={gift.id} onClick={() => showGift(gift.image)} number={gift.id} />
            ))}
          </div>

          {/* Special container for the biggest gift */}
          <div className="mt-12 mb-4 text-center">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">🌟 The Biggest Gift! 🌟</h2>
          </div>

          <div className="flex justify-center">
            <div
              className="biggest-gift cursor-pointer rounded-xl shadow-lg bg-gradient-to-r from-red-400 to-blue-400 p-1"
              onClick={() => showGift(biggestGift.image)}
            >
              <div className="bg-white rounded-lg p-6 flex flex-col items-center">
                <div className="text-5xl mb-2">🎁</div>
                <div className="text-xl font-bold text-red-600">Special Gift #23</div>
                <div className="mt-2 text-sm text-gray-600">Click to open!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GiftModal
        isOpen={isModalOpen}
        onClose={closeGift}
        imageSrc={selectedGift ? `/gifts/${selectedGift}` : ""}
        description={gifts.find((g) => g.image === selectedGift)?.description || ""}
      />
    </div>
  )
}
