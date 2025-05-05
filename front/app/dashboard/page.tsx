"use client"
import { useRouter } from "next/navigation"
import { Wallet, DollarSign, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function DashboardPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3d1a10]/30 via-[#0a2e0a]/30 to-black"></div>
        <Image src="/images/tribal-pattern-bg.png" alt="" fill className="object-cover opacity-30" priority />
      </div>

      {/* Mobile layout */}
      <div className="md:hidden max-w-md mx-auto min-h-screen flex flex-col p-5">
        {/* User welcome section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/placeholder.svg?key=x0w0b"
              alt="User profile"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Welcome Michael</h1>
            <p className="text-gray-400 text-lg">What do you want to do?</p>
          </div>
        </div>

        {/* Balance card */}
        <div className="bg-[#1e1e2e] rounded-xl p-6 mb-6">
          <p className="text-gray-400 text-xl mb-1">Total Balance</p>
          <div className="flex justify-between items-center">
            <span className="text-white text-4xl font-bold">$235,500.34</span>
            <span className="text-gray-300 text-2xl">85.59 ETH</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 mb-8">
          <button className="flex-1 bg-[#1e1e2e] rounded-xl py-4 flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-gray-500/30 rounded-full flex items-center justify-center">
              <Wallet className="h-6 w-6 text-gray-300" />
            </div>
            <span className="text-gray-300 text-xl">Wallet</span>
          </button>

          <button className="flex-1 bg-[#1e1e2e] rounded-xl py-4 flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-gray-500/30 rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-gray-300" />
            </div>
            <span className="text-gray-300 text-xl">Mint NFT</span>
          </button>

          <button className="flex-1 bg-[#1e1e2e] border-2 border-[#5dff94]/30 rounded-xl py-4 flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-[#5dff94]/10 rounded-full flex items-center justify-center">
              <ArrowUpRight className="h-6 w-6 text-[#5dff94]" />
            </div>
            <span className="text-[#5dff94] text-xl">Send</span>
          </button>
        </div>

        {/* Categories in desktop style for mobile */}
        <div className="space-y-4 mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">Explore Categories</h2>

          {/* NFTs: Exclusive Collectibles */}
          <div className="relative">
            <div className="bg-[#1a1a24] rounded-xl overflow-hidden aspect-video flex items-center justify-center shadow-lg">
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-white text-xl font-bold mb-1">Exclusive Collectibles</h3>
                <p className="text-white/70 text-sm">Discover rare digital collectibles</p>
                <button className="mt-2 bg-black/60 backdrop-blur-sm rounded-lg py-1.5 px-3 text-white text-sm border border-[#5dff94]/30 hover:border-[#5dff94]/60 transition-colors">
                  Browse NFTs
                </button>
              </div>
              <div className="w-1/3 h-1/2 absolute right-4 top-1/2 -translate-y-1/2">
                {/* Jersey placeholder */}
                <div className="w-full h-full bg-blue-800 rounded-lg flex items-center justify-center">
                  <div className="text-cyan-300 text-center">
                    <div className="text-xs">Inter</div>
                    <div className="text-base font-bold">Jersey</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* List of Clubs and Leagues */}
          <div className="relative">
            <div className="bg-[#1a1a24] rounded-xl overflow-hidden aspect-video flex items-center justify-center shadow-lg">
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-white text-xl font-bold mb-1">Clubs & Leagues</h3>
                <p className="text-white/70 text-sm">Explore teams and competitions</p>
                <button className="mt-2 bg-black/60 backdrop-blur-sm rounded-lg py-1.5 px-3 text-white text-sm border border-[#ffc107]/30 hover:border-[#ffc107]/60 transition-colors">
                  View Clubs
                </button>
              </div>
              <div className="w-16 h-16 absolute right-4 top-1/2 -translate-y-1/2">
                {/* Barcelona logo placeholder */}
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#a50044] to-[#004d98] flex items-center justify-center">
                  <div className="text-yellow-400 font-bold text-sm">FCB</div>
                </div>
              </div>
            </div>
          </div>

          {/* Explore Players */}
          <div className="relative">
            <div className="bg-[#1a1a24] rounded-xl overflow-hidden aspect-video flex items-center justify-center shadow-lg">
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-white text-xl font-bold mb-1">Players</h3>
                <p className="text-white/70 text-sm">Discover Latin talent in football</p>
                <button className="mt-2 bg-black/60 backdrop-blur-sm rounded-lg py-1.5 px-3 text-white text-sm border border-[#ff5f38]/30 hover:border-[#ff5f38]/60 transition-colors">
                  Explore Players
                </button>
              </div>
              <div className="w-16 h-16 absolute right-4 top-1/2 -translate-y-1/2">
                {/* Player placeholder */}
                <div className="w-full h-full rounded-full bg-gradient-to-r from-[#ff5f38] to-[#5dff94] flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Player</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Country */}
          <div className="relative">
            <div className="bg-[#1a1a24] rounded-xl overflow-hidden aspect-video flex items-center justify-center shadow-lg">
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-white text-xl font-bold mb-1">Countries</h3>
                <p className="text-white/70 text-sm">Browse by nation and discover talent</p>
                <button
                  className="mt-2 bg-black/60 backdrop-blur-sm rounded-lg py-1.5 px-3 text-white text-sm border border-[#38d8d8]/30 hover:border-[#38d8d8]/60 transition-colors"
                  onClick={() => router.push("/countries")}
                >
                  Select Country
                </button>
              </div>
              <div className="w-16 h-16 absolute right-4 top-1/2 -translate-y-1/2">
                {/* Brazil outline placeholder */}
                <div className="w-full h-full border-2 border-[#38d8d8] rounded-lg flex items-center justify-center">
                  <span className="text-[#38d8d8] font-bold text-sm">Brazil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop version */}
      <div className="hidden md:block max-w-6xl mx-auto min-h-screen p-8">
        {/* User welcome section */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/placeholder.svg?key=x0w0b"
              alt="User profile"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Welcome Michael</h1>
            <p className="text-gray-400 text-lg">What do you want to do?</p>
          </div>
        </div>

        {/* Balance and action buttons in a row */}
        <div className="flex gap-6 mb-10">
          {/* Balance card */}
          <div className="bg-[#1e1e2e] rounded-xl p-6 flex-1">
            <p className="text-gray-400 text-xl mb-1">Total Balance</p>
            <div className="flex justify-between items-center">
              <span className="text-white text-4xl font-bold">$235,500.34</span>
              <span className="text-gray-300 text-2xl">85.59 ETH</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4">
            <button className="bg-[#1e1e2e] rounded-xl px-6 py-4 flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-gray-500/30 rounded-full flex items-center justify-center">
                <Wallet className="h-6 w-6 text-gray-300" />
              </div>
              <span className="text-gray-300 text-xl">Wallet</span>
            </button>

            <button className="bg-[#1e1e2e] rounded-xl px-6 py-4 flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-gray-500/30 rounded-full flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-gray-300" />
              </div>
              <span className="text-gray-300 text-xl">Mint NFT</span>
            </button>

            <button className="bg-[#1e1e2e] border-2 border-[#5dff94]/30 rounded-xl px-6 py-4 flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-[#5dff94]/10 rounded-full flex items-center justify-center">
                <ArrowUpRight className="h-6 w-6 text-[#5dff94]" />
              </div>
              <span className="text-[#5dff94] text-xl">Send</span>
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="w-full">
          <h2 className="text-3xl font-bold text-white mb-8">Explore Categories</h2>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* NFTs: Exclusive Collectibles */}
            <div className="relative">
              <div className="bg-[#1a1a24] rounded-xl overflow-hidden aspect-video flex items-center justify-center shadow-lg">
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-white text-2xl font-bold mb-2">Exclusive Collectibles</h3>
                  <p className="text-white/70">Discover rare digital collectibles from your favorite teams</p>
                  <button className="mt-4 bg-black/60 backdrop-blur-sm rounded-lg py-2 px-4 text-white border border-[#5dff94]/30 hover:border-[#5dff94]/60 transition-colors">
                    Browse NFTs
                  </button>
                </div>
                <div className="w-1/2 h-1/2 relative flex items-center justify-center">
                  {/* Jersey placeholder */}
                  <div className="w-40 h-48 bg-blue-800 rounded-lg flex items-center justify-center">
                    <div className="text-cyan-300 text-center">
                      <div className="text-sm">Inter</div>
                      <div className="text-xl font-bold">Jersey</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* List of Clubs and Leagues */}
            <div className="relative">
              <div className="bg-[#1a1a24] rounded-xl overflow-hidden aspect-video flex items-center justify-center shadow-lg">
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-white text-2xl font-bold mb-2">Clubs & Leagues</h3>
                  <p className="text-white/70">Explore teams and competitions from around the world</p>
                  <button className="mt-4 bg-black/60 backdrop-blur-sm rounded-lg py-2 px-4 text-white border border-[#ffc107]/30 hover:border-[#ffc107]/60 transition-colors">
                    View Clubs
                  </button>
                </div>
                <div className="w-1/2 h-1/2 relative flex items-center justify-center">
                  {/* Barcelona logo placeholder */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-b from-[#a50044] to-[#004d98] flex items-center justify-center">
                    <div className="text-yellow-400 font-bold">FCB</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Explore Players */}
            <div className="relative">
              <div className="bg-[#1a1a24] rounded-xl overflow-hidden aspect-video flex items-center justify-center shadow-lg">
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-white text-2xl font-bold mb-2">Players</h3>
                  <p className="text-white/70">Discover Latin talent in international football</p>
                  <button className="mt-4 bg-black/60 backdrop-blur-sm rounded-lg py-2 px-4 text-white border border-[#ff5f38]/30 hover:border-[#ff5f38]/60 transition-colors">
                    Explore Players
                  </button>
                </div>
                <div className="w-1/3 h-full relative flex items-center justify-center">
                  {/* Player placeholder */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#ff5f38] to-[#5dff94] flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center">
                      <span className="text-white font-bold">Player</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Country */}
            <div className="relative">
              <div className="bg-[#1a1a24] rounded-xl overflow-hidden aspect-video flex items-center justify-center shadow-lg">
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-white text-2xl font-bold mb-2">Countries</h3>
                  <p className="text-white/70">Browse by nation and discover regional talent</p>
                  <button
                    className="mt-4 bg-black/60 backdrop-blur-sm rounded-lg py-2 px-4 text-white border border-[#38d8d8]/30 hover:border-[#38d8d8]/60 transition-colors"
                    onClick={() => router.push("/countries")}
                  >
                    Select Country
                  </button>
                </div>
                <div className="w-1/2 h-1/2 relative flex items-center justify-center">
                  {/* Brazil outline placeholder */}
                  <div className="w-32 h-32 border-2 border-[#38d8d8] rounded-lg flex items-center justify-center">
                    <span className="text-[#38d8d8] font-bold">Brazil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
