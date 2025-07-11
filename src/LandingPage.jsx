import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { Link } from "react-router-dom";
import { Satellite, Map, Settings, Users, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <div className="text-center py-28 px-6 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"
        >
          Smart Simulations for Safer Missions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6"
        >
          Real-time telemetry, scenario management, asset tracking & mission planning — all in one collaborative platform.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <Link to="/simulate">
            <Button className="text-lg px-6 py-3 bg-blue-600 hover:bg-blue-700">
              🚀 Launch Simulation
            </Button>
          </Link>
          <Link to="/map">
            <Button variant="outline" className="text-lg px-6 py-3 border-gray-400">
              🛰️ View Map
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="px-6 md:px-20 py-16 grid md:grid-cols-3 gap-8">
        {[
          { icon: <Map />, title: "Live Map Rendering", desc: "Visualize units in real-time with telemetry overlays." },
          { icon: <Settings />, title: "Scenario Manager", desc: "Save, clone & compare mission plans dynamically." },
          { icon: <Users />, title: "Collaboration", desc: "Plan with your team using shared simulations." },
          { icon: <Satellite />, title: "Telemetry Input", desc: "Feed from live sources like ADS-B or OpenSky." },
          { icon: <ShieldCheck />, title: "Secure Offline Mode", desc: "Operate even without internet in disaster zones." },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform"
          >
            <div className="flex items-center gap-3 mb-3 text-cyan-300">
              {feature.icon}
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
            <p className="text-gray-300 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 py-10 text-sm border-t border-gray-700">
        Made with 💻 for Smart India Hackathon 2025
      </div>
    </div>
  );
}
