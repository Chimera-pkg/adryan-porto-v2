"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Award, Clock } from "lucide-react"

export function ProjectCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    { icon: <Code className="h-8 w-8 text-purple-500" />, value: 27, label: "Projects Completed", suffix: "+" },
    { icon: <Users className="h-8 w-8 text-purple-500" />, value: 15, label: "Happy Clients", suffix: "+" },
    { icon: <Award className="h-8 w-8 text-purple-500" />, value: 4, label: "Years Experience", suffix: "" },
    { icon: <Clock className="h-8 w-8 text-purple-500" />, value: 1200, label: "Hours of Work", suffix: "+" },
  ]

  return (
    <section className="py-16 relative z-10">
      <div className="container">
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-2 border-purple-500/20 hover:border-purple-500 transition-all duration-300 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-purple-500/10 mb-4">{stat.icon}</div>
                    <CountUp
                      target={stat.value}
                      isInView={isInView}
                      suffix={stat.suffix}
                      className="text-4xl font-bold font-space text-primary mb-2"
                    />
                    <p className="text-muted-foreground">{stat.label}</p>
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

function CountUp({
  target,
  isInView,
  suffix = "",
  className = "",
}: {
  target: number
  isInView: boolean
  suffix?: string
  className?: string
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 2000 // 2 seconds
    const increment = target / (duration / 16) // 60fps

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <div className={className}>
      {count}
      {suffix}
    </div>
  )
}
