import { Building2, MapPin, Phone, Mail, FileText, Scale, CalendarDays, ShieldCheck, Sparkles, Briefcase } from 'lucide-react';
import LegalPage from './LegalPage';

export default function LegalNotice() {
  return (
    <LegalPage
      eyebrow="Mentions légales"
      title="Tout ce qu'il faut savoir sur l'éditeur du site."
      summary="Identité de l'entreprise, hébergeur, propriété intellectuelle et droit applicable. Une page claire pour identifier qui édite le site chaudrel.be et qui contacter."
      lastUpdated="Juin 2026"
      path="/mentions-legales"
      info={[
        { title: 'Éditeur', value: 'Chaudrel Rénovation', icon: Building2 },
        { title: 'Siège social', value: 'Bruxelles, Belgique', icon: MapPin },
        { title: 'Téléphone', value: '+32 493 97 25 17', icon: Phone },
        { title: 'Email', value: 'Info@chaudrel.be', icon: Mail },
      ]}
      sections={[
        {
          icon: Building2,
          title: '1. Éditeur du site',
          content: (
            <ul className="space-y-1.5">
              <li><strong>Raison sociale&nbsp;:</strong> Chaudrel Rénovation</li>
              <li><strong>Forme juridique&nbsp;:</strong> Entreprise individuelle</li>
              <li><strong>Siège social&nbsp;:</strong> Bruxelles, Belgique</li>
              <li><strong>Numéro d'entreprise&nbsp;:</strong> BE 0778.999.001</li>
              <li><strong>TVA&nbsp;:</strong> BE0778999001</li>
              <li><strong>Email&nbsp;:</strong> Info@chaudrel.be</li>
              <li><strong>Téléphone&nbsp;:</strong> +32 493 97 25 17</li>
              <li><strong>Directeur de la publication&nbsp;:</strong> Matteo, en qualité de fondateur</li>
            </ul>
          ),
        },
        {
          icon: ShieldCheck,
          title: '2. Hébergeur',
          content: (
            <>
              <p>Le site est hébergé par&nbsp;:</p>
              <ul className="space-y-1.5 pt-2">
                <li><strong>Vercel Inc.</strong></li>
                <li>340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
                <li><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-brand-gold underline-offset-4 underline decoration-brand-gold/30 hover:text-brand-goldLight">vercel.com</a></li>
              </ul>
            </>
          ),
        },
        {
          icon: Briefcase,
          title: '3. Activité & assurance',
          content: (
            <ul className="space-y-1.5">
              <li><strong>Activité&nbsp;:</strong> Entreprise générale de rénovation et construction</li>
              <li><strong>Zone d'intervention&nbsp;:</strong> Bruxelles et périphérie</li>
              <li><strong>Assureur responsabilité civile professionnelle&nbsp;:</strong> AXA Belgium</li>
              <li><strong>Numéro de police&nbsp;:</strong> 010.330.000.014</li>
              <li><strong>Couverture géographique&nbsp;:</strong> Belgique</li>
            </ul>
          ),
        },
        {
          icon: FileText,
          title: '4. Propriété intellectuelle',
          content: (
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, photographies, vidéos, icônes) est la propriété exclusive de Chaudrel Rénovation ou de ses partenaires. Toute reproduction, représentation ou diffusion, totale ou partielle, est interdite sans autorisation écrite préalable.
            </p>
          ),
        },
        {
          icon: Scale,
          title: '5. Droit applicable',
          content: (
            <p>
              Les présentes mentions légales sont régies par le <strong>droit belge</strong>. En cas de litige et après tentative de recherche d'une solution amiable, les tribunaux de l'arrondissement judiciaire de Bruxelles seront seuls compétents pour connaître de ce litige.
            </p>
          ),
        },
        {
          icon: Sparkles,
          title: '6. Crédits',
          content: (
            <ul className="space-y-1.5">
              <li><strong>Conception &amp; développement&nbsp;:</strong> Chaudrel × Zo Computer</li>
              <li><strong>Typographies&nbsp;:</strong> Cormorant Garamond · Inter (Google Fonts)</li>
              <li><strong>Photographies&nbsp;:</strong> Unsplash (libres de droits)</li>
              <li><strong>Icônes&nbsp;:</strong> Lucide</li>
            </ul>
          ),
        },
        {
          icon: CalendarDays,
          title: '7. Contact',
          content: (
            <p>
              Pour toute demande relative à ce site, contactez-nous à{' '}
              <a href="mailto:Info@chaudrel.be" className="text-brand-gold underline-offset-4 underline decoration-brand-gold/30 hover:text-brand-goldLight">Info@chaudrel.be</a>{' '}
              ou via le formulaire de la <a href="/#contact" className="text-brand-gold underline-offset-4 underline decoration-brand-gold/30 hover:text-brand-goldLight">page contact</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
