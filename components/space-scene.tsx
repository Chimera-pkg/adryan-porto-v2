"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

export function SpaceScene() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={group}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#4c1d95"
          emissiveIntensity={0.5}
          roughness={0.7}
          metalness={0.3}
        />
      </mesh>

      {/* Orbital rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.02, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#4c1d95" emissiveIntensity={0.5} transparent opacity={0.6} />
      </mesh>

      <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[1.8, 0.01, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#4c1d95" emissiveIntensity={0.5} transparent opacity={0.4} />
      </mesh>
    </group>
  )
}
