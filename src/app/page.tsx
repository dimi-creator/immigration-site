import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      
      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">
              Pourquoi Choisir Maple Leaf Pathways?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Votre succès est notre priorité. Découvrez ce qui nous distingue.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-accent mb-3" />
                <CardTitle className="font-headline text-xl">Expertise Reconnue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Nos consultants possèdent une connaissance approfondie des lois et procédures d'immigration canadiennes.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-accent mb-3" />
                <CardTitle className="font-headline text-xl">Approche Personnalisée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Chaque client est unique. Nous offrons des solutions sur mesure adaptées à votre profil et vos objectifs.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-xl md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-accent mb-3" />
                <CardTitle className="font-headline text-xl">Accompagnement Complet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">De la première consultation à votre établissement au Canada, nous sommes à vos côtés.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section - Placeholder */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-12">
            Ce que nos clients disent
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card p-6 rounded-xl shadow-lg">
              <Image src="https://placehold.co/100x100.png" alt="Client photo" width={80} height={80} className="rounded-full mx-auto mb-4" data-ai-hint="person portrait" />
              <p className="text-muted-foreground mb-4 italic">"Grâce à Maple Leaf Pathways, mon rêve canadien est devenu réalité. Un service exceptionnel!"</p>
              <p className="font-semibold text-foreground">- Aïcha K., Ingénieure Logicielle</p>
            </Card>
            <Card className="bg-card p-6 rounded-xl shadow-lg">
              <Image src="https://placehold.co/100x100.png" alt="Client photo" width={80} height={80} className="rounded-full mx-auto mb-4" data-ai-hint="person smiling" />
              <p className="text-muted-foreground mb-4 italic">"Leur expertise pour adapter mon CV a été cruciale. J'ai rapidement trouvé un emploi."</p>
              <p className="font-semibold text-foreground">- David B., Spécialiste Marketing</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
            Prêt à commencer votre aventure canadienne?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous aider.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Link href="/contact">Prendre Rendez-vous</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
