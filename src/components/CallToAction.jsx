import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wrench, Building, Users } from "lucide-react";

function CallToAction() {
  const services = [
    {
      icon: <Wrench size={40} />,
      title: "High-Quality Construction",
      description: "We deliver top-notch construction services with precision and efficiency.",
    },
    {
      icon: <Building size={40} />,
      title: "Modern Architecture",
      description: "Our designs blend innovation and functionality for stunning results.",
    },
    {
      icon: <Users size={40} />,
      title: "Client-Centric Approach",
      description: "We collaborate closely with our clients to ensure satisfaction and excellence.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why Choose <span className="text-yellow-500">BS Group SRL?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-yellow-500 flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/services" 
            className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
