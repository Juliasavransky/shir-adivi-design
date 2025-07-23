import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/stores/useLanguage"


export const Portfolio = () => {
  const { lang } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "branding", label: "Branding" },
    { id: "print", label: "Print" },
    { id: "marketing", label: "Marketing" },
    { id: "ai-mockups", label: "AI Mockups" },
  ];

  const projects = [
    {
      id: 1,
      title: "Luxury Resort Brand Identity",
      category: "branding",
      subcategory: "Logo & Brand Kit",
      description: "Complete visual identity for boutique resort including logo, color palette, typography, and brand guidelines.",
      image: "/placeholder.svg",
      gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
      id: 2,
      title: "Artisan Coffee Packaging",
      category: "print",
      subcategory: "Packaging Design",
      description: "Premium coffee packaging design emphasizing organic, small-batch quality with sustainable materials.",
      image: "/placeholder.svg",
      gallery: ["/placeholder.svg", "/placeholder.svg"],
    },
    {
      id: 3,
      title: "Tech Startup Campaign",
      category: "marketing",
      subcategory: "Digital Advertising",
      description: "Multi-platform digital marketing campaign resulting in 300% increase in user engagement.",
      image: "/placeholder.svg",
      gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
      id: 4,
      title: "Product Lifestyle Mockups",
      category: "ai-mockups",
      subcategory: "AI Enhancement",
      description: "Studio product shots transformed into lifestyle contexts using AI-enhanced mockup generation.",
      image: "/placeholder.svg",
      gallery: ["/placeholder.svg", "/placeholder.svg"],
    },
    {
      id: 5,
      title: "Annual Report Design",
      category: "print",
      subcategory: "Corporate Publications",
      description: "96-page annual report featuring infographics, data visualization, and executive portraits.",
      image: "/placeholder.svg",
      gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
      id: 6,
      title: "Restaurant Menu Collection",
      category: "print",
      subcategory: "Menu Design",
      description: "Elegant menu designs for upscale restaurant chain, including seasonal variations.",
      image: "/placeholder.svg",
      gallery: ["/placeholder.svg", "/placeholder.svg"],
    },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated collection of projects spanning branding, print design, marketing, and innovative AI-enhanced visuals.
          </p>
        </div>

        {/* Category Filter */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="secondary" size="sm">
                        View Project
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {project.subcategory}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      {project.subcategory}
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                    <p className="text-muted-foreground text-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                        <img 
                          src={image} 
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};