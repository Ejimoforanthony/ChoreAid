import { MapPin } from "lucide-react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { useState, useEffect } from "react"

export default function TeamMemberCard() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full bg-white rounded-lg p-8 max-w-[1080px] mx-auto pt-32">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        {isLoading ? (
          <Skeleton circle={true} height={80} width={80} />
        ) : (
          <img
            src="/placeholder.svg?height=80&width=80"
            alt="Alabi Abubakar"
            className="rounded-full w-20 h-20"
          />
        )}
        <div className="flex-1 px-4">
          <h3 className="text-lg font-semibold">
            {isLoading ? <Skeleton width={120} /> : "Alabi Abubakar"}
          </h3>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-1 text-blue-500" />
            {isLoading ? <Skeleton width={100} /> : "Victoria Island"}
          </div>
        </div>
        <div>
          <p className="text-gray-600">{isLoading ? <Skeleton width={80} /> : "Cleaner"}</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg mt-6">
        <div className="text-center">
          <p className="text-sm text-gray-600">Total jobs</p>
          <p className="text-2xl font-semibold">{isLoading ? <Skeleton width={20} /> : "5"}</p>
        </div>
        <div className="border-l border-gray-300 h-10"></div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Customer ratings</p>
          <p className="text-2xl font-semibold">
            {isLoading ? <Skeleton width={30} /> : "4/5"}
          </p>
        </div>
      </div>

      {/* Buttons Section */}
      <button className="w-full mt-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
        Book service
      </button>
      <button className="flex items-center mt-4 text-blue-600 text-sm font-semibold">
        Price list
        <span className="ml-1">&rarr;</span>
      </button>
    </div>
  )
}
