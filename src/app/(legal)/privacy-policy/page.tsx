import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <Card className="max-w-3xl mx-auto shadow-xl rounded-xl">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">Politique de Confidentialité</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg dark:prose-invert max-w-none">
          <p>Maple Leaf Pathways s'engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations personnelles.</p>

          <h2 className="font-headline mt-6">Collecte des informations</h2>
          <p>Nous collectons des informations personnelles lorsque vous :</p>
          <ul>
            <li>Utilisez notre formulaire de contact (nom, email, message).</li>
            <li>Demandez une consultation ou un service.</li>
            <li>Naviguez sur notre site (via les cookies, voir section dédiée).</li>
          </ul>
          <p>Les informations collectées peuvent inclure votre nom, adresse e-mail, numéro de téléphone, informations relatives à votre profil d'immigration, et toute autre information que vous choisissez de nous fournir.</p>

          <h2 className="font-headline mt-6">Utilisation des informations</h2>
          <p>Vos informations personnelles sont utilisées pour :</p>
          <ul>
            <li>Fournir et améliorer nos services.</li>
            <li>Répondre à vos demandes et questions.</li>
            <li>Vous envoyer des communications relatives à nos services (avec votre consentement).</li>
            <li>Analyser l'utilisation de notre site pour améliorer l'expérience utilisateur.</li>
            <li>Respecter nos obligations légales et réglementaires.</li>
          </ul>

          <h2 className="font-headline mt-6">Partage des informations</h2>
          <p>Nous ne vendons, n'échangeons, ni ne louons vos informations personnelles à des tiers sans votre consentement, sauf dans les cas suivants :</p>
          <ul>
            <li>Aux autorités gouvernementales canadiennes dans le cadre de vos demandes d'immigration.</li>
            <li>À des prestataires de services tiers qui nous aident à exploiter notre site ou à mener nos activités (ex: hébergement, analyse de données), sous réserve d'accords de confidentialité stricts.</li>
            <li>Si la loi l'exige ou pour protéger nos droits, notre propriété ou notre sécurité.</li>
          </ul>

          <h2 className="font-headline mt-6">Sécurité des données</h2>
          <p>Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos informations personnelles contre l'accès non autorisé, la modification, la divulgation ou la destruction.</p>

          <h2 className="font-headline mt-6">Cookies</h2>
          <p>Notre site utilise des cookies pour améliorer l'expérience utilisateur. Les cookies sont de petits fichiers texte stockés sur votre appareil. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela pourrait affecter certaines fonctionnalités du site.</p>

          <h2 className="font-headline mt-6">Vos droits</h2>
          <p>Conformément à la législation applicable, vous disposez de droits concernant vos informations personnelles, notamment :</p>
          <ul>
            <li>Le droit d'accès à vos données.</li>
            <li>Le droit de rectification de données incorrectes.</li>
            <li>Le droit à l'effacement de vos données (sous conditions).</li>
            <li>Le droit de limiter le traitement de vos données.</li>
            <li>Le droit à la portabilité de vos données.</li>
            <li>Le droit de retirer votre consentement à tout moment.</li>
          </ul>
          <p>Pour exercer ces droits, veuillez nous contacter à <a href="mailto:contact.aspev24@gmail.com" className="text-accent hover:underline">contact.aspev24@gmail.com</a>.</p>
          
          <h2 className="font-headline mt-6">Modifications de cette politique</h2>
          <p>Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous encourageons à consulter cette page régulièrement pour prendre connaissance des éventuelles modifications. La date de la dernière mise à jour sera indiquée en bas de cette page.</p>

          <h2 className="font-headline mt-6">Nous contacter</h2>
          <p>Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à :</p>
          <p>Maple Leaf Pathways<br/>
          <br/>
          <a href="mailto:contact.aspev24@gmail.com" className="text-accent hover:underline">contact.aspev24@gmail.com</a></p>

          <p className="mt-6 text-sm text-muted-foreground">Dernière mise à jour : {new Date().toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </CardContent>
      </Card>
    </div>
  );
}
