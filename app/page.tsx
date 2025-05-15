import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { MobileApps } from "@/components/mobile-apps"
import { Websites } from "@/components/websites"
import { IoTProjects } from "@/components/iot-projects"
import { Experience } from "@/components/experience"
import { Achievements } from "@/components/achievements"
import { Footer } from "@/components/footer"
import { SpaceBackground } from "@/components/space-background"
import { ProjectCounter } from "@/components/project-counter"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <SpaceBackground />
      <Navbar />
      <Hero />
      <Services />
      <ProjectCounter />
      <MobileApps />
      <Websites />
      <IoTProjects />
      <Experience />
      <Achievements />
      <Footer />
    </main>
  )
}
