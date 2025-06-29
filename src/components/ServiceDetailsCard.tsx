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
      <div className={`grid sm:grid-cols-1 md:grid-cols-2 items-stretch`}>
        <div className={`relative min-h-[200px] sm:min-h-[300px] md:min-h-full ${reverseLayout ? 'md:order-last' : ''}`}>
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
        <div className="flex flex-col p-4 sm:p-6 md:p-10 bg-card">
          <CardHeader className="p-0 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <IconComponent className="h-8 w-8" />
              </div>
              <div className="flex flex-col">
                <CardTitle className="text-3xl font-bold font-headline text-primary">{service.title}</CardTitle>
                {service.id === 'immigration-programs' && (
                  <p className="text-xl font-semibold text-foreground mt-1">
                     0 FCFA
                  </p>
                )}
                {service.id === 'job-contract-training' && (
                  <p className="text-xl font-semibold text-foreground mt-1">
                     5 100 FCFA
                  </p>
                )}
                {service.id === 'accompagnement' && (
                  <p className="text-xl font-semibold text-foreground mt-1">
                     25 000 FCFA
                  </p>
                )}
              </div>
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
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground mb-4">
                Intéressé(e) par ce service ? Cliquez ci-dessous pour démarrer la discussion avec nous sur WhatsApp.
              </p>
              <p className="text-xs text-muted-foreground">
                En cliquant sur le bouton ci-dessous, vous acceptez nos{' '}
                <a 
                  href="/legal-mentions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Mentions Légales
                </a>
                {' '}et{' '}
                <a 
                  href="/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Politique de Confidentialité
                </a>
                .
              </p>
              <div className="flex">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white flex-1"
                >
                  <Link
                    href={`https://wa.me/237680345955?text=Bonjour%2C+je+suis+intéressé(e)+par+le+service+${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contacter par WhatsApp 💬
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
