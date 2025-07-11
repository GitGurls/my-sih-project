
import React, { useState } from "react";
import { Card, CardContent } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { motion } from "framer-motion";
import {
  CopyPlus,
  Edit2,
  Trash,
  Share2,
  FileDown,
  Loader2,
  Shuffle,
} from "lucide-react";

const sampleScenarios = [
  {
    id: 1,
    name: "Bayesian Search Alpha",
    status: "completed",
    date: "2025-07-02",
  },
  {
    id: 2,
    name: "SAR Simulation - Coastal",
    status: "in-progress",
    date: "2025-07-01",
  },
  {
    id: 3,
    name: "Night Ops Heli Run",
    status: "completed",
    date: "2025-06-28",
  },
];

export default function ScenarioManagerPage() {
  const [scenarios, setScenarios] = useState(sampleScenarios);
  const [filter, setFilter] = useState("all");
  const [compare, setCompare] = useState([]);

  const filteredScenarios =
    filter === "all"
      ? scenarios
      : scenarios.filter((s) => s.status === filter);

  const toggleCompare = (id) => {
    setCompare((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleAction = (type, scenario) => {
    console.log(`${type} ->`, scenario);
  };

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white min-h-screen rounded-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold">Scenario Manager</h2>
          {compare.length === 2 && (
            <button
              onClick={() => handleAction("Compare", compare)}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2"
            >
              <Shuffle className="w-4 h-4" /> Compare Selected
            </button>
          )}
        </div>

        <Tabs defaultValue="all" className="mb-6">
          <TabsList className="bg-white/10 backdrop-blur-sm p-1 rounded-lg">
            <TabsTrigger value="all" onClick={() => setFilter("all")}>
              All
            </TabsTrigger>
            <TabsTrigger value="completed" onClick={() => setFilter("completed")}>
              Completed
            </TabsTrigger>
            <TabsTrigger value="in-progress" onClick={() => setFilter("in-progress")}>
              In Progress
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScenarios.map((scenario) => (
            <motion.div
              key={scenario.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                className={`rounded-2xl shadow-md hover:shadow-xl transition-all border-2 ${
                  compare.includes(scenario.id)
                    ? "border-blue-400"
                    : "border-transparent"
                }`}
                onClick={() => toggleCompare(scenario.id)}
              >
                <CardContent className="p-5 space-y-2 bg-white/5 backdrop-blur rounded-2xl">
                  <h3 className="text-lg font-semibold truncate text-white">
                    {scenario.name}
                  </h3>
                  <p className="text-sm text-gray-300">
                    Status: {scenario.status} — {scenario.date}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-3">
                    <button
                      onClick={() => handleAction("Load", scenario)}
                      className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-2 rounded-md flex items-center justify-center gap-1"
                    >
                      <Loader2 className="w-4 h-4" /> Load
                    </button>
                    <button
                      onClick={() => handleAction("Rename", scenario)}
                      className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-md flex items-center justify-center gap-1"
                    >
                      <Edit2 className="w-4 h-4" /> Rename
                    </button>
                    <button
                      onClick={() => handleAction("Clone", scenario)}
                      className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-md flex items-center justify-center gap-1"
                    >
                      <CopyPlus className="w-4 h-4" /> Clone
                    </button>
                    <button
                      onClick={() => handleAction("Delete", scenario)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md flex items-center justify-center gap-1"
                    >
                      <Trash className="w-4 h-4" /> Delete
                    </button>
                    <button
                      onClick={() => handleAction("Export JSON", scenario)}
                      className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-md flex items-center justify-center gap-1"
                    >
                      <FileDown className="w-4 h-4" /> JSON
                    </button>
                    <button
                      onClick={() => handleAction("Share Link", scenario)}
                      className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-md flex items-center justify-center gap-1"
                    >
                      <Share2 className="w-4 h-4" /> Share
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
