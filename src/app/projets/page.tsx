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

interface ProjectInfo {
  repo: string;
  liveUrl?: string;
  platform?: string;
  androidUrl?: string;
  iosUrl?: string;
}

// Liste réorganisée avec les projets en ligne en premier
const FEATURED_REPOS: ProjectInfo[] = [
  {
    repo: 'Elyter/party-mix',
    platform: 'Android & iOS',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.eliottdev.partymix',
    iosUrl: 'https://apps.apple.com/fr/app/party-mix/id6695729598'
  },
  {
    repo: 'Elyter/Human-capacities',
    liveUrl: 'https://human-capacities.vercel.app'
  },
  {
    repo: 'Elyter/eliottb-dev',
    liveUrl: 'https://eliottb.dev'
  },
  { repo: 'Elyter/API-Monitoring'},
  { repo: 'Elyter/tix-CLI' },
  { repo: 'Elyter/tix-API' },
  { repo: 'Elyter/todo-api' },
  { repo: 'Elyter/JSA-calendar' },
]

function ProjectsList() {
  const [projects, setProjects] = useState<(GitHubProject & ProjectInfo)[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      const projectPromises = FEATURED_REPOS.map(async (projectInfo) => {
        const response = await fetch(`https://api.github.com/repos/${projectInfo.repo}`)
        const data = await response.json()
        return { ...data, ...projectInfo }
      })
      
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
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold dark:text-white">
                  {project.name}
                </h2>
                {(project.liveUrl || project.platform) && (
                  <span className="text-xs px-2 py-1 bg-green-500 text-white rounded-full">
                    {project.platform || 'Live'}
                  </span>
                )}
              </div>
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

            {project.androidUrl && project.iosUrl ? (
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[125%]
                            w-[90%] flex justify-between gap-2
                            opacity-0 transition-all duration-300
                            group-hover:translate-y-[50%] group-hover:opacity-100">
                <a
                  href={project.androidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-2xl bg-[#008bf8] text-white text-center py-2 px-2 text-sm"
                >
                  Google Play
                </a>
                <a
                  href={project.iosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-2xl bg-[#008bf8] text-white text-center py-2 px-2 text-sm"
                >
                  App Store
                </a>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-2xl bg-[#333] text-white text-center py-2 px-2 text-sm"
                >
                  GitHub
                </a>
              </div>
            ) : project.liveUrl ? (
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[125%]
                            w-[80%] flex justify-between gap-2
                            opacity-0 transition-all duration-300
                            group-hover:translate-y-[50%] group-hover:opacity-100">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-2xl bg-[#008bf8] text-white text-center py-2 px-4"
                >
                  Voir le site
                </a>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-2xl bg-[#333] text-white text-center py-2 px-4"
                >
                  GitHub
                </a>
              </div>
            ) : (
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[125%]
                         w-[60%] rounded-2xl bg-[#333] text-white text-center py-2 px-4
                         opacity-0 transition-all duration-300 cursor-pointer
                         group-hover:translate-y-[50%] group-hover:opacity-100"
              >
                GitHub
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Page component devient server component par défaut
export default function ProjectsPage() {
  return <ProjectsList />
}