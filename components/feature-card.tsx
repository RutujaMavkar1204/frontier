"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  feature: {
    icon: React.ReactNode
    title: string
    description: string
    color: string
    iconBg: string
    iconColor: string
  }
  index: number
  isActive: boolean
  onClick: () => void
  inView: boolean
}

export const FeatureCard = ({ feature, index, isActive, onClick, inView }: FeatureCardProps) => {
  return (
    <motion.div
      className={cn(
        "p-5 rounded-xl cursor-pointer transition-all duration-300 border",
        isActive ? feature.color : "bg-white border-gray-200 hover:border-gray-300",
      )}
      onClick={onClick}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ x: 5 }}
    >
      <div className="flex items-start gap-4">
        <div className={cn("p-3 rounded-lg", feature.iconBg)}>
          <div className={feature.iconColor}>{feature.icon}</div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className={cn("text-gray-600", isActive && "text-gray-700")}>{feature.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

