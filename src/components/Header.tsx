import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-display font-bold text-primary">
            The Parfamcitos
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition-smooth">
            Inicio
          </a>
          <a href="#perfumes" className="text-foreground hover:text-primary transition-smooth">
            Perfumes
          </a>
          <a href="#contacto" className="text-foreground hover:text-primary transition-smooth">
            Contacto
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;