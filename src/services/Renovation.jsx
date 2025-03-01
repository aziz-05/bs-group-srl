import { motion } from "framer-motion";
import { FaPaintRoller, FaHome, FaRedo, FaCheckCircle } from "react-icons/fa";
import CallToAction from "@/components/CallToAction";
import HeroBackground from "@/components/HeroBackground";

function Renovation() {
  return (
    <div>
      <HeroBackground title="Renovation Services" subtitle="Transforming spaces with modern and stylish upgrades" image="/images/renovation-bg.jpg" />

      <section className="container mx-auto py-16 px-6">
        <motion.h2 className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Why Renovate with Us?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <img src="/images/renovation.jpg" alt="Renovation Services" className="w-full h-auto object-cover" />
          </motion.div>

          <motion.div className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <p className="text-lg text-gray-700">
              We bring old spaces to life with creative renovation solutions, giving your property a fresh and modern look.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center"><FaCheckCircle className="text-yellow-500 text-2xl mr-3" /><span>Full interior & exterior upgrades</span></li>
              <li className="flex items-center"><FaRedo className="text-yellow-500 text-2xl mr-3" /><span>Quality materials & craftsmanship</span></li>
              <li className="flex items-center"><FaPaintRoller className="text-yellow-500 text-2xl mr-3" /><span>Modern designs & layouts</span></li>
              <li className="flex items-center"><FaHome className="text-yellow-500 text-2xl mr-3" /><span>Customized renovations for every need</span></li>
            </ul>
            <button className="mt-6 bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition">
              Start Renovation
            </button>
          </motion.div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}

export default Renovation;
