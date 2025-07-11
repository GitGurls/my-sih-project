import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DataVisualizationPanel = ({ data }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        📊 Data Visualization Panel
      </h2>

      {/* Altitude vs Time */}
      <div className="mb-8 bg-white rounded-xl shadow p-4">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">
          Altitude vs Time
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="altitude" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Speed vs Time */}
      <div className="mb-8 bg-white rounded-xl shadow p-4">
        <h3 className="text-xl font-semibold text-green-600 mb-2">
          Speed vs Time
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="speed" stroke="#82ca9d" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Heading vs Time */}
      <div className="mb-8 bg-white rounded-xl shadow p-4">
        <h3 className="text-xl font-semibold text-red-600 mb-2">
          Heading vs Time
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="heading" stroke="#ff6b6b" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DataVisualizationPanel;
