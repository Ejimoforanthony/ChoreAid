import { useEffect, useState, Suspense } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("about")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const PhotoGrid = () => (
    <div className="grid grid-cols-2 gap-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="w-full h-40 bg-gray-200 rounded-lg" />
      ))}
    </div>
  )

  const ReviewList = () => (
    <div className="space-y-6">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="bg-white p-4 rounded-lg shadow-md flex gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse" />
          <div className="flex-1">
            <Skeleton height={20} className="mb-2" />
            <Skeleton count={2} />
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="w-full max-w-[1080px] mx-auto p-8">
      {/* Tabs Navigation */}
      <div className="flex justify-center space-x-8 bg-blue-50 p-4 rounded-lg mb-6">
        <button
          onClick={() => setActiveTab("about")}
          className={`px-4 py-2 font-semibold rounded-lg ${
            activeTab === "about" ? "bg-white text-blue-600" : "text-gray-600"
          }`}
        >
          About
        </button>
        <button
          onClick={() => setActiveTab("photos")}
          className={`px-4 py-2 font-semibold rounded-lg ${
            activeTab === "photos" ? "bg-white text-blue-600" : "text-gray-600"
          }`}
        >
          Photos
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-4 py-2 font-semibold rounded-lg ${
            activeTab === "reviews" ? "bg-white text-blue-600" : "text-gray-600"
          }`}
        >
          Reviews
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-blue-50 p-6 rounded-lg">
        {isLoading ? (
          <Skeleton count={5} />
        ) : activeTab === "about" ? (
          <div className="space-y-4">
            {/* Bio Box */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Bio</h3>
              <p className="text-gray-700 mb-4">
                I am a reliable and detail-oriented cleaning professional with a passion for making
                spaces shine.
              </p>
              <p className="text-gray-700 mb-4">
                I take pride in my attention to detail, effective work ethic, and ability to work
                flexible hours to accommodate your needs.
              </p>
              <p className="text-gray-700 mb-6">
                Let me help you keep your home or office spotless!
              </p>
            </div>

            {/* Skills Box */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Skills</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Deep cleaning and organisation</li>
                <li>Dusting and polishing</li>
                <li>Sanitizing and disinfecting</li>
                <li>Window cleaning and more!</li>
              </ul>
            </div>
          </div>
        ) : activeTab === "photos" ? (
          <Suspense fallback={<Skeleton height={160} count={4} />}>
            <PhotoGrid />
          </Suspense>
        ) : (
          <Suspense fallback={<Skeleton height={120} count={5} />}>
            <ReviewList />
          </Suspense>
        )}
      </div>
    </div>
  )
}
