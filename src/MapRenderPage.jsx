import React, { useEffect, useRef, useState } from "react";
import { Ion, Viewer, Cartesian3, Color } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

// ✅ Set your Cesium token here
Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0ZjlmZGRiOC03OGVhLTQ0M2EtODc2MC1lNzE5MTMzMDJhNTEiLCJpZCI6MzE2OTM3LCJpYXQiOjE3NTEyNjAxMDV9.kDgUh9r7Nh81QV3i8X61hgZiHKZW8KCU0BOkziYlaOg";

const MapRendererPage = () => {
  const viewerRef = useRef(null);
  const [telemetryPoints, setTelemetryPoints] = useState([]);

  // 🔹 Step 1: Load initial telemetry data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("telemetryData");
    if (savedData) {
      setTelemetryPoints(JSON.parse(savedData));
    }
  }, []);

  // 🔹 Step 2: Handle "Refresh Map" via telemetryUpdated event
  useEffect(() => {
    const handleRefresh = () => {
      const savedData = localStorage.getItem("telemetryData");
      if (savedData) {
        setTelemetryPoints(JSON.parse(savedData));
      }
    };

    window.addEventListener("telemetryUpdated", handleRefresh);

    return () => {
      window.removeEventListener("telemetryUpdated", handleRefresh);
    };
  }, []);

  // 🔹 Step 3: Render map when telemetry data changes
  useEffect(() => {
    if (!telemetryPoints.length || !viewerRef.current) return;

    const viewer = new Viewer(viewerRef.current, {
      animation: false,
      timeline: false,
      sceneModePicker: true,
      baseLayerPicker: true,
      homeButton: true,
      geocoder: true,
    });

    // Draw aircraft dots and labels
    telemetryPoints.forEach((entry) => {
      const { latitude, longitude, aircraftId } = entry;
      if (!latitude || !longitude) return;

      viewer.entities.add({
        position: Cartesian3.fromDegrees(Number(longitude), Number(latitude)),
        point: { pixelSize: 10, color: Color.CYAN },
        label: {
          text: aircraftId || "Aircraft",
          font: "14px sans-serif",
          fillColor: Color.WHITE,
        },
      });
    });

    // Draw flight path
    viewer.entities.add({
      polyline: {
        positions: telemetryPoints
          .filter((entry) => entry.latitude && entry.longitude)
          .map((entry) =>
            Cartesian3.fromDegrees(Number(entry.longitude), Number(entry.latitude))
          ),
        width: 3,
        material: Color.YELLOW,
      },
    });

    return () => {
      if (!viewer.isDestroyed()) viewer.destroy();
    };
  }, [telemetryPoints]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-400">
        🗺️ Map Renderer - Phase 2 & 3
      </h1>
      <div
        ref={viewerRef}
        className="h-[80vh] w-full rounded-xl border-2 border-blue-500 shadow-lg"
      />
    </div>
  );
};

export default MapRendererPage;
