'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ProductIntroSection() {
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
              Find The Best Greenhouse Film for Your Setup
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              The Best Greenhouse Plastic prevents sudden temperature shifts. It stops frost damage in winter and heat stress in summer. 
              Long-lasting plastic ensures crops grow in a safe space. Choose the best film for your growing needs. 
              Options include clear, diffused, insulated, and light-blocking plastics. Each type supports plant health and maximizes growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 