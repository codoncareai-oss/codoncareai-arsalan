import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-white text-gray-800">
      {/* Top Fixed Disclaimer */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-red-600/90 text-white text-center py-3 px-4 font-medium shadow-lg backdrop-blur-sm">
        <strong>CRITICAL NOTICE:</strong> This is an educational awareness tool only. It is NOT a medical diagnosis, NOT medical advice, and NOT a substitute for professional healthcare. Always consult a qualified doctor.
      </div>

      {/* Main Content - with padding for disclaimer */}
      <div className="pt-24 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600 mb-4"
          >
            CodonCareAI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
          >
            Awareness Through Trends in Kidney Health
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-5 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Start Analyzing My Report →
          </motion.button>
        </motion.section>

        {/* Main Explanation Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100/50"
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">
            Why CKD is Often Detected So Late
          </h2>

          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              Chronic Kidney Disease (CKD) is often called a <span className="font-semibold text-red-600">"silent disease"</span> because people usually feel completely normal in the early stages (stages 1–3). There are almost no symptoms — no pain, no major tiredness, no obvious swelling. Most patients only start feeling unwell when the kidneys have already lost 70–90% of their function...
            </p>

            <p className="font-medium text-blue-700">
              In Singapore, about 14.9% of adults have CKD — more than 1 in 7 people (National Population Health Survey 2023–2024). Diabetes and high blood pressure are the leading causes (around 2 in 3 new cases of kidney failure are linked to diabetes). Singapore ranks among the highest globally for kidney failure prevalence, with roughly 6 new patients starting dialysis every day and over 9,000 people already on dialysis.
            </p>

            <p>
              Serum creatinine and estimated glomerular filtration rate (eGFR) do not suddenly become abnormal. In healthy adults, eGFR declines very slowly — about 0.5 to 1 mL/min per year. In CKD, the decline occurs gradually over many years (often 8–10 years or longer)...
            </p>

            <p className="font-semibold text-gray-800">
              Late detection has serious consequences: progression to end-stage kidney disease requiring lifelong dialysis (SGD 30,000–50,000 per patient per year), significant reduction in quality of life (fatigue, cardiovascular complications, bone disease, depression), and substantial financial and emotional burden on families and the healthcare system.
            </p>

            <p className="italic text-gray-700 mt-8 border-l-4 border-blue-500 pl-6">
              "Inspired by my mother's late-stage CKD diagnosis in Bihar, India, I built this tool to help others catch the silent signs earlier. Awareness is the first step towards prevention."
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center text-sm text-gray-500 mt-16"
        >
          © 2026 CodonCareAI • Built for awareness only • Not medical advice
        </motion.p>
      </div>
    </div>
  )
}

export default App
