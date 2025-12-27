import React from 'react'
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink } from 'lucide-react'
import { Badge } from './ui/badge'

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

const certifications = [
    {
        title: "Contentstack Implementation Certification",
        issuer: "Contentstack",
        date: "July 2024",
        link: "https://www.linkedin.com/posts/mohammad-rooh-ullah_mach-contentstack-certification-activity-7226082365129834497-P7AA?utm_source=share&utm_medium=member_desktop&rcm=ACoAADe33gwBkY26f0vWvzdmywetIRGq4cRstkE",
    },
    {
        title: "Contentful Certified Professional",
        issuer: "Contentful",
        date: "June 2024",
        link: "https://www.linkedin.com/posts/mohammad-rooh-ullah_contentful-certified-professional-exam-activity-7206149922033684481-vSft?utm_source=share&utm_medium=member_desktop&rcm=ACoAADe33gwBkY26f0vWvzdmywetIRGq4cRstkE",
    },
    {
        title: "Google Cloud Generative AI Leader",
        issuer: "Google Cloud",
        date: "November 22, 2025",
        link: "https://www.credly.com/badges/ff85128c-f4b6-497d-92c9-ccd4fbb32838/linked_in?t=t67ui7",
    },

]
export default function Certifications() {
    return (
        <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Professional certifications that validate my expertise in various technologies and methodologies.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="flex justify-center gap-6 flex-wrap"
                >
                    {certifications.map((cert, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <Card className="h-full hover:shadow-lg transition-all hover:scale-105">
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between text-lg">
                                        {cert.title}
                                        <Button variant="ghost" size="icon" asChild>
                                            <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        </Button>
                                    </CardTitle>
                                    <CardDescription>{cert.issuer}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Badge variant="outline">{cert.date}</Badge>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
