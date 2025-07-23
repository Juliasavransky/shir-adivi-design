import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/stores/useLanguage"


export const BusinessGuidance = () => {
  const { lang } = useLanguage()
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="p-12 bg-gradient-to-r from-primary/5 to-accent/5 border-none">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Business Guidance</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Strategic consulting services for brands ready to elevate their visual presence 
            and market positioning. Coming soon with comprehensive business development support.
          </p>
          
          <div className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-lg font-medium mb-8">
            Coming Soon
          </div>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              This service will include brand strategy, visual positioning, market analysis, 
              and comprehensive business development guidance.
            </p>
            
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Get Notified When Available
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};