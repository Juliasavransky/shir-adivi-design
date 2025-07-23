import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Work", path: "/portfolio" },
    { name: "Mentorship", path: "/designer-mentoring" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-[84px] transition-all duration-300 ${
      scrolled 
        ? 'bg-english-violet/90 backdrop-blur-md' 
        : 'bg-gradient-to-b from-magenta-haze/5 to-non-photo-blue/5 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <Link 
            to="/" 
            className={`text-2xl font-bold transition-all duration-300 ${
              scrolled 
                ? 'text-non-photo-blue scale-90' 
                : 'text-primary scale-100'
            }`}
          >
            SA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg font-medium transition-all duration-300 tracking-wide hover:text-razzmatazz relative group ${
                  isActive(item.path) ? "text-razzmatazz" : "text-foreground"
                }`}
                style={{ letterSpacing: '0.5px' }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-razzmatazz transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b">
            <div className="flex flex-col space-y-2 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-lg font-medium transition-colors hover:text-razzmatazz ${
                    isActive(item.path) ? "text-razzmatazz bg-razzmatazz/5" : "text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};