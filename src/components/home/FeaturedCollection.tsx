import React, { useEffect, useState } from 'react';
import { supabase } from '@/sdk/supabase';
import { artifacts as mockArtifacts, Artifact } from '@/data/artifacts';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const FeaturedCollection: React.FC = () => {
  const [products, setProducts] = useState<Artifact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Try fetching from 'products' table first
        const { data: productsData, error: productsError } = await supabase
          .from('products')
          .select('*')
          .limit(8);

        if (!productsError && productsData && productsData.length > 0) {
          // Map DB data to Artifact type if needed, or assume compatibility
          // For now, assuming compatibility or partial compatibility
          setProducts(productsData as unknown as Artifact[]);
          setLoading(false);
          return;
        }

        // Fallback to 'artifacts' table
        const { data: artifactsData, error: artifactsError } = await supabase
          .from('artifacts')
          .select('*')
          .limit(8);

        if (!artifactsError && artifactsData && artifactsData.length > 0) {
          setProducts(artifactsData as unknown as Artifact[]);
          setLoading(false);
          return;
        }

        // Fallback to mock data
        console.log('Using mock data for FeaturedCollection');
        setProducts(mockArtifacts.slice(0, 8));
      } catch (err) {
        console.error('Error fetching products:', err);
        setProducts(mockArtifacts.slice(0, 8));
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-4 md:px-6 bg-background flex justify-center">
        <div className="animate-pulse text-muted-foreground">Loading collection...</div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Collection</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover our most popular Transformers figures, from Masterpiece scale to rare vintage finds.
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            View All <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

