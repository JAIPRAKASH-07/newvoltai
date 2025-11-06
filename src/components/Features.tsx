import { Fingerprint, Wifi, Shield, Smartphone, Key, Clock } from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Multi-Access Methods",
    description: "Unlock with Face ID, fingerprint, PIN, card, app, or traditional key",
  },
  {
    icon: Wifi,
    title: "Smart Home Integration",
    description: "Works seamlessly with Alexa, Google Assistant, and SmartLife app",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Advanced encryption and real-time access monitoring for peace of mind",
  },
  {
    icon: Smartphone,
    title: "Remote Access Control",
    description: "Share temporary or permanent access from anywhere via the mobile app",
  },
  {
    icon: Key,
    title: "Emergency Backup",
    description: "Type-C emergency charging and mechanical key override for reliability",
  },
  {
    icon: Clock,
    title: "Easy Installation",
    description: "Installs in minutes over your existing deadbolt - no drilling required",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Smart Locks That <span className="text-primary">Simplify</span> Life,
            <br />
            Not Complicate It
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of security, convenience, and cutting-edge technology
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Tagline Section */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-2xl md:text-3xl font-bold">
              A tap. A touch. A glance.
              <br />
              <span className="text-primary">That's all it takes to feel safe.</span>
            </p>
            <p className="text-muted-foreground">
              Smart locking isn't about going keyless. It's about giving your space a voice — one that knows who belongs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
