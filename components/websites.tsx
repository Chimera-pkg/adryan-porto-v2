"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe } from "lucide-react"

export function Websites() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: "PICTSNAP DOCUMENTATION",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Markdown", "Documentation"],
    },
    {
      title: "GEARY ASSET INVENTORY",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["PHP", "Laravel", "Web App"],
    },
    {
      title: "SHIPMENT INTERNAL APP",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["PHP", "Laravel", "Web App"],
    },
    {
      title: "SKRIBEX - SPENDING TRACKER Landing Page",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["PHP", "Laravel", "Web App"],
    },
    {
      title: "SILANCAR - ERP FOR UMKM",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["PHP", "Laravel", "Web App"],
    },
  ]

  return (
    <section className="py-20 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none"></div>
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-purple-500/10 border border-purple-500/20">
            <Globe className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-500 dark:text-purple-400">Web Development</span>
          </div>
          <h2 className="text-3xl font-bold font-space mb-4">Portfolio | Websites</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Creating responsive, accessible, and performant websites that deliver exceptional user experiences and help
            businesses achieve their goals.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg bg-background/50 backdrop-blur-sm group">
                <CardContent className="p-0">
                  <div className="relative h-[300px] w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-6 w-full">
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <Badge key={i} variant="outline" className="bg-white/10 text-white border-white/20">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-space mb-4">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 text-purple-700 dark:text-purple-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
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
