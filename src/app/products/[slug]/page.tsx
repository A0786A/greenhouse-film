import Navbar from '@/components/Navbar';
import WeightCalculator from '@/components/WeightCalculator';
import { notFound } from 'next/navigation';

const products = [
  {
    id: 1,
    name: 'Clear Film',
    slug: 'clear-film',
    description: 'High-transparency film for maximum light transmission and visibility.',
    longDescription: `Our Clear Film is designed to provide maximum light transmission while maintaining durability and UV protection. Perfect for applications where visibility and light penetration are crucial.

Key benefits include:
- Excellent light transmission (90%)
- Superior UV protection
- Anti-drip properties
- Long-lasting durability
- Easy installation`,
    features: [
      '90% light transmission',
      'UV protection',
      'Anti-drip properties',
      '5-year warranty'
    ],
    specifications: {
      thickness: '150-200 microns',
      width: 'Up to 20m',
      length: 'Custom lengths available',
      material: 'High-grade polyethylene',
      warranty: '5 years',
      density: 920 // kg/m³
    },
    applications: [
      'Commercial greenhouses',
      'Nurseries',
      'Garden centers',
      'Research facilities'
    ],
    image: '/images/clear-film.jpg'
  },
  {
    id: 2,
    name: 'Diffused Film',
    slug: 'diffused-film',
    description: 'Light-diffusing film for even light distribution and reduced plant stress.',
    longDescription: `Our Diffused Film is engineered to scatter light evenly throughout your greenhouse, reducing plant stress and promoting uniform growth. The innovative light diffusion technology ensures optimal growing conditions.

Key benefits include:
- Enhanced light diffusion
- Reduced plant stress
- Improved crop quality
- Better heat distribution
- Energy efficiency`,
    features: [
      '85% light transmission',
      'Enhanced light diffusion',
      'Heat retention',
      '4-year warranty'
    ],
    specifications: {
      thickness: '150-200 microns',
      width: 'Up to 20m',
      length: 'Custom lengths available',
      material: 'Diffused polyethylene',
      warranty: '4 years'
    },
    applications: [
      'Commercial greenhouses',
      'High-value crops',
      'Flower production',
      'Vegetable cultivation'
    ],
    image: '/images/diffused-film.jpg'
  },
  {
    id: 3,
    name: 'Thermal Film',
    slug: 'thermal-film',
    description: 'Insulated film for superior heat retention and energy efficiency.',
    longDescription: `Our Thermal Film is specifically designed to maximize heat retention while maintaining excellent light transmission. This innovative solution helps reduce heating costs and creates an optimal growing environment.

Key benefits include:
- Superior heat retention
- Energy cost reduction
- Excellent light transmission
- Enhanced crop protection
- Extended growing seasons`,
    features: [
      '80% light transmission',
      'Superior heat retention',
      'Energy saving',
      '6-year warranty'
    ],
    specifications: {
      thickness: '150-200 microns',
      width: 'Up to 20m',
      length: 'Custom lengths available',
      material: 'Thermal polyethylene',
      warranty: '6 years'
    },
    applications: [
      'Cold climate greenhouses',
      'Winter production',
      'Energy-efficient facilities',
      'Commercial growing'
    ],
    image: '/images/thermal-film.jpg'
  },
  {
    id: 4,
    name: 'UV Film',
    slug: 'uv-film',
    description: 'Specialized film with enhanced UV protection for sensitive crops.',
    longDescription: `Our UV Film provides maximum protection against harmful UV radiation while maintaining optimal growing conditions. Ideal for sensitive crops and regions with high UV exposure.

Key benefits include:
- Maximum UV protection
- Disease prevention
- Crop quality enhancement
- Extended growing seasons
- Reduced plant stress`,
    features: [
      '75% light transmission',
      'Maximum UV protection',
      'Disease prevention',
      '5-year warranty'
    ],
    specifications: {
      thickness: '150-200 microns',
      width: 'Up to 20m',
      length: 'Custom lengths available',
      material: 'UV-stabilized polyethylene',
      warranty: '5 years'
    },
    applications: [
      'Sensitive crops',
      'High UV regions',
      'Organic farming',
      'Research facilities'
    ],
    image: '/images/uv-film.jpg'
  }
];

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-green-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                {product.name}
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                {product.description}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Product Image */}
            <div className="mb-8 lg:mb-0">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <div className="h-96 bg-gray-200">
                  <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Product Image</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="prose prose-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                  Product Overview
                </h2>
                <div className="whitespace-pre-line text-gray-600">
                  {product.longDescription}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Key Features
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Specifications
                </h3>
                <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-sm font-medium text-gray-500 capitalize">
                        {key}
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                    </div>
                  ))}
                </dl>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Applications
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {product.applications.map((application, index) => (
                    <li key={index}>{application}</li>
                  ))}
                </ul>

                {/* Weight Calculator */}
                <div className="mt-8">
                  <WeightCalculator 
                    density={product.specifications.density}
                    defaultLength={1000} // 1m default
                    defaultWidth={1000} // 1m default
                    defaultThickness={0.15} // 150 microns default
                  />
                </div>

                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
                  >
                    Request a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 