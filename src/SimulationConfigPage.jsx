

import React, { useState } from "react";
import { Card, CardContent } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Switch } from "@/Components/ui/switch";
import { Slider } from "@/Components/ui/slider";
import { Settings2, Wind, Fuel, ArrowDownUp } from "lucide-react";
import { Label } from "@/Components/ui/label";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function SimulationConfigPage() {
  const [windSpeed, setWindSpeed] = useState(20);
  const [fuelLevel, setFuelLevel] = useState(70);
  const [descentRate, setDescentRate] = useState(50);
  const [useBayesian, setUseBayesian] = useState(false);

  const handleReset = () => {
    setWindSpeed(20);
    setFuelLevel(70);
    setDescentRate(50);
    setUseBayesian(false);
    toast.success("Simulation settings have been reset.");
  };

  const handleRun = () => {
    const config = {
      windSpeed,
      fuelLevel,
      descentRate,
      useBayesian,
    };

    // Store to localStorage or log it
    localStorage.setItem("simulationConfig", JSON.stringify(config));

    toast.success("Simulation started with current configuration!");
    console.log("Running simulation with config:", config);
  };

  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold flex items-center gap-2 mb-6">
          <Settings2 className="text-blue-600" /> Simulation Configuration
        </h2>

        <Card className="rounded-2xl shadow-md backdrop-blur bg-white/60 dark:bg-gray-900/40">
          <CardContent className="space-y-6 p-6">
            {/* Wind Speed */}
            <div>
              <Label className="flex items-center gap-2 font-medium">
                <Wind className="w-4 h-4 text-blue-500" /> Wind Speed: {windSpeed} km/h
              </Label>
              <Slider
                value={[windSpeed]}
                onValueChange={([v]) => setWindSpeed(v)}
                max={100}
                step={1}
              />
            </div>

            {/* Fuel Level */}
            <div>
              <Label className="flex items-center gap-2 font-medium">
                <Fuel className="w-4 h-4 text-green-500" /> Fuel Level: {fuelLevel}%
              </Label>
              <Slider
                value={[fuelLevel]}
                onValueChange={([v]) => setFuelLevel(v)}
                max={100}
                step={1}
              />
            </div>

            {/* Descent Rate */}
            <div>
              <Label className="flex items-center gap-2 font-medium">
                <ArrowDownUp className="w-4 h-4 text-red-500" /> Descent Rate: {descentRate} m/min
              </Label>
              <Slider
                value={[descentRate]}
                onValueChange={([v]) => setDescentRate(v)}
                max={100}
                step={1}
              />
            </div>

            {/* Bayesian Toggle */}
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Use Bayesian Model</Label>
              <Switch checked={useBayesian} onCheckedChange={setUseBayesian} />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={handleRun}
              >
                🚀 Run Simulation
              </Button>
              <Button variant="outline" onClick={handleReset}>
                🔁 Reset
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
