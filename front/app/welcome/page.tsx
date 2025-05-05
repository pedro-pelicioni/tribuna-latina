"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WelcomePage() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Desktop layout */}
      <div className="hidden md:block bg-gradient-to-b from-black to-[#3d1a10] min-h-screen">
        {/* Back button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-6 left-6 text-white/70 hover:text-white transition-colors z-10"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>

        <div className="flex w-full max-w-7xl mx-auto min-h-screen">
          {/* Left column - Illustration */}
          <div className="w-1/2 flex items-center justify-center p-8">
            <div className="relative w-full max-w-xl">
              <Image
                src="/images/player-illustration-new.png"
                alt="Soccer player"
                width={600}
                height={500}
                className="object-contain"
                priority
              />
              {/* Floating sphere */}
              <div className="absolute top-0 right-0 animate-pulse">
                <Image
                  src="/images/sphere.png"
                  alt="Tribuna Latina sphere"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="w-1/2 flex flex-col justify-center p-8">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-white mb-6">Welcome to Tribuna Latina</h1>

              <p className="text-white/80 text-xl mb-8 leading-relaxed">
                A Web3 platform that celebrates Latin talent in international football, connecting fans with their
                favorite players through digital collectibles and exclusive content.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ff5f38] to-[#38d8d8] flex items-center justify-center text-black font-bold">
                    1
                  </div>
                  <p className="text-white/90">Discover rising Latin American football stars</p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#38d8d8] to-[#5dff94] flex items-center justify-center text-black font-bold">
                    2
                  </div>
                  <p className="text-white/90">Collect unique digital assets of your favorite players</p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#5dff94] to-[#ff5f38] flex items-center justify-center text-black font-bold">
                    3
                  </div>
                  <p className="text-white/90">Support athletes directly through our platform</p>
                </div>
              </div>

              <div className="mt-12">
                <Button
                  className="h-14 px-8 rounded-full text-black text-xl font-bold tracking-wider bg-gradient-to-r from-[#38d8d8] to-[#5dff94] border-0 shadow-lg hover:opacity-90 transition-opacity"
                  onClick={() => router.push("/connect")}
                >
                  Connect Wallet
                </Button>

                <button className="ml-6 text-white/70 hover:text-white transition-colors">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout - Using the new image provided */}
      <div className="md:hidden bg-gradient-radial from-[#3d1a10] to-black min-h-screen flex flex-col items-center justify-between">
        {/* Back button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-6 left-6 text-white/70 hover:text-white transition-colors z-10"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>

        {/* Main content container with exact positioning */}
        <div className="flex flex-col items-center justify-between min-h-screen w-full">
          {/* Empty space at top */}
          <div className="h-24"></div>

          {/* Player illustration - using the new image */}
          <div className="w-full flex justify-center items-center">
            <Image
              src="/images/player-illustration-new.png"
              alt="Soccer player"
              width={400}
              height={600}
              className="object-contain"
              priority
            />
          </div>

          {/* Text content - exactly as in the image */}
          <div className="text-center mb-32 px-6">
            <h1 className="text-3xl font-bold text-white mb-4">Welcome to Tribuna Latina App</h1>

            <p className="text-white/80 text-center text-lg">
              is a Web3 platform that celebrates
              <br />
              Latin talent in international football
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
