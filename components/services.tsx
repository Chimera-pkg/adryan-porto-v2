"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Code, Cpu, Sparkles } from "lucide-react"

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <Palette className="h-8 w-8 text-purple-500" />,
      title: "Beautiful Designs",
      description: "Creating elegant designs suited for your needs following core design theory",
      tools: ["Photoshop", "Illustrator", "Figma", "Indesign"],
    },
    {
      icon: <Code className="h-8 w-8 text-purple-500" />,
      title: "Web Development",
      description: "Building responsive and performant web applications with modern technologies",
      tools: ["React", "Next.js", "Node.js", "Laravel", "Tailwind CSS"],
    },
    {
      icon: <Cpu className="h-8 w-8 text-purple-500" />,
      title: "IoT Solutions",
      description: "Developing connected devices and systems for smart applications",
      tools: ["Arduino", "Raspberry Pi", "MQTT", "ESP32", "AWS IoT"],
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section className="py-20 relative z-10" id="services">
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
            <span className="text-sm font-medium text-purple-500 dark:text-purple-400">What I Do</span>
          </div>
          <h2 className="text-3xl font-bold font-space mb-4">Services I Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Since beginning of my journey as a freelance developer, I've done remote for Agencies, consulted for
            startups, and collaborated with talented people to create digital for both business and consumer use.
          </p>
          <p className="text-muted-foreground mt-2">
            I offer from a wide range of services, including programming and IoT development.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Card className="border-2 hover:border-purple-500 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 bg-background/50 backdrop-blur-sm">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-purple-500/10 mb-4">{service.icon}</div>
                  <CardTitle className="mt-4 font-space">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center">
                    <h4 className="text-sm font-semibold mb-2">Design Tools I Use</h4>
                    <ul className="text-center">
                      {service.tools.map((tool, i) => (
                        <li key={i} className="text-muted-foreground">
                          {tool}
                        </li>
                      ))}
                    </ul>
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
