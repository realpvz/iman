
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  category: 'all' | 'laravel' | 'ecommerce' | 'api';
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Ghasedak24",
    description: "A full-featured e-commerce platform built with Laravel, featuring product management, cart functionality, payment processing, and an admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    tags: ["Laravel", "MySQL", "Vue.js", "Stripe", "Redis"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "ecommerce"
  },
  {
    id: 2,
    title: "RESTful API with Laravel",
    description: "A comprehensive RESTful API built with Laravel, featuring authentication, rate limiting, caching, and comprehensive documentation with Swagger.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    tags: ["Laravel", "API", "JWT", "Swagger", "MySQL"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "api"
  },
  {
    id: 3,
    title: "Content Management System",
    description: "A flexible CMS built with Laravel, featuring content management, user roles and permissions, media handling, and a clean admin interface.",
    image: "https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    tags: ["Laravel", "Livewire", "Alpine.js", "MySQL", "S3"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "laravel"
  },
  {
    id: 4,
    title: "Inventory Management System",
    description: "An inventory management system that helps businesses track stock levels, orders, sales, and deliveries, with detailed reporting and analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    tags: ["Laravel", "MySQL", "Vue.js", "Chart.js", "Excel Export"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "laravel"
  },
  {
    id: 5,
    title: "Marketplace Platform",
    description: "A multi-vendor marketplace platform built with Laravel, allowing multiple sellers to list products, process orders, and manage their own stores.",
    image: "https://images.unsplash.com/photo-1508501568077-d67a9717cae9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    tags: ["Laravel", "MySQL", "Vue.js", "Stripe Connect", "Redis"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "ecommerce"
  },
  {
    id: 6,
    title: "Real-time Chat Application",
    description: "A real-time chat application with Laravel, WebSockets, and Vue.js, featuring private messaging, group chats, read receipts, and file sharing.",
    image: "https://images.unsplash.com/photo-1581547848331-0a5cbc05122e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    tags: ["Laravel", "WebSockets", "Vue.js", "Redis", "MySQL"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "laravel"
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'laravel' | 'ecommerce' | 'api'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projectData 
    : projectData.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="content-section bg-white">
      <div className="portfolio-container">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-3 text-xs font-medium text-primary bg-primary/10 rounded-full"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subheading mx-auto"
          >
            A selection of my recent Laravel projects that showcase my skills and expertise
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'all' ? 'bg-primary text-white' : 'bg-secondary hover:bg-secondary/70'}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'laravel' ? 'bg-primary text-white' : 'bg-secondary hover:bg-secondary/70'}`}
            onClick={() => setFilter('laravel')}
          >
            Laravel
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'ecommerce' ? 'bg-primary text-white' : 'bg-secondary hover:bg-secondary/70'}`}
            onClick={() => setFilter('ecommerce')}
          >
            E-commerce
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'api' ? 'bg-primary text-white' : 'bg-secondary hover:bg-secondary/70'}`}
            onClick={() => setFilter('api')}
          >
            APIs
          </button>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="project-card card-hover"
            >
              <div className="relative h-52 bg-gray-100 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="inline-block bg-secondary/50 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
