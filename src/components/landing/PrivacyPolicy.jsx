import { ShieldCheck, Eye, Database, Cookie, Building2, Mail, CalendarDays, FileText, Scale } from 'lucide-react';
import LegalPage from './LegalPage';

export default function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Politique de confidentialité"
      title="Vos données, traitées avec la même rigueur que votre projet."
      summary="Découvrez comment Chaudrel Rénovation SRL collecte, utilise et protège les informations que vous partagez via notre site. Une approche claire, conforme au RGPD, sans cookies superflus."
      lastUpdated="Juin 2026"
      path="/politique-confidentialite"
      info={[
        { title: 'Responsable', value: 'Chaudrel Rénovation SRL', icon: Building2 },
        { title: 'N° entreprise', value: 'BE 0812.283.245', icon: Scale },
        { title: 'Email', value: 'Info@chaudrel.be', icon: Mail },
        { title: 'Mise à jour', value: 'Juin 2026', icon: CalendarDays },
      ]}
      sections={[
        {
          icon: FileText,
          title: '1. Engagement',
          content: (
            <p>
              Chaudrel Rénovation SRL traite les informations de ses prospects et clients avec la même exigence
              que ses chantiers. Cette politique décrit nos pratiques, vos droits et la marche à suivre pour
              les exercer, conformément au Règlement Général sur la Protection des Données (RGPD) et à la
              loi belge du 30 juillet 2018 relative à la protection des personnes physiques à l'égard des
              traitements de données à caractère personnel.
            </p>
          ),
        },
        {
          icon: Building2,
          title: '2. Responsable du traitement',
          content: (
            <ul className="space-y-1.5">
              <li><strong>Raison sociale&nbsp;:</strong> Chaudrel Rénovation SRL</li>
              <li><strong>Siège social&nbsp;:</strong> Rue Henri Stacquet 49-51, 1030 Schaerbeek (Belgique)</li>
              <li><strong>Numéro d'entreprise&nbsp;:</strong> BE 0812.283.245</li>
              <li><strong>Email&nbsp;:</strong> Info@chaudrel.be</li>
              <li><strong>Téléphone&nbsp;:</strong> +32 493 97 25 17</li>
            </ul>
          ),
        },
        {
          icon: Database,
          title: '3. Données collectées',
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
          title: '4. Finalités',
          content: (
            <>
              <p>Vos données servent exclusivement à&nbsp;:</p>
              <ul className="space-y-2 pt-2">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Répondre à votre demande de devis ou d'information</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Vous recontacter dans le cadre de votre projet</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Établir une proposition adaptée</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Assurer le suivi commercial après intervention</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Tenir notre comptabilité (facturation et obligations légales)</li>
              </ul>
            </>
          ),
        },
        {
          icon: Database,
          title: '5. Base légale',
          content: (
            <p>
              Les traitements reposent sur votre <strong>consentement</strong> (formulaire de contact) ou
              sur l'<strong>exécution d'un contrat</strong> (devis, chantier, facturation). La conservation
              comptable est fondée sur une <strong>obligation légale</strong>.
            </p>
          ),
        },
        {
          icon: Eye,
          title: '6. Durée de conservation',
          content: (
            <>
              <p>
                Les données sont conservées pendant la durée nécessaire au traitement de votre demande,
                puis archivées conformément aux obligations légales applicables en Belgique.
              </p>
              <ul className="space-y-1.5 pt-2">
                <li><strong>Prospects (sans devis signé)&nbsp;:</strong> 3 ans après le dernier contact</li>
                <li><strong>Clients (devis, factures, plans)&nbsp;:</strong> 10 ans après la dernière prestation (obligation comptable)</li>
              </ul>
            </>
          ),
        },
        {
          icon: Scale,
          title: '7. Vos droits RGPD',
          content: (
            <>
              <p>
                Vous disposez à tout moment d'un droit d'<strong>accès</strong>, de <strong>rectification</strong>,
                d'<strong>effacement</strong>, de <strong>portabilité</strong>, de <strong>limitation</strong>{' '}
                et d'<strong>opposition</strong> au traitement de vos données personnelles.
              </p>
              <p>
                Pour exercer ces droits, écrivez-nous à{' '}
                <a href="mailto:Info@chaudrel.be" className="text-brand-gold underline-offset-4 underline decoration-brand-gold/30 hover:text-brand-goldLight">Info@chaudrel.be</a>.
                Nous répondrons dans un délai d'un mois.
              </p>
              <p>
                En cas de réclamation, vous pouvez saisir l'
                <strong> Autorité de protection des données (APD)</strong> — Rue de la Presse 35,
                1000 Bruxelles — <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener noreferrer" className="text-brand-gold underline-offset-4 underline decoration-brand-gold/30 hover:text-brand-goldLight">autoriteprotectiondonnees.be</a>.
              </p>
            </>
          ),
        },
        {
          icon: Cookie,
          title: '8. Cookies',
          content: (
            <p>
              Ce site n'utilise <strong>aucun cookie publicitaire</strong> ni tracker tiers. Seuls des
              cookies strictement techniques peuvent être utilisés pour la mémorisation de votre menu
              ou la sécurité de la session. Aucun transfert de données à des fins marketing n'est effectué.
            </p>
          ),
        },
        {
          icon: ShieldCheck,
          title: '9. Hébergement & sécurité',
          content: (
            <>
              <p>
                Le site est hébergé par <strong>Vercel Inc.</strong> (340 S Lemon Ave #4133, Walnut, CA 91789, USA),
                sur des infrastructures conformes RGPD. Les données transitent chiffrées via HTTPS/TLS.
              </p>
              <p>
                Les emails sont gérés par notre prestataire d'hébergement web. Aucune donnée n'est
                transférée vers un pays tiers sans garanties conformes au RGPD.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
