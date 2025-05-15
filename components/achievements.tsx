"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BadgeIcon as Certificate, Presentation, Sparkles } from "lucide-react"

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const achievements = [
    {
      icon: <Certificate className="h-8 w-8 text-purple-500" />,
      title: "Internship Completion Certificate",
      organization: "PT Terminal Teluk Lamong",
      date: "June 2023",
    },
    {
      icon: <Certificate className="h-8 w-8 text-purple-500" />,
      title: "Internship Completion Certificate",
      organization: "PT. XL Axiata Tbk",
      date: "December 2023",
    },
    {
      icon: <Presentation className="h-8 w-8 text-purple-500" />,
      title: "MERN Stack Webinar",
      organization: "Dentech Corporation",
      date: "November 2023",
    },
    {
      icon: <Presentation className="h-8 w-8 text-purple-500" />,
      title: "React Js Webinar",
      organization: "Dentech Corporation",
      date: "November 2023",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: "Professional Branding & Career Development",
      organization: "PT Terminal Teluk Lamong",
      date: "June 2023",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: "Personal Branding",
      organization: "PT Terminal Teluk Lamong",
      date: "May 2023",
    },
  ]

  return (
    <section className="py-20 relative z-10" id="achievements">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none"></div>
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-purple-500/10 border border-purple-500/20">
            <Sparkles className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-500 dark:text-purple-400">Recognition</span>
          </div>
          <h2 className="text-3xl font-bold font-space mb-4">Achievements & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition and certifications I've received throughout my professional journey.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-md hover:shadow-purple-500/10 transition-all duration-300 bg-background/50 backdrop-blur-sm border-purple-500/10 hover:border-purple-500/30">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 rounded-full bg-purple-500/10">{achievement.icon}</div>
                  <div>
                    <CardTitle className="text-lg font-space">{achievement.title}</CardTitle>
                    <CardDescription>{achievement.organization}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{achievement.date}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
