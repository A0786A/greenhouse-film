'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { wooCommerceApi } from '@/config/woocommerce';
import Image from 'next/image';

// Helper function to format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

// US States array
const US_STATES = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' }
];

interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
}

interface ShippingMethod {
  id: string;
  title: string;
  cost: number;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [shippingMethods, setShippingMethods] = useState<ShippingMethod[]>([]);
  const [selectedShippingMethod, setSelectedShippingMethod] = useState<string>('');
  const [shippingCost, setShippingCost] = useState(0);
  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    postcode: '',
    country: 'US'
  });

  // Calculate shipping when address is complete
  useEffect(() => {
    const calculateShipping = async () => {
      if (!formData.address1 || !formData.city || !formData.state || !formData.postcode) {
        return;
      }

      try {
        // Create a shipping package for FreightClub
        const shippingPackage = {
          origin: {
            address: "800 W 16th St",
            city: "Long Beach",
            state: "CA",
            zip: "90813",
            country: "US"
          },
          destination: {
            address: formData.address1,
            city: formData.city,
            state: formData.state,
            zip: formData.postcode,
            country: "US"
          },
          packages: items.map(item => ({
            weight: item.weight,
            length: item.length,
            width: parseFloat(item.width),
            height: 0.1,
            quantity: item.quantity
          })),
          service_level: "CurbsideLiftGate",
          token: process.env.NEXT_PUBLIC_FREIGHTCLUB_TOKEN
        };

        console.log('FreightClub token:', process.env.NEXT_PUBLIC_FREIGHTCLUB_TOKEN);
        console.log('Sending shipping package to FreightClub:', JSON.stringify(shippingPackage, null, 2));

        // Get shipping rates from FreightClub API sandbox
        const response = await fetch('https://sandbox.freightclub.com/api/rating', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_FREIGHTCLUB_TOKEN}`,
            'Accept': 'application/json'
          },
          body: JSON.stringify(shippingPackage)
        });

        console.log('FreightClub API response status:', response.status);
        console.log('FreightClub API response headers:', response.headers);

        const data = await response.json();
        console.log('FreightClub API response data:', data);

        if (response.ok && data && data.rates) {
          const methods = data.rates.map((rate: any) => ({
            id: 'fc_shipping',
            title: 'FC Shipping',
            cost: parseFloat(rate.total_charge || '0')
          }));

          console.log('Processed shipping methods:', methods);
          setShippingMethods(methods);
          setSelectedShippingMethod('fc_shipping');
          setShippingCost(methods[0].cost);
        } else {
          console.warn('No shipping rates found in FreightClub response:', data);
          // Try to get a default rate based on weight
          const totalWeight = items.reduce((sum, item) => sum + (item.weight * item.quantity), 0);
          const defaultRate = totalWeight * 0.5; // $0.50 per pound as a fallback
          
          setShippingMethods([{
            id: 'fc_shipping',
            title: 'FC Shipping',
            cost: defaultRate
          }]);
          setSelectedShippingMethod('fc_shipping');
          setShippingCost(defaultRate);
        }
      } catch (error: any) {
        console.error('Error calculating shipping:', error);
        console.error('Error details:', {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
          headers: error.response?.headers
        });
        
        // Calculate a fallback rate based on weight
        const totalWeight = items.reduce((sum, item) => sum + (item.weight * item.quantity), 0);
        const fallbackRate = totalWeight * 0.5; // $0.50 per pound as a fallback
        
        setShippingMethods([{
          id: 'fc_shipping',
          title: 'FC Shipping',
          cost: fallbackRate
        }]);
        setSelectedShippingMethod('fc_shipping');
        setShippingCost(fallbackRate);
      }
    };

    calculateShipping();
  }, [formData.address1, formData.city, formData.state, formData.postcode, items]);

  // Calculate total weight for display
  const totalWeight = items.reduce((sum, item) => sum + (item.weight * item.quantity), 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleShippingMethodChange = (methodId: string) => {
    setSelectedShippingMethod(methodId);
    const method = shippingMethods.find(m => m.id === methodId);
    if (method) {
      setShippingCost(method.cost);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Create order in WooCommerce
      const orderData = {
        payment_method: 'bacs', // Bank transfer
        payment_method_title: 'Direct Bank Transfer',
        set_paid: false,
        billing: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          address_1: formData.address1,
          address_2: formData.address2,
          city: formData.city,
          state: formData.state,
          postcode: formData.postcode,
          country: formData.country,
          email: formData.email,
          phone: formData.phone
        },
        shipping: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          address_1: formData.address1,
          address_2: formData.address2,
          city: formData.city,
          state: formData.state,
          postcode: formData.postcode,
          country: formData.country
        },
        line_items: items.map(item => ({
          product_id: parseInt(item.id),
          quantity: item.quantity,
          meta_data: [
            {
              key: 'width',
              value: item.width
            },
            {
              key: 'thickness',
              value: item.thickness
            },
            {
              key: 'length',
              value: item.length
            }
          ]
        })),
        shipping_lines: [
          {
            method_id: selectedShippingMethod,
            method_title: shippingMethods.find(m => m.id === selectedShippingMethod)?.title || 'Shipping',
            total: shippingCost.toString()
          }
        ]
      };

      const response = await wooCommerceApi.post('orders', orderData);

      if (response.status === 201) {
        // Clear cart and redirect to success page
        clearCart();
        router.push(`/checkout/success?order_id=${response.data.id}`);
      } else {
        throw new Error('Failed to create order');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error processing your order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some products to your cart before checking out.</p>
            <button
              onClick={() => router.push('/store')}
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Billing Details</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Shipping Address</h2>
                  <div className="mt-4">
                    <label htmlFor="address1" className="block text-sm font-medium text-gray-700">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      id="address1"
                      name="address1"
                      required
                      value={formData.address1}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="address2" className="block text-sm font-medium text-gray-700">
                      Apartment, suite, unit, etc. (optional)
                    </label>
                    <input
                      type="text"
                      id="address2"
                      name="address2"
                      value={formData.address2}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        Town / City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        State *
                      </label>
                      <select
                        id="state"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      >
                        <option value="">Select a state</option>
                        {US_STATES.map((state) => (
                          <option key={state.value} value={state.value}>
                            {state.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="postcode" className="block text-sm font-medium text-gray-700">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      id="postcode"
                      name="postcode"
                      required
                      value={formData.postcode}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Your Order</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} ({item.width}, {item.thickness}, {item.length}ft) x {item.quantity}
                    </span>
                    <span className="text-gray-900">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">{formatCurrency(total)}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-600">Total Weight</span>
                    <span className="text-gray-900">{totalWeight.toFixed(2)} lbs</span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Shipping Method</h3>
                    {shippingMethods.length > 0 ? (
                      <div className="space-y-2">
                        {shippingMethods.map((method) => (
                          <label key={method.id} className="flex items-center">
                            <input
                              type="radio"
                              name="shipping-method"
                              value={method.id}
                              checked={selectedShippingMethod === method.id}
                              onChange={() => handleShippingMethodChange(method.id)}
                              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                            />
                            <span className="ml-2 text-sm text-gray-900">
                              {method.title} - {formatCurrency(method.cost)}
                            </span>
                          </label>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">
                        {formData.address1 && formData.city && formData.state && formData.postcode
                          ? 'Calculating shipping...'
                          : 'Enter your address to calculate shipping'}
                      </p>
                    )}
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-medium text-gray-900">Total</span>
                      <span className="text-lg font-medium text-gray-900">
                        {formatCurrency(total + shippingCost)}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isProcessing || !selectedShippingMethod}
                  onClick={handleSubmit}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-400"
                >
                  {isProcessing ? 'Processing...' : 'Place Order'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 