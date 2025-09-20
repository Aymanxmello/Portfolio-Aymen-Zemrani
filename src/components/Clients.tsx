import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Clients = () => {
  const clients = [
    { name: 'UM6P', logo: '/logo/1.png' },
    { name: 'Elkhawarizmi', logo: '/logo/j.png' },
    { name: 'DesignPro', logo: '/logo/1HP.png' },
    { name: 'WebSolutions', logo: '/logo/craiyon_085820_image.png' },
    { name: 'AppMakers', logo: '/logo/craiyon_090156_image.png' },
    { name: 'CloudTech', logo: '/logo/craiyon_090502_image.png' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'REDOUANE ENNEJMI',
      role: 'Director of the Elkhawarizmi Center',
      content: 'و شكرا جزيلا سي أيمن، وقت ما كنحتاجوك كنلقاوك، بالرغم من الوقت لي عندك عامر حتا نتا كنلقاوك مزال مآمن بالفكرة و كدعمها باش ما قدرتي',
      rating: 5,
      avatar: '/20.jpg',
    },
    {
      id: 2,
      name: 'OUSSAMA RIZQUI',
      role: 'French Teacher',
      content: 'الله يعطيك الصحة ما عندي ما نقول، برافو عليك، كنتمنى ليك مزيد ديال التوفيق و النجاح فالمسار ديالك',
      rating: 5,
      avatar: '/placeholder.svg',
    },
    {
      id: 3,
      name: 'ACHRAF HAKIK',
      role: 'Teacher Mathematic & Physics',
      content: 'الله يعطيك الصحة، ديزاين فالمستوى العالي، كلشي منسق ومضبوط. برافو عليك',
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
          <h3 className="text-xl font-semibold text-text-primary text-center mb-8">
            Companies I've Worked With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-4 bg-card border border-border rounded-lg hover:bg-card-hover transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={client.logo} // <-- your PNG image URL here
                  alt={client.name}
                  className="w-36 h-12 object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-text-secondary">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
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