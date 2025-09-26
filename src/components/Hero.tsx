import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-perfume.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(20, 14, 4, 0.7), rgba(20, 14, 4, 0.8)), url(${heroImage})`,
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-foreground">
          The
          <span className="text-primary gradient-primary bg-clip-text text-transparent ml-4">
            Parfamcitos
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Descubre fragancias exclusivas con precios únicos. 
          Elegancia y sofisticación en cada gota.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold hover-lift px-8 py-3 text-lg font-medium"
          >
            Ver Colección
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
          >
            Contactanos
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;