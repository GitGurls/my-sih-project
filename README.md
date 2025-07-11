# 🚀 VAR Frontend Dashboard — Smart India Hackathon 2025

An advanced Search & Rescue (SAR) dashboard built using React + Vite for mission planning, telemetry visualization, simulation configuration, offline data management, and scenario handling.

![UI Preview](./public/preview.png)

## ✨ Features

- 🌐 Interactive Landing Page with animated visuals
- 📡 Real-time Telemetry Input & Preview
- 🗺️ 3D Map Renderer using CesiumJS
- ⚙️ Simulation Configuration Panel with adjustable parameters
- 🚁 Asset Search with Filtering & Animated Cards
- 🧠 Scenario Manager with Tabs, Comparison, and Management
- 📊 Mission Report with charts and Export options
- 🔌 Offline Data Manager (Import/Export JSON, Clear Local)
- 👥 Collaboration Panel (Coming Soon)
- 🎨 Fully Responsive & SIH-Level Gradient UI
- ⚡ Built with Vite for lightning-fast development

## 🛠️ Tech Stack

| Tech             | Description                           |
|------------------|---------------------------------------|
| React + Vite     | Frontend Framework                    |
| TailwindCSS      | Utility-first CSS framework           |
| CesiumJS         | 3D globe rendering and geospatial data|
| Lucide-react     | Icon library                          |
| Framer Motion    | Animations & Transitions              |
| Recharts         | Charts and Graphs                     |
| ShadCN UI        | Beautiful accessible components       |
| React Router DOM | Routing                               |

## 📁 Folder Structure

```bash
src/
├── Components/
│   └── ui/            # Shadcn UI components (button, input, etc.)
├── assets/            # Images, SVGs, icons
├── LandingPage.jsx
├── TelemetryInputPage.jsx
├── MapRenderPage.jsx
├── SimulationConfigPage.jsx
├── SearchAssetsPage.jsx
├── ScenarioManagerPage.jsx
├── MissionReportPage.jsx
├── OfflineManagerPage.jsx
├── CollaborationPage.jsx
├── App.jsx
└── index.css
