import Image from "next/image"

type Player = {
  id: number
  name: string
  position: string
  team: string
  country: string
  imageUrl: string
}

const featuredPlayers: Player[] = [
  {
    id: 1,
    name: "Carlos Vela",
    position: "Forward",
    team: "LAFC",
    country: "Mexico",
    imageUrl: "/placeholder.svg?key=ugov3",
  },
  {
    id: 2,
    name: "Lionel Messi",
    position: "Forward",
    team: "Inter Miami",
    country: "Argentina",
    imageUrl: "/placeholder.svg?key=73ws1",
  },
  {
    id: 3,
    name: "Luis Suárez",
    position: "Forward",
    team: "Inter Miami",
    country: "Uruguay",
    imageUrl: "/placeholder.svg?key=421lr",
  },
]

export default function FeaturedPlayers() {
  return (
    <section className="w-full py-16 hidden lg:block">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Players</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPlayers.map((player) => (
            <div
              key={player.id}
              className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-[#38d8d8]/20 hover:border-[#38d8d8]/50 transition-all hover:shadow-[0_0_15px_rgba(93,255,148,0.3)] group"
            >
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={player.imageUrl || "/placeholder.svg"}
                  alt={player.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{player.name}</h3>
                <p className="text-[#5dff94] mb-3">
                  {player.position} • {player.country}
                </p>
                <p className="text-white/60 text-sm">{player.team}</p>

                <button className="mt-4 w-full py-2 rounded-md bg-gradient-to-r from-[#38d8d8]/20 to-[#5dff94]/20 text-white border border-[#5dff94]/30 hover:border-[#5dff94]/60 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
