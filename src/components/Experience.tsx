import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Associate Consultant (Senior Backend Developer)",
      company: "Capgemini Technology Services ",
      period: "2024 - Present",
      description: "Developed and maintained server-side microservices using Java and Spring Boot, with a focus on designing robust RESTful APIs for efficient client-server communication. Wrote clean, modular code to implement core business logic, including data validation and error handling. Integrated security features such as authentication, authorization, and encryption, using tools like Keycloak. Enabled both synchronous and asynchronous communication between microservices via RabbitMQ. Contributed to backend logic for specific microservices, maintained and refactored codebases for readability, and resolved production issues with timely hotfixes. Also implemented workflows using Flowable BPM."
    },
    {
      title: "Senior Software Engineer",
      company: "Capgemini Technology Services",
      period: "2022 - 2024",
      description: "Developed RESTful web services for client-side applications and collaborated closely with front-end developers to ensure seamless integration with the user interface. Optimized the codebase by refactoring inefficient segments and eliminating redundancies. Wrote reusable, testable, and efficient Java code, and conducted unit testing to ensure high-quality delivery. Actively participated in sprint planning, client meetings, and project retrospectives to align development with business goals."
    },
    {
      title: "Software Intern",
      company: "Capgemini",
      period: "2022 - 2022",
      description: "I collaborated with a diverse team to achieve common goals and resolve issues related to our products and services. Working effectively in group settings, I contributed to the successful planning and completion of projects. I actively engaged in discussions to explore new opportunities and consistently managed my schedule to meet academic deadlines."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`flex flex-col md:flex-row items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2 mb-6 md:mb-0 md:px-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full">
                  <h3 className="text-xl font-bold text-blue-600">{exp.title}</h3>
                  <h4 className="text-lg font-medium text-gray-700 mb-2">{exp.company}</h4>
                  <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>

              <div className="md:w-0 flex justify-center">
                <div className="bg-blue-600 rounded-full p-3 shadow-lg z-10">
                  <Briefcase className="text-white" size={24} />
                </div>
              </div>

              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;