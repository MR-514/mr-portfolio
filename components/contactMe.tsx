
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Linkedin, Mail } from "lucide-react"
export default function ContactMe() {
    return (

        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50" >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Connect</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        I&apos;m always interested in discussing new opportunities, innovative projects, and collaborations.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    <Card>
                        <CardContent className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Button variant="outline" size="lg" className="h-16 group bg-transparent" asChild>
                                    <a href="mailto:mrouhulla@gmail.com">
                                        <Mail className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                                        <div className="text-left">
                                            <div className="font-medium">Email</div>
                                            <div className="text-sm text-muted-foreground">mrouhulla@gmail.com</div>
                                        </div>
                                    </a>
                                </Button>

                                <Button variant="outline" size="lg" className="h-16 group bg-transparent" asChild>
                                    <a
                                        href="https://www.linkedin.com/in/mohammad-rooh-ullah/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Linkedin className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                                        <div className="text-left">
                                            <div className="font-medium">LinkedIn</div>
                                            <div className="text-sm text-muted-foreground">Connect with me</div>
                                        </div>
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section >
    )
}
