"use client"

import { motion } from "framer-motion"
import { SkillCard } from "./skill-card"

const skillsData = [
  { name: "React.js", icon: "/react.png", category: "Frontend" },
  { name: "Next.js", icon: "/nextjs.svg", category: "Framework" },
  { name: "TypeScript", icon: "/ts.png", category: "Language" },
  { name: "JavaScript", icon: "/js.png", category: "Language" },
  { name: "Node.js", icon: "/node.svg", category: "Backend" },
  { name: "GraphQL", icon: "graphql.webp", category: "API" },
  { name: "Docker", icon: "docker.svg", category: "DevOps" },
  { name: "Git", icon: "github.png", category: "Tools" },
  { name: "HTML5", icon: "html.png", category: "Frontend" },
  { name: "CSS3", icon: "css.png", category: "Frontend" },
]

const skillsData2 = [
  { name: "MACH Architecture", icon: "architecture.webp", category: "Architecture" },
  { name: "Agentic AI", icon: "🤖", category: "AI/ML" },
  { name: "Google ADK", icon: "🔍", category: "AI/ML" },
  { name: "Tailwind CSS", icon: "tailwind.png", category: "Styling" },
  { name: "Framer Motion", icon: "framer.png", category: "Animation" },
  { name: "REST APIs", icon: "🔗", category: "API" },
  { name: "Responsive Design", icon: "📱", category: "Design" },
  { name: "Agile", icon: "🔄", category: "Methodology" },
  { name: "Team Leadership", icon: "👥", category: "Soft Skills" },
  { name: "Problem Solving", icon: "🧩", category: "Soft Skills" },
]

export function SkillsCarousel() {
  return (
    <div className="relative">
      {/* First row - moving left */}
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
        className="flex mb-8"
      >
        {[...skillsData, ...skillsData, ...skillsData].map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} name={skill.name} icon={skill.icon} category={skill.category} />
        ))}
      </motion.div>

      {/* Second row - moving right */}
      <motion.div
        animate={{ x: [-2000, 0] }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 35,
            ease: "linear",
          },
        }}
        className="flex"
      >
        {[...skillsData2, ...skillsData2, ...skillsData2].map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} name={skill.name} icon={skill.icon} category={skill.category} />
        ))}
      </motion.div>

      {/* Gradient overlays */}
      {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/50 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/50 to-transparent pointer-events-none z-10" /> */}
    </div>
  )
}
