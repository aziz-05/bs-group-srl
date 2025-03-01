import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">BS Group SRL</h2>
          <p className="text-gray-400">Building the future with innovation and excellence.</p>
          <div className="flex space-x-4 mt-4"><LanguageSwitcher /></div>
              </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-yellow-400 transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-gray-400 space-y-2">
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>123 Construction Ave, City, Country</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-yellow-400" />
              <a href="tel:+1234567890" className="hover:text-yellow-400">+123 456 7890</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-400" />
              <a href="mailto:info@bsgroup.com" className="hover:text-yellow-400">info@bsgroup.com</a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 rounded-full hover:bg-yellow-400 transition">
              <FaFacebookF className="text-white hover:text-black" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 rounded-full hover:bg-yellow-400 transition">
              <FaInstagram className="text-white hover:text-black" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 rounded-full hover:bg-yellow-400 transition">
              <FaLinkedinIn className="text-white hover:text-black" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        © 2025 BS Group SRL. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
