import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Moon, Sun } from "lucide-react"; // Icons for light/dark mode toggle

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_txxya9b", // Replace with your EmailJS Service ID
        "template_i10n3lr", // Replace with your EmailJS Template ID
        formData,
        "oQTeHX0ydKXyq1b9R" // Replace with your EmailJS Public Key
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => setLoading(false));
  };

  // Toggle Dark Mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      {/* Dark Mode Toggle Button */}
      <div className="fixed top-5 right-5">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
        >
          {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-800" />}
        </button>
      </div>

      {/* Contact Info Section */}
     <motion.section
  className="container mx-auto py-16 px-6 text-center"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <h2 className="text-4xl font-bold mb-6 dark:text-white">Contact Us</h2>
  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
    We'd love to hear from you! Get in touch with us for inquiries, collaborations, or just to say hello.
  </p>
</motion.section>

<motion.div
  className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  {/* Left - Contact Details */}
  <div className="space-y-6">
    {/* Address Card */}
    <a
      href="https://www.google.com/maps/search/BS+Group+Srl+di+Ballarin+Simone"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-lg transition"
    >
      <span className="text-2xl">📍</span>
      <div>
        <h3 className="text-xl font-semibold dark:text-white">Address</h3>
        <p className="text-gray-600 dark:text-gray-300">123 Business Street, City, Country</p>
      </div>
    </a>

    {/* Phone Card */}
    <a
      href="tel:+1234567890"
      className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-lg transition"
    >
      <span className="text-2xl">📞</span>
      <div>
        <h3 className="text-xl font-semibold dark:text-white">Phone</h3>
        <p className="text-gray-600 dark:text-gray-300">+123 456 7890</p>
      </div>
    </a>

    {/* Email Card */}
    <a
      href="mailto:contact@bsgroupsrl.com"
      className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-lg transition"
    >
      <span className="text-2xl">✉️</span>
      <div>
        <h3 className="text-xl font-semibold dark:text-white">Email</h3>
        <p className="text-gray-600 dark:text-gray-300">contact@bsgroupsrl.com</p>
      </div>
    </a>
  </div>
  
  {/* Right - Contact Form */}
  <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold mb-4 dark:text-white">Send Us a Message</h3>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-yellow-400 dark:bg-gray-800 dark:text-white"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-yellow-400 dark:bg-gray-800 dark:text-white"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        required
        value={formData.message}
        onChange={handleChange}
        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-yellow-400 dark:bg-gray-800 dark:text-white"
      />
      <button
        type="submit"
        className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition flex items-center justify-center"
      >
        {loading ? (
          <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0l3 3-3 3V4a6 6 0 00-6 6H4z"
            ></path>
          </svg>
        ) : (
          "Send Message"
        )}
      </button>
      {status === "success" && <p className="text-green-500 mt-2">Message sent successfully!</p>}
      {status === "error" && <p className="text-red-500 mt-2">Failed to send message. Try again.</p>}
    </form>
  </div>
</motion.div>


      {/* Google Maps Embed */}
      <motion.div
        className="container mx-auto px-6 py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-center dark:text-white">📍 Our Location</h3>
              <iframe
                  className="w-full h-80 rounded-lg shadow-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1256.342!2d11.0619257!3d45.4692016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781fe077ecee0c9%3A0x7c60d1410887e8e7!2sBS%20Group%20Srl!5e0!3m2!1sen!2sus!4v1700000000000"
                  allowFullScreen
                  loading="lazy">
              </iframe>

      </motion.div>
    </>
  );
}

export default Contact;
