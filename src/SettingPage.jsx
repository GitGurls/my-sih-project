// import React, { useState } from "react";

// const SettingPage = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [notification, setNotification] = useState(true);

//   return (
//     <div
//       className={`min-h-screen transition-all duration-500 ${
//         darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-tr from-blue-100 via-white to-purple-100 text-gray-900"
//       }`}
//     >
//       {/* Background particles or gradients */}
//       <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100 via-white to-indigo-200 animate-pulse" />

//       <div className="max-w-4xl mx-auto py-10 px-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">⚙️ Settings</h1>
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition-transform"
//           >
//             {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
//           </button>
//         </div>

//         {/* Card */}
//         <div className="bg-white/70 dark:bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl transition-all duration-300">
//           <h2 className="text-xl font-semibold mb-4">🔔 Notifications</h2>
//           <label className="flex items-center gap-3">
//             <input
//               type="checkbox"
//               checked={notification}
//               onChange={() => setNotification(!notification)}
//               className="accent-indigo-600 scale-125"
//             />
//             <span className="text-lg">Enable push notifications</span>
//           </label>
//         </div>

//         {/* Another card */}
//         <div className="mt-6 bg-white/70 dark:bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl transition-all duration-300">
//           <h2 className="text-xl font-semibold mb-4">🗣️ Language Preference</h2>
//           <select className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-white/20">
//             <option>English</option>
//             <option>Hindi</option>
//             <option>Marathi</option>
//           </select>
//         </div>

//         {/* Save Button */}
//         <div className="mt-10 text-right">
//           <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition-transform">
//             💾 Save Settings
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingPage;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon, BellIcon, LanguagesIcon, SettingsIcon, PaletteIcon, UserIcon } from "lucide-react";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [pushEnabled, setPushEnabled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("Aurora");

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen px-6 py-10 transition duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white"
          : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-800"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-10">
        <h1 className="text-4xl font-bold flex items-center gap-2">
          <SettingsIcon className="text-purple-500" /> Settings
        </h1>
        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-violet-700 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition"
        >
          {darkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />} {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2">
        {/* Notification Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl shadow-xl p-6 backdrop-blur-lg bg-white/70 dark:bg-white/10"
        >
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <BellIcon className="text-yellow-400" /> Notifications
          </h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={pushEnabled}
                onChange={() => setPushEnabled(!pushEnabled)}
              />
              Enable Push Notifications
            </label>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={soundEnabled}
                onChange={() => setSoundEnabled(!soundEnabled)}
              />
              Sound Alerts
            </label>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={emailEnabled}
                onChange={() => setEmailEnabled(!emailEnabled)}
              />
              Email Notifications
            </label>
          </div>
        </motion.div>

        {/* Language Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl shadow-xl p-6 backdrop-blur-lg bg-white/70 dark:bg-white/10"
        >
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <LanguagesIcon className="text-blue-500" /> Language Preference
          </h2>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 rounded-xl border dark:bg-black/20"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </motion.div>

        {/* Theme Picker */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl shadow-xl p-6 backdrop-blur-lg bg-white/70 dark:bg-white/10"
        >
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <PaletteIcon className="text-pink-500" /> Theme
          </h2>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full p-2 rounded-xl border dark:bg-black/20"
          >
            <option>Aurora</option>
            <option>Midnight</option>
            <option>Sunset</option>
            <option>Frost</option>
          </select>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl shadow-xl p-6 flex items-center gap-4 backdrop-blur-lg bg-white/70 dark:bg-white/10"
        >
          <UserIcon className="w-12 h-12 text-indigo-600" />
          <div>
            <p className="font-semibold text-lg">Saloni Gupta</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">UI Contributor</p>
          </div>
        </motion.div>
      </div>

      {/* Save Settings Button */}
      <div className="mt-10 text-right max-w-6xl mx-auto">
        <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition">
          💾 Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
