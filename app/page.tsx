"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Gift, Music, MicOffIcon as MusicOff } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const router = useRouter()
  const [isMuted, setIsMuted] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const toggleMute = () => {
    const audio = document.getElementById("birthday-music") as HTMLAudioElement
    if (audio) {
      audio.muted = !audio.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
      <div className="home-container text-center p-8 rounded-xl bg-white/80 backdrop-blur-sm shadow-xl max-w-md w-full">
        <h1 className="text-4xl font-bold mb-6 text-red-600">🎉 Happy Birthday Vimu! 🎉</h1>
        <p className="text-xl mb-8 text-gray-700">Welcome to the Birthday Surprise Website! 🎂</p>
        <Button
          onClick={() => router.push("/gifts")}
          className="w-full py-6 text-lg bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
        >
          <Gift className="mr-2 h-5 w-5" />
          View 23 Surprise Gifts
        </Button>

        {isClient && (
          <>
            <audio id="birthday-music" autoPlay loop>
              <source src="/birthday-music.mp3" type="audio/mp3" />
            </audio>
            <Button variant="ghost" size="icon" onClick={toggleMute} className="mt-4">
              {isMuted ? <MusicOff className="h-5 w-5" /> : <Music className="h-5 w-5" />}
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
