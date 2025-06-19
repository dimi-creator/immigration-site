import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { MapleLeafIcon } from '@/components/icons/MapleLeafIcon';

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
];

const footerNavLinks = [
  { href: '/legal-mentions', label: 'Mentions Légales' },
  { href: '/privacy-policy', label: 'Politique de Confidentialité' },
  { href: '/services', label: 'Nos Services' },
  { href: '/contact', label: 'Contactez-nous' },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-semibold font-headline text-primary hover:text-primary/80 transition-colors">
              <MapleLeafIcon className="h-8 w-8 text-accent" />
              <span>Maple Leaf Pathways</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Votre partenaire de confiance pour réaliser votre projet d'immigration au Canada.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold font-headline mb-4 text-foreground">Navigation</h3>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-2 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold font-headline mb-4 text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:info@mapleleafpathways.com" className="hover:text-primary hover:underline">info@mapleleafpathways.com</a></li>
              <li><a href="tel:+15551234567" className="hover:text-primary hover:underline">+1 (555) 123-4567</a></li>
              <li>123 Rue Imaginaire, Ottawa, ON, Canada</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-headline mb-4 text-foreground">Suivez-nous</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Maple Leaf Pathways. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Site web conçu avec passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
