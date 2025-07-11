
import React from "react";

export function Avatar({ src, alt, className = "", ...props }) {
  return (
    <img
      src={src}
      alt={alt || "Avatar"}
      className={`h-10 w-10 rounded-full object-cover ${className}`}
      {...props}
    />
  );
}

export function AvatarFallback({ name = "?" }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center text-sm font-semibold text-white">
      {initials}
    </div>
  );
}
