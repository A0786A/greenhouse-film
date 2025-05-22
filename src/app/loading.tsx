import Navbar from '@/components/Navbar';

export default function Loading() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero Section Skeleton */}
        <div className="relative bg-green-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="h-12 bg-gray-200 rounded w-3/4 mx-auto animate-pulse"></div>
              <div className="mt-5 h-6 bg-gray-200 rounded w-1/2 mx-auto animate-pulse"></div>
              <div className="mt-8 flex justify-center space-x-4">
                <div className="h-12 bg-gray-200 rounded w-32 animate-pulse"></div>
                <div className="h-12 bg-gray-200 rounded w-32 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section Skeleton */}
        <div className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto animate-pulse"></div>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto animate-pulse"></div>
                  <div className="mt-4 space-y-2">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section Skeleton */}
        <div className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <div className="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 