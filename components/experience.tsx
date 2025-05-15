"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const experiences = [
    {
      company: "MedMap Pte Ltd",
      position: "Full Stack Engineer",
      period: "Nov 2024 - Present · 7 mos",
      location: "Singapore · Remote",
      description: [
        "Developed a Medmap Homecare app, Similar to Halodoc for Singapore Country",
        "Maintain CI/CD, API, Features for Medmap a platform BioMedical Tenders Overseas with 1000+ Transactions",
        "Develop Feature for Medmap BioMedical Tenders at Mobile Platform",
      ],
      skills: ["Mobile Development", "Web Development"],
    },
    {
      company: "Upwork",
      position: "Freelance Software Developer",
      period: "Jan 2024 - Present · 1 yr 5 mos",
      location: "Remote",
      description: [
        "Developed Mobile Applications Utilized Flutter, AWS Amplify, AWS AppSync, GraphQL, and PostgreSQL to build robust mobile applications",
        "Created IoT Mobile Applications for Vending Machines: Developed innovative mobile IoT apps using Flutter and MQTT connection",
        "Deployed and Maintained Mobile Applications Successfully launched apps on the Google Play Store and provided ongoing maintenance",
      ],
      skills: ["Mobile Application Development", "Web Development"],
    },
    {
      company: "Freelance",
      position: "Full Stack Engineer",
      period: "Jun 2021 - Present · 4 yrs",
      location: "Indonesia · Remote",
      description: [
        "Hands over 27+ small - medium project with local clients Including Custom Website, Mobile App, IoT Platforms Solutions",
        "Led small team 3 - 7 programme into specific project from scratch into solution",
      ],
      skills: ["Node.js", "Web Technologies", "Full-Stack Development", "Mobile Application Development"],
    },
    {
      company: "Exacode Systems",
      position: "Frontend Developer",
      period: "Oct 2024 - Nov 2024 · 2 mos",
      location: "Jakarta, Indonesia · Remote",
      description: ["Build Shipment Internal App"],
      skills: ["Next.js"],
    },
    {
      company: "PT Aplikasi Bisnis Sejahtera",
      position: "Chief Technology Officer",
      period: "Jul 2024 - Sep 2024 · 3 mos",
      location: "Surabaya, East Java, Indonesia · Remote",
      description: [
        "Led the development of new features for Android and web applications",
        "Automated loading of master data and unfinished transactions after login",
        "Implemented access control and permissions on the web application using Laravel Middleware and Livewire",
        "Set up and configured Nginx sites, PHP 8.0-FPM, and MySQL 8 for new servers",
      ],
      skills: ["PHP", "Laravel", "Kotlin"],
    },
  ]

  return (
    <section className="py-20 relative z-10" id="experience">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none"></div>
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-purple-500/10 border border-purple-500/20">
            <Briefcase className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-500 dark:text-purple-400">Professional Journey</span>
          </div>
          <h2 className="text-3xl font-bold font-space mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey as a software developer, from internships to leadership roles.
          </p>
          <div className="mt-6">
            <Button className="group relative overflow-hidden">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-purple-600 group-hover:translate-x-0"></span>
              <span className="relative flex items-center gap-2 group-hover:text-white">
                Download Resume <Download className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </motion.div>

        <div ref={ref} className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-l-4 border-l-purple-500 bg-background/50 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-space">{exp.position}</CardTitle>
                  <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-medium">{exp.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{exp.period}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{exp.location}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 text-purple-700 dark:text-purple-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
