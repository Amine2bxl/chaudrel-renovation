import {
  ArrowLeft,
  ShieldCheck,
  FileText,
  Mail,
  Phone,
  CalendarDays,
  Eye,
  Database,
  Cookie,
  Building2,
  MapPin,
  Scale,
  Sparkles,
  Briefcase,
  ChevronRight,
} from 'lucide-react';
import { BRAND, LOGO } from '@/lib/content';

function Section({ icon: Icon, title, children, id }) {
  return (
    <section
      id={id}
      className="group scroll-mt-28 rounded-3xl border border-brand-gold/12 bg-white/75 backdrop-blur-sm p-6 sm:p-8 shadow-[0_18px_60px_rgba(17,17,17,0.05)] hover:border-brand-gold/20 transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/15 flex items-center justify-center text-brand-gold flex-shrink-0">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h2 className="font-display text-2xl sm:text-3xl font-light text-brand-ink leading-tight mb-3">
            {title}
          </h2>
          <div className="space-y-4 text-[15px] leading-[1.85] text-brand-ink/75 font-light">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, value, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-brand-gold/12 bg-white/75 backdrop-blur-sm p-4 sm:p-5 flex items-start gap-3">
      <div className="h-10 w-10 rounded-xl bg-brand-gold/10 border border-brand-gold/15 flex items-center justify-center text-brand-gold flex-shrink-0">
        <Icon className="h-4.5 w-4.5" aria-hidden="true" />
      </div>
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-brand-gold font-semibold mb-1">
          {title}
        </p>
        <p className="text-sm sm:text-[15px] text-brand-ink/80 font-light leading-relaxed">
          {value}
        </p>
      </div>
    </div>
  );
}

function Divider({ label }) {
  return (
    <div className="relative my-10 lg:my-14 flex items-center gap-4">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent" />
      <span className="text-[10px] tracking-[0.32em] uppercase text-brand-gold font-semibold whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent" />
    </div>
  );
}

function TocItem({ href, label, Icon }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-gold/10 transition-colors duration-200"
    >
      <Icon className="h-4 w-4 text-brand-gold flex-shrink-0" aria-hidden="true" />
      <span className="text-[13px] text-brand-ink/75 group-hover:text-brand-gold font-light transition-colors duration-200">
        {label}
      </span>
      <ChevronRight className="h-3.5 w-3.5 text-brand-ink/30 group-hover:text-brand-gold ml-auto transition-colors duration-200" />
    </a>
  );
}

