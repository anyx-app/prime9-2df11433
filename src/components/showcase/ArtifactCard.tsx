import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';
import { Transformer } from '../../types/transformer';
import { FactionBadge } from '../common/FactionBadge';
import { Button } from '../ui/Button';
import { useCart } from '../../context/CartContext';

interface ArtifactCardProps {
  artifact: Transformer;
  onViewDetails?: (id: string) => void;
}

export const ArtifactCard: React.FC<ArtifactCardProps> = ({ artifact, onViewDetails }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', payload: artifact });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <motion.div
      className="group relative bg-black/40 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm"
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      layout
    >
      {/* Card Glow Effect based on Faction */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none ${artifact.faction === 'autobot' ? 'bg-red-500' : 'bg-purple-500'}`}
      />

      {/* Image Container - The Transformation Logic */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-gray-900 to-black p-4">
        {/* Robot Mode (Default) */}
        <motion.img
          src={artifact.robotImage}
          alt={`${artifact.name} Robot Mode`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          variants={{
            rest: { opacity: 1, scale: 1, rotate: 0, filter: 'grayscale(0%)' },
            hover: { 
              opacity: 0, 
              scale: 1.1, 
              rotate: 5,
              filter: 'grayscale(100%)',
              transition: { duration: 0.4 }
            }
          }}
        />

        {/* Alt Mode (On Hover) */}
        <motion.img
          src={artifact.altModeImage}
          alt={`${artifact.name} Alt Mode`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          variants={{
            rest: { opacity: 0, scale: 0.8, rotate: -5 },
            hover: { 
              opacity: 1, 
              scale: 1, 
              rotate: 0, 
              transition: { duration: 0.4, type: "spring", stiffness: 100 }
            }
          }}
        />

        {/* Overlay Actions (Visible on Hover) */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 backdrop-blur-[2px] opacity-0"
          variants={{
            hover: { opacity: 1, transition: { delay: 0.1 } }
          }}
        >
          <Button 
            variant="secondary"
            size="sm"
            onClick={() => onViewDetails?.(artifact.id)}
            className="gap-2"
          >
            <Eye className="w-4 h-4" />
            View
          </Button>
        </motion.div>
      </div>

      {/* Card Content */}
      <div className="p-4 relative z-10 bg-gradient-to-t from-black via-black/90 to-transparent">
        <div className="flex justify-between items-start mb-2">
          <div>
            <motion.h3 
              className="text-lg font-bold text-white tracking-wide"
              layoutId={`title-${artifact.id}`}
            >
              {artifact.name}
            </motion.h3>
            <p className="text-xs text-gray-400 capitalize">{artifact.class} Class</p>
          </div>
          <FactionBadge faction={artifact.faction} size="sm" />
        </div>

        {/* Stats / Specs Teaser */}
        <div className="flex gap-2 mb-4">
            {/* Example stat bars */}
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${artifact.faction === 'autobot' ? 'bg-red-500' : 'bg-purple-500'}`} 
                  style={{ width: `${(artifact.specs.strength / 10) * 100}%` }}
                />
            </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-emerald-400 font-mono font-medium">
            {formatPrice(artifact.price)}
          </span>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className={`p-2 rounded-full transition-colors ${
              artifact.faction === 'autobot' 
                ? 'bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white'
                : 'bg-purple-500/10 hover:bg-purple-500 text-purple-500 hover:text-white'
            }`}
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
