import { services } from '@/lib/servicesData';
import { ServiceDetailsCard } from '@/components/ServiceDetailsCard';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative py-20 md:py-32 bg-primary text-primary-foreground text-center">
        <div className="absolute inset-0">
            <Image 
              src='/Ontario (1).jpg' 
              alt="Diverse professionals" 
              layout="fill" 
              objectFit="cover" 
              className="opacity-20"
              data-ai-hint="professionals working"
            />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Nos Services d'Immigration</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Des solutions complètes pour faire de votre projet canadien une réalité.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <ServiceDetailsCard 
                key={service.id} 
                service={service} 
                reverseLayout={index % 2 !== 0} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-6">
            Prêt à franchir le pas ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Notre équipe est là pour répondre à toutes vos questions et vous guider. Planifiez une consultation gratuite dès aujourd'hui pour discuter de vos besoins spécifiques.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-accent-foreground bg-accent hover:bg-accent/90"
          >
            Contactez-nous maintenant
          </a>
        </div>
      </section>
    </div>
  );
}
