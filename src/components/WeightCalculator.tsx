'use client';

import { useState, useEffect } from 'react';

// Product type constants
export const PRODUCT_TYPES = {
  clear: 'clear',
  irac: 'irac',
  diffused: 'diffused',
  'light-deprivation': 'light-deprivation',
  'over-winter': 'over-winter',
  'hoop-house': 'hoop-house'
} as const;

export type BaseFormula = {
  costPerSqft: number;
  pricePerSqft: number;
  weightPerSqft: number;
};

export type OverWinterFormula = {
  '5 Mil': BaseFormula;
};

type ProductFormula = BaseFormula | OverWinterFormula;

export const PRODUCT_FORMULAS: Record<keyof typeof PRODUCT_TYPES, ProductFormula> = {
  'clear': {
    costPerSqft: 0.0477,
    pricePerSqft: 0.0954,
    weightPerSqft: 0.02982
  },
  'irac': {
    costPerSqft: 0.05588,
    pricePerSqft: 0.10617,
    weightPerSqft: 0.02982
  },
  'diffused': {
    costPerSqft: 0.0477,
    pricePerSqft: 0.0954,
    weightPerSqft: 0.02982
  },
  'light-deprivation': {
    costPerSqft: 0.04979,
    pricePerSqft: 0.09958,
    weightPerSqft: 0.02982
  },
  'over-winter': {
    '5 Mil': {
      costPerSqft: 0.03889,
      pricePerSqft: 0.07778,
      weightPerSqft: 0.01988
    }
  },
  'hoop-house': {
    costPerSqft: 0.04063,
    pricePerSqft: 0.08126,
    weightPerSqft: 0.02982
  }
};

interface WeightCalculatorProps {
  defaultLength: number;
  quantity: number;
  width: string;
  productType: keyof typeof PRODUCT_TYPES;
  selectedThickness?: string;
  onWeightChange: (weight: number) => void;
  onPriceChange: (price: number) => void;
  onLengthChange: (length: number) => void;
}

export default function WeightCalculator({ 
  defaultLength, 
  quantity, 
  width,
  productType,
  selectedThickness,
  onWeightChange, 
  onPriceChange,
  onLengthChange 
}: WeightCalculatorProps) {
  // Ensure defaultLength is a multiple of 5, minimum 5
  const [length, setLength] = useState(Math.max(5, Math.ceil(defaultLength / 5) * 5));

  const calculate = (length: number, qty: number, widthStr: string) => {
    // Ensure length is a multiple of 5
    const adjustedLength = Math.max(5, Math.ceil(length / 5) * 5);
    
    // Convert width from feet to number (removing the ' Wide' suffix)
    const width = Number(widthStr.replace("' Wide", ""));
    
    // Calculate area in square feet
    const area = width * adjustedLength;
    
    // Get the formula for the specific product type
    const formula = PRODUCT_FORMULAS[productType];
    
    // Validate formula exists
    if (!formula) {
      console.error(`No formula found for product type: ${productType}`);
      onWeightChange(0);
      onPriceChange(0);
      onLengthChange(adjustedLength);
      return;
    }

    // Handle over winter plastic which has different formulas per thickness
    let costPerSqft, pricePerSqft, weightPerSqft;
    if (productType === 'over-winter' && selectedThickness) {
      const thicknessFormula = (formula as OverWinterFormula)[selectedThickness as keyof OverWinterFormula];
      if (!thicknessFormula) {
        console.error(`No formula found for thickness: ${selectedThickness}`);
        onWeightChange(0);
        onPriceChange(0);
        onLengthChange(adjustedLength);
        return;
      }
      costPerSqft = thicknessFormula.costPerSqft;
      pricePerSqft = thicknessFormula.pricePerSqft;
      weightPerSqft = thicknessFormula.weightPerSqft;
    } else {
      const baseFormula = formula as BaseFormula;
      costPerSqft = baseFormula.costPerSqft;
      pricePerSqft = baseFormula.pricePerSqft;
      weightPerSqft = baseFormula.weightPerSqft;
    }
    
    // Calculate values
    const cost = area * costPerSqft;
    const price = area * pricePerSqft * qty;
    const weight = area * weightPerSqft * qty;
    
    onWeightChange(weight);
    onPriceChange(price);
    onLengthChange(adjustedLength);
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(e.target.value);
    // Round up to nearest multiple of 5, minimum 5
    const newLength = Math.max(5, Math.ceil(inputValue / 5) * 5);
    setLength(newLength);
    calculate(newLength, quantity, width);
  };

  // Recalculate when quantity or width changes
  useEffect(() => {
    calculate(length, quantity, width);
  }, [quantity, width, productType, selectedThickness]);

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
        min="5"
        step="5"
      />
    </div>
  );
} 