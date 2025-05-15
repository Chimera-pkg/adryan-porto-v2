"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const socialLinks = [
    { href: "https://github.com/yourusername", icon: <Github className="h-5 w-5" />, label: "GitHub" },
    { href: "https://linkedin.com/in/yourusername", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
    { href: "https://instagram.com/yourusername", icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
    { href: "mailto:contact@example.com", icon: <Mail className="h-5 w-5" />, label: "Email" },
  ]

  return (
    <footer className="border-t py-12 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none"></div>
      <div className="container relative">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="font-bold text-xl font-space mb-2 flex items-center gap-2">
              <Rocket className="h-5 w-5 text-purple-500" />
              <span>
                Adryan <span className="text-purple-500">Prawira</span>
              </span>
            </h3>
            <p className="text-muted-foreground">Software Developer | IoT | Fullstack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4"
          >
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-purple-500/10 hover:text-purple-500 transition-colors"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  {link.icon}
                </a>
              </Button>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Adryan Prawira. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
