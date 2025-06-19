import type { Service } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Omit<Service, 'longDescription' | 'features'>; // For overview, longDesc and features are not needed
  className?: string;
  compact?: boolean; // For a more compact version, e.g. on homepage
}

export function ServiceCard({ service, className, compact = false }: ServiceCardProps) {
  const IconComponent = service.icon;

  return (
    <Card className={cn("flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden", className)}>
      {service.image && (
        <div className="relative w-full h-48">
          <Image
            src={service.image}
            alt={service.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={service.dataAiHint}
          />
        </div>
      )}
      <CardHeader className={cn("items-center text-center", compact ? "p-4" : "p-6")}>
        <div className={cn("p-3 rounded-full bg-primary/10 text-primary mb-3", compact ? "mb-2" : "mb-4")}>
          <IconComponent className={cn(compact ? "h-8 w-8" : "h-10 w-10")} />
        </div>
        <CardTitle className={cn("font-headline", compact ? "text-xl" : "text-2xl")}>{service.title}</CardTitle>
      </CardHeader>
      <CardContent className={cn("flex-grow flex flex-col justify-between text-center", compact ? "p-4 pt-0" : "p-6 pt-0")}>
        <CardDescription className={cn("text-muted-foreground", compact ? "text-sm mb-3" : "text-base mb-6")}>
          {service.shortDescription}
        </CardDescription>
        <Button asChild variant="outline" className="mt-auto self-center group border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link href={`/services#${service.id}`}>
            En savoir plus <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
