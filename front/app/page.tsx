"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-4 relative overflow-hidden">
      <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center gap-16">
        {/* Sphere with patterns - using the provided image */}
        <div className="relative w-64 h-64 animate-spin-slow">
          <Image
            src="/images/sphere.png"
            alt="Tribuna Latina sphere"
            width={256}
            height={256}
            className="object-contain"
            priority
          />
        </div>

        {/* Gradient Button */}
        <Button
          className="w-full max-w-xs h-16 rounded-full text-black text-xl font-bold tracking-wider bg-gradient-to-r from-[#ff5f38] via-[#38d8d8] to-[#5dff94] border-0 shadow-lg hover:opacity-90 transition-opacity"
          onClick={() => router.push("/welcome")}
        >
          TRIBUNA LATINA
        </Button>
      </div>
    </main>
  )
}
