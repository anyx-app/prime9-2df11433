import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { ArtifactCard } from '@/components/showcase/ArtifactCard';
import { PriceFilter } from '@/components/showcase/PriceFilter';
import { useArtifactFilter } from '@/hooks/useArtifactFilter';
import { artifacts } from '@/data/artifacts';
import { SearchX } from 'lucide-react';

export const ArtifactFeed: React.FC = () => {
  const { filter, setFilter, filteredArtifacts } = useArtifactFilter(artifacts);

  return (
    <section className="w-full space-y-8">
      {/* Controls & Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-2">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Available Artifacts
          </h2>
          <p className="text-sm text-muted-foreground">
            Showing {filteredArtifacts.length} {filteredArtifacts.length === 1 ? 'item' : 'items'}
          </p>
        </div>
        
        <PriceFilter 
          currentFilter={filter} 
          onFilterChange={setFilter} 
        />
      </div>

      {/* Artifact Grid */}
      <div className="min-h-[400px]">
        {filteredArtifacts.length > 0 ? (
          <BentoGrid className="mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredArtifacts.map((artifact, idx) => (
                <BentoGridItem
                  key={artifact.id}
                  className={idx === 3 || idx === 6 ? "md:col-span-2" : ""}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
                  >
                    <ArtifactCard artifact={artifact} />
                  </motion.div>
                </BentoGridItem>
              ))}
            </AnimatePresence>
          </BentoGrid>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 text-center space-y-4 border border-dashed border-border rounded-xl bg-card/50"
          >
            <div className="p-4 rounded-full bg-muted/50">
              <SearchX className="w-8 h-8 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">No artifacts found</h3>
              <p className="text-muted-foreground">
                Try adjusting your price range or filters to see more results.
              </p>
            </div>
            <button 
              onClick={() => setFilter('all')}
              className="text-sm text-primary hover:underline font-medium"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
