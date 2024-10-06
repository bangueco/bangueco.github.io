export interface ProjectsProps {
  url: string
  title: string
  description: string
  technologies: Array<{tech: string}>
  repo_url: string,
  live_preview?: string
}

export const projects: Array<ProjectsProps> = [
  {
    url: "/images/projects/portfolio.png",
    title: "My Portfolio",
    description: "My personal portfolio where it showcases some of information about me and my experiences as a programmer.",
    technologies: [{tech: "Typescript"}, {tech: "NextJS"}, {tech: "Tailwind CSS"}, {tech: "Vercel"}, {tech: "Framer Motion"}],
    repo_url: "https://www.github.com/bangueco/bangueco.github.io",
    live_preview: "https://bangueco.vercel.app"
  },
  {
    url: "/images/projects/plus-ultra.jpg",
    title: "Plus Ultra",
    description: "My capstone project, a fitness mobile application that tracks/logs user workouts and has the functionality to identify equipments, the identified equipment will also lists all the possible exercises for the equipment.",
    technologies: [{tech: "Typescript"}, {tech: "React Native"}, {tech: "Express JS"}, {tech: "Node JS"}, {tech: "PostgreSQL"}, {tech: "SQLite"}, {tech: "Prisma"}],
    repo_url: "https://www.github.com/bangueco/plus-ultra",
    live_preview: "https://play.google.com/store/apps?hl=en_US&pli=1"
  },
  {
    url: "/images/projects/inventory-management-system.png",
    title: "Inventory Management System",
    description: "One of my school activity in my second year 1st sem midterm requirement for DBMS subject, a simple inventory management system for our computer laboratory.",
    technologies: [{tech: "HTML"}, {tech: "CSS"}, {tech: "PHP"}, {tech: "Laravel"}, {tech: "Bootstrap"}, {tech: "MySQL"}],
    repo_url: "https://www.github.com/bangueco/inventory-system"
  },
  {
    url: "/images/projects/unavailable-image.jpg",
    title: "Event Registration System",
    description: "One of my school activity in my second year 1st sem finals requirement for DBMS subject, a simple event registration management system.",
    technologies: [{tech: "HTML"}, {tech: "CSS"}, {tech: "PHP"}, {tech: "Laravel"}, {tech: "Bootstrap"}, {tech: "MongoDB"}],
    repo_url: "https://www.github.com/bangueco/event-registration-system"
  },
  {
    url: "/images/projects/weather-app.png",
    title: "Weather App",
    description: "A simple personal project that fetches the current weather of a city using some third party weather api. This project is also my first project using webpack, and also helps me understand how async javascript works under the hood.",
    technologies: [{tech: "HTML"}, {tech: "CSS"}, {tech: "Javascript"}, {tech: "Webpack"}, {tech: "npm"}],
    repo_url: "https://www.github.com/bangueco/weather-app",
    live_preview: "https://bangueco.github.io/weather-app"
  }
]