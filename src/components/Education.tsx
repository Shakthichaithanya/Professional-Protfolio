import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Electrical Engineering",
      institution: "Sri Venkateswara College of Engineering, Tirupati",
      period: "2018-2022",
      description:
        "Graduated with distinction. Participated in various coding competitions.",
      icon: <GraduationCap size={24} />,
    },
    {
      degree: "Spring Security",
      institution: "Udemy",
      period: "2023",
      description:
        "Intensive 12-week program focused on modern web application security aspects and best practices.",
      icon: <BookOpen size={24} />,
    },
    {
      degree: "Docker & Kubernetes",
      institution: "Udemy",
      period: "2024",
      description:
        "Intensive 8-week program focused on Docker & Kubermetes. Learned how to deploy a application in cloud environment using Docker & K8s",
      icon: <BookOpen size={24} />,
    },
    {
      degree: "SQL Intermediate",
      institution: "Hackerrank",
      period: "2025",
      description:
        "certificate of Accomplishent validating expertise in SQL Skill test.",
      icon: <Award size={24} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-8 last:mb-0"
            >
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                    {item.icon}
                  </div>
                  {index !== education.length - 1 && (
                    <div className="w-0.5 h-full bg-blue-100 mx-auto mt-4"></div>
                  )}
                </div>

                <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-100 flex-grow mb-6">
                  <h3 className="text-xl font-bold text-blue-600">
                    {item.degree}
                  </h3>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium text-gray-700">
                      {item.institution}
                    </h4>
                    <span className="text-sm text-gray-500">{item.period}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
