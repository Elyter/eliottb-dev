import React from 'react';
import Timeline from './Timeline';
import { Metadata } from 'next'

interface TimelineItem {
  titre: string;
  description: string;
  periode: {
    debut: number;
    fin?: number;
  };
  type: 'scolaire' | 'professionnel';
}

export const metadata: Metadata = {
  title: 'À Propos | Eliott Bregere - Développeur Freelance',
  description: 'Découvrez mon parcours professionnel et mes expériences en développement web et mobile. Compétences en JavaScript, TypeScript, React Native et Next.js.',
  keywords: ['à propos', 'parcours', 'expérience', 'développeur freelance', 'portfolio'],
  openGraph: {
    title: 'À Propos | Eliott Bregere - Développeur Freelance',
    description: 'Découvrez mon parcours professionnel et mes expériences'
  }
}

const experiences: TimelineItem[] = [
  {
    titre: "Développeur Freelance",
    description: "Création d'applications web et mobile sur mesure. Développement d'APIs, MVP et solutions techniques pour divers clients. Stack: React Native, Next.js, Node.js, TypeScript.",
    periode: {
      debut: 2024
    },
    type: "professionnel" as const
  },
  {
    titre: "Master Informatique - Ynov Bordeaux",
    description: "Spécialisation en développement web et mobile. Maîtrise des technologies modernes et des méthodologies agiles.",
    periode: {
      debut: 2022,
      fin: 2027
    },
    type: "scolaire" as const
  },
  {
    titre: "Développeur Python - Dekra Automotive",
    description: "Développement de scripts d'automatisation de tests pour applications web. Utilisation de Python, Selenium et frameworks de testing.",
    periode: {
      debut: 2024,
      fin: 2024
    },
    type: 'professionnel'
  },
  {
    titre: "Projets Personnels & Open Source",
    description: "Développement d'applications mobiles publiées (Party Mix sur iOS/Android), APIs REST, outils CLI et sites web. Contribution active à des projets open source.",
    periode: {
      debut: 2022
    },
    type: 'professionnel'
  },
  {
    titre: "Auto-Entrepreneur",
    description: "Premières expériences entrepreneuriales et développement de compétences en gestion de projet et relation client.",
    periode: {
      debut: 2022
    },
    type: 'professionnel'
  },
  {
    titre: "Baccalauréat",
    description: "Spécialités Numérique Sciences Informatiques et Mathématiques",
    periode: {
      debut: 2022,
      fin: 2022
    },
    type: 'scolaire'
  }
];

export default function AboutPage() {
  return (
    <div className="relative container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-12 text-center dark:text-white">
        Mon Parcours Professionnel
      </h1>
      <Timeline items={experiences} />
    </div>
  );
}