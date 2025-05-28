'use client';

import { useState, useEffect } from 'react';

interface WeightCalculatorProps {
  defaultLength: number;
  quantity: number;
  width: string;
  onWeightChange: (weight: number) => void;
  onPriceChange: (price: number) => void;
  onLengthChange: (length: number) => void;
}

export default function WeightCalculator({ 
  defaultLength, 
  quantity, 
  width,
  onWeightChange, 
  onPriceChange,
  onLengthChange 
}: WeightCalculatorProps) {
  const [length, setLength] = useState(defaultLength);

  const calculate = (length: number, qty: number, widthStr: string) => {
    // Convert width from feet to number (removing the ' Wide' suffix)
    const width = Number(widthStr.replace("' Wide", ""));
    
    // Calculate area in square feet
    const area = width * length;
    
    // Constants for all widths
    const costPerSqft = 0.05588;
    const pricePerSqft = 0.10617;
    const weightPerSqft = 0.02982;
    
    // Calculate values
    const cost = area * costPerSqft;
    const price = area * pricePerSqft * qty;
    const weight = area * weightPerSqft * qty;
    
    onWeightChange(weight);
    onPriceChange(price);
    onLengthChange(length);
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLength = Number(e.target.value);
    setLength(newLength);
    calculate(newLength, quantity, width);
  };

  // Recalculate when quantity or width changes
  useEffect(() => {
    calculate(length, quantity, width);
  }, [quantity, width]);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Length (feet)
      </label>
      <input
        type="number"
        value={length}
        onChange={handleLengthChange}
        className="w-full border border-gray-300 rounded-md p-2"
        min="1"
      />
    </div>
  );
} 