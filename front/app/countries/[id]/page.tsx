"use client"

import { useParams, useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

// Country data with regions
const countries = [
  {
    id: "brazil",
    name: "Brasil",
    region: "South America",
    outline: "/placeholder.svg?key=zzln3",
    description:
      "Brazil is the largest country in South America and has produced many football legends including Pelé, Ronaldo, and Neymar.",
    players: 42,
    teams: 15,
  },
  {
    id: "argentina",
    name: "Argentina",
    region: "South America",
    outline: "/placeholder.svg?key=pgnes",
    description: "Argentina has a rich football history and is home to stars like Lionel Messi and Diego Maradona.",
    players: 38,
    teams: 12,
  },
  {
    id: "colombia",
    name: "Colombia",
    region: "South America",
    outline: "/placeholder.svg?key=x6a0u",
    description: "Colombia has emerged as a football powerhouse with players like James Rodríguez and Radamel Falcao.",
    players: 29,
    teams: 8,
  },
  {
    id: "mexico",
    name: "México",
    region: "Central America",
    outline: "/placeholder.svg?key=tpqrl",
    description:
      "Mexico has a passionate football culture and has consistently performed well in international competitions.",
    players: 35,
    teams: 10,
  },
  {
    id: "costa-rica",
    name: "Costa Rica",
    region: "Central America",
    outline: "/placeholder.svg?key=tyvje",
    description: "Costa Rica has made impressive World Cup appearances, including a quarterfinal run in 2014.",
    players: 18,
    teams: 5,
  },
  {
    id: "cuba",
    name: "Cuba",
    region: "Caribbean",
    outline: "/placeholder.svg?height=300&width=300&query=cuba country outline",
    description: "Cuba has a growing football program with increasing international presence.",
    players: 12,
    teams: 3,
  },
  {
    id: "dominican-republic",
    name: "Dominican Republic",
    region: "Caribbean",
    outline: "/placeholder.svg?height=300&width=300&query=dominican republic country outline",
    description:
      "The Dominican Republic is developing its football infrastructure and producing more international players.",
    players: 15,
    teams: 4,
  },
]

export default function CountryDetailPage() {
  const router = useRouter()
  const params = useParams()
  const countryId = params.id as string

  // Find the country data
  const country = countries.find((c) => c.id === countryId)

  // If country not found, show error
  if (!country) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Country not found</h1>
          <button onClick={() => router.push("/countries")} className="px-4 py-2 bg-[#5dff94] text-black rounded-full">
            Back to Countries
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3d1a10]/30 via-[#0a2e0a]/30 to-black"></div>
        <Image src="/images/tribal-pattern-bg.png" alt="" fill className="object-cover opacity-30" priority />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto min-h-screen p-5 md:p-8">
        {/* Back button */}
        <button
          onClick={() => router.push("/countries")}
          className="flex items-center gap-2 text-[#5dff94] hover:text-[#5dff94]/80 transition-colors mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Countries</span>
        </button>

        {/* Country header */}
        <div
          className={`relative bg-[#1a1a24]/80 backdrop-blur-sm rounded-xl overflow-hidden p-6 md:p-10 mb-8 ${
            country.region === "South America"
              ? "border border-[#5dff94]/30 shadow-[0_0_15px_rgba(93,255,148,0.2)]"
              : country.region === "Central America"
                ? "border border-[#38d8d8]/30 shadow-[0_0_15px_rgba(56,216,216,0.2)]"
                : "border border-[#ff5f38]/30 shadow-[0_0_15px_rgba(255,95,56,0.2)]"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full md:w-1/3 h-48 md:h-64 relative">
              <div
                className={`absolute inset-0 ${
                  country.region === "South America"
                    ? "bg-gradient-to-br from-[#ff5f38] to-[#5dff94]"
                    : country.region === "Central America"
                      ? "bg-gradient-to-br from-[#38d8d8] to-[#5dff94]"
                      : "bg-gradient-to-br from-[#ff5f38] to-[#ffc107]"
                }`}
                style={{
                  WebkitMaskImage: `url(${country.outline})`,
                  maskImage: `url(${country.outline})`,
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-0">{country.name}</h1>
                <div
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    country.region === "South America"
                      ? "bg-[#5dff94]/20 text-[#5dff94]"
                      : country.region === "Central America"
                        ? "bg-[#38d8d8]/20 text-[#38d8d8]"
                        : "bg-[#ff5f38]/20 text-[#ff5f38]"
                  }`}
                >
                  {country.region}
                </div>
              </div>

              <p className="text-white/80 text-lg mb-6">{country.description}</p>

              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <p className="text-white/60 text-sm">Players</p>
                  <p className="text-white text-2xl font-bold">{country.players}</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <p className="text-white/60 text-sm">Teams</p>
                  <p className="text-white text-2xl font-bold">{country.teams}</p>
                </div>
                <div className="flex-1"></div>
                <button
                  className={`px-6 py-3 rounded-full text-black font-medium ${
                    country.region === "South America"
                      ? "bg-gradient-to-r from-[#38d8d8] to-[#5dff94]"
                      : country.region === "Central America"
                        ? "bg-gradient-to-r from-[#38d8d8] to-[#5dff94]"
                        : "bg-gradient-to-r from-[#ff5f38] to-[#ffc107]"
                  }`}
                >
                  View Players
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder for additional content */}
        <div className="text-center text-white/50 py-10">
          <p>More country details will be displayed here</p>
        </div>
      </div>
    </main>
  )
}
