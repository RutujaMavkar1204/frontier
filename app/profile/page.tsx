"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  Bell,
  User,
  LogOut,
  Edit,
  Shield,
  Key,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal")

  // Mock user data
  const user = {
    name: "Rahul Patel",
    email: "rahul.p@example.com",
    phone: "+91 98765 43210",
    dob: "15 Aug 1985",
    address: "123, Sunshine Apartments, Andheri West, Mumbai, Maharashtra - 400053",
    occupation: "Software Engineer",
    panCard: "ABCDE1234F",
    aadharCard: "XXXX XXXX 5678",
    accountOpenDate: "10 Jan 2015",
    branch: "Mumbai Main Branch",
    lastLogin: "Today at 10:30 AM",
    kycStatus: "Verified",
    emailVerified: true,
    phoneVerified: true,
    twoFactorEnabled: true,
    biometricEnabled: false,
    notificationPreferences: {
      transactionAlerts: true,
      marketingEmails: false,
      accountUpdates: true,
      securityAlerts: true,
    },
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-blue-600 flex items-center gap-1 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft size={18} />
              <span>Back to Dashboard</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-900 hidden md:block">My Profile</h1>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="relative">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center">
                3
              </span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>RP</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="mb-6 md:hidden">
          <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600">Manage your personal information and settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Profile Sidebar */}
          <Card className="lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center mb-6">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
                  <AvatarFallback className="text-2xl">RP</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <div className="mt-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {user.kycStatus}
                  </Badge>
                </div>
                <Button variant="outline" size="sm" className="mt-4 gap-1">
                  <Edit size={14} />
                  Change Photo
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                    <Shield size={16} />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Security Status</p>
                    <p className="text-green-600">Strong</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                    <Calendar size={16} />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Last Login</p>
                    <p className="text-gray-600">{user.lastLogin}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                    <MapPin size={16} />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Branch</p>
                    <p className="text-gray-600">{user.branch}</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <FileText size={16} />
                  Download Profile
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut size={16} />
                  Logout
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Profile Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your personal details and account settings</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="personal" className="space-y-6" onValueChange={setActiveTab}>
                  <TabsList>
                    <TabsTrigger value="personal">Personal Details</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    <TabsTrigger value="documents">Documents</TabsTrigger>
                  </TabsList>

                  <TabsContent value="personal" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Full Name</Label>
                        <div className="flex">
                          <Input value={user.name} readOnly className="flex-1" />
                          <Button variant="ghost" size="icon" className="ml-2">
                            <Edit size={16} />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Email Address</Label>
                        <div className="flex">
                          <Input value={user.email} readOnly className="flex-1" />
                          <Button variant="ghost" size="icon" className="ml-2">
                            <Edit size={16} />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Phone Number</Label>
                        <div className="flex">
                          <Input value={user.phone} readOnly className="flex-1" />
                          <Button variant="ghost" size="icon" className="ml-2">
                            <Edit size={16} />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Date of Birth</Label>
                        <div className="flex">
                          <Input value={user.dob} readOnly className="flex-1" />
                          <Button variant="ghost" size="icon" className="ml-2">
                            <Edit size={16} />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label>Address</Label>
                        <div className="flex">
                          <Input value={user.address} readOnly className="flex-1" />
                          <Button variant="ghost" size="icon" className="ml-2">
                            <Edit size={16} />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Occupation</Label>
                        <div className="flex">
                          <Input value={user.occupation} readOnly className="flex-1" />
                          <Button variant="ghost" size="icon" className="ml-2">
                            <Edit size={16} />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>PAN Card</Label>
                        <div className="flex">
                          <Input value={user.panCard} readOnly className="flex-1" />
                          <Button variant="ghost" size="icon" className="ml-2">
                            <Edit size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>Important</AlertTitle>
                      <AlertDescription>
                        To update certain information like PAN or Aadhaar, you may need to visit your branch with
                        supporting documents.
                      </AlertDescription>
                    </Alert>
                  </TabsContent>

                  <TabsContent value="security" className="space-y-6">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-base">Two-Factor Authentication</CardTitle>
                                <CardDescription>Add an extra layer of security</CardDescription>
                              </div>
                              <Switch checked={user.twoFactorEnabled} />
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600">
                              Protect your account with an additional verification step when you sign in.
                            </p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-base">Biometric Login</CardTitle>
                                <CardDescription>Use fingerprint or face recognition</CardDescription>
                              </div>
                              <Switch checked={user.biometricEnabled} />
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600">
                              Enable biometric authentication for faster and more secure access.
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Login & Security</h3>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between py-2 border-b">
                            <div className="flex items-center gap-3">
                              <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                                <Key size={16} />
                              </div>
                              <div>
                                <p className="font-medium">Password</p>
                                <p className="text-sm text-gray-600">Last changed 30 days ago</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Change Password
                            </Button>
                          </div>

                          <div className="flex items-center justify-between py-2 border-b">
                            <div className="flex items-center gap-3">
                              <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                                <Mail size={16} />
                              </div>
                              <div>
                                <p className="font-medium">Email Verification</p>
                                <p className="text-sm text-gray-600">{user.email}</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Verified
                            </Badge>
                          </div>

                          <div className="flex items-center justify-between py-2 border-b">
                            <div className="flex items-center gap-3">
                              <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                                <Phone size={16} />
                              </div>
                              <div>
                                <p className="font-medium">Phone Verification</p>
                                <p className="text-sm text-gray-600">{user.phone}</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Verified
                            </Badge>
                          </div>

                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3">
                              <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                                <Smartphone size={16} />
                              </div>
                              <div>
                                <p className="font-medium">Trusted Devices</p>
                                <p className="text-sm text-gray-600">3 devices currently active</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Manage
                            </Button>
                          </div>
                        </div>
                      </div>

                      <Alert className="bg-blue-50 text-blue-800 border-blue-200">
                        <Shield className="h-4 w-4" />
                        <AlertTitle>Security Tip</AlertTitle>
                        <AlertDescription>
                          Never share your OTP, password, or banking credentials with anyone. SBI will never ask for
                          this information.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </TabsContent>

                  <TabsContent value="notifications" className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Notification Preferences</h3>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b">
                          <div>
                            <p className="font-medium">Transaction Alerts</p>
                            <p className="text-sm text-gray-600">Get notified about all transactions in your account</p>
                          </div>
                          <Switch checked={user.notificationPreferences.transactionAlerts} />
                        </div>

                        <div className="flex items-center justify-between py-2 border-b">
                          <div>
                            <p className="font-medium">Security Alerts</p>
                            <p className="text-sm text-gray-600">Get notified about important security events</p>
                          </div>
                          <Switch checked={user.notificationPreferences.securityAlerts} />
                        </div>

                        <div className="flex items-center justify-between py-2 border-b">
                          <div>
                            <p className="font-medium">Account Updates</p>
                            <p className="text-sm text-gray-600">Get notified about changes to your account</p>
                          </div>
                          <Switch checked={user.notificationPreferences.accountUpdates} />
                        </div>

                        <div className="flex items-center justify-between py-2">
                          <div>
                            <p className="font-medium">Marketing Communications</p>
                            <p className="text-sm text-gray-600">Receive offers, promotions, and updates from SBI</p>
                          </div>
                          <Switch checked={user.notificationPreferences.marketingEmails} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Delivery Channels</h3>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-base">Email</CardTitle>
                              <Switch checked={true} />
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600">{user.email}</p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-base">SMS</CardTitle>
                              <Switch checked={true} />
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600">{user.phone}</p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-base">Push Notifications</CardTitle>
                              <Switch checked={true} />
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600">YONO App</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="documents" className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">KYC Documents</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-base">PAN Card</CardTitle>
                                <CardDescription>{user.panCard}</CardDescription>
                              </div>
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                Verified
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-2">
                            <div className="flex items-center justify-between">
                              <p className="text-sm text-gray-600">Uploaded on 10 Jan 2022</p>
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-base">Aadhaar Card</CardTitle>
                                <CardDescription>{user.aadharCard}</CardDescription>
                              </div>
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                Verified
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-2">
                            <div className="flex items-center justify-between">
                              <p className="text-sm text-gray-600">Uploaded on 10 Jan 2022</p>
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-base">Address Proof</CardTitle>
                                <CardDescription>Utility Bill</CardDescription>
                              </div>
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                Verified
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-2">
                            <div className="flex items-center justify-between">
                              <p className="text-sm text-gray-600">Uploaded on 15 Feb 2022</p>
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-base">Signature</CardTitle>
                                <CardDescription>Specimen Signature</CardDescription>
                              </div>
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                Verified
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-2">
                            <div className="flex items-center justify-between">
                              <p className="text-sm text-gray-600">Uploaded on 10 Jan 2022</p>
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <Alert className="bg-green-50 text-green-800 border-green-200">
                      <CheckCircle className="h-4 w-4" />
                      <AlertTitle>KYC Status: Verified</AlertTitle>
                      <AlertDescription>
                        Your KYC verification is complete and up to date. No further action is required at this time.
                      </AlertDescription>
                    </Alert>

                    <div className="flex justify-end">
                      <Button variant="outline" className="gap-2">
                        <FileText size={16} />
                        Upload New Document
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-end border-t pt-6">
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-4 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} State Bank of India. All rights reserved.</p>
          <div className="flex gap-4">
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

