import React from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid';
import { ShieldCheck, Truck, CreditCard, Headphones } from 'lucide-react';

export function BrandFeatures() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Prime9?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are dedicated to providing the best Transformers collecting experience with premium service and authentic products.
          </p>
        </div>
        
        <BentoGrid className="md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <BentoGridItem
              key={i}
              title={feature.title}
              description={feature.description}
              header={feature.header}
              icon={feature.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Authentic Products",
    description: "100% original Transformers figures sourced directly from verified suppliers.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20" />,
    icon: <ShieldCheck className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "Fast Shipping",
    description: "Express delivery options available worldwide with real-time tracking.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20" />,
    icon: <Truck className="h-4 w-4 text-green-500" />,
  },
  {
    title: "Secure Payments",
    description: "Your transactions are protected with industry-standard encryption.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20" />,
    icon: <CreditCard className="h-4 w-4 text-orange-500" />,
  },
  {
    title: "Expert Support",
    description: "Our team of collectors is here to help you find the perfect addition to your collection.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20" />,
    icon: <Headphones className="h-4 w-4 text-pink-500" />,
  },
];

