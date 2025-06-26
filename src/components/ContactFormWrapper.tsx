"use client";

import dynamic from 'next/dynamic';

const ContactForm = dynamic(
  () => import('@/components/ContactForm').then(mod => mod.ContactForm),
  { ssr: false }
);

export function ContactFormWrapper() {
  return <ContactForm />;
}
