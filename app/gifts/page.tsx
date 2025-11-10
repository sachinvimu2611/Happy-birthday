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
    { id: 1, image: "gift1.jpg", description: "அப்பாவின் கை பிடித்த சிறு பெண் — இந்த உலகத்துக்கே சிறப்பான அழகு. 💖" },
    { id: 2, image: "gift2.jpg", description: "அம்மாவின் மடியில் ஓய்வெடுக்கும் பொண்ணு — அதுதான் உலகத்துல பாதுகாப்பான இடம்.❤️" },
    { id: 3, image: "gift3.jpg", description: "தாத்தா பாட்டி அன்பு, வாழ்க்கைல மரக்க முடியாத நினைவுகள்" },
    { id: 4, image: "gift4.jpg", description: "சின்ன வயசு சிரிப்புலே உலகம் முழுக்க ஒளி பரவுது." },
    { id: 5, image: "gift5.jpg", description: "அந்த சிறு மேடையில் அவள் ஆடியது — கனவுகளோடு கலந்த ஒரு கனிந்த நடனம்" },
    { id: 6, image: "gift6.jpg", description: "அந்த சிறிய கைகளில் கிடைத்த பரிசு — பெரும் முயற்சியின் இனிய பலன்." },
    { id: 7, image: "gift7.jpg", description: "அவள் ஆடியது கலையல்ல, கனவுகளின் ஓசை." },
    { id: 8, image: "gift8.jpg", description: "அந்த மேடையில் அவள் பெற்ற பரிசு — உழைப்பின் பொற்கொடி." },
    { id: 9, image: "gift9.jpg", description: "அவள் நிழல் கூட சொல்லுது — அன்பு என்றால் அவள்தான்." },
    { id: 10, image: "gift10.jpg", description: "சித்தி என்ற பெயரில் மறைந்திருக்கும் அன்பு — அம்மா அன்போடு போட்டிபோடும் உணர்ச்சி." },
    { id: 11, image: "gift11.jpg", description: "சிறு வயசு சிரிப்பிலிருந்து, இன்றைய நம்பிக்கையான முகம் வரை — அவள் பயணம் ஒரு கவிதை" },
    { id: 12, image: "gift12.jpg", description: "அக்கா தங்கச்சி சிரிப்புல — குடும்பத்தோடே ஒளி பிறக்குது." },
    { id: 13, image: "gift13.jpg", description: "அக்கா தம்பி என்ற பந்தம் — சண்டைலையும் சிரிப்பிலையும் அழகாக மலரும்." },
    { id: 14, image: "gift14.jpg", description: "சிரிப்பில் கலந்த பாசம், இதயத்திலே நிரந்தரமான உறவு." },
    { id: 15, image: "gift15.jpg", description: "அவள் மடியில் சிரிக்கும் குழந்தை" },
    { id: 16, image: "gift16.jpg", description: "பள்ளி நாட்களில் தோழி என்றால் — நாள்தோறும் நகைச்சுவையாய் இருந்த கதை" },
    { id: 17, image: "gift17.jpg", description: "காலேஜ் பெஞ்சில் தொடங்கிய நட்பு — வாழ்க்கையின் அழகான அத்தியாயம்." },
    { id: 18, image: "gift18.jpg", description: "அவளோட ஒவ்வொரு பார்வையும், என் நாளின் இனிமையான வரி💙❤." },
    { id: 19, image: "gift19.jpg", description: "காலேஜ் நாட்கள் முடிந்தாலும், இந்த நட்பு எப்போதும் தங்கும்." },
    { id: 20, image: "gift20.jpg", description: "பாடம் சொல்ல வரவில்லை, பாதை காட்ட வந்தவள்." },
    { id: 21, image: "gift21.jpg", description: "நட்பு என்றாலே இதுதான் — சிரிப்பிலும் சண்டையிலும் கலந்த இனிமையான பயணம்." },
    { id: 22, image: "gift22.jpg", description: "கடைசி பரிசு — நம்ம கையில இருக்கும் மிகப் பெரிய சர்ப்ரைஸ் பரிசு. 🎁✨" },
  ]

  // Separate the biggest gift (23rd) from the rest
  const regularGifts = gifts.slice(0, 21)
  const biggestGift = gifts[21]

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
            🎁 22 Surprise Gifts for Vimu! 🎁
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
                <div className="text-xl font-bold text-red-600">Special Gift 22</div>
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
