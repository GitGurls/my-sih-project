import React from "react";

export function Switch({ checked, onChange }) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <span className="mr-2 text-sm">Off</span>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      <div className="w-11 h-6 bg-gray-300 rounded-full shadow-inner relative transition-colors duration-300 ease-in-out">
        <div
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
            checked ? "translate-x-5" : ""
          }`}
        />
      </div>
      <span className="ml-2 text-sm">On</span>
    </label>
  );
}
