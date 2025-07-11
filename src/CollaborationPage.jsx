
// import React from "react";
// import { Card, CardContent } from "@/Components/ui/card";
// import { motion } from "framer-motion";
// import { UserPlus, MessageCircle, Share2, Users } from "lucide-react";
// import { Button } from "@/Components/ui/button";
// import { Badge } from "@/Components/ui/badge";
// import { Avatar, AvatarFallback } from "@/Components/ui/avatar";

// export default function CollaborationPage() {
//   return (
//     <div className="p-6 md:p-10 max-w-7xl mx-auto">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="mb-10"
//       >
//         <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
//           <Users className="text-purple-600 h-8 w-8" />
//           Collaboration Center
//         </h1>
//         <p className="text-gray-500 dark:text-gray-300 text-base">
//           Seamlessly coordinate and communicate with your team in real time.
//         </p>
//       </motion.div>

//       {/* Feature Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//         {/* Share Scenario */}
//         <motion.div whileHover={{ scale: 1.02 }} className="transition-all">
//           <Card className="rounded-2xl shadow-md bg-gray-100 dark:bg-gray-800 p-6">
//             <CardContent className="space-y-4">
//               <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
//                 <Share2 className="text-blue-500" /> Share Scenario
//               </h3>
//               <p className="text-gray-500 dark:text-gray-300">
//                 Generate a shareable link to your current simulation setup for team review and feedback.
//               </p>
//               <button
//                 onClick={() => console.log("Generate Link")}
//                 className="w-full text-white font-semibold py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition"
//               >
//                 🔗 Generate Link
//               </button>
//             </CardContent>
//           </Card>
//         </motion.div>

//         {/* Team Chat */}
//         <motion.div whileHover={{ scale: 1.02 }} className="transition-all">
//           <Card className="rounded-2xl shadow-md bg-gray-100 dark:bg-gray-800 p-6">
//             <CardContent className="space-y-4">
//               <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
//                 <MessageCircle className="text-green-500" /> Team Chat
//               </h3>
//               <p className="text-gray-500 dark:text-gray-300">
//                 Chat with your team in real-time to discuss adjustments and updates during the mission.
//               </p>
//               <button
//                 onClick={() => console.log("Open Chat")}
//                 className="w-full text-white font-semibold py-2 rounded-xl bg-gradient-to-r from-teal-400 to-purple-600 hover:opacity-90 transition"
//               >
//                 💬 Open Chat
//               </button>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>

//       {/* Activity Timeline */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-semibold mb-4">🕒 Recent Activity</h2>
//         <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm pl-4 border-l-2 border-purple-400">
//           <li className="ml-2">✅ Riya added a new scenario for drone deployment.</li>
//           <li className="ml-2">✏️ Mohit edited the fuel parameter settings.</li>
//           <li className="ml-2">📤 Link shared to planning team.</li>
//           <li className="ml-2">💬 New message from mission control.</li>
//         </ul>
//       </div>

//       {/* Online Members */}
//       <div className="mb-10">
//         <h2 className="text-2xl font-semibold mb-4">🟢 Active Members</h2>
//         <div className="flex flex-wrap gap-6">
//           {["RJ", "MT", "NK", "AG"].map((initials, idx) => (
//             <div key={idx} className="flex flex-col items-center space-y-1">
//               <Avatar className="border-2 border-green-500 shadow" />
//               <AvatarFallback name={initials} />
//               <Badge variant="secondary" className="text-xs">
//                 online
//               </Badge>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="text-center text-sm text-gray-400 pt-6 border-t border-gray-300 dark:border-gray-700">
//         Built for Mission Collaboration – Smart India Hackathon 2025 🚀
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Card, CardContent } from "@/Components/ui/card";
import { motion } from "framer-motion";
import { UserPlus, MessageCircle, Share2, Users } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";

export default function CollaborationPage() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      {/* Hero Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
          <Users className="text-purple-600" /> Collaboration Center
        </h1>
        <p className="text-gray-500 dark:text-gray-300">
          Seamlessly coordinate and communicate with your team in real time.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Share Scenario */}
        <motion.div whileHover={{ scale: 1.02 }} className="transition-all">
          <Card className="rounded-2xl shadow-md bg-gray-100 dark:bg-gray-800 p-6">
            <CardContent className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
                <Share2 className="text-blue-500" /> Share Scenario
              </h3>
              <p className="text-gray-500 dark:text-gray-300">
                Generate a shareable link to your current simulation setup for team review and feedback.
              </p>
              <button
                onClick={() => console.log("Generate Link")}
                className="w-full text-white font-semibold py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition"
              >
                🔗 Generate Link
              </button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Team Chat */}
        <motion.div whileHover={{ scale: 1.02 }} className="transition-all">
          <Card className="rounded-2xl shadow-md bg-gray-100 dark:bg-gray-800 p-6">
            <CardContent className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
                <MessageCircle className="text-green-500" /> Team Chat
              </h3>
              <p className="text-gray-500 dark:text-gray-300">
                Chat with your team in real-time to discuss adjustments and updates during the mission.
              </p>
              <button
                onClick={() => console.log("Open Chat")}
                className="w-full text-white font-semibold py-2 rounded-xl bg-gradient-to-r from-teal-400 to-purple-600 hover:opacity-90 transition"
              >
                💬 Open Chat
              </button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Team Activity Timeline (Mocked) */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🕒 Recent Activity</h2>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm pl-2 border-l border-purple-400">
          <li className="ml-4">✅ Riya added a new scenario for drone deployment.</li>
          <li className="ml-4">✏️ Mohit edited the fuel parameter settings.</li>
          <li className="ml-4">📤 Link shared to planning team.</li>
          <li className="ml-4">💬 New message from mission control.</li>
        </ul>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-400 pt-6 border-t border-gray-300 dark:border-gray-700">
        Built for Mission Collaboration – Smart India Hackathon 2025 🚀
      </div>
    </div>
  );
}
