"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Code, FileCode, Layers, PenTool, Palette, Cpu, Zap } from "lucide-react"

export default function ProjectInfo() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Frontend Frontier Challenge
            </div>
            <h1 className="text-4xl font-bold mb-4">SBI Website Redesign Project</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A modern, accessible, and user-friendly redesign of the State Bank of India website with advanced
              animations and interactions.
            </p>
          </motion.div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Project Repository</CardTitle>
              <CardDescription>Access the source code and contribute to the project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="font-mono text-sm break-all">https://github.com/yourusername/sbi-website-redesign</p>
              </div>
              <p className="text-gray-600 mb-4">To submit your GitHub link for this project, follow these steps:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Push your code to a GitHub repository</li>
                <li>Make sure your repository is public</li>
                <li>Copy the repository URL</li>
                <li>Submit the URL through the project submission form</li>
                <li>Include a brief description of your implementation</li>
              </ol>
              <div className="mt-6">
                <Button className="gap-2">
                  <Github size={18} />
                  View on GitHub
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview">Project Overview</TabsTrigger>
              <TabsTrigger value="features">Key Features</TabsTrigger>
              <TabsTrigger value="tech">Tech Stack</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Project Description</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    This project is a comprehensive redesign of the State Bank of India website, focusing on creating a
                    modern, user-friendly, and visually appealing banking platform. The redesign aims to enhance the
                    user experience while maintaining the trust and reliability associated with India's largest bank.
                  </p>
                  <p>
                    The design incorporates advanced animations, micro-interactions, and a responsive layout to ensure a
                    seamless experience across all devices. The UI follows modern design principles with a focus on
                    accessibility and ease of use.
                  </p>
                  <p>
                    The project includes multiple pages such as the landing page, login/signup, dashboard, account
                    statement, and profile pages, each designed with attention to detail and user flow.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 rounded-lg border">
                      <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                        <Zap size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium">Advanced Animations</h3>
                        <p className="text-sm text-gray-600">
                          Smooth transitions and micro-interactions for enhanced user engagement
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg border">
                      <div className="bg-indigo-100 p-2 rounded-full text-indigo-600">
                        <Layers size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium">3D Card Effects</h3>
                        <p className="text-sm text-gray-600">
                          Interactive 3D card elements that respond to user movement
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg border">
                      <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                        <PenTool size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium">Modern UI Components</h3>
                        <p className="text-sm text-gray-600">Custom-designed UI components with a focus on usability</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg border">
                      <div className="bg-green-100 p-2 rounded-full text-green-600">
                        <Palette size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium">Glassmorphic Design</h3>
                        <p className="text-sm text-gray-600">
                          Modern glass-like UI elements with depth and transparency
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tech" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Technology Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 rounded-lg border">
                      <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                        <Code size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium">Next.js</h3>
                        <p className="text-sm text-gray-600">React framework for server-rendered applications</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg border">
                      <div className="bg-indigo-100 p-2 rounded-full text-indigo-600">
                        <Cpu size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium">TypeScript</h3>
                        <p className="text-sm text-gray-600">
                          Strongly typed programming language for better code quality
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg border">
                      <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                        <FileCode size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium">Tailwind CSS</h3>
                        <p className="text-sm text-gray-600">Utility-first CSS framework for rapid UI development</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg border">
                      <div className="bg-green-100 p-2 rounded-full text-green-600">
                        <Zap size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium">Framer Motion</h3>
                        <p className="text-sm text-gray-600">Animation library for React applications</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              This project was created as part of the Frontend Frontier Challenge to showcase modern web development
              skills and design capabilities.
            </p>
            <Button className="gap-2">
              <Github size={18} />
              Submit Your Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

