import React from 'react'
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from "@/components/ui/badge"
import { Award, Trophy } from 'lucide-react'

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const achievements = [
    {
        title: "Integration Award - APAC MACHathon",
        description: "Won Integration Award at APAC-level MACHathon for Repurpose project",
        year: "2024",
        icon: Trophy,
    },
    {
        title: "Integration Award - Organization MACHathon",
        description: "Won Integration Award at organization-level MACHathon for Agri Aid project",
        year: "2024",
        icon: Award,
    },
]

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
}

export default function Achievements() {
    return (
        <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Achievements & Recognition</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Awards and recognitions that highlight my contributions to innovative projects and technical excellence.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="flex justify-center gap-6 flex-wrap"
                >
                    {achievements.map((achievement, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <Card className="h-full text-center hover:shadow-lg transition-all hover:scale-105">
                                <CardHeader>
                                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                        <achievement.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                                    <CardDescription>{achievement.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Badge variant="outline">{achievement.year}</Badge>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
