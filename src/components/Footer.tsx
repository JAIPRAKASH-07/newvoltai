import { Lock, Mail, MapPin, Phone ,Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Lock className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold">VoltAIBOT</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Smart Digital Door Lock Systems and Home Security Solutions. Trusted by 87,000+ homes across India.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#products" className="hover:text-primary transition-colors">
                  Smart Locks
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">
                  Facial Recognition
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">
                  Glass Door Locks
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Warranty
                </a>
              </li>
            </ul>
          </div>
            
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>VoltAIBOT Technologies Pvt. Ltd.<br />Bangalore, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+919188204498" className="hover:text-primary transition-colors">
                  +91 8108010170
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@VoltAIBOT.com" className="hover:text-primary transition-colors">
                  info@VoltaiBot.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe  className="h-4 w-4 text-primary flex-shrink-0" />
                <a href= "https://www.voltaibot.in" target="_blank"  className="hover:text-primary transition-colors">
                  www.voltAibOT.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} VoltAIBOT Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="mt-2"> Bangalore | Mumbai | Hyderabad | Delhi | Ahmedabad | Kolkata | Chennai | Jaipur | Chandigarh | Cochin | and rest of India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
