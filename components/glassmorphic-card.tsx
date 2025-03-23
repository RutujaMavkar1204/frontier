"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import type { ReactNode } from "react"

interface GlassMorphicCardProps {
  children: ReactNode
  delay?: number
}

export const GlassMorphicCard = ({ children, delay = 0 }: GlassMorphicCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
    >
      <Card className="overflow-hidden border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:border-blue-200">
        {children}
      </Card>
    </motion.div>
  )
}

