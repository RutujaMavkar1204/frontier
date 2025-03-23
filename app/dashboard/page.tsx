"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  BarChart3,
  Bell,
  User,
  LogOut,
  Search,
  Home,
  Wallet,
  Clock,
  ChevronRight,
  Download,
  Filter,
  PlusCircle,
  Smartphone,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const accounts = [
    { id: 1, name: "Savings Account", number: "XXXX XXXX 1234", balance: 45678.9, type: "savings" },
    { id: 2, name: "Current Account", number: "XXXX XXXX 5678", balance: 12345.67, type: "current" },
    { id: 3, name: "Fixed Deposit", number: "FD-12345678", balance: 100000.0, type: "fd", maturityDate: "15 Dec 2025" },
  ]

  const recentTransactions = [
    {
      id: 1,
      description: "Amazon.in",
      amount: -2499.0,
      date: "Today, 10:30 AM",
      category: "Shopping",
      icon: "shopping",
    },
    { id: 2, description: "Salary Credit", amount: 75000.0, date: "Mar 01, 2025", category: "Income", icon: "income" },
    {
      id: 3,
      description: "Electricity Bill",
      amount: -1850.0,
      date: "Feb 28, 2025",
      category: "Utilities",
      icon: "utilities",
    },
    { id: 4, description: "Swiggy", amount: -450.0, date: "Feb 27, 2025", category: "Food", icon: "food" },
    {
      id: 5,
      description: "Mutual Fund SIP",
      amount: -10000.0,
      date: "Feb 25, 2025",
      category: "Investment",
      icon: "investment",
    },
  ]

  const upcomingPayments = [
    { id: 1, description: "Home Loan EMI", amount: 24500.0, date: "Mar 05, 2025", status: "upcoming" },
    { id: 2, description: "Car Insurance", amount: 12000.0, date: "Mar 10, 2025", status: "upcoming" },
    { id: 3, description: "Credit Card Bill", amount: 15678.0, date: "Mar 15, 2025", status: "upcoming" },
  ]

  // Helper function to format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  // Helper function to get transaction icon
  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "shopping":
        return (
          <div className="bg-purple-100 p-2 rounded-full">
            <CreditCard className="h-4 w-4 text-purple-600" />
          </div>
        )
      case "income":
        return (
          <div className="bg-green-100 p-2 rounded-full">
            <ArrowDownRight className="h-4 w-4 text-green-600" />
          </div>
        )
      case "utilities":
        return (
          <div className="bg-blue-100 p-2 rounded-full">
            <Home className="h-4 w-4 text-blue-600" />
          </div>
        )
      case "food":
        return (
          <div className="bg-orange-100 p-2 rounded-full">
            <Wallet className="h-4 w-4 text-orange-600" />
          </div>
        )
      case "investment":
        return (
          <div className="bg-indigo-100 p-2 rounded-full">
            <BarChart3 className="h-4 w-4 text-indigo-600" />
          </div>
        )
      default:
        return (
          <div className="bg-gray-100 p-2 rounded-full">
            <Clock className="h-4 w-4 text-gray-600" />
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r">
        <div className="p-4 border-b">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=40&width=40" alt="SBI Logo" width={40} height={40} />
            <span className="font-bold text-xl text-blue-900">SBI Bank</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium"
          >
            <Home size={18} />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/accounts"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Wallet size={18} />
            <span>Accounts</span>
          </Link>

          <Link
            href="/transactions"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <ArrowUpRight size={18} />
            <span>Transactions</span>
          </Link>

          <Link
            href="/payments"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <CreditCard size={18} />
            <span>Payments</span>
          </Link>

          <Link
            href="/investments"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <BarChart3 size={18} />
            <span>Investments</span>
          </Link>
        </nav>

        <div className="p-4 border-t">
          <div className="flex items-center gap-3 mb-6">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
              <AvatarFallback>RP</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Rahul Patel</p>
              <p className="text-xs text-gray-500">rahul.p@example.com</p>
            </div>
          </div>

          <Button variant="outline" className="w-full justify-start gap-2">
            <LogOut size={16} />
            <span>Logout</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b py-4 px-6">
          <div className="flex items-center justify-between">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input placeholder="Search transactions, accounts..." className="pl-10 bg-gray-50 border-gray-200" />
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

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, Rahul!</h1>
            <p className="text-gray-600">
              Here's your financial summary as of{" "}
              {new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>

          <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
            <TabsList className="bg-white border">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="accounts">Accounts</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Account Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {accounts.map((account) => (
                  <Card key={account.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{account.name}</CardTitle>
                          <CardDescription>{account.number}</CardDescription>
                        </div>
                        {account.type === "fd" ? (
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Fixed Deposit
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {account.type === "savings" ? "Savings" : "Current"}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Available Balance</span>
                          <span className="font-bold text-xl">{formatCurrency(account.balance)}</span>
                        </div>
                        {account.type === "fd" && (
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Maturity Date</span>
                            <span>{account.maturityDate}</span>
                          </div>
                        )}
                        <Button variant="link" className="p-0 h-auto text-blue-600 flex items-center gap-1">
                          View Details <ChevronRight size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Transactions */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle>Recent Transactions</CardTitle>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <Filter size={14} />
                      Filter
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-3">
                          {getTransactionIcon(transaction.icon)}
                          <div>
                            <p className="font-medium">{transaction.description}</p>
                            <p className="text-sm text-gray-500">{transaction.date}</p>
                          </div>
                        </div>
                        <span className={`font-medium ${transaction.amount < 0 ? "text-red-600" : "text-green-600"}`}>
                          {transaction.amount < 0 ? "-" : "+"}
                          {formatCurrency(Math.abs(transaction.amount))}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t text-center">
                    <Button variant="link" className="text-blue-600">
                      View All Transactions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Payments */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle>Upcoming Payments</CardTitle>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <PlusCircle size={14} />
                      Schedule Payment
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingPayments.map((payment) => (
                      <div key={payment.id} className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-3">
                          <div className="bg-orange-100 p-2 rounded-full">
                            <Clock className="h-4 w-4 text-orange-600" />
                          </div>
                          <div>
                            <p className="font-medium">{payment.description}</p>
                            <p className="text-sm text-gray-500">Due on {payment.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-medium">{formatCurrency(payment.amount)}</span>
                          <Button size="sm" className="h-8">
                            Pay Now
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="accounts" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Accounts</CardTitle>
                  <CardDescription>Manage all your bank accounts in one place</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {accounts.map((account) => (
                      <div key={account.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-bold text-lg">{account.name}</h3>
                            <p className="text-gray-600">{account.number}</p>
                          </div>
                          {account.type === "fd" ? (
                            <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                              Fixed Deposit
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                              {account.type === "savings" ? "Savings" : "Current"}
                            </Badge>
                          )}
                        </div>

                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-gray-600">Available Balance</p>
                            <p className="text-2xl font-bold">{formatCurrency(account.balance)}</p>
                          </div>

                          {account.type === "fd" ? (
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-gray-600">Interest Rate</p>
                                <p className="font-medium">7.25% p.a.</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-600">Maturity Date</p>
                                <p className="font-medium">{account.maturityDate}</p>
                              </div>
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-gray-600">Account Type</p>
                                <p className="font-medium">
                                  {account.type === "savings" ? "Savings Account" : "Current Account"}
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-600">Branch</p>
                                <p className="font-medium">Mumbai Main Branch</p>
                              </div>
                            </div>
                          )}

                          <div className="flex flex-wrap gap-2">
                            <Button size="sm" variant="outline">
                              View Statement
                            </Button>
                            {account.type !== "fd" && (
                              <>
                                <Button size="sm" variant="outline">
                                  Transfer Money
                                </Button>
                                <Button size="sm" variant="outline">
                                  Set Limits
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="transactions" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle>Transaction History</CardTitle>
                      <CardDescription>View and filter your recent transactions</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="h-9 gap-1">
                        <Filter size={14} />
                        Filter
                      </Button>
                      <Button variant="outline" size="sm" className="h-9 gap-1">
                        <Download size={14} />
                        Export
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="rounded-lg border overflow-hidden">
                      <div className="bg-gray-50 p-4 border-b grid grid-cols-12 gap-4 font-medium text-sm text-gray-600">
                        <div className="col-span-5">Description</div>
                        <div className="col-span-2">Date</div>
                        <div className="col-span-2">Category</div>
                        <div className="col-span-3 text-right">Amount</div>
                      </div>

                      <div className="divide-y">
                        {[...recentTransactions, ...recentTransactions].slice(0, 8).map((transaction, index) => (
                          <div key={index} className="p-4 grid grid-cols-12 gap-4 items-center hover:bg-gray-50">
                            <div className="col-span-5 flex items-center gap-3">
                              {getTransactionIcon(transaction.icon)}
                              <span className="font-medium">{transaction.description}</span>
                            </div>
                            <div className="col-span-2 text-gray-600 text-sm">{transaction.date}</div>
                            <div className="col-span-2">
                              <Badge variant="outline" className="font-normal">
                                {transaction.category}
                              </Badge>
                            </div>
                            <div
                              className={`col-span-3 text-right font-medium ${transaction.amount < 0 ? "text-red-600" : "text-green-600"}`}
                            >
                              {transaction.amount < 0 ? "-" : "+"}
                              {formatCurrency(Math.abs(transaction.amount))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">Showing 8 of 24 transactions</p>
                      <div className="flex gap-1">
                        <Button variant="outline" size="sm" disabled>
                          Previous
                        </Button>
                        <Button variant="outline" size="sm">
                          Next
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payments" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Payments</CardTitle>
                    <CardDescription>Scheduled payments and bills due</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingPayments.map((payment) => (
                        <div key={payment.id} className="flex items-center justify-between py-2 border-b last:border-0">
                          <div>
                            <p className="font-medium">{payment.description}</p>
                            <p className="text-sm text-gray-500">Due on {payment.date}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-medium">{formatCurrency(payment.amount)}</span>
                            <Button size="sm">Pay Now</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Payments</CardTitle>
                    <CardDescription>Make instant payments and transfers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {[
                        { name: "Fund Transfer", icon: <ArrowUpRight className="h-5 w-5" /> },
                        { name: "Pay Bills", icon: <Home className="h-5 w-5" /> },
                        { name: "Mobile Recharge", icon: <Smartphone className="h-5 w-5" /> },
                        { name: "Credit Card", icon: <CreditCard className="h-5 w-5" /> },
                        { name: "Tax Payment", icon: <BarChart3 className="h-5 w-5" /> },
                        { name: "Donations", icon: <Heart className="h-5 w-5" /> },
                      ].map((item, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="h-auto flex-col py-4 gap-2 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200"
                        >
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <span className="text-xs font-medium">{item.name}</span>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Beneficiaries</CardTitle>
                  <CardDescription>Quick access to your saved beneficiaries</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { name: "Priya Sharma", accountNo: "XXXX1234", bank: "SBI" },
                      { name: "Amit Patel", accountNo: "XXXX5678", bank: "HDFC" },
                      { name: "Neha Singh", accountNo: "XXXX9012", bank: "ICICI" },
                      { name: "Vikram Mehta", accountNo: "XXXX3456", bank: "Axis" },
                      { name: "Sunita Gupta", accountNo: "XXXX7890", bank: "SBI" },
                      { name: "Rajesh Kumar", accountNo: "XXXX2345", bank: "PNB" },
                    ].map((beneficiary, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar>
                            <AvatarFallback>
                              {beneficiary.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{beneficiary.name}</p>
                            <p className="text-xs text-gray-500">
                              {beneficiary.bank} • {beneficiary.accountNo}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          Transfer Money
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

// Missing component definition
const Heart = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

