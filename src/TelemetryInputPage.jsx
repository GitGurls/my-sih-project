
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const TelemetryInputPage = () => {
  const [formData, setFormData] = useState({
    aircraftId: "",
    altitude: "",
    speed: "",
    heading: "",
    latitude: "",
    longitude: "",
    timestamp: "",
  });

  const [entries, setEntries] = useState([]);
  const [showTable, setShowTable] = useState(true);
  const [latestIndex, setLatestIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const tableEndRef = useRef(null);

  useEffect(() => {
    const storedData = localStorage.getItem("telemetryData");
    if (storedData) {
      setEntries(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (latestIndex !== null) {
      const timer = setTimeout(() => setLatestIndex(null), 1500);
      return () => clearTimeout(timer);
    }
  }, [latestIndex]);

  useEffect(() => {
    tableEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [entries]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.aircraftId) return;

    const updatedEntries = [...entries, formData];
    setEntries(updatedEntries);
    localStorage.setItem("telemetryData", JSON.stringify(updatedEntries));
    window.dispatchEvent(new Event("telemetryUpdated"));
    setLatestIndex(updatedEntries.length - 1);

    setFormData({
      aircraftId: "",
      altitude: "",
      speed: "",
      heading: "",
      latitude: "",
      longitude: "",
      timestamp: "",
    });
  };

  const handleDelete = (indexToDelete) => {
    const updated = entries.filter((_, idx) => idx !== indexToDelete);
    setEntries(updated);
    localStorage.setItem("telemetryData", JSON.stringify(updated));
    window.dispatchEvent(new Event("telemetryUpdated"));
  };

  const handleExport = () => {
    const jsonData = JSON.stringify(entries, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "telemetry-data.json";
    link.click();
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        if (Array.isArray(importedData)) {
          setEntries(importedData);
          localStorage.setItem("telemetryData", JSON.stringify(importedData));
          alert("✅ Data imported successfully!");
          window.dispatchEvent(new Event("telemetryUpdated"));
        } else {
          alert("❌ Invalid JSON format");
        }
      } catch (err) {
        alert("❌ Error reading file");
      }
    };
    reader.readAsText(file);
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete all telemetry data?")) {
      setEntries([]);
      localStorage.removeItem("telemetryData");
      window.dispatchEvent(new Event("telemetryUpdated"));
    }
  };

  const toggleTableVisibility = () => setShowTable((prev) => !prev);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={
      `relative min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-sky-100 via-white to-indigo-100 text-gray-900"}`
    }>
      <style>{`
        .highlight-row {
          background-color: #d1fae5 !important;
          transition: background-color 0.5s ease;
        }
        body {
          transition: background-color 0.3s, color 0.3s;
        }
      `}</style>

      {/* 🌌 Confetti/Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none animate-pulse" />

      {/* 🌓 Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 bg-gray-800 text-white px-4 py-2 rounded-full shadow hover:bg-gray-700"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="relative z-10 max-w-5xl mx-auto p-6 rounded-2xl shadow-2xl backdrop-blur-xl bg-white/70 dark:bg-white/10 my-10 animate-fade-in">
        <h1 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-300 mb-6">
          ✈️ Telemetry Input Panel
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["aircraftId", "altitude", "speed", "heading", "latitude", "longitude"].map((name) => (
            <div key={name} className="transition-all duration-300 hover:scale-[1.02]">
              <label className="block font-medium capitalize">
                {name.replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full p-2 border rounded-xl bg-white/80 dark:bg-white/20"
                placeholder={`e.g. ${name === "aircraftId" ? "9W-ABC" : name === "altitude" ? "30000" : name === "speed" ? "450" : name === "heading" ? "270" : name === "latitude" ? "28.6139" : "77.2090"}`}
              />
            </div>
          ))}

          <div className="md:col-span-2 transition-all duration-300 hover:scale-[1.02]">
            <label className="block font-medium">Timestamp</label>
            <input
              type="datetime-local"
              name="timestamp"
              value={formData.timestamp}
              onChange={handleChange}
              className="w-full p-2 border rounded-xl bg-white/80 dark:bg-white/20"
            />
          </div>
        </form>

        <div className="md:col-span-2 flex flex-wrap gap-4 mt-4 justify-end">
          <button type="submit" onClick={handleSubmit} className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-xl shadow">
            📅 Save Entry
          </button>
          <button type="button" onClick={handleExport} className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-xl shadow">
            📄 Export JSON
          </button>
          <label className="cursor-pointer bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-2 rounded-xl shadow">
            📅 Import JSON
            <input type="file" accept=".json" onChange={handleImport} className="hidden" />
          </label>
          <button type="button" onClick={handleClearAll} className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-xl shadow">
            🗑️ Clear All
          </button>
          <button type="button" onClick={toggleTableVisibility} className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-6 py-2 rounded-xl shadow">
            {showTable ? "👁️ Hide Table" : "👁️ Show Table"}
          </button>
          <Link to="/chart" className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-6 py-2 rounded-xl shadow">
            📊 View Charts
          </Link>
        </div>

        {showTable && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">📜 Telemetry Log Timeline</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-xl shadow">
                <thead className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white">
                  <tr>
                    {["Aircraft ID", "Altitude", "Speed", "Heading", "Lat", "Long", "Time", "Action"].map((heading) => (
                      <th key={heading} className="px-4 py-2">{heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {entries.map((entry, index) => (
                    <tr
                      key={index}
                      className={`hover:bg-gray-50 dark:hover:bg-gray-800 ${index === latestIndex ? "highlight-row" : ""}`}
                    >
                      <td className="px-4 py-2">{entry.aircraftId}</td>
                      <td className="px-4 py-2">{entry.altitude}</td>
                      <td className="px-4 py-2">{entry.speed}</td>
                      <td className="px-4 py-2">{entry.heading}</td>
                      <td className="px-4 py-2">{entry.latitude}</td>
                      <td className="px-4 py-2">{entry.longitude}</td>
                      <td className="px-4 py-2">{entry.timestamp}</td>
                      <td className="px-4 py-2 text-center">
                        <button onClick={() => handleDelete(index)} className="text-red-600 hover:underline">
                          ❌ Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {entries.length === 0 && (
                    <tr>
                      <td colSpan="8" className="px-4 py-6 text-center text-gray-400">No entries yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div ref={tableEndRef} />
            </div>
          </div>
        )}
      </div>

      {/* 🌊 SVG Wave Background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-blue-200">
          <path d="M0,0V46.29c47.36,22.6,100.87,35.9,158,36,72.13.14,136.7-24.78,208-35.9,87.33-13.57,172.88-6.13,258,12C759.68,80.35,839.41,102,919,103.77c81.85,1.82,159.69-14.45,233-39.73V0Z" />
        </svg>
      </div>
    </div>
  );
};

export default TelemetryInputPage;