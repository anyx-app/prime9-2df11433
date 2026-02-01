import React from 'react';
import { Artifact } from '../../types';
import { Button } from '../../components/ui/Button';

interface ProductCardProps {
  product: Artifact;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-[#1f1f1f] transition-all hover:border-[#00aaff] hover:shadow-[0_0_20px_rgba(0,170,255,0.15)]">
      <div className="aspect-square w-full overflow-hidden bg-white/5 relative">
         <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.stock_level < 5 && (
           <div className="absolute top-2 right-2 bg-red-500/90 text-white text-[10px] px-2 py-0.5 rounded-sm font-bold uppercase tracking-widest backdrop-blur-sm border border-red-400">
             Critical Stock
           </div>
        )}
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
            <span className={`text-[10px] font-bold uppercase tracking-widest ${product.category === 'Autobot' ? 'text-red-400' : 'text-purple-400'}`}>
                {product.category}
            </span>
            <span className="text-xs text-gray-500 uppercase">{product.series}</span>
        </div>
        <h3 className="mb-2 text-lg font-bold text-white leading-tight group-hover:text-[#00aaff] transition-colors">{product.name}</h3>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-white">${product.price}</span>
          <Button size="sm" variant="secondary" className="group-hover:bg-[#00aaff] group-hover:border-[#00aaff] transition-all">
            Scan
          </Button>
        </div>
      </div>
    </div>
  );
}
