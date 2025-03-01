import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Skyline Constructions",
    image: "/images/testimonials/john.jpg",
    feedback:
      "BS Group SRL delivered our project on time with exceptional quality. Their professionalism and expertise made the entire process seamless.",
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "Project Manager, GreenBuild",
    image: "/images/testimonials/sarah.jpg",
    feedback:
      "Their attention to detail and commitment to excellence is unmatched. I highly recommend them for any construction project.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Owner, Elite Properties",
    image: "/images/testimonials/michael.jpg",
    feedback:
      "Working with BS Group SRL was a fantastic experience. Their team exceeded our expectations in every way possible.",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">
          What Our <span className="text-yellow-500">Clients Say</span>
        </h2>

        <motion.div
          className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaQuoteLeft className="text-yellow-500 text-3xl absolute top-4 left-4" />
          <p className="text-lg text-gray-700 italic">{testimonials[index].feedback}</p>
          <FaQuoteRight className="text-yellow-500 text-3xl absolute bottom-4 right-4" />

          <div className="mt-6">
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-16 h-16 rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold mt-3">{testimonials[index].name}</h3>
            <p className="text-gray-500">{testimonials[index].role}</p>
          </div>

          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={prevTestimonial}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
