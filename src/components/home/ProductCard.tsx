import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Artifact } from '@/data/artifacts';

interface ProductCardProps {
  product: Artifact;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      className="group relative bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
      whileHover={{ y: -5 }}
    >
      <div className="aspect-square overflow-hidden bg-muted relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
           <Button size="icon" variant="secondary" className="rounded-full">
             <Eye className="w-4 h-4" />
           </Button>
           <Button size="icon" className="rounded-full">
             <ShoppingCart className="w-4 h-4" />
           </Button>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg leading-tight">{product.name}</h3>
            <p className="text-xs text-muted-foreground">{product.subtitle}</p>
          </div>
          <div className="flex items-center gap-1 text-amber-500 text-xs font-medium bg-amber-500/10 px-2 py-1 rounded-full">
            <Star className="w-3 h-3 fill-current" />
            {product.rating}
          </div>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="font-mono text-lg font-semibold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <span className={`text-xs px-2 py-1 rounded-full border ${
            product.faction === 'Autobot' 
              ? 'border-red-500/20 text-red-500 bg-red-500/5' 
              : 'border-purple-500/20 text-purple-500 bg-purple-500/5'
          }`}>
            {product.faction}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

