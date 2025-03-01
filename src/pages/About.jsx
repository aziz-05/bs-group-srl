import { motion } from "framer-motion";
import OurTeam from "@/components/OurTeam";
import Achievements from "@/components/Achievements";
import TrustedPartners from "../components/TrustedPartners";

function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-yellow-500">BS Group SRL</span>
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          BS Group SRL is a leading construction company dedicated to
          delivering high-quality projects with innovation and precision.
          Our mission is to build a better future with expertise and excellence.
        </motion.p>

        <Achievements />
        <OurTeam />
        <TrustedPartners/>
      </div>
    </div>
  );
}

export default About;
