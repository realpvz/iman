
import React from 'react';
import { motion } from 'framer-motion';
import { Code, FileCode, GraduationCap, History } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="content-section bg-white">
      <div className="portfolio-container">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-3 text-xs font-medium text-primary bg-primary/10 rounded-full"
          >
            About Me
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            Who I Am
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subheading mx-auto"
          >
            A passionate Laravel and PHP developer with a dedication to code quality and user experience
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg">
              I'm a full-stack developer specializing in Laravel and PHP, with 5+ years of experience building robust web applications for a wide range of clients and industries.
            </p>
            <p>
              My approach combines technical excellence with a user-centered mindset, ensuring that every line of code contributes to a seamless and intuitive user experience. I'm passionate about clean architecture, maintainable code, and leveraging Laravel's ecosystem to build scalable solutions.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open-source projects, sharing knowledge through tech articles, or exploring the latest web development tools and techniques to stay at the cutting edge of the industry.
            </p>
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Let's work together
              </a>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="skills-card card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold">Laravel Expert</h3>
              </div>
              <p className="text-muted-foreground">
                Deep expertise in Laravel framework, from simple CRUD to complex enterprise applications.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="skills-card card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold">Certified Developer</h3>
              </div>
              <p className="text-muted-foreground">
                Laravel certified developer with additional credentials in web security and performance.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="skills-card card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileCode className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold">Full-Stack Developer</h3>
              </div>
              <p className="text-muted-foreground">
                Proficient in both backend (PHP, MySQL) and frontend (Vue.js, Alpine.js, Livewire).
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="skills-card card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <History className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold">5+ Years Experience</h3>
              </div>
              <p className="text-muted-foreground">
                Extensive professional experience working with enterprise clients and complex projects.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
