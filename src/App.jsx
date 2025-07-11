
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Core Pages
import LandingPage from "./LandingPage";
import TelemetryInputPage from "./TelemetryInputPage";
import MapRenderPage from "./MapRenderPage";
import DataVisualization from "./Components/DataVisualization";
import SimulationConfigPage from "./SimulationConfigPage";
import SearchAssetsPage from "./SearchAssetsPage";
import ScenarioManagerPage from "./ScenarioManagerPage";
import MissionReportPage from "./MissionReportPage";
import CollaborationPage from "./CollaborationPage";
import OfflineManagerPage from "./OfflineManagerPage";
import SettingPage from "./SettingPage";
// Future Modules – Enable as needed

import NavigationSidebar from "./Components/NavigationSidebar";

function App() {
  const [telemetryData, setTelemetryData] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("telemetryData");
    if (stored) setTelemetryData(JSON.parse(stored));

    const listener = () => {
      const updated = localStorage.getItem("telemetryData");
      if (updated) setTelemetryData(JSON.parse(updated));
    };

    window.addEventListener("telemetryUpdated", listener);
    return () => window.removeEventListener("telemetryUpdated", listener);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/telemetry" element={<TelemetryInputPage />} />
        <Route path="/map" element={<MapRenderPage />} />
        <Route path="/chart" element={<DataVisualization data={telemetryData} />} />
        <Route path="/simulate" element={<SimulationConfigPage />} />
        <Route path="/assets" element={<SearchAssetsPage />} />
        <Route path="/scenarios" element={<ScenarioManagerPage />} />
        <Route path="/report" element={<MissionReportPage />} />
        <Route path="/collaboration" element={<CollaborationPage />} />
        <Route path="/offline" element={<OfflineManagerPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/navigation" element={<NavigationSidebar />} />


        {/* Future Routes */}
      </Routes>
    </Router>
  );
}

export default App;
