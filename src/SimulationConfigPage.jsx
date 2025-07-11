
import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Slider } from "@/Components/ui/slider";
import { Switch } from "@/Components/ui/switch";
import { Sliders, Rocket, RotateCcw } from "lucide-react";

export default function SimulationConfigPage() {
  const [windSpeed, setWindSpeed] = useState(20);
  const [fuelLevel, setFuelLevel] = useState(70);
  const [descentRate, setDescentRate] = useState(50);
  const [useBayesian, setUseBayesian] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-white to-blue-50">
      <div className="w-full p-6">
        <h1 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <Sliders className="text-blue-600" />
          Simulation Configuration
        </h1>

        <div className="bg-white/30 backdrop-blur-md shadow-2xl max-w-2xl mx-auto p-8 rounded-2xl border border-gray-300">
          <div className="mb-6">
            <label className="text-blue-700 font-semibold mb-2 block">
              🌬️ Wind Speed: {windSpeed} km/h
            </label>
            <Slider
              min={0}
              max={100}
              value={[windSpeed]}
              onValueChange={([v]) => setWindSpeed(v)}
              className="accent-blue-600 hover:accent-cyan-400"
            />
          </div>

          <div className="mb-6">
            <label className="text-green-700 font-semibold mb-2 block">
              🛢️ Fuel Level: {fuelLevel}%
            </label>
            <Slider
              min={0}
              max={100}
              value={[fuelLevel]}
              onValueChange={([v]) => setFuelLevel(v)}
              className="accent-green-600 hover:accent-lime-400"
            />
          </div>

          <div className="mb-6">
            <label className="text-red-600 font-semibold mb-2 block">
              ⬇️ Descent Rate: {descentRate} m/min
            </label>
            <Slider
              min={0}
              max={100}
              value={[descentRate]}
              onValueChange={([v]) => setDescentRate(v)}
              className="accent-red-500 hover:accent-pink-400"
            />
          </div>

          <div className="flex items-center justify-between mb-8">
            <span className="text-gray-700 font-medium text-sm">
              Use Bayesian Model
              <span
                title="Statistical model to improve accuracy"
                className="ml-1 cursor-help text-blue-500"
              >
                ℹ️
              </span>
            </span>
            <Switch
              checked={useBayesian}
              onCheckedChange={() => setUseBayesian(!useBayesian)}
            />
          </div>

          <div className="flex justify-center gap-4">
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all"
              onClick={() => console.log("Run Simulation")}
            >
              <Rocket className="mr-2" /> Run Simulation
            </Button>

            <Button
              variant="outline"
              className="text-blue-600 border border-blue-400 px-6 py-2 rounded-xl font-semibold hover:bg-blue-50 transition-all"
              onClick={() => console.log("Reset Simulation")}
            >
              <RotateCcw className="mr-2" /> Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
