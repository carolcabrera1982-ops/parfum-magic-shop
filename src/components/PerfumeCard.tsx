import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";

interface PerfumeCardProps {
  name: string;
  brand: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  description: string;
  category: "Hombre" | "Mujer" | "Unisex";
}

const PerfumeCard = ({ name, brand, originalPrice, salePrice, image, description, category }: PerfumeCardProps) => {
  const discount = Math.round(((originalPrice - salePrice) / originalPrice) * 100);

  return (
    <Card className="perfume-card rounded-lg overflow-hidden group animate-scale-in">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={`${brand} ${name}`}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <Badge variant="secondary" className="bg-primary text-primary-foreground font-medium">
            -{discount}%
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            className="bg-background/80 hover:bg-background text-foreground hover:text-primary rounded-full"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute top-3 left-3">
          <Badge variant="outline" className="border-primary text-primary bg-background/80">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <p className="text-sm text-primary font-medium">{brand}</p>
          <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-smooth">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
        
        <div className="flex items-center gap-2 mt-4">
          <span className="text-2xl font-bold text-foreground">
            S/ {salePrice}
          </span>
          <span className="text-sm text-muted-foreground line-through">
            S/ {originalPrice}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold transition-smooth"
          size="lg"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PerfumeCard;