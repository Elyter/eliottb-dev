import React from 'react';

interface TimelineItem {
  titre: string;
  description: string;
  periode: {
    debut: number;
    fin?: number;  // optionnel pour les événements en cours
  };
  type: 'professionnel' | 'scolaire';
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const formatPeriode = (periode: TimelineItem['periode']) => {
    if (!periode.fin) {
      return `Depuis ${periode.debut}`;
    }
    return periode.debut === periode.fin 
      ? periode.debut 
      : `${periode.debut} - ${periode.fin}`;
  };

  return (
    <div className="w-[90%] md:w-[80%] mx-auto py-12 relative">
      {/* Ligne verticale centrale */}
      <div className="absolute top-0 left-[20px] md:left-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700 md:-translate-x-1/2" />

      {items.map((item, index) => (
        <div
          key={index}
          className={`flex mb-8 w-full ${
            index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
          } justify-start`}
        >
          <div className={`w-[calc(100%-40px)] md:w-[calc(50%-2rem)] relative ${
            index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
          } ml-[60px] md:ml-0`}>
            {/* Marker */}
            <div className={`absolute top-5 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 
                          border-2 border-white dark:border-gray-900 z-10 shadow-sm
                          left-[-35px] md:left-auto
                          ${index % 2 === 0 ? 
                            'md:-right-[-5px] md:translate-x-1/2' : 
                            'md:-left-[-5px] md:-translate-x-1/2'}`} />
            
            {/* Contenu */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium dark:text-white">{item.titre}</h3>
                <span className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap ml-2">
                  {formatPeriode(item.periode)}
                </span>
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-300">{item.description}</p>
              <span className={`mt-2 inline-block px-3 py-1 text-sm rounded-full
                             ${item.type === 'professionnel' ? 
                             'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 
                             'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'}`}>
                {item.type}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
