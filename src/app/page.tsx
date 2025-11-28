import ContactButton from '@/components/contact-button';
import TypewriterTitle from '@/components/TypewriterTitle';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eliott Bregere | Développeur Freelance Web & Mobile Fullstack',
  description: 'Développeur freelance spécialisé en développement web et mobile. Solutions sur mesure en JavaScript, TypeScript, React Native, Next.js, Node.js. Disponible pour vos projets.',
  keywords: ['développeur freelance', 'développeur web', 'développeur mobile', 'JavaScript', 'TypeScript', 'React Native', 'Next.js', 'Node.js', 'Python', 'freelance développement', 'prestation développement'],
  openGraph: {
    title: 'Eliott Bregere | Développeur Freelance Web & Mobile Fullstack',
    description: 'Développeur freelance spécialisé en développement web et mobile. Solutions sur mesure pour vos projets digitaux.'
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
            <strong>Développeur freelance</strong> spécialisé dans la création d&apos;applications web et mobile sur mesure. 
            J&apos;accompagne entreprises et entrepreneurs dans la concrétisation de leurs projets digitaux.
            <br /> <br />
            <strong>Mon expertise :</strong> JavaScript, TypeScript, React Native, Next.js, Node.js, Firebase (expert), Python, SQL, Tailwind CSS.
            Je transforme vos idées en solutions techniques performantes et évolutives.
            <br /> <br />
            <strong>Pourquoi me choisir ?</strong> Réactivité, qualité du code, respect des délais et communication transparente. 
            Je m&apos;adapte à vos besoins et vous livre des produits testés et documentés.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
            <p className="font-semibold text-blue-900 dark:text-blue-100">💼 Disponible pour vos projets</p>
            <p className="text-sm text-blue-800 dark:text-blue-200 mt-1">Applications web • Applications mobile • APIs • MVP • Maintenance</p>
          </div>

          <div className="flex flex-wrap gap-7 justify-center sm:justify-start">
            <div className="w-48">
              <ContactButton href="mailto:eliottbreg@gmail.com" />
            </div>
            <div className="w-48">
              <a 
                href="/services" 
                className="inline-block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Mes Services
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}