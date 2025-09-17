import { Download, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const CV = () => {
  const handleDownloadCV = () => {
    // In a real implementation, this would download the actual CV file
    console.log('Downloading CV...');
  };

  const skills = {
    frontend: ['JavaScript', 'TypeScript', 'React', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    backend: ['Node.js', 'Python', 'Express.js', 'MongoDB', 'PostgreSQL', 'RESTful APIs'],
    tools: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code', 'Postman'],
    soft: ['Problem Solving', 'Team Leadership', 'Communication', 'Agile Methodologies']
  };

  return (
    <section id="cv" className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            My <span className="text-primary">Resume</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Comprehensive overview of my skills, experience, and achievements 
            in web development and design.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* CV Preview & Download */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="bg-card border-border p-6 text-center">
              <div className="mb-6">
                <div className="w-32 h-40 mx-auto bg-muted rounded-lg border-2 border-dashed border-border flex items-center justify-center mb-4">
                  <FileText className="h-12 w-12 text-text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Alex Johnson</h3>
                <p className="text-text-secondary">Full Stack Developer</p>
              </div>

              <Button 
                onClick={handleDownloadCV}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mb-4"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>

              <Button 
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Online
              </Button>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-card border-border p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Experience</span>
                  <span className="text-text-primary">3+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Projects</span>
                  <span className="text-text-primary">50+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Clients</span>
                  <span className="text-text-primary">25+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Satisfaction</span>
                  <span className="text-primary">100%</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Skills Overview */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-card border-border p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-6">Technical Skills</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-primary mb-3">Frontend Development</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {skills.frontend.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <h4 className="font-medium text-primary mb-3">Backend Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-3">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {skills.tools.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <h4 className="font-medium text-primary mb-3">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Education & Certifications */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Education</h3>
                <div>
                  <h4 className="font-medium text-text-primary">Bachelor of Computer Science</h4>
                  <p className="text-primary">University of Technology</p>
                  <p className="text-sm text-text-secondary">2018 - 2022</p>
                  <p className="text-sm text-text-secondary mt-2">Graduated Magna Cum Laude</p>
                </div>
              </Card>

              <Card className="bg-card border-border p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Certifications</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-text-primary text-sm">AWS Certified Developer</h4>
                    <p className="text-xs text-text-secondary">Amazon Web Services • 2023</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary text-sm">React Professional Certificate</h4>
                    <p className="text-xs text-text-secondary">Meta • 2022</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary text-sm">JavaScript Algorithms</h4>
                    <p className="text-xs text-text-secondary">freeCodeCamp • 2021</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Languages */}
            <Card className="bg-card border-border p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Languages</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="font-medium text-text-primary">English</div>
                  <div className="text-sm text-text-secondary">Native</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-text-primary">Spanish</div>
                  <div className="text-sm text-text-secondary">Fluent</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-text-primary">French</div>
                  <div className="text-sm text-text-secondary">Intermediate</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;