const MENTIONS_SECTIONS = [
  {
    id: 'editeur',
    icon: Building2,
    title: '1. Éditeur du site',
    content: (
      <ul className="space-y-1.5">
        <li><strong>Raison sociale&nbsp;:</strong> Chaudrel Rénovation</li>
        <li><strong>Forme juridique&nbsp;:</strong> SRL (Société à Responsabilité Limitée)</li>
        <li><strong>Siège social&nbsp;:</strong> Rue Henri Stacquet 49-51, 1030 Schaerbeek (Belgique)</li>
        <li><strong>Numéro d'entreprise&nbsp;:</strong> 0812.283.245</li>
        <li><strong>Numéro de TVA&nbsp;:</strong> BE 0812.283.245</li>
        <li><strong>Date de constitution&nbsp;:</strong> 15 juin 2009</li>
        <li><strong>Taille d'entreprise&nbsp;:</strong> Petite entreprise (2 ETP)</li>
        <li><strong>Activité principale (NACE)&nbsp;:</strong> Travaux de couverture</li>
        <li><strong>Email&nbsp;:</strong> Info@chaudrel.be</li>
        <li><strong>Téléphone&nbsp;:</strong> +32 493 97 25 17</li>
        <li><strong>Directeur de la publication&nbsp;:</strong> Matteo, en qualité de fondateur</li>
      </ul>
    ),
  },
  {
    id: 'hebergeur',
    icon: ShieldCheck,
    title: '2. Hébergeur',
    content: (
      <>
        <p>Le site est hébergé par&nbsp;:</p>
        <ul className="space-y-1.5 pt-2">
          <li><strong>Vercel Inc.</strong></li>
          <li>340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
          <li>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold underline-offset-4 underline decoration-brand-gold/30 hover:text-brand-goldLight"
            >
              vercel.com
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'activite',
    icon: Briefcase,
    title: '3. Activité & assurances',
    content: (
      <ul className="space-y-1.5">
        <li><strong>Activité&nbsp;:</strong> Entreprise générale de rénovation et construction</li>
        <li><strong>Code NACE&nbsp;:</strong> 43.910 — Travaux de couverture</li>
        <li><strong>Zone d'intervention&nbsp;:</strong> Bruxelles et périphérie (Région de Bruxelles-Capitale)</li>
        <li><strong>Assureur responsabilité civile professionnelle&nbsp;:</strong> AXA Belgium</li>
        <li><strong>Numéro de police&nbsp;:</strong> 010.330.000.014</li>
        <li><strong>Couverture géographique&nbsp;:</strong> Belgique</li>
      </ul>
    ),
  },
  {
    id: 'propriete',
    icon: FileText,
    title: '4. Propriété intellectuelle',
    content: (
      <p>
        L'ensemble du contenu de ce site (textes, images, logos, photographies, vidéos, icônes) est la
        propriété exclusive de Chaudrel Rénovation SRL ou de ses partenaires. Toute reproduction,
        représentation ou diffusion, totale ou partielle, est interdite sans autorisation écrite préalable.
      </p>
    ),
  },
  {
    id: 'donnees-officielles',
    icon: Scale,
    title: '5. Données officielles',
    content: (
      <>
        <p>
          Les informations relatives à l'entreprise peuvent être consultées à tout moment auprès des sources
          officielles belges&nbsp;:
        </p>
        <ul className="space-y-1.5 pt-2">
          <li><strong>Banque-Carrefour des Entreprises (BCE)</strong> — n° 0812.283.245</li>
          <li><strong>Banque Nationale de Belgique (BNB)</strong> — comptes annuels déposés</li>
          <li><strong>Moniteur Belge</strong> — publications légales</li>
        </ul>
      </>
    ),
  },
  {
    id: 'droit',
    icon: Scale,
    title: '6. Droit applicable',
    content: (
      <p>
        Les présentes mentions légales sont régies par le <strong>droit belge</strong>. En cas de litige et
        après tentative de recherche d'une solution amiable, les tribunaux de l'arrondissement judiciaire de
        Bruxelles seront seuls compétents pour connaître de ce litige.
      </p>
    ),
  },
  {
    id: 'credits',
    icon: Sparkles,
    title: '7. Crédits',
    content: (
      <ul className="space-y-1.5">
        <li><strong>Conception &amp; développement&nbsp;:</strong> Chaudrel × Zo Computer</li>
        <li><strong>Typographies&nbsp;:</strong> Cormorant Garamond · Inter (Google Fonts)</li>
        <li><strong>Photographies&nbsp;:</strong> Unsplash (libres de droits)</li>
        <li><strong>Icônes&nbsp;:</strong> Lucide</li>
      </ul>
    ),
  },
];

const PRIVACY_SECTIONS = [
  {
    id: 'engagement',
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
    id: 'responsable',
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
    id: 'donnees',
    icon: Database,
    title: '3. Données collectées',
    content: (
      <>
        <p>
          Nous collectons uniquement ce que vous nous transmettez via le formulaire de contact,
          l'appel téléphonique ou l'email direct&nbsp;:
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
    id: 'finalites',
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
    id: 'base-legale',
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
    id: 'conservation',
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
    id: 'droits',
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
    id: 'cookies',
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
    id: 'securite',
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
];

export default function LegalCombined() {
  return (
    <main className="min-h-screen bg-brand-cream text-brand-ink">
      <div className="relative overflow-hidden border-b border-brand-gold/10 bg-[radial-gradient(circle_at_top,_rgba(140,118,78,0.12),_transparent_45%),linear-gradient(to_bottom,rgba(255,255,255,0.82),rgba(247,245,242,1))]">
        <div className="absolute inset-0 opacity-[0.12]" aria-hidden="true">
          <div className="absolute -top-32 right-[-8rem] h-96 w-96 rounded-full bg-brand-gold blur-3xl" />
          <div className="absolute top-40 left-[-6rem] h-80 w-80 rounded-full bg-brand-goldLight blur-3xl" />
        </div>

        <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-xl border-b border-brand-gold/15 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-10">
            <div className="flex items-center justify-between h-14 lg:h-[72px]">
              <a href="/" className="flex items-center gap-2.5 group">
                <div className="h-11 w-11 rounded-lg bg-white p-0.5 ring-1 ring-brand-gold/30 flex items-center justify-center">
                  <img src={LOGO} alt={`${BRAND.name} ${BRAND.tagline}`} className="h-full w-full object-contain" width="44" height="44" />
                </div>
                <span className="flex flex-col leading-none">
                  <span className="font-display text-lg lg:text-xl tracking-[0.1em] font-semibold text-brand-ink">{BRAND.name.toUpperCase()}</span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-brand-gold font-medium">{BRAND.tagline}</span>
                </span>
              </a>
              <div className="flex items-center gap-2">
                <a href="/" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium tracking-wide text-brand-ink/70 hover:bg-brand-gold/10 hover:text-brand-gold transition-all duration-200">
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Retour au site
                </a>
                <a href="/#contact" className="px-5 py-2.5 bg-brand-gold text-white text-[12px] tracking-[0.12em] uppercase font-semibold rounded-full hover:bg-[#5E4F34] transition-all duration-300 shadow-lg shadow-brand-gold/20">
                  Consultation gratuite
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 sm:pt-32 lg:pt-36 pb-14 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-end">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-brand-gold font-semibold mb-4">
                Mentions légales &amp; Politique de confidentialité
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink leading-[1.05] mb-5 max-w-2xl">
                Transparence, édition et données.
              </h1>
              <p className="text-[15px] sm:text-base lg:text-lg text-brand-ink/70 font-light leading-[1.9] max-w-2xl">
                Tout ce qu'il faut savoir sur l'éditeur du site chaudrel.be et sur la manière dont nous
                traitons vos données personnelles. Une lecture claire, conforme au RGPD et au droit belge.
              </p>
              <div className="flex flex-wrap gap-3 mt-7">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-brand-gold/12 text-[12px] text-brand-ink/70">
                  <ShieldCheck className="h-4 w-4 text-brand-gold" /> Conforme RGPD
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-brand-gold/12 text-[12px] text-brand-ink/70">
                  <Scale className="h-4 w-4 text-brand-gold" /> Droit belge
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-brand-gold/12 text-[12px] text-brand-ink/70">
                  <CalendarDays className="h-4 w-4 text-brand-gold" /> Mise à jour juin 2026
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InfoCard title="Éditeur" value="Chaudrel Rénovation SRL" icon={Building2} />
              <InfoCard title="Siège social" value="Rue Henri Stacquet 49-51, 1030 Schaerbeek" icon={MapPin} />
              <InfoCard title="N° entreprise" value="BE 0812.283.245" icon={Scale} />
              <InfoCard title="Email" value="Info@chaudrel.be" icon={Mail} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-8 lg:gap-10 items-start">
          <div className="space-y-6 lg:space-y-8">
            <Divider label="Mentions légales" />
            {MENTIONS_SECTIONS.map((section) => (
              <Section key={section.id} id={section.id} icon={section.icon} title={section.title}>
                {section.content}
              </Section>
            ))}

            <Divider label="Politique de confidentialité" />
            {PRIVACY_SECTIONS.map((section) => (
              <Section key={section.id} id={section.id} icon={section.icon} title={section.title}>
                {section.content}
              </Section>
            ))}
          </div>

          <aside className="sticky top-24 space-y-4">
            <nav
              aria-label="Sommaire de la page"
              className="rounded-3xl border border-brand-gold/12 bg-white/75 backdrop-blur-sm p-5"
            >
              <p className="text-[10px] tracking-[0.22em] uppercase text-brand-gold font-semibold mb-4 px-2">
                Sur cette page
              </p>

              <p className="text-[10px] tracking-[0.18em] uppercase text-brand-ink/40 font-semibold px-3 mt-3 mb-1">
                Mentions légales
              </p>
              {MENTIONS_SECTIONS.map((s) => (
                <TocItem key={s.id} href={`#${s.id}`} label={s.title.replace(/^\d+\.\s/, '')} Icon={s.icon} />
              ))}

              <p className="text-[10px] tracking-[0.18em] uppercase text-brand-ink/40 font-semibold px-3 mt-5 mb-1">
                Confidentialité
              </p>
              {PRIVACY_SECTIONS.map((s) => (
                <TocItem key={s.id} href={`#${s.id}`} label={s.title.replace(/^\d+\.\s/, '')} Icon={s.icon} />
              ))}
            </nav>

            <div className="rounded-3xl border border-brand-gold/12 bg-[#0E0E0E] text-white p-6 shadow-[0_18px_60px_rgba(17,17,17,0.12)]">
              <p className="text-[10px] tracking-[0.22em] uppercase text-brand-goldLight font-semibold mb-3">
                Une question ?
              </p>
              <h2 className="font-display text-3xl font-light leading-tight mb-4">
                On vous répond directement.
              </h2>
              <p className="text-white/55 text-sm leading-7 font-light mb-6">
                Pour toute demande relative à ce site, à vos données ou à un projet de rénovation,
                écrivez-nous — nous lisons chaque message.
              </p>
              <a
                href="mailto:Info@chaudrel.be"
                className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 bg-brand-gold text-white text-[12px] tracking-[0.12em] uppercase font-semibold rounded-full hover:bg-brand-goldLight transition-colors duration-200"
              >
                <Mail className="h-4 w-4" /> Info@chaudrel.be
              </a>
            </div>

            <div className="rounded-3xl border border-brand-gold/12 bg-white/75 p-6">
              <p className="text-[10px] tracking-[0.22em] uppercase text-brand-gold font-semibold mb-3">
                Coordonnées
              </p>
              <div className="space-y-3 text-sm text-brand-ink/75 font-light">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand-gold" /> {BRAND.email}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-gold" /> {BRAND.phones[1].number}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-gold" /> {BRAND.zone}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}