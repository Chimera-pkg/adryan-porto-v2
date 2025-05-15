"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone } from "lucide-react"

export function MobileApps() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: "Pictsnap Mobile",
      description: "Virtual Booth Designer Project",
      images: [
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
      ],
      tags: ["Flutter", "GetX", "Firebase"],
    },
    {
      title: "Agile Teknik",
      description: "Agile Education Platform Project",
      images: [
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
      ],
      tags: ["Flutter", "Firebase", "GetX"],
    },
    {
      title: "Confidence Core",
      description: "Agile Education Platform Project",
      images: [
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
      ],
      tags: ["Flutter", "Firebase", "GetX"],
    },
  ]

  return (
    <section className="py-20 relative z-10" id="projects">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none"></div>
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-purple-500/10 border border-purple-500/20">
            <Smartphone className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-500 dark:text-purple-400">Mobile Development</span>
          </div>
          <h2 className="text-3xl font-bold font-space mb-4">Portfolio | Mobile Apps</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Crafting intuitive and performant mobile applications that provide seamless user experiences across
            different platforms and devices.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg bg-background/50 backdrop-blur-sm group">
                <CardContent className="p-0">
                  <div className="p-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                    <h3 className="text-2xl font-bold font-space mb-2">{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="flex overflow-x-auto p-4 gap-4 bg-muted/30 scrollbar-hide">
                    {project.images.map((image, i) => (
                      <div
                        key={i}
                        className="relative min-w-[150px] h-[300px] rounded-md overflow-hidden flex-shrink-0 transition-transform duration-500 hover:scale-105"
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} screenshot ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="p-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-purple-500/10 hover:bg-purple-500/20 text-purple-700 dark:text-purple-300"
                      >
                        {tag}
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
