// slider.jsx
import * as React from "react";

export function Slider({ min = 0, max = 100, step = 1, value, onChange }) {
  return (
    <input
      type="range"
      className="w-full accent-blue-600"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange?.(parseFloat(e.target.value))}
    />
  );
}
