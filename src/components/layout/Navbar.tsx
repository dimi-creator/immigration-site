"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { MapleLeafIcon } from '@/components/icons/MapleLeafIcon'; // Assuming you create this
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/about', label: 'À propos' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  // { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);


  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/95 shadow-md backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold font-headline text-primary hover:text-primary/80 transition-colors" aria-label="Maple Leaf Pathways Home">
          <MapleLeafIcon className="h-8 w-8 text-accent" />
          <span>Maple Leaf Pathways</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary px-3 py-2",
                pathname === item.href ? "text-primary font-bold underline underline-offset-4 decoration-accent" : "text-foreground/80 hover:text-primary"
              )}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col space-y-6">
                <div className="flex justify-between items-center">
                  <Link href="/" className="flex items-center gap-2 text-lg font-semibold font-headline text-primary" aria-label="Maple Leaf Pathways Home">
                     <MapleLeafIcon className="h-7 w-7 text-accent" />
                     <span>Maple Leaf Pathways</span>
                  </Link>
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon" aria-label="Close menu">
                       <X className="h-6 w-6" />
                     </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-md px-3 py-2 text-base font-medium hover:bg-secondary hover:text-primary transition-colors",
                          pathname === item.href ? "bg-secondary text-primary font-semibold" : "text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
