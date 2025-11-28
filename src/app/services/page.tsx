import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Tarifs | Eliott Bregere - Développeur Freelance',
  description: 'Découvrez mes services de développement web et mobile : applications React Native, sites Next.js, APIs Node.js. Devis personnalisés et accompagnement sur mesure.',
  keywords: ['services développement', 'tarifs développeur', 'freelance web', 'application mobile', 'API', 'MVP', 'prestation développement'],
  openGraph: {
    title: 'Services & Tarifs | Eliott Bregere',
    description: 'Services de développement web et mobile sur mesure'
  }
};

const services = [
  {
    icon: "📱",
    title: "Applications Mobile",
    description: "Développement d'applications iOS et Android avec React Native. Interface intuitive, performances optimales et publication sur les stores.",
    features: [
      "React Native cross-platform",
      "Design responsive et moderne",
      "Intégration API et backend",
      "Publication App Store & Play Store",
      "Maintenance et mises à jour"
    ],
    price: "À partir de 500€"
  },
  {
    icon: "💻",
    title: "Sites Web & Applications",
    description: "Création de sites vitrine, e-commerce ou applications web complexes avec Next.js. SEO optimisé et performances maximales.",
    features: [
      "Next.js avec SSR/SSG",
      "Design sur mesure Tailwind CSS",
      "SEO et performance optimisés",
      "Animations et interactions",
      "Hébergement et déploiement"
    ],
    price: "À partir de 500€"
  },
  {
    icon: "⚙️",
    title: "APIs & Backend",
    description: "Développement d'APIs REST robustes et scalables avec Node.js. Base de données, authentification et documentation complète.",
    features: [
      "Node.js / Express / Fastify",
      "Firebase (expert) / Supabase",
      "Base de données SQL/NoSQL",
      "Authentification sécurisée",
      "Documentation API"
    ],
    price: "À partir de 500€"
  },
  {
    icon: "⚡",
    title: "MVP & Prototypes",
    description: "Concrétisation rapide de votre idée avec un MVP fonctionnel. Idéal pour valider votre concept avant un développement complet.",
    features: [
      "Développement rapide (1-3 semaines)",
      "Fonctionnalités essentielles",
      "Tests utilisateurs",
      "Évolutivité garantie",
      "Support post-lancement"
    ],
    price: "À partir de 500€"
  }
];

const workflow = [
  {
    step: "1",
    title: "Premier Contact",
    description: "Discussion gratuite de 30min pour comprendre votre projet, vos besoins et vos objectifs."
  },
  {
    step: "2",
    title: "Devis Personnalisé",
    description: "Proposition détaillée avec planning, fonctionnalités et tarif adapté à votre budget."
  },
  {
    step: "3",
    title: "Développement",
    description: "Réalisation de votre projet avec points réguliers et démonstrations des avancées."
  },
  {
    step: "4",
    title: "Livraison & Suivi",
    description: "Tests finaux, formation si nécessaire et support après livraison."
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto p-8 lg:p-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 dark:text-white">
          Services & Prestations
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Des solutions techniques sur mesure pour donner vie à vos projets digitaux.
          De l&apos;idée à la mise en production, je vous accompagne à chaque étape.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
          >
            <div className="text-5xl mb-4">
              {service.icon}
            </div>
            <h2 className="text-2xl font-bold mb-3 dark:text-white">
              {service.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {service.description}
            </p>
            <ul className="space-y-3 mb-6">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✔️</span>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {service.price}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Tarif indicatif, devis personnalisé sur demande
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Workflow Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          Comment ça marche ?
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {workflow.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">
          Autres Prestations
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-2 dark:text-white">🔧 Maintenance & Support</h3>
            <p className="text-gray-600 dark:text-gray-300">Corrections de bugs, mises à jour et évolutions de vos applications existantes.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 dark:text-white">💡 Conseil Technique</h3>
            <p className="text-gray-600 dark:text-gray-300">Audit de code, choix de technologies et recommandations d&apos;architecture.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 dark:text-white">🚀 Migration & Refactoring</h3>
            <p className="text-gray-600 dark:text-gray-300">Migration vers des technologies modernes et optimisation de performances.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-center text-white">
        <div className="text-6xl mb-6">💬</div>
        <h2 className="text-3xl font-bold mb-4">
          Prêt à démarrer votre projet ?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Discutons de votre projet lors d&apos;un appel gratuit de 30 minutes
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="mailto:eliottbreg@gmail.com?subject=Demande de devis - [Nom du projet]"
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Demander un Devis
          </a>
          <a 
            href="mailto:eliottbreg@gmail.com?subject=Prise de contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
          >
            Me Contacter
          </a>
        </div>
      </div>

      {/* FAQ Mini Section */}
      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          Questions Fréquentes
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2 dark:text-white">⏱️ Quel est le délai de réalisation ?</h3>
            <p className="text-gray-600 dark:text-gray-300">Cela dépend de la complexité du projet. Un MVP peut être livré en 1-3 semaines, un projet complet en 1-2 mois.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 dark:text-white">💰 Comment sont calculés les tarifs ?</h3>
            <p className="text-gray-600 dark:text-gray-300">Tarifs adaptés pour startups et petites entreprises. Forfait fixe ou tarif journalier selon le projet. Devis détaillé après analyse de vos besoins.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 dark:text-white">📞 Comment se passe la communication ?</h3>
            <p className="text-gray-600 dark:text-gray-300">Points réguliers par visio ou mail. Vous suivez l&apos;avancement en temps réel avec des démos régulières.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 dark:text-white">🔒 Et après la livraison ?</h3>
            <p className="text-gray-600 dark:text-gray-300">Support inclus pendant 1 mois après livraison. Possibilité de contrat de maintenance mensuel.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
