import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LegalMentionsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <Card className="max-w-3xl mx-auto shadow-xl rounded-xl">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">Mentions Légales</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="font-headline">Informations sur l'éditeur du site</h2>
          <p><strong>Nom de l'entreprise :</strong> Maple Leaf Pathways</p>
          <p><strong>Forme juridique :</strong> (À compléter)</p>
          <p><strong>Adresse du siège social :</strong> 123 Rue Imaginaire, Ottawa, ON K1P 1J1, Canada</p>
          <p><strong>Numéro de téléphone :</strong> +1 (555) 123-4567</p>
          <p><strong>Adresse e-mail :</strong> info@mapleleafpathways.com</p>
          <p><strong>Directeur de la publication :</strong> (Nom du responsable)</p>
          <p><strong>Numéro d'enregistrement (si applicable) :</strong> (À compléter)</p>
          
          <h2 className="font-headline mt-8">Hébergement du site</h2>
          <p><strong>Nom de l'hébergeur :</strong> (À compléter, ex: Firebase Hosting, Vercel, etc.)</p>
          <p><strong>Adresse de l'hébergeur :</strong> (À compléter)</p>

          <h2 className="font-headline mt-8">Propriété intellectuelle</h2>
          <p>L'ensemble de ce site relève de la législation canadienne et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
          <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>

          <h2 className="font-headline mt-8">Limitation de responsabilité</h2>
          <p>Maple Leaf Pathways s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu. Toutefois, Maple Leaf Pathways ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition sur ce site.</p>
          <p>Les informations fournies sur ce site sont à titre indicatif et ne sauraient engager la responsabilité de Maple Leaf Pathways. Elles ne constituent pas un conseil juridique et ne remplacent pas une consultation avec un professionnel de l'immigration qualifié.</p>
          
          <h2 className="font-headline mt-8">Données personnelles</h2>
          <p>Pour plus d'informations sur la collecte et le traitement de vos données personnelles, veuillez consulter notre <a href="/privacy-policy" className="text-accent hover:underline">Politique de Confidentialité</a>.</p>

          <p className="mt-6 text-sm text-muted-foreground">Dernière mise à jour : {new Date().toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </CardContent>
      </Card>
    </div>
  );
}
