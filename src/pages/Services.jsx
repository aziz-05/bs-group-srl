import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTools, FaHammer, FaBuilding, FaClipboardList } from "react-icons/fa";
import HeroBackground from "@/components/HeroBackground";
import CallToAction from "@/components/CallToAction";
import TrustedPartners from "../components/TrustedPartners";

const services = [
  {
    title: "Construction",
    description: "High-quality construction services for residential and commercial projects.",
    icon: <FaBuilding className="text-4xl text-yellow-500" />,
    image: "/images/construction.jpg",
    link: "/services/construction",
  },
  {
    title: "Renovation",
    description: "Transform and upgrade your spaces with expert renovation services.",
    icon: <FaHammer className="text-4xl text-yellow-500" />,
    image: "/images/renovation.jpg",
    link: "/services/renovation",
  },
  {
    title: "Consulting",
    description: "Professional consulting services to guide your construction projects.",
    icon: <FaClipboardList className="text-4xl text-yellow-500" />,
    image: "/images/consulting.jpg",
    link: "/services/consulting",
  },
  {
    title: "Maintenance",
    description: "Reliable maintenance solutions to keep your properties in top condition.",
    icon: <FaTools className="text-4xl text-yellow-500" />,
    image: "/images/maintenance.jpg",
    link: "/services/maintenance",
  },
];

function Services() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div>
      {/* Hero Section */}
      <HeroBackground title="Our Services" subtitle="High-quality solutions tailored for your needs" image="/images/services-bg.jpg" />

      {/* Services Section */}
      <section className="container mx-auto py-16 px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What We Offer
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  {service.icon}
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <button
                  className="text-blue-500 mt-4 hover:underline"
                  onClick={() => setExpanded(expanded === index ? null : index)}
                >
                  {expanded === index ? "Read Less" : "Read More"}
                </button>
                {expanded === index && (
                  <motion.div
                    className="mt-4 text-gray-700"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>We ensure top-notch service and client satisfaction.</p>
                    <Link to={service.link} className="text-yellow-500 font-bold mt-2 block">
                      Learn More →
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <CallToAction />
      <TrustedPartners/>
    </div>
  );
}

export default Services;
