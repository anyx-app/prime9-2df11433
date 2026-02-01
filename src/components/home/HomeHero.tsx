import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { fadeInLeft, fadeInRight } from '@/components/recipes/animations'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

export function HomeHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 bg-background">
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
          className="text-center lg:text-left"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium">
            New Arrivals: Cybertron Series
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Transform Your <span className="text-primary">Collection</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0">
            Discover the premium selection of Transformers toys, from vintage classics to the latest releases. Prime9 is your ultimate destination for collectors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="text-lg px-8 gap-2" asChild>
              <Link to="/showcase">
                Shop Now <ShoppingBag className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 gap-2" asChild>
              <Link to="/recipes">
                View Gallery <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=1000&auto=format&fit=crop" 
              alt="Transformers Toy" 
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

