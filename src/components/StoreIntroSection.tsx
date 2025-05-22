'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function StoreIntroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative -mt-24 mb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-white rounded-2xl shadow-2xl p-6 md:p-8 transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-3xl ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">
              Greenhouse Film Store – Protect & Grow with Confidence
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Our greenhouse film protects plants from direct sunlight and harsh weather. They also protect plants against pests and UV damage. Our products are made from heavy duty greenhouse plastic to last longer in tough weather conditions. They provide the right balance of light, insulation, and durability. You can always expect to get clear greenhouse plastic for maximum light or white greenhouse plastic for diffused lighting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 