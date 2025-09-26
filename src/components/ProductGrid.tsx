import { useState, useEffect } from "react";
import { getAllPerfumes, getFeaturedPerfumes, type Perfume } from "@/data/perfumes";
import PerfumeCard from "./PerfumeCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductGrid = () => {
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState<"Todos" | "Hombre" | "Mujer" | "Unisex">("Todos");

  useEffect(() => {
    const initialPerfumes = showAll ? getAllPerfumes() : getFeaturedPerfumes();
    setPerfumes(initialPerfumes);
  }, [showAll]);

  const filteredPerfumes = filter === "Todos" 
    ? perfumes 
    : perfumes.filter(perfume => perfume.category === filter);

  const categories = ["Todos", "Hombre", "Mujer", "Unisex"];

  return (
    <section id="perfumes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Nuestra <span className="text-primary">Colección</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fragancias exclusivas con precios especiales solo para ti
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category as any)}
              className={`px-6 py-2 ${
                filter === category 
                  ? "bg-primary text-primary-foreground shadow-gold" 
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              } transition-smooth`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPerfumes.map((perfume, index) => (
            <div 
              key={perfume.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PerfumeCard {...perfume} />
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {!showAll && getAllPerfumes().length > getFeaturedPerfumes().length && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            >
              Ver Más Perfumes
            </Button>
          </div>
        )}

        {showAll && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(false)}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            >
              Ver Menos
            </Button>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up">
            <div className="text-3xl font-display font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Fragancias</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl font-display font-bold text-primary mb-2">24h</div>
            <div className="text-muted-foreground">Entrega</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl font-display font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Originales</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-3xl font-display font-bold text-primary mb-2">S/50</div>
            <div className="text-muted-foreground">Descuento</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;