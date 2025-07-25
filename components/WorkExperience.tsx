import React from 'react'
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from 'lucide-react'

export default function WorkExperience() {

    const experiences = [
        {
            title: "Software Developer",
            company: "Valtech India Systems Private Ltd.",
            period: "September 2023 – Present",
            location: "India",
            description: [
                "Work as a core member of the AI Center of Excellence, building both advanced AI-driven and frontend web solutions for varied client use cases.",
                "Lead the design and development of AI.me—an internal gateway that combines retrieval-augmented generation (RAG), Agentic AI, and MCP technologies.",
                "Lead and contribute to the development of cutting-edge AI and agentic solutions showcased at client pitches and global conferences.",
                "Worked on MACH architecture exclusively through prize-winning MACHathon projects.",
                "Collaborate with cross-functional teams to deliver high-quality, integrated web applications.",
            ],
        },
        {
            title: "Frontend Web Developer Intern",
            company: "SoftMantissa Software Solutions",
            period: "November 2022 - January 2023",
            location: "India",
            description: [
                "Redesigned the company website in a 6-member team, elevating usability, performance, and multi-device compatibility.",
                "Led feature planning, design, and implementation for seamless integration and optimal user experience.",
            ],
        },
    ]

    return (
        <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        My journey in software development, working with cutting-edge technologies and innovative solutions.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div>
                                            <CardTitle className="flex items-center gap-2">
                                                <Briefcase className="h-5 w-5 text-primary" />
                                                {exp.title}
                                            </CardTitle>
                                            <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                                        </div>
                                        <div className="flex flex-col sm:items-end gap-1">
                                            <Badge variant="outline" className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {exp.period}
                                            </Badge>
                                            <Badge variant="secondary" className="flex items-center gap-1">
                                                <MapPin className="h-3 w-3" />
                                                {exp.location}
                                            </Badge>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
