import { motion } from "framer-motion";
import { FaHardHat, FaBuilding, FaCogs, FaCheckCircle } from "react-icons/fa";
import CallToAction from "@/components/CallToAction";
import HeroBackground from "@/components/HeroBackground";

function Construction() {
  return (
    <div>
      <HeroBackground title="Construction Services" subtitle="Building your vision with precision and expertise" image="/src/images/construction-bg.webp" />

      <section className="container mx-auto py-16 px-6">
        <motion.h2 className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Our Construction Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <img src="/images/construction.jpg" alt="Construction Services" className="w-full h-auto object-cover" />
          </motion.div>

          <motion.div className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <p className="text-lg text-gray-700">
              Our construction team delivers high-quality buildings tailored to your needs, ensuring durability and innovation in every project.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center"><FaCheckCircle className="text-yellow-500 text-2xl mr-3" /><span>Reliable & durable construction</span></li>
              <li className="flex items-center"><FaBuilding className="text-yellow-500 text-2xl mr-3" /><span>Modern architectural designs</span></li>
              <li className="flex items-center"><FaCogs className="text-yellow-500 text-2xl mr-3" /><span>Advanced building technologies</span></li>
              <li className="flex items-center"><FaHardHat className="text-yellow-500 text-2xl mr-3" /><span>Experienced engineers & workers</span></li>
            </ul>
            <button className="mt-6 bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition">
              Get a Quote
            </button>
          </motion.div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}

export default Construction;
