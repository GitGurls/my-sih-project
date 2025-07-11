import React from "react";
import classNames from "classnames";

export function Badge({ children, variant = "default", className = "" }) {
  const baseStyles = "px-2 py-0.5 text-xs font-medium rounded-full";
  const variants = {
    default: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white",
    secondary: "bg-green-100 text-green-700 dark:bg-green-700 dark:text-white",
    warning: "bg-yellow-200 text-yellow-800",
  };

  return (
    <span className={classNames(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
}
