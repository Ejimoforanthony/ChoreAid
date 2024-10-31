import { useEffect, useState } from "react"
import { MapPin, Star } from "lucide-react"

export default function Component() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua.
        </p>
      </div>

      {/* Featured Team Member */}
      <div className="bg-sky-50 shadow-md rounded-lg p-6 mb-8 max-w-5xl mx-auto">
        <div className="flex items-center gap-4">
          <img
            src="/placeholder.svg?height=100&width=100"
            alt="Alabi Abubakar"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">Alabi Abubakar</h3>
                <p className="text-gray-600">Cleaner</p>
              </div>
              <span className="text-sm text-gray-600">25km away</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <MapPin className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">Victoria Island</span>
            </div>
            <div className="flex items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-32 mx-auto block">
          View Profile
        </button>
      </div>

      {/* Placeholder Skeleton Loaders */}
      <div className="grid gap-6 h-60 max-w-5xl mx-auto">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white shadow-md rounded-lg p-6 animate-pulse">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gray-200" />
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
