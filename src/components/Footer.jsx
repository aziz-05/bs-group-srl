import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  // Retrieve the quick links array from translations
  const quickLinks = t("Footer.quickLinks.items", { returnObjects: true });

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">{t("Footer.companyInfo.name")}</h2>
          <p className="text-gray-400">{t("Footer.companyInfo.tagline")}</p>
          <div className="flex space-x-4 mt-4">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">{t("Footer.quickLinks.header")}</h3>
          <ul className="space-y-2">
            {quickLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">{t("Footer.contact.title")}</h3>
          <ul className="text-gray-400 space-y-2">
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>{t("Footer.contact.address")}</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-yellow-400" />
              <a href="tel:+1234567890" className="hover:text-yellow-400">
                {t("Footer.contact.phone")}
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-400" />
              <a href="mailto:info@bsgroup.com" className="hover:text-yellow-400">
                {t("Footer.contact.email")}
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 rounded-full hover:bg-yellow-400 transition"
            >
              <FaFacebookF className="text-white hover:text-black" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 rounded-full hover:bg-yellow-400 transition"
            >
              <FaInstagram className="text-white hover:text-black" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 rounded-full hover:bg-yellow-400 transition"
            >
              <FaLinkedinIn className="text-white hover:text-black" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        {t("Footer.copyright")}
      </div>
    </footer>
  );
}

export default Footer;
