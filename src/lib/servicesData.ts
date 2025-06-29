import type { Service } from '@/types';
import { Users, FileText, Briefcase } from 'lucide-react';

export const services: Service[] = [
  {
    id: 'immigration-programs',
    title: 'Programmes d’immigration',
    shortDescription: 'Naviguez avec succès à travers les divers programmes d\'immigration canadiens grace à une evaluation personnalisée.',
    longDescription: 'Explorez les multiples voies d\'immigration au Canada, incluant l\'Entrée Express, les Programmes des Candidats des Provinces (PCP), le parrainage familial, les permis d\'études et de travail. Nous analysons votre profil gratuitement pour vous orienter vers le programme qui vous convient.',
    icon: Users,
    image: '/article_11.jpg',
    dataAiHint: 'immigration documents',
    features: [
      'Évaluation de l\'éligibilité personnalisée',
      'Liste complète des documents requis pour le programme qui vous convient',
      'Conseils pour le regroupement familial au besoin',
      'Possibilité de rejoindre un forum privé à un bas prix pour des conseils en direct',
    ],
  },
  {
    id: 'accompagnement',
    title: 'Accompagnement',
    shortDescription: 'Si vous souhaitez démarrer votre projet d\'immigration, Rejoignez un forum dirigé par un expert pour avoir les reponses à toutes vos questions .',
    longDescription: 'Ce service est destiné à toute personne souhaitant étudier, travailler, investir ou obtenir la résidence permanente au Canada. Nous vous accompagnons tout au long de votre parcours, offrant des conseils et astuces sur les meilleures voies d\'immigration. Le candidat aura le controle total de son dossier, nous ne prenons ni les documents personnels du candidat ni les frais de dossiers.',
    icon: FileText,
    image: '/Accomppa.jpg',
    dataAiHint: 'resume writing',
    features: [
      'Accès direct à notre groupe privé telegram',
      'Guide complet de formation sur le contrat de travail',
      'Guide complet de formation sur le permis d\'études',
      'les meilleurs programmes d\'immigration selon votre profil',
      'Adaptation de votre profil LinkedIn',
      'Accompagnement personnalisé de A à Z selon le programme choisi',
    ],
  },
  {
    id: 'job-contract-training',
    title: 'PDF de Formation pour contrat de travail',
    shortDescription: 'Acquérez les compétences et stratégies clés pour décrocher un contrat de travail au Canada grace à un guide complet en PDF.',
    longDescription: 'Améliorez votre employabilité grâce à notre guide de formation ciblé. Découvrez les spécificités du marché du travail canadien, préparez-vous efficacement aux entrevues, développez des stratégies de réseautage performantes et apprenez à négocier votre contrat de travail.',
    icon: Briefcase,
    image: '/work.jpg',
    dataAiHint: 'job interview', 
    features: [
      'Comprendre les secteurs qui recrutent au Canada',
      'Decouvrir le système de langage canadien dans le monde professionnel',
      'Le montant à prevoir pour decrocher son emploi depuis l\'étranger',
      'Les documents réquis coté candidat et employeur afin d\'avoir son visa pour le Canada',
      'Sites d\'offres d\'emplois strategiques pour trouver un emploi en tant qu\'étranger etc...',
    ],
  },
];
