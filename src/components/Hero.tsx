
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-32 overflow-hidden">
      <div className="portfolio-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-primary bg-primary/10 rounded-full">
              Laravel • PHP • Full Stack Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Creating elegant <br className="hidden md:block" /> 
              <span className="text-primary">web solutions</span> <br className="hidden md:block" />
              with Laravel
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              I'm a passionate Laravel developer who loves crafting clean, efficient and maintainable applications that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                onClick={scrollToProjects}
              >
                View My Work
                <ArrowRight size={18} />
              </motion.button>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-1 border border-gray-100 overflow-hidden">
              <div className="h-[460px] relative overflow-hidden rounded-xl">
                <div className="absolute top-0 left-0 right-0 h-7 bg-gray-100 flex items-center px-3 gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="pt-7 h-full bg-gray-900 overflow-hidden">
                  <pre className="text-xs text-gray-300 font-mono p-4 overflow-hidden">
                    <code>
                      {`<?php

namespace App\\Http\\Controllers;

use App\\Models\\Project;
use Illuminate\\Http\\Request;
use App\\Http\\Resources\\ProjectResource;

class ProjectController extends Controller
{
    /**
     * Display a listing of the projects.
     *
     * @return \\Illuminate\\Http\\Resources\\Json\\AnonymousResourceCollection
     */
    public function index()
    {
        return ProjectResource::collection(
            Project::latest()->paginate(10)
        );
    }

    /**
     * Store a newly created project in storage.
     *
     * @param  \\Illuminate\\Http\\Request  $request
     * @return \\Illuminate\\Http\\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'github_url' => 'nullable|url',
            'live_url' => 'nullable|url',
            'image' => 'nullable|image|max:2048',
        ]);

        $project = Project::create($validated);

        if ($request->hasFile('image')) {
            $project->addMediaFromRequest('image')
                ->toMediaCollection('project_images');
        }

        return new ProjectResource($project);
    }`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-8 -right-8 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl"></div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <a 
            href="#about" 
            className="flex flex-col items-center text-sm text-muted-foreground"
          >
            <span className="mb-2">Scroll down</span>
            <ChevronDown className="animate-bounce" size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
