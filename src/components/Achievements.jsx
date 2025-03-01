import { motion } from "framer-motion";
import { FaTrophy, FaBuilding, FaUsers, FaProjectDiagram } from "react-icons/fa";

const achievements = [
  {
    id: 1,
    title: "50+ Successful Projects",
    description: "We have completed over 50 high-quality projects, delivering excellence every time.",
    icon: <FaBuilding className="text-yellow-500 text-5xl mx-auto" />,
  },
  {
    id: 2,
    title: "10+ Awards Won",
    description: "Recognized for our innovation and quality in construction services.",
    icon: <FaTrophy className="text-yellow-500 text-5xl mx-auto" />,
  },
  {
    id: 3,
    title: "200+ Satisfied Clients",
    description: "Customer satisfaction is at the core of our business, with over 200 happy clients.",
    icon: <FaUsers className="text-yellow-500 text-5xl mx-auto" />,
  },
  {
    id: 4,
    title: "30+ Ongoing Projects",
    description: "We are currently working on over 30 projects, maintaining our momentum in the industry.",
    icon: <FaProjectDiagram className="text-yellow-500 text-5xl mx-auto" />,
  },
];

function Achievements() {
  return (
    <section className="py-16 rounded-xl bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">
          Our <span className="text-yellow-500">Achievements</span>
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              className="p-6 bg-gray-800 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              {achievement.icon}
              <h3 className="text-2xl font-semibold mt-4">{achievement.title}</h3>
              <p className="text-gray-400 mt-2">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;
