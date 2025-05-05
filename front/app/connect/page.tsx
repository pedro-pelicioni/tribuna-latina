"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Home } from "lucide-react"

export default function ConnectWalletPage() {
  const router = useRouter()
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Simulated loading state when wallet is selected
  useEffect(() => {
    if (selectedWallet) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [selectedWallet])

  const handleWalletSelect = (wallet: string) => {
    setSelectedWallet(wallet)
  }

  // Function to navigate to home page
  const navigateToHome = () => {
    router.push("/")
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-black to-[#0a2e0a] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] opacity-30 animate-pulse">
          <Image src="/images/sphere.png" alt="" fill className="object-contain" />
        </div>
        <div
          className="absolute -bottom-[40%] -left-[20%] w-[70%] h-[70%] opacity-20 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        >
          <Image src="/images/sphere.png" alt="" fill className="object-contain" />
        </div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>

      {/* Home button - Fixed implementation */}
      <button
        onClick={navigateToHome}
        className="absolute top-6 left-6 text-white flex items-center gap-2 hover:text-white/80 transition-colors z-10 group cursor-pointer"
      >
        <div className="bg-black/30 backdrop-blur-sm p-2 rounded-full group-hover:bg-black/50 transition-colors">
          <Home className="h-5 w-5" />
        </div>
        <span className="hidden md:inline">HOME</span>
      </button>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-md mx-auto md:max-w-lg">
          {/* Wallet selection card */}
          <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-[#38d8d8]/20 shadow-[0_0_30px_rgba(93,255,148,0.1)]">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">Select a wallet</h1>
              <p className="text-white/60 text-center text-sm md:text-base">
                By connecting your wallet, you agree to our{" "}
                <a href="#" className="text-[#38d8d8] hover:text-[#5dff94] transition-colors underline">
                  Terms of Service
                </a>{" "}
                and our{" "}
                <a href="#" className="text-[#38d8d8] hover:text-[#5dff94] transition-colors underline">
                  Privacy Policy
                </a>
              </p>
            </div>

            {/* Wallet options */}
            <div className="space-y-4">
              {/* MetaMask wallet option */}
              <button
                className={`w-full h-16 rounded-xl bg-gradient-to-r from-[#ff5f38]/80 via-[#38d8d8]/80 to-[#5dff94]/80 p-[1px] transition-all ${
                  selectedWallet === "metamask"
                    ? "scale-[1.02] from-[#ff5f38] via-[#38d8d8] to-[#5dff94] shadow-[0_0_20px_rgba(93,255,148,0.4)]"
                    : "hover:scale-[1.01] hover:from-[#ff5f38] hover:via-[#38d8d8] hover:to-[#5dff94]"
                }`}
                onClick={() => {
                  handleWalletSelect("metamask")
                  setTimeout(() => {
                    router.push("/dashboard")
                  }, 1500)
                }}
                disabled={isLoading}
              >
                <div className="w-full h-full rounded-xl bg-black/80 backdrop-blur-sm flex items-center px-6">
                  <div className="w-10 h-10 mr-4 relative">
                    <Image src="/images/metamask-logo.png" alt="MetaMask" fill className="object-contain" />
                  </div>
                  <span className="text-white font-bold text-lg">MetaMask</span>
                  {selectedWallet === "metamask" && isLoading && (
                    <div className="ml-auto">
                      <div className="w-5 h-5 border-2 border-[#5dff94] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
              </button>

              {/* Coinbase wallet option */}
              <button
                className={`w-full h-16 rounded-xl bg-gradient-to-r from-[#ff5f38]/80 via-[#38d8d8]/80 to-[#5dff94]/80 p-[1px] transition-all ${
                  selectedWallet === "coinbase"
                    ? "scale-[1.02] from-[#ff5f38] via-[#38d8d8] to-[#5dff94] shadow-[0_0_20px_rgba(93,255,148,0.4)]"
                    : "hover:scale-[1.01] hover:from-[#ff5f38] hover:via-[#38d8d8] hover:to-[#5dff94]"
                }`}
                onClick={() => {
                  handleWalletSelect("coinbase")
                  setTimeout(() => {
                    router.push("/dashboard")
                  }, 1500)
                }}
                disabled={isLoading}
              >
                <div className="w-full h-full rounded-xl bg-black/80 backdrop-blur-sm flex items-center px-6">
                  <div className="w-10 h-10 mr-4 relative">
                    <Image src="/images/coinbase-logo.png" alt="Coinbase Wallet" fill className="object-contain" />
                  </div>
                  <span className="text-white font-bold text-lg">Coinbase Wallet</span>
                  {selectedWallet === "coinbase" && isLoading && (
                    <div className="ml-auto">
                      <div className="w-5 h-5 border-2 border-[#5dff94] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
              </button>

              {/* WalletConnect option */}
              <button
                className={`w-full h-16 rounded-xl bg-gradient-to-r from-[#ff5f38]/80 via-[#38d8d8]/80 to-[#5dff94]/80 p-[1px] transition-all ${
                  selectedWallet === "walletconnect"
                    ? "scale-[1.02] from-[#ff5f38] via-[#38d8d8] to-[#5dff94] shadow-[0_0_20px_rgba(93,255,148,0.4)]"
                    : "hover:scale-[1.01] hover:from-[#ff5f38] hover:via-[#38d8d8] hover:to-[#5dff94]"
                }`}
                onClick={() => {
                  handleWalletSelect("walletconnect")
                  setTimeout(() => {
                    router.push("/dashboard")
                  }, 1500)
                }}
                disabled={isLoading}
              >
                <div className="w-full h-full rounded-xl bg-black/80 backdrop-blur-sm flex items-center px-6">
                  <div className="w-10 h-10 mr-4 relative">
                    <Image src="/images/walletconnect-logo.png" alt="WalletConnect" fill className="object-contain" />
                  </div>
                  <span className="text-white font-bold text-lg">WalletConnect</span>
                  {selectedWallet === "walletconnect" && isLoading && (
                    <div className="ml-auto">
                      <div className="w-5 h-5 border-2 border-[#5dff94] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
              </button>
            </div>

            {/* Help text */}
            <div className="flex items-center justify-center mt-8">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>End-to-end encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
