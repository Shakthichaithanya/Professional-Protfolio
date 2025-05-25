import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";
import image from "../assets/profile-photo.jpeg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block">Hello, I'm</span>
              <span className="text-blue-600 block mt-2">
                Shakthi Chaithanya Tirupati
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
              Software Developer
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              I craft exceptional digital experiences by building robust,
              scalable, and secure backend systems with clean code and efficient
              architecture. Let's bring your ideas to life with powerful backend
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-700 transition-colors"
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={300}
                >
                  Get In Touch
                </Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={200}
                >
                  View Projects
                </Link>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2,
        }}
        className="absolute bottom-10"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          <ChevronDown size={32} className="text-blue-600" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
