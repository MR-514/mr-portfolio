"use client"

import { useState, useEffect } from "react"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import ContactMe from "@/components/contactMe"
import Footer from "@/components/footer"
import Achievements from "@/components/achievements"
import Certifications from "@/components/certifications"
import Education from "@/components/education"
import Projects from "@/components/projects"
import WorkExperience from "@/components/WorkExperience"


export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onSectionClick={scrollToSection} />

      <HeroSection onContactClick={() => scrollToSection("contact")} />

      {/* Skills section */}
      <SkillsSection />

      {/* Experience Section */}
      <WorkExperience />

      {/* Projects Section */}
      <Projects />

      {/* Education Section */}
      <Education />

      {/* Certifications Section */}
      <Certifications />

      {/* Achievements Section */}
      <Achievements />

      {/* contact me */}
      <ContactMe />



      {/* Footer */}
      <Footer />

    </div>
  )
}
