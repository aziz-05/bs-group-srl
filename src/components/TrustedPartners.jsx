import { motion } from "framer-motion";

const partners = [
  { id: 1, name: "Partner 1", logo: "/images/partners/partner1.png" },
  { id: 2, name: "Partner 2", logo: "/images/partners/partner2.png" },
  { id: 3, name: "Partner 3", logo: "/images/partners/partner3.png" },
  { id: 4, name: "Partner 4", logo: "/images/partners/partner4.png" },
  { id: 5, name: "Partner 5", logo: "/images/partners/partner5.png" },
];

function TrustedPartners() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">
          Our <span className="text-yellow-500">Trusted Partners</span>
        </h2>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              className="p-4 bg-gray-100 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TrustedPartners;
