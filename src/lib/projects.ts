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
    description: "A personal portfolio showcasing information about me, my skills, and my programming experience.",
    technologies: [{tech: "Typescript"}, {tech: "NextJS"}, {tech: "Tailwind CSS"}, {tech: "Vercel"}, {tech: "Framer Motion"}],
    repo_url: "https://www.github.com/bangueco/bangueco.github.io",
    live_preview: "https://bangueco.vercel.app"
  },
  {
    url: "/images/projects/plus-ultra.jpg",
    title: "Plus Ultra",
    description: "My capstone project, for our beneficiary Muscle Mechanic Fitness Gym. A fitness mobile app that tracks and logs user workouts and identify workout equipments.",
    technologies: [{tech: "Typescript"}, {tech: "React Native"}, {tech: "Express JS"}, {tech: "Node JS"}, {tech: "PostgreSQL"}, {tech: "SQLite"}, {tech: "Prisma"}],
    repo_url: "https://www.github.com/bangueco/plus-ultra",
    live_preview: "https://play.google.com/store/apps?hl=en_US&pli=1"
  },
  {
    url: "/images/projects/inventory-management-system.png",
    title: "Inventory Management System",
    description: "A school project. It is a simple inventory management system designed for our computer laboratory in Eastwoods Professional College of Science and Technology.",
    technologies: [{tech: "HTML"}, {tech: "CSS"}, {tech: "PHP"}, {tech: "Laravel"}, {tech: "Bootstrap"}, {tech: "MySQL"}],
    repo_url: "https://www.github.com/bangueco/inventory-system"
  },
];
