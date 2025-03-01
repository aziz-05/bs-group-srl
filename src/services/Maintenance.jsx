import { motion } from "framer-motion";
import { FaTools, FaCheckCircle, FaClock, FaPhoneAlt } from "react-icons/fa";
import CallToAction from "@/components/CallToAction";
import HeroBackground from "@/components/HeroBackground";

function Maintenance() {
  return (
    <div>
      {/* Hero Section */}
      <HeroBackground title="Maintenance Services" subtitle="Reliable solutions to keep your property in top condition" image="/images/maintenance-bg.jpg" />

      {/* Service Details */}
      <section className="container mx-auto py-16 px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Our Maintenance Services?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section - Image */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/images/maintenance.jpg" alt="Maintenance Services" className="w-full h-auto object-cover" />
          </motion.div>

          {/* Right Section - Service Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-700">
              Our maintenance services ensure that your property remains in excellent condition year-round. From repairs to routine checkups, we handle everything professionally and efficiently.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-500 text-2xl mr-3" />
                <span className="text-lg">Expert technicians available 24/7</span>
              </li>
              <li className="flex items-center">
                <FaClock className="text-yellow-500 text-2xl mr-3" />
                <span className="text-lg">Fast response and on-time service</span>
              </li>
              <li className="flex items-center">
                <FaTools className="text-yellow-500 text-2xl mr-3" />
                <span className="text-lg">Comprehensive maintenance plans</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-yellow-500 text-2xl mr-3" />
                <span className="text-lg">Emergency support when you need it</span>
              </li>
            </ul>

            <button className="mt-6 bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition">
              Request Maintenance
            </button>
          </motion.div>
        </div>
      </section>

      {/* Call To Action */}
      <CallToAction />
    </div>
  );
}

export default Maintenance;
