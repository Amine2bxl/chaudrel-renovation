import { ShieldCheck, Eye, Database, Cookie, Building2, Mail, CalendarDays, FileText, Scale } from 'lucide-react';
import LegalPage from './LegalPage';

export default function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Politique de confidentialité"
      title="Vos données, traitées avec la même rigueur que votre projet."
      summary="Découvrez comment Chaudrel Rénovation collecte, utilise et protège les informations que vous partagez via notre site. Une approche claire, conforme au RGPD, sans cookies superflus."
      lastUpdated="Juin 2026"
      path="/politique-confidentialite"
      info={[
        { title: 'Responsable', value: 'Chaudrel Rénovation', icon: Building2 },
        { title: 'Email', value: 'Info@chaudrel.be', icon: Mail },
        { title: 'Mise à jour', value: 'Juin 2026', icon: CalendarDays },
        { title: 'Conformité', value: 'RGPD · Belgique', icon: Scale },
      ]}
      sections={[
        {
          icon: FileText,
          title: '1. Engagement',
          content: (
            <p>
              Chaudrel Rénovation traite les informations de ses prospects et clients avec la même exigence
              que ses chantiers. Cette politique décrit nos pratiques, vos droits et la marche à suivre pour
              les exercer.
            </p>
          ),
        },
        {
          icon: Database,
          title: '2. Données collectées',
          content: (
            <>
              <p>
                Nous collectons uniquement ce que vous nous transmettez via le formulaire de contact,
                l'appel téléphonique ou l'email direct :
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 pt-2">
                {[
                  'Prénom et nom',
                  'Adresse email',
                  'Numéro de téléphone',
                  'Code postal et ville',
                  'Type de bien et type de projet',
                  'Détails de votre projet (message libre)',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-brand-ink/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
            </>
          ),
        },
        {
          icon: ShieldCheck,
          title: '3. Finalités',
          content: (
            <>
              <p>Vos données servent exclusivement à :</p>
              <ul className="space-y-2 pt-2">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Répondre à votre demande de devis ou d'information</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Vous recontacter dans le cadre de votre projet</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Établir une proposition adaptée</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Assurer le suivi commercial après intervention</li>
              </ul>
            </>
          ),
        },
        {
          icon: Eye,
          title: '4. Durée de conservation',
          content: (
            <p>
              Les données sont conservées pendant la durée nécessaire au traitement de votre demande, puis
              archivées conformément aux obligations légales (jusqu'à 10 ans pour les documents comptables).
              Vous pouvez à tout moment demander leur suppression.
            </p>
          ),
        },
        {
          icon: Scale,
          title: '5. Vos droits RGPD',
          content: (
            <>
              <p>
                Vous disposez d'un droit d'<strong>accès</strong>, de <strong>rectification</strong>,
                d'<strong>effacement</strong>, de <strong>portabilité</strong> et d'<strong>opposition</strong>.
                Pour exercer ces droits, écrivez-nous à{' '}
                <a href="mailto:Info@chaudrel.be" className="text-brand-gold underline-offset-4 underline decoration-brand-gold/30 hover:text-brand-goldLight">Info@chaudrel.be</a>.
              </p>
              <p>
                En cas de réclamation, vous pouvez également saisir l'Autorité de protection des données belge (APD).
              </p>
            </>
          ),
        },
        {
          icon: Cookie,
          title: '6. Cookies',
          content: (
            <p>
              Ce site n'utilise <strong>aucun cookie publicitaire</strong> ni tracker tiers. Seuls des
              cookies strictement techniques peuvent être utilisés pour la mémorisation de votre menu
              ou la sécurité de la session.
            </p>
          ),
        },
        {
          icon: Building2,
          title: '7. Hébergement',
          content: (
            <p>
              Le site est hébergé par <strong>Vercel Inc.</strong> (340 S Lemon Ave #4133, Walnut, CA 91789, USA),
              sur des infrastructures conformes RGPD. Les données transitent chiffrées via HTTPS.
            </p>
          ),
        },
      ]}
    />
  );
}
