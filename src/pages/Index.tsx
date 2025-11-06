import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import About from "@/components/About";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Products />
        <Features />
         <About/>
      </main>
     
      <Footer />
    </div>
  );
};

export default Index;
