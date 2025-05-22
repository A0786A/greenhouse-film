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
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Product Image Skeleton */}
            <div className="mb-8 lg:mb-0">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <div className="h-96 bg-gray-200 animate-pulse"></div>
              </div>
            </div>

            {/* Product Details Skeleton */}
            <div>
              <div className="space-y-8">
                <div>
                  <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                  <div className="mt-4 space-y-2">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  </div>
                </div>

                <div>
                  <div className="h-8 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                  <div className="mt-4 space-y-2">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                  </div>
                </div>

                <div>
                  <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="h-8 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                  <div className="mt-4 space-y-2">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>

                <div className="h-12 bg-gray-200 rounded w-1/3 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 