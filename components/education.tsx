import {motion} from "framer-motion"
import { Calendar, GraduationCap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
export default function Education() {

  const education = [
    {
      level: "Bachelor of Engineering – Computer Science",
      institution: "Dr. Ambedkar Institute of Technology, Bengaluru",
      period: "August 2019 – June 2023",
      type: "college",
    },
    {
      level: "12th Grade",
      institution: "Govt. Boys Higher Secondary School, B.K Pora",
      period: "2018",
      type: "school",
    },
    {
      level: "10th Grade",
      institution: "Delhi Modern Public School, Pampore",
      period: "2016",
      type: "school",
    },
  ]
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic progression from secondary education to specialized computer science degree.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start gap-6 pb-8"
              >
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-primary rounded-full">
                  <GraduationCap className="h-8 w-8 text-primary-foreground" />
                </div>

                <Card className="flex-1 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{edu.level}</CardTitle>
                    <CardDescription className="text-primary font-medium">{edu.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="flex items-center gap-1 w-fit">
                      <Calendar className="h-3 w-3" />
                      {edu.period}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
