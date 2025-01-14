import ContactButton from '@/components/contact-button';
import DownloadButton from '@/components/download-button';
import TypewriterTitle from '@/components/TypewriterTitle';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eliott Bregere | Développeur Web et Mobile Fullstack',
  description: 'Étudiant développeur web et mobile passionné maîtrisant JavaScript, TypeScript, React Native, Next.js, Python, SQL, Git. En recherche d\'alternance.',
  keywords: ['développeur', 'alternance', 'JavaScript', 'TypeScript', 'React Native', 'Next.js', 'Node.js', 'Python'],
  openGraph: {
    title: 'Eliott Bregere | Développeur Web et Mobile Fullstack',
    description: 'Étudiant développeur web et mobile passionné maîtrisant JavaScript, TypeScript, React Native, Next.js, Python, SQL, Git. En recherche d\'alternance.'
  },
  metadataBase: new URL('https://eliottb.dev'),
  alternates: {
    canonical: '/'
  }
}

export default function Page() {
  return (
    <div className="container mx-auto p-12 lg:p-16 min-h-screen">
      <main className="flex flex-col sm:flex-row items-center sm:items-start gap-12 lg:gap-16">
        
        {/* Section Photo et Réseaux */}
        <div className="flex flex-col items-center gap-8">
          <Image 
            src="/profile.png" 
            alt="Photo de profil"
            className="rounded-full h-48 w-48 lg:h-56 lg:w-56 object-cover"
            width={224}
            height={224}
          />
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/eliottbreg" className="p-2 hover:bg-[#f2f2f2] rounded">
              <Image src="/linkedin.svg" alt="LinkedIn" className="h-10 w-10" height={40} width={40} />
            </a>
            <a href="https://github.com/Elyter" className="p-2 hover:bg-[#f2f2f2] rounded">
              <Image src="/github.svg" alt="GitHub" className="h-10 w-10" height={40} width={40}/>
            </a>
          </div>
        </div>

        {/* Section Présentation */}
        <div className="flex flex-col gap-8 text-center sm:text-left">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-3">Eliott Bregere</h1>
            <h2 className="text-2xl lg:text-3xl text-gray-600">
              <TypewriterTitle />
            </h2>
          </div>
          
          <p className="max-w-2xl text-lg">
            Étudiant passionné de développement web, je maîtrise JavaScript, TypeScript, Python, 
            React Native, Next.js, Node.js, Firebase, SQL, Tailwind CSS et Git.
            <br /> <br />
            Curieux, organisé et adaptable, je sais travailler en équipe tout en restant autonome. 
            Doté d&apos;un bon esprit d&apos;analyse et d&apos;une forte capacité d&apos;apprentissage, 
            je suis motivé à relever des défis techniques et à apporter des solutions créatives.
            <br /> <br />
            En recherche d&apos;alternance avec un rythme d&apos;une semaine école / deux semaines entreprise 
            pour contribuer à des projets innovants tout en développant mes compétences.
          </p>

          <div className="flex flex-wrap gap-7 justify-center sm:justify-start">
            <div className="w-40">
              <DownloadButton href="/Cv_eliott_bregere.pdf" />
            </div>
            <div className="w-40">
              <ContactButton href="mailto:eliottbreg@gmail.com" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}