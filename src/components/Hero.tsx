import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Smartphone, Lock } from "lucide-react";
import heroImage from "@/assets/hero-lock.jpg";

const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              Trusted by 87,000+ Homes Across India
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Experience{" "}
              <span className="text-primary">Keyless Entry</span> That Just Works
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Smart locks that install in minutes, integrate with your smart home, and keep your family secure with cutting-edge 3D facial recognition technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-base"
                onClick={() => scrollToSection("#products")}
              >
                Shop Smart Locks
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base"
                onClick={() => scrollToSection("#features")}
              >
                How It Works
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-border/40">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Smart App Control</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Easy Installation</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-primary/10 rounded-3xl blur-2xl opacity-40 animate-glow" />
            <img
              src={heroImage}
              alt="VoltAIBOT Smart Lock with 3D Facial Recognition"
              className="relative w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
