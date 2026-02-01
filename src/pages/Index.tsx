import { AppShell } from '@/components/layout/AppShell';
import { HomeHero } from '@/components/home/HomeHero';
import { FeaturedCollection } from '@/components/home/FeaturedCollection';
import { BrandFeatures } from '@/components/home/BrandFeatures';

export default function Index() {
  return (
    <AppShell>
      <div className="flex flex-col gap-16 pb-16">
        <HomeHero />
        <FeaturedCollection />
        <BrandFeatures />
      </div>
    </AppShell>
  );
}

