import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckSquare, Users, Target, HeartHandshake, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section for About Page */}
      <section className="relative py-20 md:py-32 bg-primary text-primary-foreground text-center">
        <div className="absolute inset-0">
            <Image 
              src="/ontario.jpg" 
              alt="Team working together" 
              layout="fill" 
              objectFit="cover" 
              className="opacity-20"
              data-ai-hint="office team"
            />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">À Propos de Maple Leaf Pathways</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Votre partenaire dévoué pour une immigration réussie au Canada.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-6">Notre Histoire</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Maple Leaf Pathways a été fondé avec une vision simple : rendre le rêve canadien accessible. Forts de plusieurs années d'expérience et d'une passion pour aider les individus et les familles à s'épanouir, nous avons guidé de nombreux clients à travers le processus complexe de l'immigration.
              </p>
              <p className="text-lg text-muted-foreground">
                Nous comprenons les défis et les opportunités que représente l'immigration. C'est pourquoi nous nous engageons à fournir un service transparent, éthique et personnalisé, adapté aux besoins uniques de chaque client.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Canadian landscape or diverse group"
                width={600}
                height={450}
                className="object-cover w-full h-full"
                data-ai-hint="Canada nature"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="shadow-lg rounded-xl">
              <CardHeader className="items-center text-center">
                <Target className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="font-headline text-2xl">Notre Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Faciliter votre parcours d'immigration au Canada en offrant une expertise de pointe, un accompagnement personnalisé et des solutions adaptées à vos ambitions.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-xl">
              <CardHeader className="items-center text-center">
                <Eye className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="font-headline text-2xl">Notre Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Être le leader de confiance en services d'immigration, reconnu pour notre intégrité, notre efficacité et notre contribution positive à la société canadienne.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-xl">
              <CardHeader className="items-center text-center">
                <HeartHandshake className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="font-headline text-2xl">Nos Valeurs</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="list-none space-y-1 text-muted-foreground">
                  <li><CheckSquare className="inline h-4 w-4 mr-2 text-accent" />Intégrité et Transparence</li>
                  <li><CheckSquare className="inline h-4 w-4 mr-2 text-accent" />Excellence et Professionnalisme</li>
                  <li><CheckSquare className="inline h-4 w-4 mr-2 text-accent" />Respect et Empathie</li>
                  <li><CheckSquare className="inline h-4 w-4 mr-2 text-accent" />Engagement envers le client</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team Section - Placeholder */}
      
    </div>
  );
}
