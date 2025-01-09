import React from 'react';
import Timeline from './Timeline';

const experiences = [
  {
    titre: "Master Informatique - Ynov Bordeaux",
    description: "Formation en cours - Alternance 1 semaine école / 2 semaines entreprise",
    periode: {
      debut: 2022,
      fin: 2027
    },
    type: 'scolaire'
  },
  {
    titre: "Alternant automatisation de test en python - Dekra Automotive",
    description: "Création de scripts d'automatisation de tests en Python pour l'exécution de scénarios sur navigateur. Fin anticipée de la période d'essai, le poste ne répondant pas à mes attentes professionnelles.",
    periode: {
      debut: 2024,
      fin: 2024
    },
    type: 'professionnel'
  },
  {
    titre: "Formation Marketing Digital",
    description: "StaffMe Academy - Formation intensive sur le marketing digital",
    periode: {
      debut: 2023,
      fin: 2023
    },
    type: 'scolaire'
  },
  {
    titre: "Démarcheur - Voltalis",
    description: "Développement de compétences en communication persuasive et gestion relation client",
    periode: {
      debut: 2023,
      fin: 2023
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
  },
  {
    titre: "Auto-Entrepreneur",
    description: "Missions diverses : Hôte de caisse, Flyering, Vente événementielle, Livraison, Game Master, Acteur",
    periode: {
      debut: 2022
    },
    type: 'professionnel'
  }
];

export default function AboutPage() {
  return (
    <div className="relative container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-12 text-center dark:text-white">
        Mon Parcours
      </h1>
      <Timeline items={experiences} />
    </div>
  );
}