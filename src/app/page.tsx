import ContactButton from '@/components/contact-button';
import DownloadButton from '@/components/download-button';
import TypewriterTitle from '@/components/TypewriterTitle';

export default function Page() {
  return (
    <div className="container mx-auto p-12 lg:p-16 min-h-screen">
      <main className="flex flex-col sm:flex-row items-center sm:items-start gap-12 lg:gap-16">
        
        {/* Section Photo et Réseaux */}
        <div className="flex flex-col items-center gap-8">
          <img 
            src="/profile.png" 
            alt="Photo de profil"
            className="rounded-full h-48 w-48 lg:h-56 lg:w-56 object-cover"
          />
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/eliottbreg" className="p-2 hover:bg-[#f2f2f2] rounded">
              <img src="/linkedin.svg" alt="LinkedIn" className="h-10 w-10" />
            </a>
            <a href="https://github.com/Elyter" className="p-2 hover:bg-[#f2f2f2] rounded">
              <img src="/github.svg" alt="GitHub" className="h-10 w-10" />
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
            Je suis développeur Full Stack spécialisé en React Native et développement backend. 
            Passionné par la création d'applications performantes et intuitives, 
            j'aime relever de nouveaux défis techniques.
            <br /> <br />
            En recherche d'alternance dans le cadre de ma formation en développement web et mobile à Ynov. 
            <br />Rythme d'alternance : 2 semaines en entreprise / 1 semaine en formation.
          </p>

          <div className="flex flex-wrap gap-7 justify-center sm:justify-start">
            <div className="w-40">
              <DownloadButton href="/cv.pdf" />
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