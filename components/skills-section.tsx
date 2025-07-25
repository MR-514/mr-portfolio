"use client"

import { motion } from "framer-motion"
import { SkillsCarousel } from "./skills-carousel"

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build innovative solutions
          </p>
        </motion.div>

        <SkillsCarousel />
      </div>
    </section>
  )
}
