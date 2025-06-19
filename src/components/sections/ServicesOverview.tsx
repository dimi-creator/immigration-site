import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/lib/servicesData';

export function ServicesOverview() {
  const mainServices = services.slice(0, 3); // Displaying the 3 main services

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">
            Nos Services Clés
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous offrons une gamme complète de services pour vous accompagner dans votre projet d'immigration et d'intégration au Canada.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service) => (
            <ServiceCard key={service.id} service={service} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
