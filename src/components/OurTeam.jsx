import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO & Founder",
    image: "/images/team/john.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Project Manager",
    image: "/images/team/jane.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Lead Engineer",
    image: "/images/team/michael.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Architect",
    image: "/images/team/emily.jpg",
  },
];

function OurTeam() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">
          Meet Our <span className="text-yellow-500">Team</span>
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default OurTeam;
