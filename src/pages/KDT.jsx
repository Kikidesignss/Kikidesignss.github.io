// src/pages/KDT.jsx
import { motion } from "framer-motion";

export default function KDT() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-100 to-sky-200 p-6">
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-emerald-900 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Kean Dance Theatre ✨
      </motion.h1>

      {/* Intro paragraph */}
      <motion.p
        className="mt-6 text-lg md:text-xl text-center text-emerald-800 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Step into the world of movement, rhythm, and storytelling.  
        Kean Dance Theatre has been a journey filled with creativity,  
        expression, and community — blending passion and performance. 🌸
      </motion.p>

      {/* Journey cards (like chapters in a storybook) */}
      <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition"
          whileHover={{ rotate: -1 }}
        >
          <h2 className="text-xl font-semibold text-emerald-900">🌱 The Beginning</h2>
          <p className="mt-2 text-emerald-700">
            How it all started — the first rehearsals,  
            meeting new friends, and finding rhythm together.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition"
          whileHover={{ rotate: 1 }}
        >
          <h2 className="text-xl font-semibold text-emerald-900">🌸 Performances</h2>
          <p className="mt-2 text-emerald-700">
            From the stage lights to the energy of the audience,  
            every performance was a story brought to life.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition"
          whileHover={{ rotate: -1 }}
        >
          <h2 className="text-xl font-semibold text-emerald-900">🌟 Memories</h2>
          <p className="mt-2 text-emerald-700">
            A collection of unforgettable moments,  
            friendships, and inspiration to carry forward.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
