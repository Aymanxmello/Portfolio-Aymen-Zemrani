import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroPortrait from '@/assets/hero-portrait.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-section-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-text-primary">
                Hi, I'm{' '}
                <span className="text-transparent bg-hero-gradient bg-clip-text">
                  Alex Johnson
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-text-secondary">
                Developer & Designer
              </h2>
              <p className="text-lg text-text-secondary max-w-xl">
                I craft exceptional digital experiences through clean code and innovative design. 
                Specializing in modern web technologies with a passion for creating user-centered solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-text-secondary">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-text-secondary">Happy Clients</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToProjects}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToContact}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-text-secondary hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-text-secondary hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-text-secondary hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src={heroPortrait} 
                  alt="Alex Johnson - Developer & Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-card rounded-2xl border border-border flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">3+</div>
                  <div className="text-xs text-text-secondary">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;