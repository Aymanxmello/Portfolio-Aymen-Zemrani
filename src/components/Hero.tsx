import { ArrowRight, Download, Github, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TitleRotator from "./TitleRotator";




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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
      
      {/* Floating Code Elements */}
      <div className="absolute top-10 left-5 text-primary/20 text-sm font-mono animate-pulse">
        &lt;div&gt;
      </div>
      <div className="absolute top-20 left-20 text-primary/20 text-sm font-mono animate-pulse">
        if (success) {'{'} run(); {'}'}
      </div>
      <div className="absolute top-32 right-20 text-accent/30 text-xs font-mono animate-bounce">
        const developer = true;
      </div>
      <div className="absolute bottom-40 left-32 text-primary/25 text-sm font-mono animate-pulse delay-300">
        function() {'{'}
      </div>
      <div className="absolute top-64 left-10 text-accent/20 text-xs font-mono animate-bounce delay-500">
        npm install
      </div>
      <div className="absolute bottom-32 right-32 text-primary/30 text-sm font-mono animate-pulse delay-700">
        git commit -m
      </div>
      <div className="absolute top-48 right-10 text-accent/25 text-sm font-mono animate-pulse">
        &lt;/div&gt;
      </div>
      <div className="absolute top-72 left-1/3 text-primary/20 text-xs font-mono animate-bounce">
        console.log("Hello World");
      </div>
      <div className="absolute bottom-20 left-16 text-accent/30 text-sm font-mono animate-pulse delay-500">
        &lt;section&gt;
      </div>
      <div className="absolute top-1/2 right-1/4 text-primary/25 text-sm font-mono animate-bounce">
        &lt;/section&gt;
      </div>
      <div className="absolute bottom-10 left-1/2 text-accent/20 text-xs font-mono animate-pulse">
        return true;
      </div>
      <div className="absolute top-1/4 right-1/3 text-primary/30 text-sm font-mono animate-bounce delay-300">
        yarn start
      </div>
      <div className="absolute top-3/4 left-20 text-accent/25 text-xs font-mono animate-pulse delay-700">
        &lt;h1&gt;Code&lt;/h1&gt;
      </div>
      <div className="absolute top-10 right-1/2 text-primary/20 text-sm font-mono animate-bounce">
        export default App;
      </div>
      
      {/* Animated Geometric Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-bounce delay-200"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent/30 rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-primary/50 rounded-full animate-pulse delay-1000"></div>
      
      {/* Tech Icons Animation */}
      <div className="absolute top-16 right-16 opacity-10">
        <div className="animate-spin-slow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 5.26L19 4L20 8L16.74 9.09L18 13L14 14L12 18L10 14L6 13L7.26 9.09L4 8L5 4L8.91 5.26L12 2Z" fill="currentColor" className="text-primary"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center" style={{ marginTop: '50px' }}>
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-text-primary leading-tight">
                Hi, I'm{' Aymen '}
                <span className="text-transparent bg-hero-gradient bg-clip-text animate-float">
                  Zemrani
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-text-secondary">
                <TitleRotator />
              </h2>
              <p className="text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed">
                I craft exceptional digital experiences through clean code and innovative design. 
                Specializing in modern web technologies with a passion for creating user-centered solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 animate-slide-in-left">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">10+</div>
                <div className="text-xs sm:text-sm text-text-secondary">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">3+</div>
                <div className="text-xs sm:text-sm text-text-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">10+</div>
                <div className="text-xs sm:text-sm text-text-secondary">Happy Clients</div>
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
              <a 
                href="/Aymen_Zemrani_CV.pdf"   // put your PDF path here (e.g. in /public folder)
                download="Aymen-Zemrani-CV.pdf"
              >
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="mailto:aymenzemrani@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-text-secondary hover:text-primary"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </a>

              <a 
                href="https://github.com/Aymanxmello" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-text-secondary hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>

              <a 
                href="https://www.linkedin.com/in/aymen-zemrani-8b077532b/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-text-secondary hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>

              <a 
                href="https://www.instagram.com/ayman_x_mello/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-text-secondary hover:text-primary"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
            </div>

          </div>

          {/* Portrait */}
          <div className="lg:justify-self-end order-first lg:order-last">
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl hover:scale-105 transition-transform duration-500">
                <img 
                  src="src/assets/my_poster_axm_profil.jpg"
                  alt="Aymen Zemrani - Developer & Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-card rounded-2xl border border-border flex items-center justify-center shadow-lg animate-float">
                <div className="text-center">
                  <div className="text-sm sm:text-lg font-bold text-primary">3+</div>
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