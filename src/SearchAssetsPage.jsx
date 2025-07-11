
import React, { useState } from "react";
import { Card, CardContent } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Plus, Search, Drone, Ship, Plane } from "lucide-react";
import { motion } from "framer-motion";

export default function SearchAssetsPage() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("eta");

  const [assets, setAssets] = useState([
    { id: 1, name: "Drone A1", type: "drone", fuel: 60, eta: 5 },
    { id: 2, name: "Heli X", type: "helicopter", fuel: 80, eta: 12 },
    { id: 3, name: "Boat B3", type: "boat", fuel: 45, eta: 18 },
    { id: 4, name: "Drone Z2", type: "drone", fuel: 90, eta: 4 },
  ]);

  const filtered = assets
    .filter((asset) =>
      asset.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterType === "all" || asset.type === filterType)
    )
    .sort((a, b) => (sortBy === "eta" ? a.eta - b.eta : b.fuel - a.fuel));

  const renderIcon = (type) => {
    if (type === "drone") return <Drone className="text-blue-500" />;
    if (type === "boat") return <Ship className="text-teal-500" />;
    if (type === "helicopter") return <Plane className="text-orange-500" />;
  };

  return (
    <div className="min-h-screen px-4 py-8 md:px-10 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h2 className="text-3xl font-bold text-white drop-shadow">
            Search & Manage Assets
          </h2>
          <Button
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 shadow-lg"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Unit
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input
            placeholder="Search by name or type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:max-w-sm text-black"
          />

          <div className="flex items-center gap-2">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border rounded-lg px-3 py-2 bg-white text-black"
            >
              <option value="all">All Types</option>
              <option value="drone">Drone</option>
              <option value="boat">Boat</option>
              <option value="helicopter">Helicopter</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-3 py-2 bg-white text-black"
            >
              <option value="eta">Sort by ETA</option>
              <option value="fuel">Sort by Fuel</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((asset) => (
            <motion.div
              key={asset.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="rounded-2xl bg-white/10 backdrop-blur-md text-white shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{asset.name}</h3>
                    {renderIcon(asset.type)}
                  </div>
                  <p className="text-sm text-gray-200">Type: {asset.type}</p>
                  <p className="text-sm text-gray-200">Fuel: {asset.fuel}%</p>
                  <p className="text-sm text-gray-200">ETA: {asset.eta} min</p>
                  <Button
                    variant="default"
                    className="w-full bg-gradient-to-r from-green-400 to-cyan-500 text-white"
                  >
                    Preview Route
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
