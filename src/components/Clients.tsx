import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Clients = () => {
  const clients = [
    { name: 'UM6P', logo: '/placeholder.svg' },
    { name: 'Elkhawarizmi', logo: '/placeholder.svg' },
    { name: 'DesignPro', logo: '/placeholder.svg' },
    { name: 'WebSolutions', logo: '/placeholder.svg' },
    { name: 'AppMakers', logo: '/placeholder.svg' },
    { name: 'CloudTech', logo: '/placeholder.svg' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CTO at TechCorp',
      content: 'Alex delivered exceptional work on our e-commerce platform. The code quality is outstanding and the project was completed ahead of schedule.',
      rating: 5,
      avatar: '/placeholder.svg',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder at StartupXYZ',
      content: 'Working with Alex was a fantastic experience. His attention to detail and technical expertise helped us launch our product successfully.',
      rating: 5,
      avatar: '/placeholder.svg',
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Product Manager at DesignPro',
      content: 'Alex transformed our design concepts into a beautiful, functional website. Highly recommended for any web development project.',
      rating: 5,
      avatar: '/placeholder.svg',
    },
  ];

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Trusted by <span className="text-primary">Amazing Clients</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            I've had the privilege of working with some incredible companies and individuals, 
            helping them bring their digital visions to life.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-20 animate-fade-in">
          <h3 className="text-xl font-semibold text-text-primary text-center mb-8">Companies I've Worked With</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="group flex items-center justify-center p-6 bg-card border border-border rounded-lg hover:bg-card-hover transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-12 bg-muted rounded flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-sm font-medium text-text-secondary">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="animate-slide-in-left">
          <h3 className="text-2xl font-semibold text-text-primary text-center mb-12">What Clients Say</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="bg-card border-border hover:bg-card-hover transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 p-6 relative animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-text-secondary mb-6 italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">{testimonial.name}</div>
                    <div className="text-sm text-text-secondary">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 animate-slide-in-right">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-text-secondary">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-text-secondary">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-text-secondary">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-text-secondary">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;