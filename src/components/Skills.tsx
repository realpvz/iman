
import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  percentage: number;
  delay: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, delay }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills = [
    { name: "HTML & CSS", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "Vue.js", percentage: 80 },
    { name: "Alpine.js", percentage: 85 },
    { name: "Tailwind CSS", percentage: 90 },
  ];

  const backendSkills = [
    { name: "PHP", percentage: 95 },
    { name: "Laravel", percentage: 98 },
    { name: "MySQL", percentage: 90 },
    { name: "RESTful APIs", percentage: 90 },
    { name: "Redis", percentage: 75 },
  ];

  return (
    <section id="skills" className="content-section bg-secondary/20">
      <div className="portfolio-container">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-3 text-xs font-medium text-primary bg-primary/10 rounded-full"
          >
            My Skills
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subheading mx-auto"
          >
            Here's a breakdown of my technical skills and proficiency in various web technologies
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Backend Development</h3>
            <div className="rounded-xl bg-white p-6 md:p-8 shadow-sm">
              {backendSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={0.2 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Frontend Development</h3>
            <div className="rounded-xl bg-white p-6 md:p-8 shadow-sm">
              {frontendSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={0.2 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center"
        >
          <div className="skills-card card-hover py-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png" className="h-12 mx-auto mb-4" alt="Laravel" />
            <h4 className="font-medium">Laravel</h4>
          </div>

          <div className="skills-card card-hover py-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" className="h-12 mx-auto mb-4" alt="PHP" />
            <h4 className="font-medium">PHP</h4>
          </div>

          <div className="skills-card card-hover py-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="h-12 mx-auto mb-4" alt="MySQL" />
            <h4 className="font-medium">MySQL</h4>
          </div>

          <div className="skills-card card-hover py-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="h-12 mx-auto mb-4" alt="MySQL" />
            <h4 className="font-medium">Redis</h4>
          </div>

          <div className="skills-card card-hover py-8">
            <img src="https://img.icons8.com/?size=512&id=WoopfRcDj3RF&format=png" className="h-12 mx-auto mb-4" alt="Tailwind CSS" />
            <h4 className="font-medium">Tailwind CSS</h4>
          </div>

          <div className="skills-card card-hover py-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="h-12 mx-auto mb-4" alt="Git" />
            <h4 className="font-medium">Git</h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
