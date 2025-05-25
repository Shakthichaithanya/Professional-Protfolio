import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <AnimatePresence>
        {loading ? (
          <Loader key="loader" />
        ) : (
          <>
            <Navbar />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Education />
              <Contact />
              <Footer />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;