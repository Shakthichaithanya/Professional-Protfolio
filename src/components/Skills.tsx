import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: [
        { name: "Java", level: 85 },
        { name: "Spring Boot", level: 82 },
        { name: "Spring Security", level: 70 },
        { name: "RESTful APIs", level: 88 },
        { name: "OAuth2.0", level: 60 },
      ],
    },
    {
      title: "Microservices",
      skills: [
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 72 },
        { name: "Kubernetes", level: 40 },
        { name: "Api Gateway", level: 67 },
        { name: "Circuit Breaker", level: 60 },
        { name: "RabbitMQ", level: 70 },
        { name: "Load Balancer", level: 40 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "SQL", level: 80 },
        { name: "Redis", level: 50 },
        { name: "MongoDB", level: 40 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML5/CSS", level: 66 },
        { name: "JavaScript", level: 70 },
        { name: "TypeScript", level: 50 },
        { name: "React", level: 61 },
        { name: "Tailwind CSS", level: 20 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Figma", level: 38 },
        { name: "AI tools", level: 90 },
        { name: "Postman", level: 76 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-gray-50 rounded-xl shadow-lg p-6 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-6 text-center">
                {category.title}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="space-y-5"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skillIndex} variants={itemVariants}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-blue-600 h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
