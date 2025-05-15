"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun, Github, Linkedin, Instagram, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievement" },
    { href: "#experience", label: "Resume" },
    { href: "#about", label: "About" },
  ]

  const socialLinks = [
    { href: "https://github.com/yourusername", icon: <Github className="h-5 w-5" />, label: "GitHub" },
    { href: "https://linkedin.com/in/yourusername", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
    { href: "https://instagram.com/yourusername", icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
    { href: "mailto:contact@example.com", icon: <Mail className="h-5 w-5" />, label: "Email" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="font-space font-bold text-xl tracking-wider">
            <span className="text-primary">PRAWIRA</span>
            <span className="text-purple-500 dark:text-purple-400">_DEV</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-6"
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center gap-1 mr-2">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="relative overflow-hidden"
            >
              <Sun
                className={`h-5 w-5 transition-all ${theme === "dark" ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
              />
              <Moon
                className={`h-5 w-5 absolute transition-all ${theme === "dark" ? "rotate-0 opacity-100" : "rotate-90 opacity-0"}`}
              />
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="flex gap-4 mt-4">
                  {socialLinks.map((link, index) => (
                    <Button key={index} variant="ghost" size="icon" asChild>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                        {link.icon}
                      </a>
                    </Button>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </motion.div>
      </div>
    </header>
  )
}
