"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, ArrowLeft, Shield, AlertCircle, Smartphone, Lock, User, Mail } from "lucide-react"
import { useRouter } from "next/navigation"
import { ParticleBackground } from "@/components/particle-background"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [activeTab, setActiveTab] = useState("personal")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!username || !password) {
      setError("Please enter both username and password")
      return
    }

    setLoading(true)

    // Simulate login process
    setTimeout(() => {
      setLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  // Floating icons animation
  const floatingIcons = [
    { icon: <Shield size={24} />, color: "bg-blue-100 text-blue-600", delay: 0 },
    { icon: <Lock size={24} />, color: "bg-indigo-100 text-indigo-600", delay: 0.2 },
    { icon: <Smartphone size={24} />, color: "bg-purple-100 text-purple-600", delay: 0.4 },
    { icon: <User size={24} />, color: "bg-green-100 text-green-600", delay: 0.6 },
    { icon: <Mail size={24} />, color: "bg-amber-100 text-amber-600", delay: 0.8 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"></div>
      <ParticleBackground />

      <header className="bg-white border-b py-4 relative z-10">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src={`https://placehold.co/40x40/4F46E5/FFFFFF?text=SBI+Banking`}
                alt="SBI Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </motion.div>
            <motion.span
              className="font-bold text-xl text-blue-900"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              State Bank of India
            </motion.span>
          </Link>
          <motion.div initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
            <Link
              href="/"
              className="text-blue-600 flex items-center gap-1 hover:text-blue-800 transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Home</span>
            </Link>
          </motion.div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4 relative z-10">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="hidden lg:block">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-400/10 rounded-full filter blur-3xl"></div>
              <Image
                src={`https://placehold.co/500x500/4F46E5/FFFFFF?text=SBI+Banking`}
                alt="Secure Banking"
                width={500}
                height={500}
                className="relative z-10 rounded-xl"
              />

              {/* Floating icons */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {floatingIcons.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute p-3 rounded-full ${item.color}`}
                    style={{
                      top: `${20 + index * 15}%`,
                      left: index % 2 === 0 ? "10%" : "80%",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      x: [0, index % 2 === 0 ? 10 : -10, 0],
                    }}
                    transition={{
                      delay: item.delay,
                      duration: 0.5,
                      x: {
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      },
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mt-8 space-y-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Bank-grade Security</h3>
                  <p className="text-gray-600 text-sm">
                    Your information is protected with advanced encryption and multi-factor authentication.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <Smartphone size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Mobile Banking</h3>
                  <p className="text-gray-600 text-sm">
                    Access your accounts anytime, anywhere with our award-winning mobile app.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Card className="shadow-xl border-0 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
                <CardDescription className="text-center">Login to access your SBI NetBanking account</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="personal" className="w-full" onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger
                      value="personal"
                      className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700"
                    >
                      Personal Banking
                    </TabsTrigger>
                    <TabsTrigger
                      value="business"
                      className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700"
                    >
                      Business Banking
                    </TabsTrigger>
                  </TabsList>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeTab === "personal" ? (
                        <form onSubmit={handleLogin} className="space-y-4">
                          {error && (
                            <motion.div
                              className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2 text-sm"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              transition={{ duration: 0.3 }}
                            >
                              <AlertCircle size={16} />
                              {error}
                            </motion.div>
                          )}

                          <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <div className="relative">
                              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <User size={16} />
                              </div>
                              <Input
                                id="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="pl-10"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="password">Password</Label>
                              <Link href="#" className="text-xs text-blue-600 hover:underline">
                                Forgot password?
                              </Link>
                            </div>
                            <div className="relative">
                              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <Lock size={16} />
                              </div>
                              <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-10"
                                required
                              />
                              <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Checkbox id="remember" />
                            <label
                              htmlFor="remember"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Remember me for 30 days
                            </label>
                          </div>

                          <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 font-medium shadow-lg shadow-amber-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-600/40"
                          >
                            {loading ? (
                              <div className="flex items-center gap-2">
                                <svg
                                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-900"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Logging in...
                              </div>
                            ) : (
                              "Login to NetBanking"
                            )}
                          </Button>
                        </form>
                      ) : (
                        <form onSubmit={handleLogin} className="space-y-4">
                          {error && (
                            <motion.div
                              className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2 text-sm"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              transition={{ duration: 0.3 }}
                            >
                              <AlertCircle size={16} />
                              {error}
                            </motion.div>
                          )}

                          <div className="space-y-2">
                            <Label htmlFor="business-id">Business ID</Label>
                            <div className="relative">
                              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <User size={16} />
                              </div>
                              <Input id="business-id" placeholder="Enter your business ID" className="pl-10" required />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="user-id">User ID</Label>
                            <div className="relative">
                              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <User size={16} />
                              </div>
                              <Input id="user-id" placeholder="Enter your user ID" className="pl-10" required />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="business-password">Password</Label>
                              <Link href="#" className="text-xs text-blue-600 hover:underline">
                                Forgot password?
                              </Link>
                            </div>
                            <div className="relative">
                              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <Lock size={16} />
                              </div>
                              <Input
                                id="business-password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="pl-10"
                                required
                              />
                              <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Checkbox id="remember-business" />
                            <label
                              htmlFor="remember-business"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Remember me for 30 days
                            </label>
                          </div>

                          <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 font-medium shadow-lg shadow-amber-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-600/40"
                          >
                            {loading ? (
                              <div className="flex items-center gap-2">
                                <svg
                                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-900"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Logging in...
                              </div>
                            ) : (
                              "Login to Business Banking"
                            )}
                          </Button>
                        </form>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </Tabs>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or</span>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600">Don't have an account?</p>
                  <Button variant="outline" className="w-full group">
                    Register for NetBanking
                    <motion.span
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </main>

      <footer className="bg-white border-t py-4 px-6 relative z-10">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p className="mb-2">© {new Date().getFullYear()} State Bank of India. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <Link href="#" className="hover:text-blue-600 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">
              Security Information
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

