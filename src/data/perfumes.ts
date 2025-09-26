export interface Perfume {
  id: string;
  name: string;
  brand: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  description: string;
  category: "Hombre" | "Mujer" | "Unisex";
}

export const perfumes: Perfume[] = [
  {
    id: "1",
    name: "No. 5",
    brand: "Chanel",
    originalPrice: 450,
    salePrice: 400,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
    description: "El perfume más icónico del mundo. Una fragancia atemporal con notas florales y aldehídos.",
    category: "Mujer"
  },
  {
    id: "2", 
    name: "Sauvage",
    brand: "Dior",
    originalPrice: 380,
    salePrice: 330,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=400&fit=crop",
    description: "Fragancia masculina fresca e intensa con bergamota de Calabria y pimienta de Sichuan.",
    category: "Hombre"
  },
  {
    id: "3",
    name: "Eros",
    brand: "Versace", 
    originalPrice: 320,
    salePrice: 270,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop",
    description: "Perfume seductor con notas de menta, manzana verde y tonka bean. Pasión pura.",
    category: "Hombre"
  },
  {
    id: "4",
    name: "1 Million",
    brand: "Paco Rabanne",
    originalPrice: 300,
    salePrice: 250,
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop",
    description: "Fragancia dorada y seductora con canela, rosa y cuero blanco. Irresistible.",
    category: "Hombre"
  },
  {
    id: "5",
    name: "Armani Code",
    brand: "Giorgio Armani",
    originalPrice: 350,
    salePrice: 300,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop",
    description: "Elegancia italiana con bergamota, olivo y tonka bean. Sofisticación masculina.",
    category: "Hombre"
  },
  {
    id: "6",
    name: "Boss Bottled",
    brand: "Hugo Boss",
    originalPrice: 280,
    salePrice: 230,
    image: "https://images.unsplash.com/photo-1565661834013-d196ca46e14e?w=400&h=400&fit=crop",
    description: "Frescura y masculinidad con manzana, canela y sándalo. El perfume del éxito.",
    category: "Hombre"
  },
  {
    id: "7",
    name: "Miss Dior",
    brand: "Dior",
    originalPrice: 390,
    salePrice: 340,
    image: "https://images.unsplash.com/photo-1549298916-c6c5c6c4e9b1?w=400&h=400&fit=crop",
    description: "Romance parisino con rosa de Grasse, peonía y pachulí. Feminidad absoluta.",
    category: "Mujer"
  },
  {
    id: "8",
    name: "Black Opium",
    brand: "Yves Saint Laurent",
    originalPrice: 370,
    salePrice: 320,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop",
    description: "Adicción femenina con café negro, vainilla y flor blanca. Misteriosamente seductora.",
    category: "Mujer"
  },
  {
    id: "9",
    name: "Good Girl",
    brand: "Carolina Herrera",
    originalPrice: 360,
    salePrice: 310,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    description: "Dualidad femenina con jazmín, tuberosa y cacao. Dulzura rebelde.",
    category: "Mujer"
  }
];

export const getFeaturedPerfumes = () => perfumes.slice(0, 6);
export const getAllPerfumes = () => perfumes;