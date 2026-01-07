"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "./MotionTokens";

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/evans-portfolio/Evans_ArmantradingIII_Resume.pdf";
    link.download = "Evans_ArmantradingIII_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="min-h-screen pt-32 pb-16 px-6 flex items-center justify-center">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-cream-50 mb-8">
          Resume
        </h2>
        <p className="text-xl text-cream-50/70 mb-12 max-w-2xl mx-auto">
          Download my resume to learn more about my experience and projects.
        </p>

        <div className="flex items-center justify-center">
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Download Resume (PDF)
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}


