import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern, responsive e-commerce platform built with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, and admin dashboard.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/placeholder.svg',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills. Built with modern web technologies and optimized for performance.',
      image: '/placeholder.svg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      github: '#',
      live: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with location-based forecasts, interactive maps, and weather alerts.',
      image: '/placeholder.svg',
      technologies: ['JavaScript', 'Weather API', 'Chart.js'],
      github: '#',
      live: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A showcase of my recent work, featuring modern web applications 
            built with cutting-edge technologies and best practices.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects
            .filter(project => project.featured)
            .map((project) => (
              <Card key={project.id} className="group bg-card border-border hover:bg-card-hover transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden">
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">{project.title}</h3>
                  <p className="text-text-secondary mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))
                    }
                  </div>

                  <div className="flex gap-3">
                    <Button variant="ghost" size="sm" className="text-text-secondary hover:text-primary">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="ghost" size="sm" className="text-text-secondary hover:text-primary">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects
            .filter(project => !project.featured)
            .map((project) => (
              <Card key={project.id} className="group bg-card border-border hover:bg-card-hover transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden">
                <div className="relative h-32 bg-muted overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{project.title}</h3>
                  <p className="text-sm text-text-secondary mb-3 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="text-text-secondary hover:text-primary p-1">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-text-secondary hover:text-primary p-1">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
