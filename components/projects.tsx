import React from 'react'
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink } from 'lucide-react'
import { Badge } from './ui/badge'

export default function Projects() {

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    }

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const projects = [
        {
            title: "AI.me",
            description:
                "Led agentic AI and frontend development for AI.me, Valtech's internal AI gateway—integrating RAG, agentic workflows, and MCP technologies.",
            tech: ["TypeScript", "Next.js", "AI/ML", "RAG", "MCP"],
            link: "",
            // type: "LinkedIn Post",
        },
        {
            title: "Fashion AI Concierge",
            description:
                "Built an agent-based, AI-powered web assistant for a major fashion e-commerce client, guiding users in requirements discovery and product selection.",
            tech: ["Google ADK", "Conversational AI", "Next.js", "TypeScript"],
            link: "",
            // type: "LinkedIn Post",
        },
        {
            title: "Agri Aid",
            description:
                "Developed a MACH-compliant platform for farmer-to-consumer commerce and modern agricultural resources; awarded org-level MACHathon Integration Award.",
            tech: ["MACH Architecture", "Next.js", "TypeScript"],
            link: "",
            // type: "LinkedIn Post",
        },
        {
            title: "Repurpose",
            description:
                "Developed intuitive user flows and automation for a MACH-based resale platform focused on sustainability, created as part of the APAC-level MACHathon.",
            tech: ["MACH Architecture", "React.js", "Node.js"],
            link: "",
            // type: "LinkedIn Post",
        },
    ]
    return (
        <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A showcase of innovative projects demonstrating expertise in AI, MACH architecture, and modern web
                        development.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <Card className="h-full hover:shadow-lg transition-all hover:scale-105">
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                        {project.title}
                                        {project.link && <Button variant="ghost" size="icon" asChild>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        </Button>}

                                    </CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech) => (
                                            <Badge key={tech} variant="outline">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    {project.link && <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            View 
                                        </a>
                                    </Button>}

                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
