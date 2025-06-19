import { ContactForm } from '@/components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative py-20 md:py-32 bg-primary text-primary-foreground text-center">
        <div className="absolute inset-0">
            <Image 
              src="https://placehold.co/1600x400.png" 
              alt="Contact background" 
              layout="fill" 
              objectFit="cover" 
              className="opacity-20"
              data-ai-hint="abstract office"
            />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Contactez-Nous</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Nous sommes là pour répondre à vos questions et vous aider à démarrer votre projet canadien.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <Card className="shadow-xl rounded-xl p-6 md:p-8 bg-card">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl md:text-3xl font-bold font-headline text-primary">Envoyez-nous un message</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-2 space-y-8">
              <Card className="shadow-xl rounded-xl p-6 bg-card">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-semibold font-headline text-primary flex items-center">
                    <MapPin className="h-6 w-6 mr-3 text-accent" />
                    Notre Bureau
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">
                    123 Rue Imaginaire, Bureau 456<br />
                    Ottawa, ON K1P 1J1<br />
                    Canada
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Ottawa,ON" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline mt-2 inline-block"
                  >
                    Voir sur la carte
                  </a>
                </CardContent>
              </Card>
              <Card className="shadow-xl rounded-xl p-6 bg-card">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-semibold font-headline text-primary flex items-center">
                    <Phone className="h-6 w-6 mr-3 text-accent" />
                    Par Téléphone
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (555) 123-4567
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Lundi - Vendredi, 9h00 - 17h00 (EST)</p>
                </CardContent>
              </Card>
              <Card className="shadow-xl rounded-xl p-6 bg-card">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-semibold font-headline text-primary flex items-center">
                    <Mail className="h-6 w-6 mr-3 text-accent" />
                    Par E-mail
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <a href="mailto:info@mapleleafpathways.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                    info@mapleleafpathways.com
                  </a>
                   <p className="text-xs text-muted-foreground mt-1">Nous répondons généralement sous 24h.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section Placeholder */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary text-center mb-12">Questions Fréquemment Posées</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Example FAQ item - In a real app, use Accordion component */}
            <Card className="bg-card rounded-xl shadow-lg">
              <CardHeader className="p-4 md:p-6 cursor-pointer">
                <CardTitle className="text-lg font-semibold font-headline text-foreground">Quels sont vos tarifs ?</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-muted-foreground">Nos tarifs varient en fonction du service et de la complexité de votre cas. Nous proposons une consultation initiale gratuite pour évaluer vos besoins et vous fournir un devis personnalisé. Contactez-nous pour en savoir plus.</p>
              </CardContent>
            </Card>
             <Card className="bg-card rounded-xl shadow-lg">
              <CardHeader className="p-4 md:p-6 cursor-pointer">
                <CardTitle className="text-lg font-semibold font-headline text-foreground">Combien de temps prend le processus d'immigration ?</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-muted-foreground">La durée du processus d'immigration varie considérablement en fonction du programme choisi, de votre profil et des délais de traitement actuels d'IRCC. Nous vous donnerons une estimation basée sur votre situation spécifique lors de la consultation.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
