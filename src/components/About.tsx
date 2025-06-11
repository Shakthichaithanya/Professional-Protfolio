import { motion } from "framer-motion";
import {
  User,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
              <p className="text-gray-700 mb-4 justify text-justify">
                I'm a passionate backend developer with over 3 years of
                experience in building scalable and secure applications using
                Java and Spring Boot. My journey in software development started
                with a deep curiosity about how systems work, which has grown
                into a career focused on solving real-world problems through
                robust backend solutions.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                I specialize in designing and developing RESTful APIs,
                implementing microservices architectures, and ensuring
                high-performance and resilient backend systems. With hands-on
                experience in Spring Security, JPA/Hibernate, and database
                management, I take pride in writing clean, maintainable, and
                efficient code.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                I'm always eager to learn and stay up-to-date with emerging
                technologies and best practices in backend engineering.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6">
                Personal Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <User className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Full Name</h4>
                    <p className="font-medium">Shakthi Chaithanya Tirupati</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Email</h4>
                    <p className="font-medium">
                      shakthichaithanya.tirupati@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Location</h4>
                    <p className="font-medium">Tirupati, Andhra Pradesh</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Calendar className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Birthday</h4>
                    <p className="font-medium">January 03, 2001</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Briefcase className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Experience</h4>
                    <p className="font-medium">3+ Years</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <GraduationCap className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Degree</h4>
                    <p className="font-medium">B.Tech Electrical Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
