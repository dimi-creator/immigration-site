import type { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-express-entry-draws',
    title: 'Comprendre les derniers tirages Entrée Express',
    date: '15 Juillet 2024',
    author: 'L\'équipe Maple Leaf Pathways',
    excerpt: 'Une analyse des tendances récentes des tirages Entrée Express et ce que cela signifie pour les candidats...',
    content: `
      <p>Les récents tirages du système Entrée Express ont montré des fluctuations intéressantes dans les scores CRS et les programmes ciblés. Comprendre ces tendances est crucial pour les candidats souhaitant immigrer au Canada.</p>
      <h2 class="text-2xl font-headline font-semibold my-4">Facteurs influençant les scores CRS</h2>
      <p>Plusieurs facteurs peuvent influencer les scores CRS, notamment les besoins du marché du travail canadien, les quotas d'immigration provinciaux et fédéraux, et les changements politiques.</p>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li>Niveau d'éducation</li>
        <li>Expérience professionnelle</li>
        <li>Maîtrise des langues (anglais et/ou français)</li>
        <li>Âge</li>
        <li>Offre d'emploi réservée</li>
        <li>Désignation provinciale</li>
      </ul>
      <p>Restez informé et adaptez votre profil pour maximiser vos chances.</p>
      <h2 class="text-2xl font-headline font-semibold my-4">Que faire ?</h2>
      <p>Il est essentiel de maintenir votre profil Entrée Express à jour et d'explorer activement les Programmes des Candidats des Provinces (PCP) qui pourraient correspondre à votre profil. N'hésitez pas à nous contacter pour une évaluation personnalisée.</p>
    `,
    imageUrl: '/blogo.jpg',
    dataAiHint: 'Canada flag document',
    tags: ['Entrée Express', 'Immigration', 'CRS'],
    views: 0
  },
  {
    slug: 'top-in-demand-jobs-canada-2025',
    title: 'Top 5 des emplois en demande au Canada pour 2025',
    date: '10 Juillet 2024',
    author: 'L\'équipe Maple Leaf Pathways',
    excerpt: 'Découvrez les secteurs et professions qui recrutent activement au Canada pour l\'année à venir...',
    content: `
      <p>Le marché du travail canadien est en constante évolution. Pour 2025, plusieurs secteurs clés continuent de montrer une forte demande de travailleurs qualifiés.</p>
      <h2 class="text-2xl font-headline font-semibold my-4">Les secteurs porteurs</h2>
      <ol class="list-decimal list-inside my-4 space-y-2">
        <li><strong>Technologie de l\'information :</strong> Développeurs, analystes de données, experts en cybersécurité.</li>
        <li><strong>Soins de santé :</strong> Infirmiers, médecins, aides-soignants.</li>
        <li><strong>Métiers spécialisés :</strong> Électriciens, plombiers, soudeurs.</li>
        <li><strong>Ingénierie :</strong> Ingénieurs civils, mécaniques, électriques.</li>
        <li><strong>Services financiers :</strong> Analystes financiers, gestionnaires de comptes.</li>
      </ol>
      <p>Adapter votre recherche d\'emploi et vos compétences à ces secteurs peut grandement améliorer vos perspectives d\'obtenir un contrat de travail.</p>
    `,
    imageUrl: '/BLOG.jpg',
    dataAiHint: 'Toronto city job',
    tags: ['Emploi', 'Marché du travail', 'Canada 2025'],
    views: 0
  },
  {
    slug: 'navigating-pnp-guide',
    title: 'Naviguer dans les Programmes des Candidats des Provinces (PCP)',
    date: '05 Juillet 2024',
    author: 'L\'équipe Maple Leaf Pathways',
    excerpt: 'Un guide pour débutants sur le fonctionnement des PCP et comment ils peuvent accélérer votre immigration...',
    content: `
      <p>Les Programmes des Candidats des Provinces (PCP) sont une voie d\'immigration populaire offrant une alternative ou un complément au système Entrée Express fédéral.</p>
      <h2 class="text-2xl font-headline font-semibold my-4">Qu\'est-ce qu\'un PCP ?</h2>
      <p>Chaque province et territoire canadien (sauf le Québec et le Nunavut) gère ses propres programmes d\'immigration pour attirer des immigrants ayant les compétences, l\'éducation et l\'expérience professionnelle nécessaires pour contribuer à leur économie. Une désignation provinciale peut ajouter 600 points à votre score CRS dans Entrée Express.</p>
      <h2 class="text-2xl font-headline font-semibold my-4">Comment fonctionnent-ils ?</h2>
      <p>Les PCP varient considérablement d\'une province à l\'autre, avec des critères d\'éligibilité spécifiques. Certains sont alignés sur Entrée Express, tandis que d\'autres sont des volets distincts. Il est crucial de rechercher les programmes qui correspondent le mieux à votre profil.</p>
      <p>Nos experts peuvent vous aider à identifier les PCP les plus pertinents pour vous et à préparer une demande solide.</p>
    `,
    imageUrl: 'https://placehold.co/800x450.png',
    dataAiHint: 'Canada map provinces',
    tags: ['PCP', 'Immigration provinciale', 'Guide'],
    views: 0
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
