"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { Github, Linkedin, Instagram, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Canvas } from "@react-three/fiber"
import { Stars, OrbitControls } from "@react-three/drei"
import { SpaceScene } from "@/components/space-scene"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    setIsVisible(true)
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const socialLinks = [
    { href: "https://github.com/chimera-pkg", icon: <Github className="h-5 w-5" />, label: "GitHub" },
    { href: "https://linkedin.com/in/adryanprawira", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
    { href: "https://instagram.com/prawirraa", icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
    { href: "mailto:adryanmagatsu88@gmail.com", icon: <Mail className="h-5 w-5" />, label: "Email" },
  ]

  return (
    <section className="py-20 md:py-32 container relative z-10" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="mb-8"
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 dark:text-purple-400">
              <span className="text-sm font-medium">Software Engineer</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-space text-primary mb-4">
              Adryan <span className="text-purple-500 dark:text-purple-400">Prawira</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Software Engineer | IoT | Fullstack Engineer
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-8">
              Providing innovative solutions for programming needs with a focus on creating elegant, efficient, and
              user-friendly applications that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4">
               <Button
                asChild
                className="group relative overflow-hidden bg-purple-600 hover:bg-purple-700"
              >
                <a
                  href="https://wa.me/628134441583"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-900 group-hover:translate-x-full group-hover:skew-x-12"></span>
                  <span className="relative flex items-center gap-2">
                    Contact Me <Mail className="h-4 w-4" />
                  </span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="group relative overflow-hidden"
              >
                <a
                  href="https://drive.google.com/file/d/1y2wMh7Qxx8wvVtyMcA7xmNteuQwAfH26/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-purple-600 group-hover:translate-x-0"></span>
                  <span className="relative flex items-center gap-2 group-hover:text-white">
                    Download CV <Download className="h-4 w-4" />
                  </span>
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4 mt-8"
          >
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                asChild
                className="rounded-full border-purple-500/20 hover:bg-purple-500/10 hover:text-purple-500"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  {link.icon}
                </a>
              </Button>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div
            className="relative w-64 h-64 md:w-80 md:h-80"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-purple-500 z-10">
              <Image
                src="/profile.jpeg?height=320&width=320"
                alt="Adryan Prawira"
                fill
                className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
                priority
              />
            </div>

            <div className="absolute inset-0 -z-10">
              <div className="w-full h-full">
                <Canvas>
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                  <SpaceScene />
                </Canvas>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
