import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { id: 1, value: 50, label: "Completed Projects" },
  { id: 2, value: 10, label: "Industry Awards" },
  { id: 3, value: 200, label: "Happy Clients" },
  { id: 4, value: 30, label: "Ongoing Projects" },
];

function Statistics() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Why Choose <span className="text-yellow-500">Us?</span></h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-4xl font-bold text-yellow-500">
                <CountUp end={stat.value} duration={3} />
                {stat.id !== 2 ? "+" : ""}
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Statistics;
