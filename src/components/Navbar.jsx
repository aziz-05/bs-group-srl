import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full px-5 md:px-1 py-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-gray-900 bg-opacity-50 shadow-lg backdrop-blur-md" : "bg-gray-900"
      }`}
    >
      <div className="container mx-auto flex justify-between items-stretch h-20">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-extrabold text-white tracking-wide flex items-center relative overflow-hidden group"
        >
          <span className="transition-all duration-300 group-hover:text-yellow-400">BS Group</span> 
          <span className="text-yellow-400 ml-2 transition-all duration-300 group-hover:scale-110 group-hover:text-white">SRL</span>
          <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-stretch">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <motion.div 
              key={item} 
              className="flex items-center relative group px-2"
            >
              <Link 
                to={`/${item.toLowerCase()}`} 
                className="text-lg text-white transition-all duration-300 flex items-center h-full relative px-3 z-10 group-hover:text-yellow-400"
              >
                {item}
                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300  group-hover:w-full"></span>
              </Link>
              <span className="absolute inset-0 bg-gray-800 opacity-0 rounded-md transition-all duration-300 group-hover:opacity-20"></span>
            </motion.div>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative group flex items-center px-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="flex items-center space-x-2 text-white transition-all duration-300 h-full px-3 relative z-10 group-hover:text-yellow-400"
              onClick={() => navigate("/services")} // Navigate to services page on click
            >
              <span>Services</span>
              <FaChevronDown size={12} className="transition-transform duration-300 group-hover:rotate-180" />
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <span className="absolute inset-0 bg-gray-800 opacity-0 rounded-md transition-all duration-300 group-hover:opacity-20"></span>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 bg-gray-800 bg-opacity-90 rounded-lg shadow-xl backdrop-blur-md border border-gray-700"
                  style={{ top: "100%" }}
                >
                  <ul className="py-2 w-48">
                    {["Construction", "Renovation", "Consulting", "Maintenance"].map((service) => (
                      <motion.li
                        key={service}
                        whileHover={{ 
                          backgroundColor: "rgba(255,255,255,0.1)",
                          x: 5
                        }}
                        className="transition-all duration-200 cursor-pointer"
                      >
                        <Link 
                          to={`/services/${service.toLowerCase()}`} 
                          className="text-white block px-4 py-2 hover:text-yellow-400 transition-all duration-200"
                        >
                          {service}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Social Icons */}
          {/* Social Icons */}
          <div className="flex space-x-4 items-center ml-4">
            {[FaFacebook, FaInstagram, FaLinkedin].map((Icon, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.5 }}
                href="#"
                className="text-white hover:text-yellow-400 transition"
              >
                <Icon size={20} />
              </motion.a>
            ))}
         </div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-yellow-400 focus:outline-none self-center p-2 rounded-full" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ 
            backgroundColor: "rgba(255,255,255,0.1)",
            transition: { duration: 0.2 }
          }}
        >
          {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </motion.button>
      </div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8"
          >
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-2xl text-white hover:text-yellow-400 transition-all duration-300 relative px-8 py-2 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-500 group-hover:w-3/4 group-hover:left-4"></span>
                </Link>
                <span className="absolute inset-0 bg-gray-800 opacity-0 rounded-md transition-all duration-300 group-hover:opacity-20"></span>
              </motion.div>
            ))}

            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-2xl text-white hover:text-yellow-400 transition-all duration-300 flex items-center space-x-2 px-8 py-2 relative group"
              >
                <span>Services</span>
                <FaChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                <span className="absolute bottom-0 left-8 w-0 h-0.5 bg-yellow-400 transition-all duration-500 group-hover:w-3/4"></span>
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 bg-gray-800 rounded-lg shadow-xl p-4 space-y-2"
                  >
                    {["Construction", "Renovation", "Consulting", "Maintenance"].map((service, idx) => (
                      <motion.li
                        key={service}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: "rgba(255,255,255,0.1)",
                          x: 5
                        }}
                        className="px-6 py-2 rounded-lg transition-all duration-200 cursor-pointer"
                      >
                        <Link
                          to={`/services/${service.toLowerCase()}`}
                          className="text-white block hover:text-yellow-400 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 mt-8">
              {[FaFacebook, FaInstagram, FaLinkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ 
                    scale: 1.3,
                    rotate: [0, 10, -10, 0],
                    color: "#FBBF24",
                    transition: { duration: 0.3 }
                  }}
                  href="#"
                  className="text-white transition-all duration-300 p-2 relative"
                >
                  <span className="absolute inset-0 rounded-full bg-gray-800 opacity-0 transition-all duration-300 group-hover:opacity-30"></span>
                  <Icon size={28} />
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
