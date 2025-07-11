
// import React from "react";
// import { Download, Upload, Trash2 } from "lucide-react";
// import { Button } from "@/Components/ui/button";
// import { motion } from "framer-motion";

// export default function OfflineManagerPage() {
//   const exportData = () => {
//     const data = localStorage.getItem("telemetryData") || "[]";
//     const blob = new Blob([data], { type: "application/json" });
//     const url = URL.createObjectURL(blob);

//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "telemetry-data.json";
//     link.click();
//     URL.revokeObjectURL(url);
//   };

//   const importData = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = (event) => {
//       try {
//         const parsed = JSON.parse(event.target.result);
//         localStorage.setItem("telemetryData", JSON.stringify(parsed));
//         window.dispatchEvent(new Event("telemetryUpdated"));
//       } catch (err) {
//         alert("Invalid JSON file.");
//       }
//     };
//     reader.readAsText(file);
//   };

//   const clearData = () => {
//     localStorage.removeItem("telemetryData");
//     window.dispatchEvent(new Event("telemetryUpdated"));
//   };

//   const cardVariant = {
//     initial: { opacity: 0, y: 30 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.5 },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
//       <h1 className="text-3xl font-bold text-center text-blue-700 mb-10 flex items-center justify-center gap-2">
//         <span>📦</span> Offline Data Manager
//       </h1>

//       <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//         {/* Export Card */}
//         <motion.div {...cardVariant} className="bg-white rounded-2xl shadow-lg p-6">
//           <h2 className="text-xl font-semibold mb-2">Export Data</h2>
//           <p className="text-gray-600 mb-4">
//             Save your telemetry data locally as a JSON file.
//           </p>
//           <Button
//             onClick={exportData}
//             className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white px-6 py-2 rounded-xl"
//           >
//             <Download className="w-4 h-4 mr-2" /> Export JSON
//           </Button>
//         </motion.div>

//         {/* Import Card */}
//         <motion.div {...cardVariant} className="bg-white rounded-2xl shadow-lg p-6">
//           <h2 className="text-xl font-semibold mb-2">Import Data</h2>
//           <p className="text-gray-600 mb-4">
//             Load a telemetry file to restore your data.
//           </p>
//           <label className="inline-block">
//             <input
//               type="file"
//               accept="application/json"
//               onChange={importData}
//               className="hidden"
//             />
//             <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white px-6 py-2 rounded-xl">
//               <Upload className="w-4 h-4 mr-2" /> Import JSON
//             </Button>
//           </label>
//         </motion.div>

//         {/* Clear Data Card */}
//         <motion.div
//           {...cardVariant}
//           className="bg-white rounded-2xl shadow-lg p-6 md:col-span-2"
//         >
//           <h2 className="text-xl font-semibold mb-2">Clear Local Data</h2>
//           <p className="text-gray-600 mb-4">
//             This will remove all telemetry entries stored in your browser.
//           </p>
//           <Button
//             onClick={clearData}
//             className="bg-gradient-to-r from-red-500 to-rose-600 hover:opacity-90 text-white px-6 py-2 rounded-xl"
//           >
//             <Trash2 className="w-4 h-4 mr-2" /> Clear Data
//           </Button>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Download, Upload, Trash2 } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { motion } from "framer-motion";

export default function OfflineManagerPage() {
  const exportData = () => {
    const data = localStorage.getItem("telemetryData") || "[]";
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "telemetry-data.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  const importData = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        localStorage.setItem("telemetryData", JSON.stringify(parsed));
        window.dispatchEvent(new Event("telemetryUpdated"));
      } catch (err) {
        alert("Invalid JSON file.");
      }
    };
    reader.readAsText(file);
  };

  const clearData = () => {
    localStorage.removeItem("telemetryData");
    window.dispatchEvent(new Event("telemetryUpdated"));
  };

  const cardVariant = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-10 flex items-center justify-center gap-2">
        <span>📦</span> Offline Data Manager
      </h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Export Card */}
        <motion.div {...cardVariant} className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Export Data</h2>
          <p className="text-gray-600 mb-4">
            Save your telemetry data locally as a JSON file.
          </p>
          <Button
            onClick={exportData}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white px-6 py-2 rounded-xl"
          >
            <Download className="w-4 h-4 mr-2" /> Export JSON
          </Button>
        </motion.div>

        {/* Import Card */}
        <motion.div {...cardVariant} className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Import Data</h2>
          <p className="text-gray-600 mb-4">
            Load a telemetry file to restore your data.
          </p>
          <label className="inline-block">
            <input
              type="file"
              accept="application/json"
              onChange={importData}
              className="hidden"
            />
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white px-6 py-2 rounded-xl">
              <Upload className="w-4 h-4 mr-2" /> Import JSON
            </Button>
          </label>
        </motion.div>

        {/* Clear Data Card */}
        <motion.div
          {...cardVariant}
          className="bg-white rounded-2xl shadow-lg p-6 md:col-span-2"
        >
          <h2 className="text-xl font-semibold mb-2">Clear Local Data</h2>
          <p className="text-gray-600 mb-4">
            This will remove all telemetry entries stored in your browser.
          </p>
          <Button
            onClick={clearData}
            className="bg-gradient-to-r from-red-500 to-rose-600 hover:opacity-90 text-white px-6 py-2 rounded-xl"
          >
            <Trash2 className="w-4 h-4 mr-2" /> Clear Data
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
