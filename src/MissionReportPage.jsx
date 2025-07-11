import React from "react";
import { Card, CardContent } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Download, Share2, Repeat, Timer, Users, Database, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const missionStats = [
  { icon: <Timer className="text-blue-600" />, label: "Duration", value: "1h 25m" },
  { icon: <Users className="text-green-600" />, label: "Units Deployed", value: 5 },
  { icon: <Database className="text-yellow-600" />, label: "Data Collected", value: "2.4GB" },
  { icon: <Gauge className="text-purple-600" />, label: "Mission Score", value: "89%" },
];

const missionOutcome = [
  { name: "Success", value: 80, color: "#22c55e" },
  { name: "Failure", value: 20, color: "#ef4444" },
];

export default function MissionReportPage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Mission Report</h2>
            <p className="text-muted-foreground">
              Operation Falcon • <span className="text-green-600 font-medium">Success</span>
            </p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => console.log("Export PDF")}
              className="px-4 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-90 transition"
            >
              <Download className="mr-2 h-4 w-4 inline-block" /> Export PDF
            </button>
            <button
              onClick={() => console.log("Share Report")}
              className="px-4 py-2 rounded-xl font-semibold border border-indigo-300 bg-white text-indigo-600 hover:bg-indigo-50 transition"
            >
              <Share2 className="mr-2 h-4 w-4 inline-block" /> Share
            </button>
          </div>
        </div>

        {/* Metrics Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {missionStats.map((stat, idx) => (
            <Card key={idx} className="rounded-2xl shadow hover:shadow-lg transition-all">
              <CardContent className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  {stat.icon} {stat.label}
                </div>
                <div className="text-2xl font-semibold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Outcome Chart */}
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6">
            <Label className="text-base font-medium mb-4 block">Outcome Analysis</Label>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={missionOutcome} dataKey="value" nameKey="name" outerRadius={80} label>
                  {missionOutcome.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Timeline Placeholder */}
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 space-y-4">
            <Label className="text-base font-medium">Mission Timeline</Label>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>08:00 AM – Units Deployed</li>
              <li>08:15 AM – Data Stream Initialized</li>
              <li>09:00 AM – Objective Reached</li>
              <li>09:25 AM – Mission Complete</li>
            </ul>
          </CardContent>
        </Card>

        {/* Rerun Button */}
        <div className="pt-4">
          <button
            onClick={() => console.log("Rerun Simulation")}
            className="px-5 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition"
          >
            <Repeat className="mr-2 h-4 w-4 inline-block" /> Re-run Simulation
          </button>
        </div>
      </motion.div>
    </div>
  );
}
