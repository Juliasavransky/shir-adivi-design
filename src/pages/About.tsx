import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  const metrics = [
    { number: "20+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Brands Worked With" },
    { number: "95%", label: "Client Satisfaction" },
  ];

  const skills = [
    "Brand Identity Design",
    "Logo Design",
    "Print Design", 
    "Marketing Materials",
    "Packaging Design",
    "Visual Strategy",
    "Art Direction",
    "Client Consultation",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Shir</h1>
          <p className="text-xl text-muted-foreground">
            Two decades of transforming ideas into visual excellence
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{metric.number}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </Card>
          ))}
        </div>

        {/* Biography */}
        <div className="space-y-8 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">The Journey</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                With over two decades in the design industry, I've had the privilege of working with 
                brands across every stage of their journey—from ambitious startups to established 
                enterprises looking to reinvent their visual presence.
              </p>
              
              <p>
                My approach combines strategic thinking with creative execution, ensuring that every 
                design decision serves both aesthetic and business objectives. Whether crafting a 
                complete brand identity or designing a single marketing piece, I believe in the power 
                of thoughtful design to communicate, connect, and convert.
              </p>
              
              <p>
                Throughout my career, I've specialized in brand identity development, print design, 
                and marketing materials that don't just look beautiful—they deliver measurable results. 
                My work has helped businesses increase brand recognition, improve customer engagement, 
                and ultimately drive growth.
              </p>
              
              <p>
                Today, I'm expanding my practice to include business guidance and designer mentoring, 
                sharing the insights and strategies I've developed over years of successful client 
                partnerships and creative problem-solving.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Core Expertise</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <Card className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-none">
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl font-medium text-foreground mb-4 italic">
              "Great design isn't just about making things look good—it's about making them work better."
            </p>
            <footer className="text-muted-foreground">
              — Shir Adivi
            </footer>
          </blockquote>
        </Card>
      </div>
    </div>
  );
};