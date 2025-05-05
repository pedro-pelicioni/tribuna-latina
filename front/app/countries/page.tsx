"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Search, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

// Country data with regions
const countries = [
  {
    id: "brazil",
    name: "Brasil",
    region: "South America",
    outline: "/placeholder.svg?key=qp0hu",
  },
  {
    id: "argentina",
    name: "Argentina",
    region: "South America",
    outline: "/placeholder.svg?key=vonrc",
  },
  {
    id: "colombia",
    name: "Colombia",
    region: "South America",
    outline: "/placeholder.svg?key=cskfd",
  },
  {
    id: "mexico",
    name: "México",
    region: "Central America",
    outline: "/placeholder.svg?key=5yyqq",
  },
  {
    id: "costa-rica",
    name: "Costa Rica",
    region: "Central America",
    outline: "/placeholder.svg?key=ctrix",
  },
  {
    id: "cuba",
    name: "Cuba",
    region: "Caribbean",
    outline: "/placeholder.svg?key=m0g8a",
  },
  {
    id: "dominican-republic",
    name: "Dominican Republic",
    region: "Caribbean",
    outline: "/placeholder.svg?key=15esi",
  },
]

export default function CountriesPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredCountries, setFilteredCountries] = useState(countries)

  // Update filtered countries whenever search query changes
  useEffect(() => {
    const filtered = countries.filter((country) => {
      return country.name.toLowerCase().includes(searchQuery.toLowerCase())
    })

    setFilteredCountries(filtered)
  }, [searchQuery])

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3d1a10]/30 via-[#0a2e0a]/30 to-black"></div>
        <Image src="/images/tribal-pattern-bg.png" alt="" fill className="object-cover opacity-30" priority />
      </div>

      {/* Mobile layout */}
      <div className="md:hidden max-w-md mx-auto min-h-screen flex flex-col p-5">
        {/* Back button */}
        <button onClick={() => router.back()} className="absolute top-6 left-6 text-[#5dff94] z-10">
          <ArrowLeft className="h-6 w-6" />
        </button>

        {/* Search bar */}
        <div className="relative mt-16 mb-6">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Explore Country"
            className="w-full bg-[#1e1e2e]/80 backdrop-blur-sm border border-[#38d8d8]/30 rounded-full py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[#38d8d8]/60"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        {/* Countries list */}
        <div className="space-y-6 mb-20">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <div
                key={country.id}
                className={`relative bg-[#1a1a24]/80 backdrop-blur-sm rounded-xl overflow-hidden p-6 ${
                  country.region === "South America"
                    ? "border border-[#5dff94]/30 shadow-[0_0_15px_rgba(93,255,148,0.2)]"
                    : country.region === "Central America"
                      ? "border border-[#38d8d8]/30 shadow-[0_0_15px_rgba(56,216,216,0.2)]"
                      : "border border-[#ff5f38]/30 shadow-[0_0_15px_rgba(255,95,56,0.2)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-1/2 h-32 relative">
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

                  <div className="flex flex-col items-end gap-4">
                    <h3 className="text-2xl font-bold text-white">{country.name}</h3>
                    <button
                      className={`px-4 py-2 rounded-full text-black font-medium ${
                        country.region === "South America"
                          ? "bg-gradient-to-r from-[#38d8d8] to-[#5dff94]"
                          : country.region === "Central America"
                            ? "bg-gradient-to-r from-[#38d8d8] to-[#5dff94]"
                            : "bg-gradient-to-r from-[#ff5f38] to-[#ffc107]"
                      }`}
                      onClick={() => router.push(`/countries/${country.id}`)}
                    >
                      More info
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-white text-lg">No countries found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block max-w-6xl mx-auto min-h-screen p-8">
        <div className="flex flex-col">
          {/* Header with back button and title */}
          <div className="flex items-center gap-4 mb-8">
            <button onClick={() => router.back()} className="text-[#5dff94] hover:text-[#5dff94]/80 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-3xl font-bold text-white">Explore Countries</h1>
          </div>

          {/* Search bar */}
          <div className="relative flex-1 mb-10">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Explore Country"
              className="w-full max-w-md bg-[#1e1e2e]/80 backdrop-blur-sm border border-[#38d8d8]/30 rounded-full py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[#38d8d8]/60"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          {/* Countries grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <div
                  key={country.id}
                  className={`relative bg-[#1a1a24]/80 backdrop-blur-sm rounded-xl overflow-hidden p-6 transition-all hover:scale-[1.02] ${
                    country.region === "South America"
                      ? "border border-[#5dff94]/30 hover:border-[#5dff94]/60 shadow-[0_0_15px_rgba(93,255,148,0.2)] hover:shadow-[0_0_20px_rgba(93,255,148,0.3)]"
                      : country.region === "Central America"
                        ? "border border-[#38d8d8]/30 hover:border-[#38d8d8]/60 shadow-[0_0_15px_rgba(56,216,216,0.2)] hover:shadow-[0_0_20px_rgba(56,216,216,0.3)]"
                        : "border border-[#ff5f38]/30 hover:border-[#ff5f38]/60 shadow-[0_0_15px_rgba(255,95,56,0.2)] hover:shadow-[0_0_20px_rgba(255,95,56,0.3)]"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-full h-48 relative mb-4">
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

                    <div className="flex justify-between items-center w-full">
                      <h3 className="text-2xl font-bold text-white">{country.name}</h3>
                      <button
                        className={`px-4 py-2 rounded-full text-black font-medium ${
                          country.region === "South America"
                            ? "bg-gradient-to-r from-[#38d8d8] to-[#5dff94]"
                            : country.region === "Central America"
                              ? "bg-gradient-to-r from-[#38d8d8] to-[#5dff94]"
                              : "bg-gradient-to-r from-[#ff5f38] to-[#ffc107]"
                        }`}
                        onClick={() => router.push(`/countries/${country.id}`)}
                      >
                        More info
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-10">
                <p className="text-white text-xl">No countries found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
