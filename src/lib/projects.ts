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
    title: "My Personal Portfolio Site",
    description: "My personal portfolio website that showcases the projects I've worked on, my skills, and my experiences. It is built with NextJS, Tailwind CSS, and Framer Motion. It is hosted on Vercel.",
    technologies: [{tech: "Typescript"}, {tech: "NextJS"}, {tech: "Tailwind CSS"}, {tech: "Vercel"}, {tech: "Framer Motion"}],
    repo_url: "https://www.github.com/bangueco/bangueco.github.io",
    live_preview: "https://bangueco.vercel.app"
  },
  {
    url: "/images/projects/plus-ultra.jpg",
    title: "Plus Ultra",
    description: "A capstone project for our beneficiary Muscle Mechanic Fitness Gym. A mobile application that identifies workout equipments, helps users to track their progress, and get a personalized workout plan from trainers. ",
    technologies: [{tech: "Typescript"}, {tech: "React Native"}, {tech: "Express JS"}, {tech: "Node JS"}, {tech: "PostgreSQL"}, {tech: "SQLite"}, {tech: "Prisma"}],
    repo_url: "https://www.github.com/bangueco/plus-ultra",
    live_preview: "https://github.com/bangueco/plus-ultra/releases/tag/v1.2.11"
  },
  {
    url: "/images/projects/inventory-management-system.png",
    title: "Inventory Management System",
    description: "A school project. It is a simple inventory management system designed for our computer laboratory in Eastwoods Professional College of Science and Technology.",
    technologies: [{tech: "HTML"}, {tech: "CSS"}, {tech: "PHP"}, {tech: "Laravel"}, {tech: "Bootstrap"}, {tech: "MySQL"}],
    repo_url: "https://www.github.com/bangueco/inventory-system"
  },
];
