"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export function LanguageIcons() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const languages = [
    { name: "JavaScript", icon: "/placeholder.svg?height=50&width=50" },
    { name: "TypeScript", icon: "/placeholder.svg?height=50&width=50" },
    { name: "React", icon: "/placeholder.svg?height=50&width=50" },
    { name: "Next.js", icon: "/placeholder.svg?height=50&width=50" },
    { name: "Node.js", icon: "/placeholder.svg?height=50&width=50" },
    { name: "Flutter", icon: "/placeholder.svg?height=50&width=50" },
    { name: "PHP", icon: "/placeholder.svg?height=50&width=50" },
    { name: "Laravel", icon: "/placeholder.svg?height=50&width=50" },
  ]

  return (
    <div ref={ref} className="py-10">
      <div className="flex flex-wrap justify-center gap-8">
        {languages.map((lang, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.2,
              rotate: [0, 10, -10, 0],
              transition: { duration: 0.5 },
            }}
            className="flex flex-col items-center"
          >
            <div className="relative w-16 h-16 mb-2">
              <Image src={lang.icon || "/placeholder.svg"} alt={lang.name} fill className="object-contain" />
            </div>
            <span className="text-sm text-muted-foreground">{lang.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
