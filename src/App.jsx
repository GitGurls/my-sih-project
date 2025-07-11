
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

// Layout
import NavigationSidebar from "./Components/NavigationSidebar";

function AppLayout({ children }) {
  return (
    <div className="flex">
      <NavigationSidebar />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}

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
        {/* Landing Page without Sidebar */}
        <Route path="/" element={<LandingPage />} />

        {/* All other routes inside layout */}
        <Route
          path="/telemetry"
          element={
            <AppLayout>
              <TelemetryInputPage />
            </AppLayout>
          }
        />
        <Route
          path="/map"
          element={
            <AppLayout>
              <MapRenderPage />
            </AppLayout>
          }
        />
        <Route
          path="/chart"
          element={
            <AppLayout>
              <DataVisualization data={telemetryData} />
            </AppLayout>
          }
        />
        <Route
          path="/simulate"
          element={
            <AppLayout>
              <SimulationConfigPage />
            </AppLayout>
          }
        />
        <Route
          path="/assets"
          element={
            <AppLayout>
              <SearchAssetsPage />
            </AppLayout>
          }
        />
        <Route
          path="/scenarios"
          element={
            <AppLayout>
              <ScenarioManagerPage />
            </AppLayout>
          }
        />
        <Route
          path="/report"
          element={
            <AppLayout>
              <MissionReportPage />
            </AppLayout>
          }
        />
        <Route
          path="/collaboration"
          element={
            <AppLayout>
              <CollaborationPage />
            </AppLayout>
          }
        />
        <Route
          path="/offline"
          element={
            <AppLayout>
              <OfflineManagerPage />
            </AppLayout>
          }
        />
        <Route
          path="/setting"
          element={
            <AppLayout>
              <SettingPage />
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
