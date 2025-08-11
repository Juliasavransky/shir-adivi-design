import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/stores/useLanguage"


export const BusinessGuidance = () => {
  const { lang } = useLanguage()
  return (
    <div className="relative min-h-screen py-20">
      <div
        className='absolute bg-local top-1/2 left-1/2 bg-no-repeat inset-0 bg-size-[auto_600px] bg-[url("/src/assets/images/comingSoonD.png")] '
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="p-12 bg-gradient-to-r from-primary/5 to-accent/5 border-none">
          <h1 className="text-5xl font-handwriting  md:text-6xl font-bold mb-6">Coming Soon</h1>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Business Guidance</h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Strategic consulting services for brands ready to elevate their visual presence 
            and market positioning. Coming soon with comprehensive business development support.
          </p>
          
       
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              This service will include brand strategy, visual positioning, market analysis, 
              and comprehensive business development guidance.
            </p>

            <Button asChild variant="outline" size="lg" className="shadow-lg mt-4">
              <Link to="/contact">
                Sign in to Get Notified When Available
              </Link>
            </Button>
            
          </div>
        </Card>
      </div>
    </div>
  );
};