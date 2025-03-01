import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HeroBackground({
  title = "Building the Future, Today",
  subtitle = "High-quality construction services with innovation and excellence.",
  image = "/images/main-hero-bg.jpg",
}) {
  return (
    <div
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <motion.div
        className="relative text-center max-w-2xl z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">
          {title.includes("Today") ? (
            <>{title.split("Today")[0]} <span className="text-yellow-400">Today</span></>
          ) : (
            title
          )}
        </h1>
        <p className="text-lg text-gray-300 mb-6">{subtitle}</p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/projects"
            className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border-2 border-yellow-500 text-yellow-500 font-bold rounded-lg hover:bg-yellow-500 hover:text-black transition"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default HeroBackground;
