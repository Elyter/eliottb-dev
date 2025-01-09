'use client'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'
import { Yellowtail } from 'next/font/google'
import Link from 'next/link'

const yellowtail = Yellowtail({
  subsets: ['latin'],
  weight: '400',
})

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 bg-background/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="container mx-auto px-8 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className={`text-4xl font-bold ${yellowtail.className}`}>
            Eliott B
          </Link>

          {/* Hamburger button */}
          <button 
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          
          {/* Navigation */}
          <div className={`lg:flex items-center gap-8 ${isMenuOpen ? 'absolute top-full left-0 right-0 flex flex-col bg-background border-b border-gray-200 dark:border-gray-800 py-4' : 'hidden'}`}>
            <ul className={`flex items-center gap-8 ${isMenuOpen ? 'flex-col' : ''}`}>
              <li><Link href="/competences" className="hover:text-gray-600 transition-colors">Compétences</Link></li>
              <li><Link href="/a-propos" className="hover:text-gray-600 transition-colors">À propos</Link></li>
              <li><Link href="/projets" className="hover:text-gray-600 transition-colors">Projets</Link></li>
              <li><a href="mailto:eliottbreg@gmail.com" className="hover:text-gray-600 transition-colors">Contact</a></li>
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header