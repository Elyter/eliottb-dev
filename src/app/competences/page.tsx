'use client';

import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';
import { useTheme } from 'next-themes';

const skills = [
  { subject: 'React', level: 80 },
  { subject: 'TypeScript', level: 80 },
  { subject: 'Node.js', level: 75 },
  { subject: 'CSS/SCSS', level: 60 },
  { subject: 'tailwindcss', level: 60 },
  { subject: 'Git', level: 80 },
  { subject: 'Firebase', level: 80 },
  { subject: 'Docker', level: 65 },
  { subject: 'SQL', level: 65 },
  { subject: 'React Native', level: 80 },
  { subject: 'Design', level: 50 },
  { subject: 'JavaScript', level: 80 },
  { subject: 'Next.js', level: 70 },
];

function SkillsChart() {
  const { theme } = useTheme();

  const tooltipStyle = {
    backgroundColor: theme === 'dark' ? '#1a1a1a' : 'white',
    border: theme === 'dark' ? '1px solid #555' : '1px solid #ddd',
    borderRadius: '4px',
    padding: '8px',
    color: theme === 'dark' ? 'white' : 'black'
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Mes Compétences</h1>
      <div className="max-w-4xl mx-auto bg-white/5 rounded-lg p-6">
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={skills}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Tooltip 
              formatter={(value) => `${value}%`}
              contentStyle={tooltipStyle}
            />
            <Radar
              name="Compétences"
              dataKey="level"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
              activeDot={{ r: 4, fill: "#fff" }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-center mt-8 text-gray-300">
        Graphique représentant mes principales compétences techniques
      </p>
    </div>
  );
}

// Page component devient server component par défaut
export default function CompetencesPage() {
  return <SkillsChart />
}
