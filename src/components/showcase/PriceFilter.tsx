import React, { useCallback, useEffect, useState, useRef } from 'react';

interface PriceFilterProps {
  min: number;
  max: number;
  onChange: (min: number, max: number) => void;
  initialMin?: number;
  initialMax?: number;
  currencySymbol?: string;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  min,
  max,
  onChange,
  initialMin,
  initialMax,
  currencySymbol = '$',
}) => {
  const [minVal, setMinVal] = useState(initialMin ?? min);
  const [maxVal, setMaxVal] = useState(initialMax ?? max);
  const minValRef = useRef(minVal);
  const maxValRef = useRef(maxVal);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Notify parent of changes with a debounce check or direct
  // Here we call it directly, parent can debounce if needed
  useEffect(() => {
    onChange(minVal, maxVal);
  }, [minVal, maxVal, onChange]);

  // Handle manual input changes
  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), min);
    // Prevent crossing maxVal
    const newVal = Math.min(value, maxVal - 1);
    setMinVal(newVal);
    minValRef.current = newVal;
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), max);
    // Prevent crossing minVal
    const newVal = Math.max(value, minVal + 1);
    setMaxVal(newVal);
    maxValRef.current = newVal;
  };

  return (
    <div className="w-full max-w-xs space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-gray-900">Price Range</h3>
      </div>

      {/* Dual Range Slider Visualization */}
      <div className="relative h-12 w-full flex items-center">
        {/* Hidden Inputs overlay */}
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          className="thumb thumb--left"
          style={{ zIndex: minVal > max - 100 ? 5 : 3 }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className="thumb thumb--right"
          style={{ zIndex: 4 }}
        />

        {/* Visual Track */}
        <div className="relative w-full">
          <div className="absolute h-1.5 w-full bg-gray-200 rounded-full pointer-events-none" />
          <div
            ref={range}
            className="absolute h-1.5 bg-indigo-600 rounded-full pointer-events-none"
          />
        </div>
      </div>

      {/* Manual Input Fields */}
      <div className="flex items-center justify-between space-x-4">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">{currencySymbol}</span>
          </div>
          <input
            type="number"
            value={minVal}
            onChange={handleMinInputChange}
            className="block w-full pl-7 pr-3 py-2 text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 border shadow-sm"
            placeholder="Min"
            min={min}
            max={max}
          />
        </div>

        <div className="text-gray-400 font-medium">-</div>

        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">{currencySymbol}</span>
          </div>
          <input
            type="number"
            value={maxVal}
            onChange={handleMaxInputChange}
            className="block w-full pl-7 pr-3 py-2 text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 border shadow-sm"
            placeholder="Max"
            min={min}
            max={max}
          />
        </div>
      </div>

      {/* 
        Required Styles for the Dual Range Slider logic.
        Note: We use a style tag here to encapsulate the browser-specific 
        pseudo-selectors required to make the thumbs clickable while keeping
        the input background transparent.
      */}
      <style>{`
        .thumb {
          pointer-events: none;
          position: absolute;
          height: 0;
          width: 100%;
          outline: none;
          -webkit-appearance: none;
        }

        /* Webkit handles */
        .thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          pointer-events: all;
          width: 18px;
          height: 18px;
          background-color: white;
          border-radius: 50%;
          box-shadow: 0 0 0 1px #e5e7eb, 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          cursor: grab;
          margin-top: 1.5px; /* Adjust for vertical alignment relative to track */
        }
        .thumb::-webkit-slider-thumb:hover {
          background-color: #f9fafb;
        }

        /* Firefox handles */
        .thumb::-moz-range-thumb {
          pointer-events: all;
          width: 18px;
          height: 18px;
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          cursor: grab;
        }
        .thumb::-moz-range-thumb:hover {
          background-color: #f9fafb;
        }
      `}</style>
    </div>
  );
};

export default PriceFilter;
