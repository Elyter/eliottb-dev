'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface GitHubProject {
  id: number
  name: string
  description: string
  html_url: string
  language: string
  stargazers_count: number
}

// Liste des repos à afficher
const FEATURED_REPOS = [
  'Elyter/party-mix',
  'Elyter/todo-api',
  'Elyter/Human-capacities',
  'Elyter/tix-CLI',
  'Elyter/tix-API',
  'Elyter/JSA-calendar',
  // Ajoutez vos autres repos ici au format 'username/repo'
]

export default function ProjectsPage() {
  const [projects, setProjects] = useState<GitHubProject[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      const projectPromises = FEATURED_REPOS.map(repo => 
        fetch(`https://api.github.com/repos/${repo}`).then(res => res.json())
      )
      
      const projectsData = await Promise.all(projectPromises)
      setProjects(projectsData)
    }
    
    fetchProjects()
  }, [])

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">
        Mes Projets
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-[350px] h-[350px] relative p-7 rounded-[20px] 
                    bg-[#f5f5f5] dark:bg-gray-800 border-2 border-[#c3c6ce] 
                    transition-all duration-500 overflow-visible
                    hover:border-[#008bf8] hover:shadow-lg
                    group mx-auto"
          >
            <div className="h-full flex flex-col justify-center gap-2">
              <h2 className="text-2xl font-bold dark:text-white">
                {project.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description || "Aucune description disponible"}
              </p>
              
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full dark:text-gray-300">
                  {project.language || "N/A"}
                </span>
                <span className="text-sm dark:text-gray-300">
                  ⭐ {project.stargazers_count}
                </span>
              </div>
            </div>

            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[125%]
                       w-[60%] rounded-2xl bg-[#008bf8] text-white text-center py-2 px-4
                       opacity-0 transition-all duration-300 cursor-pointer
                       group-hover:translate-y-[50%] group-hover:opacity-100"
            >
              Voir sur GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 