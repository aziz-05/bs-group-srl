import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Modern Office Building",
    image: "/images/projects/office.jpg",
    description: "A state-of-the-art office space designed for productivity and aesthetics.",
  },
  {
    id: 2,
    title: "Luxury Residential Complex",
    image: "/images/projects/residential.jpg",
    description: "A high-end residential project blending luxury with sustainability.",
  },
  {
    id: 3,
    title: "Industrial Warehouse",
    image: "/images/projects/warehouse.jpg",
    description: "An efficient warehouse with modern infrastructure for logistics and storage.",
  },
];

function RecentProjects() {
  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Our <span className="text-yellow-500">Recent Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-100 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <Link
                  to="/projects"
                  className="mt-4 inline-block text-yellow-500 font-bold hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RecentProjects;
