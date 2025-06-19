"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative h-[calc(100vh-5rem)] min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Paysage canadien en arrière-plan"
        layout="fill"
        objectFit="cover"
        quality={80}
        priority
        className="brightness-50"
        data-ai-hint="Canada landscape"
      />
      <div className="relative z-10 p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline mb-6 text-shadow-lg animate-fade-in-down">
          Votre avenir au Canada commence ici
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
          Solutions complètes pour l'immigration, la recherche d'emploi et l'intégration au Canada.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-600 group"
        >
          <Link href="/services">
            Découvrir nos services <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
      <style jsx global>{`
        .text-shadow-lg {
          text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-300 { animation-delay: 0.3s; opacity:0; }
        .animation-delay-600 { animation-delay: 0.6s; opacity:0; }
      `}</style>
    </div>
  );
}
