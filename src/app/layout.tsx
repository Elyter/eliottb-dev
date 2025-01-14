import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import './globals.css'
import { Metadata } from 'next'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}