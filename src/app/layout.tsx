import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import './globals.css'
import { Space_Grotesk, Sour_Gummy } from 'next/font/google'

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