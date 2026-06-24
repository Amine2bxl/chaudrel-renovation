import { motion } from 'framer-motion';
import { Shield, Clock, Gem, Users, Ruler, Leaf } from 'lucide-react';

const BENEFITS = [
  {
    icon: Gem,
    title: 'Matériaux Premium',
    desc: 'Marbre, ardoise naturelle, bois massif — nous sélectionnons exclusivement les matières les plus nobles.',
  },
  {
    icon: Clock,
    title: 'Respect des Délais',
    desc: 'Planning précis dès le départ. Nous nous engageons sur un calendrier et nous le tenons, toujours.',
  },
  {
    icon: Ruler,
    title: '100% Sur Mesure',
    desc: 'Aucun projet prédéfini. Chaque rénovation est conçue selon vos goûts, vos besoins, votre mode de vie.',
  },
  {
    icon: Users,
    title: 'Accompagnement Complet',
    desc: 'Un interlocuteur dédié du début à la fin. Nous gérons tout pour vous garantir une tranquillité totale.',
  },
  {
    icon: Shield,
    title: 'Garantie de Résultat',
    desc: "Nous ne livrons qu'un chantier parfait. Notre réputation repose sur l'excellence, sans compromis.",
  },
  {
    icon: Leaf,
    title: 'Éco-Responsable',
    desc: "Matériaux durables, techniques respectueuses de l'environnement pour des rénovations qui durent.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6 },
  }),
};

export default function Benefits() {
  return (
    <section id="benefits" className="py-14 lg:py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 lg:mb-20"
        >
          <p className="text-[11px] tracking-[0.25em] uppercase text-brand-gold font-semibold mb-4">
            Pourquoi Chaudrel
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-white leading-tight">
            L'Excellence au Service
            <br />
            <span className="italic text-brand-goldLight">de Votre Vision</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {BENEFITS.map((b, i) => (
            <motion.article
              key={b.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-gold/30 rounded-2xl p-7 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center mb-5 group-hover:bg-brand-gold/25 transition-colors duration-300">
                <b.icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-light text-white mb-2">{b.title}</h3>
              <p className="text-[13px] text-white/40 font-light leading-relaxed">{b.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}