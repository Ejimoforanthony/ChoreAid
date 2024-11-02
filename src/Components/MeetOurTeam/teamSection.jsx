import { useEffect, useState } from "react"
import { MapPin, Star } from "lucide-react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { useNavigate } from "react-router-dom"

export default function Component() {
  const [isLoading, setIsLoading] = useState(true)
const navigate = useNavigate()
const redirectToProfile=()=>{
  navigate("/profile");
}
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

      {/* Main Team Member Box */}
      <div className="bg-sky-50 shadow-md rounded-lg p-6 mb-8 max-w-5xl mx-auto">
        <div className="flex items-center gap-4">
          {isLoading ? (
            <Skeleton circle={true} height={80} width={80} />
          ) : (
            <img
              src="/placeholder.svg?height=100&width=100"
              alt="Alabi Abubakar"
              width={80}
              height={80}
              className="rounded-full"
            />
          )}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">
                  {isLoading ? <Skeleton width={120} /> : "Alabi Abubakar"}
                </h3>
                <p className="text-gray-600">
                  {isLoading ? <Skeleton width={80} /> : "Cleaner"}
                </p>
              </div>
              <span className="text-sm text-gray-600">
                {isLoading ? <Skeleton width={50} /> : "25km away"}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <MapPin className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">
                {isLoading ? <Skeleton width={100} /> : "Victoria Island"}
              </span>
            </div>
            <div className="flex items-center gap-1 mt-2">
              {isLoading
                ? [...Array(5)].map((_, i) => <Skeleton key={i} circle={true} width={16} height={16} />)
                : [...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
            </div>
          </div>
        </div>
        {isLoading ? (
          <Skeleton width={128} height={36} className="mt-4" />
        ) : (
          <button onClick={redirectToProfile} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-32 mx-auto block">
            View Profile
          </button>
        )}
      </div>

      {/* Skeleton Loaders for Additional Team Members */}
      <div className="grid gap-6 max-w-5xl mx-auto">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-sky-50 shadow-md rounded-lg p-6">
            <div className="flex items-center gap-4">
              <Skeleton circle={true} height={80} width={80} />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <Skeleton height={20} width={120} className="mb-2" />
                    <Skeleton height={16} width={80} />
                  </div>
                  <Skeleton height={16} width={50} />
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <MapPin className="w-4 h-4 text-gray-600" />
                  <Skeleton height={16} width={100} />
                </div>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} circle={true} width={16} height={16} />
                  ))}
                </div>
              </div>
            </div>
            <Skeleton width={128} height={36} className="mt-4 " />
          </div>
        ))}
      </div>
    </div>
  )
}
