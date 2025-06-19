import type { Service } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Phone } from 'lucide-react';

interface ServiceDetailsCardProps {
  service: Service;
  reverseLayout?: boolean;
}

export function ServiceDetailsCard({ service, reverseLayout = false }: ServiceDetailsCardProps) {
  const IconComponent = service.icon;

  return (
    <Card id={service.id} className="overflow-hidden shadow-xl rounded-2xl transform transition-all duration-300 hover:scale-[1.02]">
      <div className={`grid md:grid-cols-2 items-stretch`}>
        <div className={`relative min-h-[300px] md:min-h-full ${reverseLayout ? 'md:order-last' : ''}`}>
          {service.image && (
            <Image
              src={service.image}
              alt={service.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-110"
              data-ai-hint={service.dataAiHint}
            />
          )}
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-none"></div>
        </div>
        <div className="flex flex-col p-6 md:p-10 bg-card">
          <CardHeader className="p-0 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <IconComponent className="h-8 w-8" />
              </div>
              <CardTitle className="text-3xl font-bold font-headline text-primary">{service.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex-grow">
            <CardDescription className="text-base text-muted-foreground mb-6 leading-relaxed">
              {service.longDescription}
            </CardDescription>
            {service.features && service.features.length > 0 && (
              <>
                <h4 className="text-lg font-semibold font-headline text-foreground mb-3">Ce service inclut :</h4>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </CardContent>
          <div className="mt-auto pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              Intéressé(e) par ce service ? Contactez-nous pour une consultation ou pour démarrer votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1 group">
                <Link href={`/contact?service=${service.id}`}>
                  Demander une consultation <Phone className="ml-2 h-5 w-5 group-hover:animate-ping duration-1000" />
                </Link>
              </Button>
              {/* Placeholder for direct payment button */}
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1" disabled>
                 Procéder au paiement (Bientôt)
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              L'intégration du paiement Mobile Money / Orange Money est prévue.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
