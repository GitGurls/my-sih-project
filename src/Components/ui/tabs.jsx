// src/Components/ui/tabs.jsx
import React from "react";

export function Tabs({ children }) {
  return (
    <div className="w-full flex flex-col gap-4">
      {children}
    </div>
  );
}

export function TabsList({ children }) {
  return (
    <div className="flex gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-md">
      {children}
    </div>
  );
}

export function TabsTrigger({ children, value, current, onClick }) {
  const isActive = value === current;
  return (
    <button
      onClick={() => onClick(value)}
      className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
        isActive
          ? "bg-blue-600 text-white"
          : "hover:bg-gray-200 dark:hover:bg-gray-700"
      }`}
    >
      {children}
    </button>
  );
}
