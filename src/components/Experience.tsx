import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Graphic Designer (Freelance)',
      company: 'AXM',
      location: 'Benguerir, Morocco',
      period: '2023 - Present',
      type: 'Remote',
      description: [
        'Designed and built strong brand identities for clients and personal branding projects',
        'Created professional visual content using Photoshop, Illustrator, and Canva',
        'Collaborated with clients to develop logos, social media assets, and marketing materials',
        'Delivered creative design solutions aligned with modern trends and client needs'
      ],
      technologies: ['Photoshop', 'Illustrator', 'Canva', 'Branding'],
      current: true,
    },
    {
      id: 2,
      title: 'Photographer',
      company: 'UM6P',
      location: 'Benguerir, Morocco',
      period: '2023 - 2024',
      type: 'On-site',
      description: [
        'Covered university events, capturing high-quality photos for official use',
        'Produced creative visual content for academic and cultural activities',
        'Worked closely with student organizations to document events and projects',
        'Developed photography skills in composition, lighting, and post-editing'
      ],
      technologies: ['Photography', 'Lightroom', 'Photoshop'],
      current: false,
    },
  ];

  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Flutter', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Kotlin', level: 90 },
  ];

  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            My professional journey through various roles and companies, 
            building expertise in modern web development technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={exp.id} className={`relative flex gap-8 animate-slide-in-left`} style={{ animationDelay: `${index * 200}ms` }}>
                    {/* Timeline Dot */}
                    <div className={`relative z-10 w-16 h-16 rounded-full border-4 flex items-center justify-center ${
                      exp.current 
                        ? 'bg-primary border-primary shadow-lg shadow-primary/25' 
                        : 'bg-card border-border'
                    }`}>
                      <div className={`w-6 h-6 rounded-full ${
                        exp.current ? 'bg-primary-foreground' : 'bg-primary'
                      }`}></div>
                    </div>

                    {/* Content */}
                    <Card className="flex-1 bg-card border-border hover:bg-card-hover transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      <div className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-text-primary mb-1">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 text-primary font-medium mb-2">
                              <span>{exp.company}</span>
                              {exp.current && (
                                <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                                  Current
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="text-sm text-text-secondary">
                            <div className="flex items-center gap-1 mb-1">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        <ul className="space-y-2 mb-4">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-text-secondary flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8 animate-slide-in-right">
            <Card className="bg-card border-border p-6 hover:bg-card-hover transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <h3 className="text-xl font-semibold text-text-primary mb-6">Key Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                      <span className="text-sm text-text-secondary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-card border-border p-6 hover:bg-card-hover transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-text-primary">Mobile Developer</h4>
                  <p className="text-sm text-primary">CMC Rabat</p>
                  <p className="text-sm text-text-secondary">Bac+2 • 2024-2026</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;