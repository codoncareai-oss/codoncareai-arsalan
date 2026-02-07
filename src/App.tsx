import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Top Disclaimer Banner */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-red-50 border-b-4 border-red-600 text-red-800 py-4 px-6 text-center font-medium shadow-sm"
      >
        <strong>IMPORTANT:</strong> This is an educational awareness tool only. It is NOT a medical diagnosis, NOT medical advice, and NOT a substitute for professional healthcare. Always consult a qualified doctor.
      </motion.div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-blue-800 text-center mb-6"
        >
          CodonCareAI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-700 text-center mb-10 max-w-3xl mx-auto"
        >
          Awareness Through Trends in Kidney Health
        </motion.p>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
        >
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">
            Why CKD is Often Detected Late
          </h2>

          <div className="space-y-6 text-gray-800 leading-relaxed">
            <p>
              Chronic Kidney Disease (CKD) is often called a “silent disease” because people usually feel completely normal in the early stages (stages 1–3). There are almost no symptoms — no pain, no major tiredness, no obvious swelling. Most patients only start feeling unwell when the kidneys have already lost 70–90% of their function...
            </p>

            <p className="font-medium text-blue-700">
              In Singapore, about 14.9% of adults have CKD — more than 1 in 7 people (National Population Health Survey 2023–2024).
            </p>

            <p>
              This project is inspired by my mother's late-stage CKD diagnosis in Bihar, India. The goal is to help people become aware of trends early — before irreversible damage occurs.
            </p>
          </div>

          {/* Call to Action Button */}
          <div className="mt-10 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl text-xl font-semibold shadow-lg transition-colors"
            >
              Start Analyzing My Report →
            </motion.button>
          </div>
        </motion.div>

        {/* Footer Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center text-sm text-gray-500 mt-12"
        >
          © 2026 CodonCareAI • Built for awareness only • Not medical advice
        </motion.p>
      </div>
    </div>
  )
}

export default App
