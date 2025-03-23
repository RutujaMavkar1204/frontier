"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Shield,
  Clock,
  CreditCard,
  Smartphone,
  Award,
  ChevronRight,
  TrendingUp,
  Zap,
  Globe,
  Sparkles,
} from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useMobile } from "@/hooks/use-mobile"

// Custom components
import { ParticleBackground } from "@/components/particle-background"
import { GlassMorphicCard } from "@/components/glassmorphic-card"
import { FeatureCard } from "@/components/feature-card"
import { AnimatedCounter } from "@/components/animated-counter"
import { CursorGlow } from "@/components/cursor-glow"
import { FloatingElements } from "@/components/floating-elements"
import { ScrollProgress } from "@/components/scroll-progress"
import { ThreeDCard } from "@/components/three-d-card"

export default function LandingPage() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)
  const isMobile = useMobile()

  // Intersection observer hooks for animations
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [statsRef, statsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Stats data
  const stats = [
    { label: "Active Users", value: 45, suffix: "M+", color: "from-blue-500 to-blue-700" },
    { label: "Daily Transactions", value: 120, suffix: "M+", color: "from-indigo-500 to-indigo-700" },
    { label: "Branches", value: 22, suffix: "K+", color: "from-purple-500 to-purple-700" },
    { label: "Customer Satisfaction", value: 98, suffix: "%", color: "from-green-500 to-green-700" },
  ]

  // Features data
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Enhanced Security",
      description: "Multi-layered security with biometric authentication and real-time fraud detection.",
      color: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-indigo-600" />,
      title: "Mobile Banking",
      description: "Manage your finances on the go with our award-winning mobile banking application.",
      color: "bg-indigo-50 border-indigo-200",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: "Smart Investments",
      description: "AI-powered investment recommendations based on your financial goals and risk profile.",
      color: "bg-purple-50 border-purple-200",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-600" />,
      title: "Global Banking",
      description: "Seamless international transfers and multi-currency accounts for global citizens.",
      color: "bg-emerald-50 border-emerald-200",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <ScrollProgress />
      <CursorGlow />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-r from-blue-900 to-blue-950 py-20 md:py-28 overflow-hidden"
      >
        <ParticleBackground />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10"></div>

        {/* Floating elements */}
        <FloatingElements />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="inline-block bg-blue-800/50 px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="mr-2">🇮🇳</span> India's #1 Banking Platform
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Banking that puts{" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 relative inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  you first
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="10"
                    viewBox="0 0 100 10"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                  >
                    <path d="M0 5 Q 25 0, 50 5 Q 75 10, 100 5" stroke="url(#gradient)" strokeWidth="2" fill="none" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#93c5fd" />
                        <stop offset="100%" stopColor="#67e8f9" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-blue-100/90 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Experience seamless, secure, and smart banking solutions designed for the modern Indian.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-700/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-700/40 hover:-translate-y-1"
                >
                  <Link href="/login" className="flex items-center gap-2">
                    Login to NetBanking <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400 text-blue-100 hover:bg-blue-800/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                >
                  Open New Account
                </Button>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 mt-8 text-sm text-blue-200/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-blue-900 overflow-hidden">
                      <Image
                        src={`https://placehold.co/32x32/4F46E5/FFFFFF?text=SBI+Banking`}
                        alt={`User ${i}`}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span>Trusted by 45+ million Indians</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-400/20 rounded-full filter blur-3xl"></div>

                <div className="grid grid-cols-2 gap-4">
                  <ThreeDCard>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <Image
                        src="https://placehold.co/300x500/4F46E5/FFFFFF?text=SBI+Mobile"
                        alt="SBI Mobile Banking"
                        width={300}
                        height={500}
                        className="relative z-10 rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-20 flex items-end p-4">
                        <span className="text-white text-sm font-medium">Mobile Banking</span>
                      </div>
                    </div>
                  </ThreeDCard>

                  <div className="space-y-4">
                    <ThreeDCard>
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        <Image
                          src="https://placehold.co/300x240/3730A3/FFFFFF?text=SBI+Payments"
                          alt="SBI Payments"
                          width={300}
                          height={240}
                          className="relative z-10 rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent z-20 flex items-end p-4">
                          <span className="text-white text-sm font-medium">Quick Payments</span>
                        </div>
                      </div>
                    </ThreeDCard>

                    <ThreeDCard>
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        <Image
                          src="https://placehold.co/300x240/6366F1/FFFFFF?text=SBI+Investments"
                          alt="SBI Investments"
                          width={300}
                          height={240}
                          className="relative z-10 rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent z-20 flex items-end p-4">
                          <span className="text-white text-sm font-medium">Smart Investments</span>
                        </div>
                      </div>
                    </ThreeDCard>
                  </div>
                </div>

                {/* Animated elements */}
                <motion.div
                  className="absolute -right-8 top-10 bg-white p-3 rounded-xl shadow-xl z-20 flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Investment Growth</p>
                    <p className="text-sm font-bold text-gray-900">+18.2%</p>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -left-8 bottom-20 bg-white p-3 rounded-xl shadow-xl z-20 flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Shield size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Security Status</p>
                    <p className="text-sm font-bold text-gray-900">Protected</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100/80 p-1 rounded-xl">
              <TabsTrigger
                value="personal"
                className="text-sm md:text-base rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md transition-all duration-300"
              >
                Personal Banking
              </TabsTrigger>
              <TabsTrigger
                value="business"
                className="text-sm md:text-base rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md transition-all duration-300"
              >
                Business Banking
              </TabsTrigger>
              <TabsTrigger
                value="nri"
                className="text-sm md:text-base rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md transition-all duration-300"
              >
                NRI Banking
              </TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              <TabsContent value="personal" className="mt-0">
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {[
                    { title: "Account Balance", icon: <CreditCard className="h-5 w-5" /> },
                    { title: "Fund Transfer", icon: <ArrowRight className="h-5 w-5" /> },
                    { title: "Bill Payments", icon: <Clock className="h-5 w-5" /> },
                    { title: "Fixed Deposits", icon: <Shield className="h-5 w-5" /> },
                  ].map((item, index) => (
                    <GlassMorphicCard key={index} delay={index * 0.1}>
                      <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                        <motion.div
                          className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mb-2"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {item.icon}
                        </motion.div>
                        <h3 className="font-medium">{item.title}</h3>
                      </CardContent>
                    </GlassMorphicCard>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="business" className="mt-0">
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {[
                    { title: "Business Loans", icon: <CreditCard className="h-5 w-5" /> },
                    { title: "Trade Finance", icon: <ArrowRight className="h-5 w-5" /> },
                    { title: "Payment Gateway", icon: <Clock className="h-5 w-5" /> },
                    { title: "Corporate Cards", icon: <Shield className="h-5 w-5" /> },
                  ].map((item, index) => (
                    <GlassMorphicCard key={index} delay={index * 0.1}>
                      <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                        <motion.div
                          className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 mb-2"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {item.icon}
                        </motion.div>
                        <h3 className="font-medium">{item.title}</h3>
                      </CardContent>
                    </GlassMorphicCard>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="nri" className="mt-0">
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {[
                    { title: "NRI Accounts", icon: <CreditCard className="h-5 w-5" /> },
                    { title: "Remittance", icon: <ArrowRight className="h-5 w-5" /> },
                    { title: "Investments", icon: <Clock className="h-5 w-5" /> },
                    { title: "Tax Filing", icon: <Shield className="h-5 w-5" /> },
                  ].map((item, index) => (
                    <GlassMorphicCard key={index} delay={index * 0.1}>
                      <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                        <motion.div
                          className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 mb-2"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {item.icon}
                        </motion.div>
                        <h3 className="font-medium">{item.title}</h3>
                      </CardContent>
                    </GlassMorphicCard>
                  ))}
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              India's Most Trusted Bank
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"
                initial={{ width: 0 }}
                animate={statsInView ? { width: "100%" } : { width: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Serving millions of Indians with innovative banking solutions for over 200 years.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10" />
                <motion.div
                  className={`text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={statsInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6, type: "spring" }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </motion.div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Sparkles className="inline-block mr-1 h-4 w-4" /> Next-Gen Banking
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Banking Made Simple</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the next generation of banking with features designed for your convenience and security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    feature={feature}
                    index={index}
                    isActive={activeFeature === index}
                    onClick={() => setActiveFeature(index)}
                    inView={featuresInView}
                  />
                ))}
              </div>
            </div>

            <motion.div
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={featuresInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl transform rotate-3 -z-10"></div>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                  <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="text-sm text-gray-500">SBI YONO App</div>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFeature}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="relative aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={`https://placehold.co/338x600/4F46E5/FFFFFF?text=SBI+Banking`}
                          alt={`Feature ${activeFeature + 1}`}
                          width={338}
                          height={600}
                          className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4 text-white">
                          <h3 className="text-xl font-bold mb-2">{features[activeFeature].title}</h3>
                          <p className="text-sm text-white/80">{features[activeFeature].description}</p>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-center mt-4 gap-1">
                      {features.map((_, index) => (
                        <motion.button
                          key={index}
                          className={`w-2 h-2 rounded-full ${activeFeature === index ? "bg-blue-600" : "bg-gray-300"}`}
                          onClick={() => setActiveFeature(index)}
                          whileHover={{ scale: 1.5 }}
                          animate={{ scale: activeFeature === index ? 1.5 : 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -right-12 -bottom-12 w-24 h-24 bg-blue-200 rounded-full opacity-70 blur-2xl -z-10"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute -left-8 -top-8 w-20 h-20 bg-indigo-200 rounded-full opacity-70 blur-2xl -z-10"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.7, 0.5] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <motion.h2
              className="text-3xl font-bold relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="relative">
                Special Offers & Promotions
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
              </span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Button variant="outline" className="mt-4 md:mt-0 group">
                View All Offers
                <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Zero Balance Savings Account",
                description: "Open a zero balance savings account with digital KYC and get a free virtual debit card.",
                tag: "Limited Time",
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "Home Loan at 8.40%",
                description: "Special interest rates on home loans with zero processing fees for a limited period.",
                tag: "Popular",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                title: "5% Cashback on Credit Cards",
                description: "Get 5% cashback on all utility bill payments made through SBI credit cards.",
                tag: "Trending",
                color: "from-purple-500 to-purple-600",
              },
            ].map((offer, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-500 border-0 shadow-lg">
                  <div className={`h-40 bg-gradient-to-r ${offer.color} relative overflow-hidden`}>
                    <motion.div
                      className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      initial={{ scale: 0, rotate: 0 }}
                      whileHover={{ scale: 1.5, rotate: 45 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute top-4 right-4 bg-white text-blue-800 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {offer.tag}
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white text-xl font-bold">{index + 1}</div>
                  </div>
                  <CardContent className="p-6 relative">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {offer.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{offer.description}</p>
                    <Button variant="link" className="p-0 h-auto text-blue-600 group">
                      Learn more
                      <ChevronRight
                        size={16}
                        className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        ref={testimonialsRef}
        className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10"></div>
        <ParticleBackground />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block bg-blue-800/50 px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Award className="inline-block mr-1 h-4 w-4" /> Customer Stories
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Millions</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Join the millions of satisfied customers who trust SBI for their banking needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The new SBI mobile app has transformed how I manage my finances. It's intuitive and secure.",
                author: "Rajesh Kumar",
                role: "Business Owner",
                image: "/placeholder.svg?height=80&width=80&text=RK",
              },
              {
                quote: "As an NRI, SBI's remittance service has been a lifesaver. Fast, reliable, and cost-effective.",
                author: "Priya Sharma",
                role: "Software Engineer",
                image: "/placeholder.svg?height=80&width=80&text=PS",
              },
              {
                quote:
                  "The customer service is exceptional. Any issues I've had were resolved promptly and professionally.",
                author: "Amit Patel",
                role: "Retired Professor",
                image: "/placeholder.svg?height=80&width=80&text=AP",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-blue-800/50 p-6 rounded-xl backdrop-blur-sm border border-blue-700/30 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400"
                  initial={{ scaleX: 0 }}
                  animate={testimonialsInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                />
                <div className="mb-4 text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={testimonialsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
                <p className="italic mb-6 relative">
                  <span className="text-blue-300 text-4xl absolute -top-2 -left-1 opacity-30">"</span>
                  {testimonial.quote}
                  <span className="text-blue-300 text-4xl absolute -bottom-8 -right-1 opacity-30">"</span>
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={50}
                      height={50}
                      className="rounded-full border-2 border-blue-400"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-blue-200 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -right-12 -bottom-12 w-24 h-24 bg-blue-600/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl transform -rotate-2 -z-10"></div>

              <div className="relative flex justify-center">
                <div className="relative z-20 -mr-16">
                  <ThreeDCard>
                    <div className="bg-white p-2 rounded-2xl shadow-xl">
                      <Image
                        src="https://placehold.co/280x500/4F46E5/FFFFFF?text=SBI+Dashboard"
                        alt="SBI Mobile App Dashboard"
                        width={280}
                        height={500}
                        className="rounded-xl"
                      />
                    </div>
                  </ThreeDCard>
                </div>

                <div className="relative z-10 mt-12">
                  <ThreeDCard>
                    <div className="bg-white p-2 rounded-2xl shadow-xl">
                      <Image
                        src="https://placehold.co/280x500/3730A3/FFFFFF?text=SBI+Transfers"
                        alt="SBI Mobile App Transfers"
                        width={280}
                        height={500}
                        className="rounded-xl"
                      />
                    </div>
                  </ThreeDCard>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -right-8 top-10 bg-white p-3 rounded-xl shadow-xl z-30 flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Zap size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Quick Access</p>
                  <p className="text-sm font-bold text-gray-900">Instant Banking</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-8 bottom-20 bg-white p-3 rounded-xl shadow-xl z-30 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Shield size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Security</p>
                  <p className="text-sm font-bold text-gray-900">Biometric Login</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">
                Mobile Banking
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Banking in Your Pocket</h2>
              <p className="text-gray-600 text-lg">
                Download the SBI YONO app and experience the convenience of banking anytime, anywhere. Transfer funds,
                pay bills, apply for loans, and more—all from your smartphone.
              </p>
              <ul className="space-y-3">
                {[
                  "Secure biometric login",
                  "Quick balance check without login",
                  "Cardless cash withdrawal",
                  "Integrated investment platform",
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="mr-2 mt-1 text-blue-600">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2 group transition-all duration-300 hover:-translate-y-1">
                  <svg
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3 12.8C16.3 9.2 19.3 7.7 19.4 7.6C17.9 5.5 15.6 5.2 14.8 5.2C12.9 5 11.1 6.3 10.1 6.3C9.1 6.3 7.6 5.2 6 5.2C4 5.2 2.1 6.4 1.1 8.2C-1 11.9 0.5 17.3 2.5 20.2C3.5 21.6 4.7 23.2 6.3 23.1C7.8 23 8.4 22.1 10.2 22.1C12 22.1 12.5 23.1 14.1 23C15.7 22.9 16.8 21.5 17.7 20.1C18.8 18.5 19.3 16.9 19.3 16.8C19.2 16.7 16.3 15.6 16.3 12.8Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.7 3.9C14.5 2.9 15.1 1.5 14.9 0C13.7 0.1 12.2 0.8 11.4 1.8C10.6 2.7 10 4.1 10.2 5.5C11.5 5.6 12.9 4.9 13.7 3.9Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">App Store</span>
                </Button>
                <Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2 group transition-all duration-300 hover:-translate-y-1">
                  <svg
                    width="22"
                    height="24"
                    viewBox="0 0 22 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.5 0.5V23.5L15.5 12L0.5 0.5Z" fill="currentColor" />
                    <path d="M21.5 12L16.5 9L0.5 23.5L21.5 12Z" fill="currentColor" />
                    <path d="M21.5 12L16.5 15L0.5 0.5L21.5 12Z" fill="currentColor" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Google Play</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-[url('https://placehold.co/1600x800/4F46E5/FFFFFF?text=SBI+Banking')] bg-cover bg-center opacity-5"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-400/20 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-white/20 shadow-xl">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Ready to Experience Modern Banking?
              </motion.h2>
              <motion.p
                className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Join millions of Indians who trust SBI for their banking needs. Open an account today and enjoy a world
                of benefits.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 font-medium shadow-lg shadow-amber-700/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-700/40 hover:-translate-y-1"
                >
                  Open New Account
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-gray-900 bg-white hover:bg-white/90 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                >
                  <Link href="/login">Login to NetBanking</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4 relative inline-block">
                Personal Banking
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </h3>
              <ul className="space-y-2">
                {["Savings Account", "Current Account", "Fixed Deposits", "Loans", "Cards", "Insurance"].map(
                  (item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                    >
                      <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                        {item}
                      </Link>
                    </motion.li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4 relative inline-block">
                Business Banking
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </h3>
              <ul className="space-y-2">
                {[
                  "Corporate Accounts",
                  "MSME Banking",
                  "Trade Finance",
                  "Supply Chain Finance",
                  "Payment Solutions",
                  "Corporate Cards",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4 relative inline-block">
                Digital Banking
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </h3>
              <ul className="space-y-2">
                {["Internet Banking", "Mobile Banking", "UPI Payments", "YONO", "SBI Quick", "SMS Banking"].map(
                  (item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                    >
                      <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                        {item}
                      </Link>
                    </motion.li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4 relative inline-block">
                About SBI
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </h3>
              <ul className="space-y-2">
                {["About Us", "Careers", "Investor Relations", "News & Media", "CSR", "Contact Us"].map(
                  (item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                    >
                      <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                        {item}
                      </Link>
                    </motion.li>
                  ),
                )}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>© {new Date().getFullYear()} State Bank of India. All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                <Link href="#" className="hover:text-white">
                  Terms & Conditions
                </Link>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-white">
                  Disclaimer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

