import type { Service } from '@/types';
import { Users, FileText, Briefcase } from 'lucide-react';

export const services: Service[] = [
  {
    id: 'immigration-programs',
    title: 'Programmes d’immigration',
    shortDescription: 'Naviguez avec succès à travers les divers programmes d\'immigration canadiens.',
    longDescription: 'Explorez les multiples voies d\'immigration au Canada, incluant l\'Entrée Express, les Programmes des Candidats des Provinces (PCP), le parrainage familial, les permis d\'études et de travail. Nous analysons votre profil pour vous orienter vers la meilleure stratégie et vous accompagnons à chaque étape de votre demande.',
    icon: Users,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'immigration documents',
    features: [
      'Évaluation de l\'éligibilité personnalisée',
      'Préparation et soumission de demandes (Entrée Express, PCP, etc.)',
      'Assistance pour permis d\'études et de travail',
      'Conseils pour le regroupement familial',
      'Suivi rigoureux de votre dossier',
    ],
  },
  {
    id: 'cv-creation',
    title: 'Création de CV canadiens',
    shortDescription: 'Optimisez votre CV pour le marché du travail canadien et captez l\'attention des recruteurs.',
    longDescription: 'Obtenez un curriculum vitae professionnel, rédigé et formaté selon les standards canadiens. Nous mettons en valeur vos compétences et expériences pour maximiser vos chances d\'obtenir des entrevues et de décrocher l\'emploi de vos rêves au Canada.',
    icon: FileText,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'resume writing',
    features: [
      'Rédaction de CV conformes aux normes canadiennes',
      'Optimisation des mots-clés pour les systèmes ATS',
      'Lettres de présentation percutantes',
      'Adaptation de votre profil LinkedIn',
      'Conseils pour la valorisation de vos compétences transférables',
    ],
  },
  {
    id: 'job-contract-training',
    title: 'Formation pour contrat de travail',
    shortDescription: 'Acquérez les compétences et stratégies clés pour décrocher un contrat de travail au Canada.',
    longDescription: 'Améliorez votre employabilité grâce à nos formations ciblées. Découvrez les spécificités du marché du travail canadien, préparez-vous efficacement aux entrevues, développez des stratégies de réseautage performantes et apprenez à négocier votre contrat de travail.',
    icon: Briefcase,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'job interview',
    features: [
      'Ateliers sur le marché de l\'emploi canadien',
      'Préparation intensive aux entrevues (simulations)',
      'Stratégies de recherche d\'emploi efficaces',
      'Développement de réseau professionnel',
      'Coaching pour la négociation salariale',
    ],
  },
];
