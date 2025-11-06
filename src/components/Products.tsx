import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Fingerprint, Wifi, Shield, Lock, Eye, Battery, Camera } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import productB03 from "@/assets/product-b03.jpg";
import productB05 from "@/assets/product-b05.jpg";
import productB29 from "@/assets/product-b29.jpg";
import productB50 from "@/assets/product-b50.jpg";
import productB60 from "@/assets/product-b60.jpg";
import productB80 from "@/assets/product-b80.jpg";
import { useNavigate } from "react-router-dom";
const products = [
  {
    id: "b03",
    name: "B-03 Sleek Compact Lock",
    image: productB03,
    price: 5999,
    features: [
      { icon: <Shield className="h-4 w-4 text-primary" />, text: "Aluminum Alloy Body" },
      { icon: <Fingerprint className="h-4 w-4 text-primary" />, text: "5 Sets Fingerprint" },
      { icon: <Battery className="h-4 w-4 text-primary" />, text: "AAAA Batteries" },
    ],
    available: false,
  },
  {
    id: "b05",
    name: "B-05 Glass Door Lock",
    image: productB05,
    price: 6999,
    features: [
      { icon: <Lock className="h-4 w-4 text-primary" />, text: "ABS Material" },
      { icon: <Wifi className="h-4 w-4 text-primary" />, text: "Bluetooth Enabled" },
      { icon: <Battery className="h-4 w-4 text-primary" />, text: "Type-C Charging" },
    ],
    available: true,
  },
  {
    id: "b29",
    name: "B-29 Sleek Compact Lock",
    image: productB29,
    price: 12999,
    features: [
      { icon: <Shield className="h-4 w-4 text-primary" />, text: "Waterproof Design" },
      { icon: <Fingerprint className="h-4 w-4 text-primary" />, text: "Fingerprint + Password" },
      { icon: <Battery className="h-4 w-4 text-primary" />, text: "4X AA Batteries" },
    ],
    available: false,
  },
  {
    id: "b50",
    name: "B50 3D Face Recognition",
    image: productB50,
    price: 13999,
    badge: "Advanced Tech",
    features: [
      { icon: <Camera className="h-4 w-4 text-primary" />, text: "3D Face ID" },
      { icon: <Battery className="h-4 w-4 text-primary" />, text: "4200mAh Battery" },
      { icon: <Lock className="h-4 w-4 text-primary" />, text: "Camera Display" },
    ],
    available: true,
  },
  {
    id: "b60",
    name: "B-60 Slim Wi-Fi Lock",
    image: productB60,
    price: 15999,
    badge: "Wi-Fi Enabled",
    features: [
      { icon: <Wifi className="h-4 w-4 text-primary" />, text: "Wi-Fi Connectivity" },
      { icon: <Battery className="h-4 w-4 text-primary" />, text: "5000mAh Battery" },
      { icon: <Fingerprint className="h-4 w-4 text-primary" />, text: "150 Fingerprints" },
    ],
    available: true,
  },
  {
    id: "b80",
    name: "B-80 Smart Push Pull Lock",
    image: productB80,
    price: 17999,
    badge: "Premium",
    features: [
      { icon: <Camera className="h-4 w-4 text-primary" />, text: "3D Face Recognition" },
      { icon: <Lock className="h-4 w-4 text-primary" />, text: "Push/Pull Design" },
      { icon: <Battery className="h-4 w-4 text-primary" />, text: "6300mAh Battery" },
    ],
    available: true,
  },
];

const Products = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <section id="products" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Choose Your <span className="text-primary">Perfect Lock</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From basic keyless entry to advanced facial recognition - find the right smart lock for your home
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Status Badge */}
              <div className="absolute top-4 left-4 z-10">
                {product.available ? (
                  <Badge className="bg-primary text-primary-foreground shadow-lg">
                    {product.badge || "Available Now"}
                  </Badge>
                ) : (
                  <Badge variant="destructive" className="shadow-lg">
                    Out of Stock
                  </Badge>
                )}
              </div>

              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        {feature.icon}
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border space-y-3">
                  <div className="text-2xl font-bold text-primary">
                    ₹{product.price.toLocaleString("en-IN")}
                    <span className="text-sm text-muted-foreground font-normal"> + GST</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      variant="hero"
                      className="flex-1"
                      disabled={!product.available}
                      onClick={() => addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      })}
                    >
                      {product.available ? "Add to Cart" : "Out of Stock"}
                    </Button>
                    <Button
                      variant="default"
                      size="lg"
                      className="w-half max-w-sm bg-green-600 hover:bg-green-700 text-white"
                      onClick={goToCheckout}
                    >
                      Buy Now
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setSelectedProduct(product)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
                          <DialogDescription>
                            {product.badge && (
                              <Badge className="mt-2">{product.badge}</Badge>
                            )}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto rounded-lg"
                          />
                          <div className="space-y-4">
                            <div>
                              <p className="text-3xl font-bold text-primary">
                                ₹{product.price.toLocaleString("en-IN")}
                              </p>
                              <p className="text-sm text-muted-foreground">+ GST</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Key Features:</h4>
                              <ul className="space-y-2">
                                {product.features.map((feature, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm">
                                    <div className="mt-1">{feature.icon}</div>
                                    <span>{feature.text}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Product Details:</h4>
                              <p className="text-sm text-muted-foreground">
                                Advanced smart lock with multiple access methods including {product.name.includes("3D") ? "3D facial recognition, " : ""}fingerprint, PIN code, RFID card, mobile app, and mechanical key backup. Bank-level encryption ensures your home security.
                              </p>
                            </div>

                            <Button
                              variant="hero"
                              size="lg"
                              className="w-full"
                              disabled={!product.available}
                              onClick={() => {
                                addToCart({
                                  id: product.id,
                                  name: product.name,
                                  price: product.price,
                                  image: product.image,
                                });
                              }}
                            >
                              {product.available ? "Add to Cart" : "Out of Stock"}
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
