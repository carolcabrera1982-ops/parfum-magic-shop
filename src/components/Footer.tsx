import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 animate-slide-in-left">
            <h3 className="text-2xl font-display font-bold text-primary">
              The Parfamcitos
            </h3>
            <p className="text-muted-foreground">
              Tu destino para fragancias exclusivas con los mejores precios del mercado.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-lg font-semibold text-foreground">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#inicio" className="hover:text-primary transition-smooth">Inicio</a>
              </li>
              <li>
                <a href="#perfumes" className="hover:text-primary transition-smooth">Perfumes</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary transition-smooth">Contacto</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">Términos y Condiciones</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-semibold text-foreground">Categorías</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-smooth">Perfumes para Hombre</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">Perfumes para Mujer</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">Perfumes Unisex</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">Ofertas Especiales</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-lg font-semibold text-foreground">Contacto</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+51 999 888 777</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@parfamcitos.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Lima, Perú</span>
              </div>
            </div>
            
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold">
              Contáctanos por WhatsApp
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 The Parfamcitos. Todos los derechos reservados.</p>
          <p className="text-sm mt-2">
            Precios especiales con descuentos de S/50 en perfumes seleccionados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;