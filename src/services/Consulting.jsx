import { motion } from "framer-motion";
import { FaBriefcase, FaUsers, FaLightbulb, FaCheckCircle } from "react-icons/fa";
import CallToAction from "@/components/CallToAction";
import HeroBackground from "@/components/HeroBackground";

function Consulting() {
  return (
    <div>
      <HeroBackground title="Consulting Services" subtitle="Expert advice to help your projects succeed" image="/src/images/consulting-bg.webp" />

      <section className="container mx-auto py-16 px-6">
        <motion.h2 className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Professional Consulting Solutions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div className="rounded-lg overflow-hidden shadow-lg "
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <img src="/src/images/consulting.webp" alt="Consulting Services"  className="w-full h-full object-cover" />
          </motion.div>

          <motion.div className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <p className="text-lg text-gray-700">
              We provide expert consulting services to help you plan and execute successful projects with confidence.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center"><FaCheckCircle className="text-yellow-500 text-2xl mr-3" /><span>Experienced industry professionals</span></li>
              <li className="flex items-center"><FaUsers className="text-yellow-500 text-2xl mr-3" /><span>Customized solutions for your needs</span></li>
              <li className="flex items-center"><FaLightbulb className="text-yellow-500 text-2xl mr-3" /><span>Innovative strategies & insights</span></li>
              <li className="flex items-center"><FaBriefcase className="text-yellow-500 text-2xl mr-3" /><span>Maximize efficiency & profitability</span></li>
            </ul>
            <button className="mt-6 bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition">
              Get Consultation
            </button>
          </motion.div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}

export default Consulting;
