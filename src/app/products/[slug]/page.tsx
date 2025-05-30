'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Project } from '@/config/woocommerce';
import Navbar from '@/components/Navbar';
import RelatedProducts from '@/components/RelatedProducts';
import WeightCalculator, { PRODUCT_TYPES, PRODUCT_FORMULAS, type BaseFormula, type OverWinterFormula } from '@/components/WeightCalculator';
import { useCart } from '@/context/CartContext';

const THICKNESS_OPTIONS = ['6 Mil'];

const PLASTIC_TYPE_OPTIONS = {
  'over-winter': ['Over Winter (White)', 'Over Winter (Clear)']
};

const THICKNESS_OPTIONS_BY_TYPE = {
  'Over Winter (White)': ['5 Mil'],
  'Over Winter (Clear)': ['5 Mil']
};

const TABS = [
  { key: 'description', label: 'Description' },
  { key: 'additional', label: 'Additional information' },
  { key: 'reviews', label: 'Reviews (0)' },
];

const getWidthOptions = (slug: string) => {
  if (slug.includes('diffused')) {
    return ["16' Wide", "18' Wide", "20' Wide", "26' Wide", "32' Wide", "50' Wide"];
  }
  if (slug.includes('irac')) {
    return ["12' Wide", "24' Wide", "32' Wide", "42' Wide", "48' Wide", "50' Wide"];
  }
  if (slug.includes('hoop-house')) {
    return ["20' Wide", "24' Wide", "26' Wide", "28' Wide", "32' Wide", "36' Wide", "40' Wide", "42' Wide", "48' Wide", "50' Wide"];
  }
  if (slug.includes('light-deprivation')) {
    return ["20' Wide", "24' Wide", "30' Wide", "32' Wide", "36' Wide", "40' Wide", "50' Wide"];
  }
  if (slug.includes('over-winter')) {
    return ["14' Wide", "16' Wide", "21' Wide", "24' Wide", "28' Wide", "32' Wide", "42' Wide", "48' Wide"];
  }
  // Default options for other products
  return ["10' Wide", "12' Wide", "14' Wide", "16' Wide", "18' Wide", "20' Wide", "24' Wide", "28' Wide", "32' Wide", "36' Wide", "40' Wide", "42' Wide", "48' Wide", "50' Wide"];
};

const ProductDetailPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedWidth, setSelectedWidth] = useState(getWidthOptions(params.slug as string)[0]);
  const [selectedPlasticType, setSelectedPlasticType] = useState(PLASTIC_TYPE_OPTIONS['over-winter']?.[0] || '');
  const [selectedThickness, setSelectedThickness] = useState(
    params.slug === 'over-winter-plastic' 
      ? THICKNESS_OPTIONS_BY_TYPE[selectedPlasticType as keyof typeof THICKNESS_OPTIONS_BY_TYPE]?.[0] || '6 Mil'
      : THICKNESS_OPTIONS[0]
  );
  const [activeTab, setActiveTab] = useState('description');
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [totalWeight, setTotalWeight] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [length, setLength] = useState(5);

  // Add default product data
  const defaultProduct: Project = {
    id: 0,
    name: '',
    slug: '',
    permalink: '',
    date_created: '',
    type: '',
    status: '',
    featured: false,
    catalog_visibility: '',
    description: '',
    short_description: '',
    sku: '',
    price: '',
    regular_price: '',
    sale_price: '',
    date_on_sale_from: null,
    date_on_sale_to: null,
    on_sale: false,
    purchasable: false,
    total_sales: 0,
    virtual: false,
    downloadable: false,
    downloads: [],
    download_limit: 0,
    download_expiry: 0,
    tax_status: '',
    tax_class: '',
    manage_stock: false,
    stock_quantity: null,
    stock_status: '',
    backorders: '',
    backorders_allowed: false,
    backordered: false,
    sold_individually: false,
    weight: '',
    dimensions: {
      length: '',
      width: '',
      height: ''
    },
    shipping_required: false,
    shipping_taxable: false,
    shipping_class: '',
    shipping_class_id: 0,
    reviews_allowed: false,
    average_rating: '',
    rating_count: 0,
    images: [],
    categories: [],
    tags: [],
    attributes: [],
    default_attributes: [],
    variations: [],
    grouped_products: [],
    menu_order: 0,
    meta_data: [],
    costPerSqft: 0,
    minWidth: 0,
    maxWidth: 0,
    widthIncrement: 0,
    minLength: 0,
    maxLength: 0,
    lengthIncrement: 0,
    weightPerSqft: 0
  };

  // Determine product type based on slug
  const getProductType = (slug: string): keyof typeof PRODUCT_TYPES => {
    if (slug.includes('irac')) return PRODUCT_TYPES.irac;
    if (slug.includes('diffused')) return PRODUCT_TYPES.diffused;
    if (slug.includes('light-deprivation')) return PRODUCT_TYPES['light-deprivation'];
    if (slug.includes('over-winter')) return PRODUCT_TYPES['over-winter'];
    if (slug.includes('hoop-house')) return PRODUCT_TYPES['hoop-house'];
    return PRODUCT_TYPES.clear; // Default to clear plastic
  };

  const productType = getProductType(params.slug as string);
  console.log('Product type:', productType);

  // Validate product type exists in formulas
  if (!PRODUCT_FORMULAS[productType]) {
    console.error(`No formula found for product type: ${productType}`);
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        console.log('Fetching product with slug:', params.slug);
        
        const response = await fetch(`/api/products/by-slug/${params.slug}`);
        console.log('Initial response status:', response.status);
        const data = await response.json();
        console.log('Initial response data:', JSON.stringify(data, null, 2));
        
        if (!data.success) {
          throw new Error(data.message || 'Product not found');
        }
        
        if (!data.productId) {
          throw new Error('Product ID is missing from response');
        }
        
        console.log('Fetching product details for ID:', data.productId);
        const productResponse = await fetch(`/api/products/${data.productId}`);
        console.log('Product details response status:', productResponse.status);
        const productData = await productResponse.json();
        console.log('Product details data:', JSON.stringify(productData, null, 2));
        
        if (!productData.success || !productData.product) {
          throw new Error(productData.message || 'Product details not found');
        }
        
        // Merge the product data with default values and formulas
        const mergedProduct = {
          ...defaultProduct,
          ...productData.product,
          costPerSqft: productType === 'over-winter' 
            ? (PRODUCT_FORMULAS[productType] as OverWinterFormula)['5 Mil'].costPerSqft
            : (PRODUCT_FORMULAS[productType] as BaseFormula).costPerSqft,
          minWidth: 12,
          maxWidth: 60,
          widthIncrement: 2,
          minLength: 0,
          maxLength: 1000,
          lengthIncrement: 5,
          weightPerSqft: productType === 'over-winter'
            ? (PRODUCT_FORMULAS[productType] as OverWinterFormula)['5 Mil'].weightPerSqft
            : (PRODUCT_FORMULAS[productType] as BaseFormula).weightPerSqft
        };
        
        setProduct(mergedProduct);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching product:', err);
        setError(err.message || 'Failed to load product. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [params.slug]);

  // Update thickness when plastic type changes
  useEffect(() => {
    if (params.slug === 'over-winter-plastic') {
      const newThicknessOptions = THICKNESS_OPTIONS_BY_TYPE[selectedPlasticType as keyof typeof THICKNESS_OPTIONS_BY_TYPE] || ['6 Mil'];
      setSelectedThickness(newThicknessOptions[0]);
    }
  }, [selectedPlasticType, params.slug]);

  const handleAddToCart = () => {
  if (!product) {
      console.error('Product data is not available');
      return;
    }

    if (!product.images || product.images.length === 0) {
      console.error('Product image is not available');
      return;
    }

    try {
      setIsAddingToCart(true);
      const cartItem = {
        id: product.id.toString(),
        name: product.name,
        price: totalPrice / quantity,
        weight: totalWeight / quantity,
        image: product.images[0].src,
        width: selectedWidth,
        thickness: selectedThickness,
        quantity: quantity,
        length: length
      };

      console.log('Adding to cart:', cartItem);
      addToCart(cartItem);
      
      setTimeout(() => {
        setIsAddingToCart(false);
        router.push('/cart');
      }, 1000);
    } catch (error) {
      console.error('Error adding to cart:', error);
      setIsAddingToCart(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }
  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-red-500">Error Loading Product</h2>
          <p className="text-gray-600 mb-4">{error || 'Product not found'}</p>
          <button
            onClick={() => router.push('/products')}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >Back to Products</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-white pt-32 pb-8">
        <div className="max-w-5xl mx-auto px-4">
        {/* Hero Section */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {/* Product Image */}
            <div className="md:w-1/2 flex flex-col gap-4">
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square flex items-center justify-center">
                {product.images && product.images.length > 0 ? (
                  <img src={product.images[0].src} alt={product.images[0].alt || product.name} className="object-cover w-full h-full" />
                ) : (
                  <span className="text-gray-400">No image available</span>
                )}
                  </div>
              {/* Thumbnails */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-2 mt-2">
                  {product.images.map((img) => (
                    <img key={img.id} src={img.src} alt={img.alt || product.name} className="w-16 h-16 object-cover rounded cursor-pointer border border-gray-200" />
                  ))}
                </div>
              )}
            </div>
            {/* Product Info */}
            <div className="md:w-1/2 flex flex-col gap-4">
            <div>
                <div className="text-sm text-green-700 font-semibold mb-1">GREEHOUSE PLASTIC / COVER</div>
                <h1 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="text-2xl text-green-600 font-bold mb-4">${totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              </div>
              {/* Product Specification Table */}
              <div className="mb-4">
                <table className="min-w-full text-sm border rounded">
                  <tbody>
                    {params.slug === 'over-winter-plastic' && (
                      <tr className="border-b">
                        <td className="py-2 px-4 font-semibold">Plastic Type</td>
                        <td className="py-2 px-4">
                          <select 
                            value={selectedPlasticType} 
                            onChange={e => setSelectedPlasticType(e.target.value)} 
                            className="border rounded px-3 py-1.5 w-48 appearance-none bg-white bg-no-repeat bg-[right_0.5rem_center] bg-[length:1.5em_1.5em] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236B7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]"
                          >
                            {PLASTIC_TYPE_OPTIONS['over-winter'].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                          </select>
                        </td>
                      </tr>
                    )}
                    <tr className="border-b">
                      <td className="py-2 px-4 font-semibold">Thickness</td>
                      <td className="py-2 px-4">
                        <select 
                          value={selectedThickness} 
                          onChange={e => setSelectedThickness(e.target.value)} 
                          className="border rounded px-3 py-1.5 w-32 appearance-none bg-white bg-no-repeat bg-[right_0.5rem_center] bg-[length:1.5em_1.5em] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236B7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]"
                        >
                          {(params.slug === 'over-winter-plastic' 
                            ? THICKNESS_OPTIONS_BY_TYPE[selectedPlasticType as keyof typeof THICKNESS_OPTIONS_BY_TYPE] || ['6 Mil']
                            : THICKNESS_OPTIONS
                          ).map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-semibold">Width</td>
                      <td className="py-2 px-4">
                        <select 
                          value={selectedWidth} 
                          onChange={e => setSelectedWidth(e.target.value)} 
                          className="border rounded px-3 py-1.5 w-32 appearance-none bg-white bg-no-repeat bg-[right_0.5rem_center] bg-[length:1.5em_1.5em] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236B7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]"
                        >
                          {getWidthOptions(params.slug as string).map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div>

                {/* Weight Calculator */}
              <div className="border border-gray-200 p-4 rounded-lg mb-4">
                  <WeightCalculator 
                  defaultLength={length}
                  quantity={quantity}
                  width={selectedWidth}
                  productType={productType}
                  selectedThickness={selectedThickness}
                  onWeightChange={setTotalWeight}
                  onPriceChange={setTotalPrice}
                  onLengthChange={setLength}
                  />
                </div>

              {/* Quantity and Add to Cart */}
              <div className="flex gap-4 items-center mb-4">
                <label htmlFor="quantity" className="text-sm font-medium text-gray-700">Quantity</label>
                <input
                  id="quantity"
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={e => setQuantity(Number(e.target.value))}
                  className="w-20 border rounded px-2 py-1"
                />
                <button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-400"
                >
                  {isAddingToCart ? 'Adding to Cart...' : 'Add to Cart'}
                </button>
              </div>

              {/* Weight and Price Summary */}
              <div className="border border-gray-200 p-4 rounded-lg">
                <div className="text-sm">
                  <p className="text-gray-600">Weight: {totalWeight.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} lbs</p>
                  <p className="font-bold text-gray-900">Total: ${totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
              </div>

              <div className="text-xs text-gray-500">SKU: N/A &nbsp;|&nbsp; Category: GREEHOUSE PLASTIC / COVER</div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex gap-8" aria-label="Tabs">
              {TABS.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.key ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          <div>
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                {params.slug === 'irac-greenhouse-plastic' ? (
                  <>
                    <h2>IRAC Greenhouse Plastic for Stronger Plant Growth</h2>
                    <p>IRAC Greenhouse Plastic protects plants in all seasons. It spreads light evenly for steady growth. Heat stays inside for better temperature control. The cover reduces condensation to prevent mold. The 6 mil plastic option offers great insulation. A four-year lifespan means fewer replacements. Strong material resists wear and tear. Your plants get stable conditions year-round.</p>
                    
                    <h2>Built for Long-Lasting Performance</h2>
                    <p>A good greenhouse cover must last through tough weather. Our UV resistant plastic blocks harsh sunlight. It prevents cracking and fading over time. Strong material stands up to wind and rain. Heat stays inside during colder months. Your plants stay safe from sudden temperature drops. Long-lasting durability saves money over time. The cover won't rip under pressure. It holds firm during strong winds. Reliable protection keeps crops growing strong.</p>
                    
                    <h2>Infrared and Anti-Drip Technology</h2>
                    <p>Infrared additives hold warmth during cold nights. This keeps plants safe from temperature changes. The anti-drip feature stops water buildup. Less moisture means lower mold risk. Water spots won't block sunlight. Better light exposure leads to steady plant growth. Healthier plants produce better yields. Even light distribution helps all crops. No dark spots mean uniform growth. Plants stay strong in all seasons.</p>
                    
                    <h2>Thick and Strong for Reliable Protection</h2>
                    <p>Our film comes in 6 mil plastic. Thick plastic keeps greenhouses warm. It blocks excess moisture and prevents drafts. Strong material resists tearing in storms. A heavy duty plastic greenhouse stays protected year-round. Fewer replacements mean long-term savings. The right thickness supports healthy plants. Sturdy film lasts through extreme weather. No sagging or stretching over time. Your crops stay shielded from harsh elements.</p>
                    
                    <h2>Wide Size Range for Every Greenhouse</h2>
                    <p>Choose from widths of 12 to 60 feet. The right size ensures full coverage. Custom lengths help reduce material waste. A snug fit prevents heat loss. Strong seals keep wind from entering. A well-fitted cover boosts insulation. Your greenhouse stays efficient in all seasons. Proper sizing keeps temperatures stable. No loose ends mean better protection. A tight fit extends the cover's lifespan.</p>
                    
                    <h2>Better Light Spread for Healthy Crops</h2>
                    <p>Even light exposure helps plants grow strong. The plastic light diffuser sheet prevents shadows. Every plant gets the sunlight it needs. Diffused light reduces plant stress. No hot spots mean no burning. Photosynthesis stays steady for better yields. Healthy crops thrive under balanced lighting. Light reaches all leaves evenly. No dark areas slow plant growth. More exposure leads to stronger stems.</p>
                    
                    <h2>Strong Heat Retention for Stable Temperatures</h2>
                    <p>A steady climate keeps plants healthy. Our film holds heat overnight. Infrared additives prevent warmth from escaping. Less heat loss lowers energy costs. Controlled temperatures reduce plant stress. Cold shocks won't harm your crops. A warm greenhouse means steady growth. Stable warmth helps roots develop faster. No sudden chills slow plant growth. The heat stays inside for better efficiency.</p>
                    
                    <h2>Product Features</h2>
                    <ul>
                      <li>IR = INFRARED, AC = ANTI-DRIP / CONDENSATION</li>
                      <li>INCLUDES INFRARED & ANTI-DRIP ADDITIVES</li>
                      <li>6 MIL THICKNESS</li>
                      <li>AVAILABLE 12' WIDE TO 60' WIDE</li>
                      <li>CUT-TO-LENGTH PER CUSTOMER REQUIREMENT</li>
                      <li>55% LIGHT DIFFUSION</li>
                      <li>DESIGN TO HOLD HEAT</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <h2>Clear Greenhouse Plastic for Maximum Sunlight</h2>
                    <p>Clear Plastic for Greenhouse allows 90% of sunlight to reach plants, creating the perfect growing environment. This ensures crops receive the necessary light for stronger stems, healthier leaves, and faster growth. The 6 mil thickness provides flexibility without compromising durability. Unlike dark covers, this film maximizes brightness inside the greenhouse. With only 25% light diffusion, sunlight reaches every plant efficiently, reducing shaded areas and uneven growth.</p>
                    <h2>Maximum Light Exposure for Stronger Growth</h2>
                    <p>Sunlight plays a key role in plant growth. This cover lets in 90% of sunlight. Each plant gets full-spectrum light for better development. Strong light boosts photosynthesis. Faster growth leads to higher yields. Unlike diffused films, this cover prevents light loss. It suits plants that need intense, direct sunlight. A bright greenhouse supports steady growth. Stronger plants mean better productivity. Healthy crops grow in a well-lit space.</p>
                    <h2>Tough 6 Mil Thickness for Long-Lasting Use</h2>
                    <p>A 6 mil greenhouse plastic shields plants from wind, rain, and heat. It resists tearing and punctures for long-term use. The strong material prevents daily wear. This cover stays flexible but tough. Installation is quick and simple. Weather-resistant plastic lasts longer. Fewer replacements save time and money. A strong cover keeps plants safe in all seasons.</p>
                    <h2>Direct Sunlight with Low Light Diffusion</h2>
                    <p>Low light diffusion ensures focused sunlight reaches plants directly, making it ideal for crops that need intense light exposure without unnecessary scattering. Unlike diffused covers, light diffuser plastic prevents energy waste, improving overall greenhouse efficiency. Sunlight penetrates deep into plant canopies, promoting better leaf development and higher yields. Controlled light exposure minimizes plant stress, creating an ideal environment for healthy, steady growth throughout the seasons.</p>
                    <h2>Custom Cut-to-Length for a Perfect Fit</h2>
                    <p>This greenhouse plastic comes in widths from 12 to 60 feet. It fits greenhouses of all sizes. Custom sizing reduces waste and avoids extra trimming. A snug fit prevents heat loss and blocks wind. It keeps temperatures steady in all seasons. Precise sizing makes installation quick and easy. Better insulation improves climate control. Long-term energy efficiency saves costs. A well-fitted cover creates the best growing conditions.</p>
                    <h2>Creates the Best Environment for Plants</h2>
                    <p>Even light spread eliminates hot spots and shaded areas, keeping plant growth uniform and consistent. Unlike dark covers, this film helps maintain a stable greenhouse temperature, preventing sudden changes that could harm plants. A well-regulated environment supports stronger root systems and healthier foliage. Controlled light and temperature levels reduce plant stress, ensuring optimal growth conditions. With a balanced and well-lit environment, crops thrive throughout the seasons.</p>
                    <h2>Upgrade Your Greenhouse with Clear Plastic Film</h2>
                    <ul>
                      <li>HIGH LIGHT TRANSMITTANCE (90%)</li>
                      <li>LOW LIGHT DIFFUSION (25%)</li>
                      <li>6 MIL THICKNESS</li>
                      <li>AVAILABLE 12′ WIDE TO 60′ WIDE</li>
                      <li>CUT-TO-LENGTH PER CUSTOMER REQUIREMENT</li>
                    </ul>
                  </>
                )}
              </div>
            )}
            {activeTab === 'additional' && (
              <div className="prose max-w-none">
                <h3>Additional Information</h3>
                <table className="min-w-full text-sm border rounded">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-semibold">Thickness</td>
                      <td className="py-2 px-4">6 Mil</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-semibold">Width</td>
                      <td className="py-2 px-4">{getWidthOptions(params.slug as string).join(', ')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="prose max-w-none">
                <h3>Reviews</h3>
                <p>There are no reviews yet.</p>
                <p className="text-gray-500 text-sm">Be the first to review "6 Mil CLEAR GREENHOUSE PLASTIC LIGHT DIFFUSION (25%) & HIGH LIGHT TRANSMITTANCE"</p>
                <form className="mt-4 space-y-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Your rating *</label>
                    <select className="border rounded px-2 py-1">
                      <option>Perfect</option>
                      <option>Good</option>
                      <option>Average</option>
                      <option>Not that bad</option>
                      <option>Very poor</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Your review *</label>
                    <textarea className="w-full border rounded px-2 py-1" rows={3}></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name *</label>
                    <input className="w-full border rounded px-2 py-1" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email *</label>
                    <input className="w-full border rounded px-2 py-1" />
                  </div>
                  <button type="button" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Submit</button>
                </form>
              </div>
            )}
          </div>

          {/* Related Products */}
          <div className="mt-12">
            <RelatedProducts />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage; 