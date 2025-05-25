import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Employee Management App",
      category: "Backend Web Application",
      image: "https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg",
      description: "The Employee Management System is a backend application that handles employee data and operations securely. The system is built with Java Spring Boot and uses Spring Security to ensure secure access to its resources via JWT token-based authentication. The system features role-based authorization to allow different levels of access based on user roles (Employee, Manager, Admin).",
      technologies: ["Java", "Spring Boot", "Spring Security", "SQL","JWT","OAuth2.0"],
      link: "https://shakthichaithanya.github.io/Employee-Management-System/",
      github: "https://github.com/Shakthichaithanya/Employee-Management-System"
    },
    {
      title: "ShortenUrl Backend Application",
      category: "Backend Web Application",
      image: "https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg",
      description: "This is a URL Shortener service built using Java Spring Boot, PostgreSQL, and Redis. It provides RESTful APIs for shortening URLs, retrieving the original URL, and tracking click statistics. The service also implements caching using Redis and supports scheduled cache updates via a cron job.",
      technologies: ["Java", "Spring Boot", "Redis", "PostgresSQL", "Gradle"],
      link: "https://shakthichaithanya.github.io/shortenurl-backend/",
      github: "https://github.com/Shakthichaithanya/shortenurl-backend"
    },
    {
      title: "TIC-TAC-TOE",
      category: "Frontend Application",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      description: "developed a basic tic-tac-toe game using react while learning react",
      technologies: ["JavaScript", "React", "React Hooks", "HTML/CSS"],
      link: "https://tic-tac-toe-shakthi.netlify.app/",
      github: "https://github.com/Shakthichaithanya/tic-tac-toe"
    },
    {
      title: "Portfolio Website",
      category: "Web Development",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      description: "A responsive portfolio website showcasing projects, skills, and professional experience.",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      link: "https://shakthichaithanya.github.io/Professional-Protfolio/",
      github: "https://github.com/Shakthichaithanya/Professional-Protfolio"
    },
    {
      title: "Authorization Server",
      category: "Backend Application",
      image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg",
      description: "Developing My Own authorization server using spring. This project is still in progress.",
      technologies: ["Java", "Spring Boot", "Spring Security","Spring Authorization Server","mongoDB", "SQL","JWT","OAuth2.0"],
      link: "https://github.com/Shakthichaithanya/authorization-server",
      github: "https://github.com/Shakthichaithanya/authorization-server"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-transform hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setActiveProject(activeProject === index ? null : index)}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    Details
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <AnimatePresence>
                  {activeProject === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-gray-100">
                        <p className="text-gray-600 mb-3">{project.description}</p>
                        <div>
                          <h4 className="font-medium mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex} 
                                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;