const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            About <span className="text-primary">VoltAIbOT</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovating the future of smart home security across India.
          </p>
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Headquartered in <strong>Bangalore</strong>, VoltAIbOT is a leading
            distributor and provider of <strong>smart digital door lock systems</strong> and
            <strong> integrated home security solutions</strong> in India. With over{" "}
            <strong>87,000 successful installations</strong> across homes, apartments,
            and commercial spaces, VoltAIbOT has earned the trust of customers nationwide.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Our mission is to make every Indian home{" "}
            <span className="text-primary font-semibold">
              smarter, safer, and more connected
            </span>{" "}
            through advanced design, reliable performance, and a seamless user experience.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Built on a foundation of <strong>innovation</strong> and{" "}
            <strong>precision engineering</strong>, VoltAIbOT combines{" "}
            <strong>biometric access</strong>, <strong>PIN</strong>,{" "}
            <strong>RFID card</strong>, <strong>key</strong>, and{" "}
            <strong>mobile app control</strong> — all powered by{" "}
            <strong>cloud-based monitoring</strong> — redefining how modern India secures its spaces.
          </p>
        </div>

        {/* Product Range */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Our Product Range</h3>
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all">
              <h4 className="text-xl font-semibold mb-2 text-primary">
                Smart Door Locks
              </h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
                <li>Fingerprint, passcode, RFID, and mobile app access</li>
                <li>Auto-lock and remote unlock features</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all">
              <h4 className="text-xl font-semibold mb-2 text-primary">
                Video Doorbell Systems
              </h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
                <li>HD camera with motion detection</li>
                <li>Two-way communication for enhanced security</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose VoltAIbOT */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Why Choose VoltAIbOT</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Installation by UC-certified professionals",
              "24/7 Service Support across 25+ cities",
              "Adaptive Safety Intelligence – learns user behavior for smarter protection",
              "1-Year Warranty & Lifetime App Support",
            ].map((point, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <p className="text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline Section */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-2xl md:text-3xl font-bold">
              Empowering Homes. <br />
              <span className="text-primary">Protecting What Matters Most.</span>
            </p>
            <p className="text-muted-foreground">
              VoltAIbOT stands for innovation, intelligence, and trust — redefining
              home security for a smarter India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
