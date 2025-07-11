
import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  SlidersHorizontal,
  MapPin,
  BarChart3,
  Settings,
  Rocket,
  Layers,
  Database
} from "lucide-react";
import { motion } from "framer-motion";

const tabs = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Telemetry", icon: SlidersHorizontal, path: "/telemetry" },
  { name: "Map View", icon: MapPin, path: "/map" },
  { name: "Charts", icon: BarChart3, path: "/chart" },
  { name: "Scenarios", icon: Layers, path: "/scenarios" },           
  { name: "Offline Manager", icon: Database, path: "/offline" },     
  { name: "Settings", icon: Settings, path: "/setting" },
];

const NavigationSidebar = () => {
  return (
    <div className="min-h-screen w-64 bg-gradient-to-b from-fuchsia-600 to-indigo-700 text-white shadow-xl rounded-r-3xl p-6">
      <div className="flex items-center gap-3 text-2xl font-bold mb-10">
        <Rocket className="text-yellow-300 animate-pulse" />
        <span>SIH Navigator</span>
      </div>

      <nav className="flex flex-col gap-4">
        {tabs.map(({ name, icon: Icon, path }) => (
          <NavLink
            to={path}
            key={name}
            className={({ isActive }) =>
              `group relative flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300 ease-in-out
               ${isActive ? "bg-white/20 text-yellow-200 shadow-md scale-[1.03]" : "hover:bg-white/10"}`
            }
          >
            <Icon className="w-5 h-5" />
            <span className="font-medium text-sm">{name}</span>
            {path === location.pathname && (
              <motion.div
                layoutId="activeTab"
                className="absolute left-0 top-0 w-full h-full rounded-xl bg-white/10 backdrop-blur-sm"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default NavigationSidebar;
