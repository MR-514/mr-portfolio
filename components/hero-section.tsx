"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Download, Linkedin, Github } from "lucide-react"
import { TypewriterText } from "./typewriter-text"
import Image from "next/image"

interface HeroSectionProps {
  onContactClick: () => void
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I&apos;m <span className="text-primary">Mohammad Rooh Ullah</span>
            </h1>

            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 h-16 flex items-center">
              <span className="text-muted-foreground mr-3">I am </span>
              <TypewriterText />
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              I am a web developer dedicated to building robust, AI-powered web applications that empower businesses in the digital age.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group" onClick={onContactClick}>
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
              <Button variant="outline" size="lg" className="group bg-transparent" asChild>
                <a
                  href="https://drive.google.com/file/d/1zzFXzEvUvq-lIw17YwvWL9AOT9R4k2V3/view?usp=sharing"
                  download="Mohammad_Rooh_Ullah_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex space-x-4 mt-8">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                <a href="https://www.linkedin.com/in/mohammad-rooh-ullah/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <a href="https://github.com/MR-514" target="_blank" />

                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                <a href="mailto:mrouhulla@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                <Image
                  src="/self2.jpg"
                  alt="Mohammad Rooh Ullah"
                  fill
                  className="w-full h-full object-cover rounded-full p-5"
                  priority
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 border-4 border-primary/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
