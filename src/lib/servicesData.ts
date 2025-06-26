import type { Service } from '@/types';
import { Users, FileText, Briefcase } from 'lucide-react';

export const services: Service[] = [
  {
    id: 'immigration-programs',
    title: 'Programmes d’immigration',
    shortDescription: 'Naviguez avec succès à travers les divers programmes d\'immigration canadiens grace à un document PDF complet.',
    longDescription: 'Explorez les multiples voies d\'immigration au Canada, incluant l\'Entrée Express, les Programmes des Candidats des Provinces (PCP), le parrainage familial, les permis d\'études et de travail. Nous analysons votre profil pour vous orienter vers la meilleure stratégie et vous accompagnons à chaque étape de votre demande.',
    icon: Users,
    image: '/article_11.jpg',
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
    title: 'Accompagnement',
    shortDescription: 'Si vous etes en procedure( études, travail, residence permanente)Rejoignez un forum dirigé par un expert pour avoir les reponses à toutes vos questions .',
    longDescription: 'Ce service est destiné à toute personne souhaitant étudier, travailler ou obtenir la résidence permanente au Canada. Nous vous accompagnons tout au long de votre parcours, offrant des conseils et astuces sur les meilleures voies d\'immigration. Le candidat aura le controle total de son dossier, nous ne prenons ni les documents personnels du candidat ni les frais de dossiers.',
    icon: FileText,
    image: '/accompa.jpg',
    dataAiHint: 'resume writing',
    features: [
      'Accès direct à notre groupe privé telegram',
      'Guide complet de formation sur le contrat de travail',
      'Guide complet de formation sur le permis d\'études',
      'les meilleures programmes d\'immigration selon votre profil',
      'Adaptation de votre profil LinkedIn',
      'Accompagnement personnalisé de A à Z selon le programme choisi',
    ],
  },
  {
    id: 'job-contract-training',
    title: 'PDF de Formation pour contrat de travail',
    shortDescription: 'Acquérez les compétences et stratégies clés pour décrocher un contrat de travail au Canada grace à un guide complet en PDF.',
    longDescription: 'Améliorez votre employabilité grâce à nos formations ciblées. Découvrez les spécificités du marché du travail canadien, préparez-vous efficacement aux entrevues, développez des stratégies de réseautage performantes et apprenez à négocier votre contrat de travail.',
    icon: Briefcase,
    image: '/screenshot_2024_0823_212001.png',
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
