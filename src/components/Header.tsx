
import { Lock, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CartDrawer from "@/components/CartDrawer";

const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Lock className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold">VoltAIBOT</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => handleNavClick("#products")} className="text-sm font-medium hover:text-primary transition-colors">
            Products
          </button>
          <button onClick={() => handleNavClick("#features")} className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </button>
          <button onClick={() => handleNavClick("#about")} className="text-sm font-medium hover:text-primary transition-colors">
            About
          </button>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <CartDrawer />
          <Button 
            variant="default" 
            className="hidden md:inline-flex"
            onClick={() => scrollToSection("#products")}
          >
            Shop Now
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            <button onClick={() => handleNavClick("#products")} className="text-sm font-medium hover:text-primary transition-colors text-left">
              Products
            </button>
            <button onClick={() => handleNavClick("#features")} className="text-sm font-medium hover:text-primary transition-colors text-left">
              Features
            </button>
            <button onClick={() => handleNavClick("#about")} className="text-sm font-medium hover:text-primary transition-colors text-left">
              About
            </button>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
            <Button 
              className="w-full"
              onClick={() => handleNavClick("#products")}
            >
              Shop Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
