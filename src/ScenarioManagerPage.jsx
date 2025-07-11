
import React, { useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";

const mockScenarios = [
  {
    id: 1,
    status: "completed",
    date: "2025-07-02",
  },
  {
    id: 2,
    status: "in progress",
    date: "2025-07-01",
  },
  {
    id: 3,
    status: "completed",
    date: "2025-06-28",
  },
];

const ScenarioManagerPage = () => {
  const [filter, setFilter] = useState("All");
  const [scenarios, setScenarios] = useState(mockScenarios);

  const filteredScenarios =
    filter === "All"
      ? scenarios
      : scenarios.filter((s) =>
          filter === "Completed"
            ? s.status === "completed"
            : s.status === "in progress"
        );

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800 text-white px-6 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">📂 Scenario Manager</h1>

      {/* Filter Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        {["All", "Completed", "In Progress"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              filter === tab
                ? "bg-white text-indigo-700 shadow-md"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Scenario Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScenarios.map((scenario) => (
          <div
            key={scenario.id}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/20 transition hover:scale-[1.02]"
          >
            <p className="mb-4 text-white text-sm opacity-80">
              Status: {scenario.status} — {scenario.date}
            </p>
            <div className="flex justify-between">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm shadow">
                ✅ Load
              </Button>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm shadow">
                🗑️ Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScenarioManagerPage;
