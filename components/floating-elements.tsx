"use client"

import { motion } from "framer-motion"

export const FloatingElements = () => {
  return (
    <>
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-[10%] w-12 h-12 bg-blue-500 rounded-full opacity-20 blur-xl"
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-[15%] w-16 h-16 bg-indigo-500 rounded-full opacity-20 blur-xl"
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/3 right-[30%] w-20 h-20 bg-purple-500 rounded-full opacity-10 blur-xl"
        animate={{
          y: [0, -40, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute bottom-20 left-[25%] w-24 h-24 bg-blue-400 rounded-full opacity-10 blur-xl"
        animate={{
          y: [0, 25, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </>
  )
}

