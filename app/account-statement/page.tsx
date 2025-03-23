"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  Bell,
  User,
  LogOut,
  Search,
  Download,
  Filter,
  Calendar,
  ChevronDown,
  FileText,
  Printer,
  Mail,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"

export default function AccountStatementPage() {
  const [dateRange, setDateRange] = useState("last-month")
  const [accountType, setAccountType] = useState("savings")

  // Mock data
  const accounts = [
    { id: 1, name: "Savings Account", number: "XXXX XXXX 1234", balance: 45678.9, type: "savings" },
    { id: 2, name: "Current Account", number: "XXXX XXXX 5678", balance: 12345.67, type: "current" },
  ]

  const transactions = [
    {
      id: 1,
      date: "Mar 15, 2025",
      description: "Amazon.in",
      reference: "AMZN12345",
      debit: 2499.0,
      credit: 0,
      balance: 45678.9,
    },
    {
      id: 2,
      date: "Mar 10, 2025",
      description: "Salary Credit",
      reference: "NEFT123456",
      debit: 0,
      credit: 75000.0,
      balance: 48177.9,
    },
    {
      id: 3,
      date: "Mar 05, 2025",
      description: "Electricity Bill",
      reference: "BILL987654",
      debit: 1850.0,
      credit: 0,
      balance: 50027.9,
    },
    {
      id: 4,
      date: "Mar 01, 2025",
      description: "ATM Withdrawal",
      reference: "ATM876543",
      debit: 10000.0,
      credit: 0,
      balance: 51877.9,
    },
    {
      id: 5,
      date: "Feb 28, 2025",
      description: "Swiggy",
      reference: "SWGY654321",
      debit: 450.0,
      credit: 0,
      balance: 61877.9,
    },
    {
      id: 6,
      date: "Feb 25, 2025",
      description: "Mutual Fund SIP",
      reference: "SIP543210",
      debit: 10000.0,
      credit: 0,
      balance: 62327.9,
    },
    {
      id: 7,
      date: "Feb 20, 2025",
      description: "Mobile Recharge",
      reference: "RCHG432109",
      debit: 999.0,
      credit: 0,
      balance: 72327.9,
    },
    {
      id: 8,
      date: "Feb 15, 2025",
      description: "Interest Credit",
      reference: "INT321098",
      debit: 0,
      credit: 250.75,
      balance: 73326.9,
    },
    {
      id: 9,
      date: "Feb 10, 2025",
      description: "Home Loan EMI",
      reference: "EMI210987",
      debit: 24500.0,
      credit: 0,
      balance: 73076.15,
    },
    {
      id: 10,
      date: "Feb 05, 2025",
      description: "Salary Credit",
      reference: "NEFT109876",
      debit: 0,
      credit: 75000.0,
      balance: 97576.15,
    },
  ]

  // Helper function to format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
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
            <h1 className="text-xl font-bold text-gray-900 hidden md:block">Account Statement</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-full max-w-md hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input placeholder="Search transactions..." className="pl-10 bg-gray-50 border-gray-200" />
            </div>

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
          <h1 className="text-2xl font-bold text-gray-900">Account Statement</h1>
          <p className="text-gray-600">View and download your transaction history</p>
        </div>

        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle>Select Account & Date Range</CardTitle>
            <CardDescription>Choose the account and time period for your statement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="account">Select Account</Label>
                <Select value={accountType} onValueChange={setAccountType}>
                  <SelectTrigger id="account">
                    <SelectValue placeholder="Select account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="savings">Savings Account - XXXX1234</SelectItem>
                    <SelectItem value="current">Current Account - XXXX5678</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date-range">Date Range</Label>
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger id="date-range">
                    <SelectValue placeholder="Select date range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last-month">Last Month</SelectItem>
                    <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                    <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end gap-2">
                <Button className="flex-1">View Statement</Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <Download size={16} className="mr-2" />
                      Export
                      <ChevronDown size={16} className="ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <FileText className="mr-2 h-4 w-4" />
                      <span>PDF</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileText className="mr-2 h-4 w-4" />
                      <span>Excel</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Printer className="mr-2 h-4 w-4" />
                      <span>Print</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Email</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>
                  {accountType === "savings" ? "Savings Account - XXXX1234" : "Current Account - XXXX5678"}
                  {" • "}
                  {dateRange === "last-month"
                    ? "Feb 15 - Mar 15, 2025"
                    : dateRange === "last-3-months"
                      ? "Dec 15, 2024 - Mar 15, 2025"
                      : dateRange === "last-6-months"
                        ? "Sep 15, 2024 - Mar 15, 2025"
                        : "Custom Range"}
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-9 gap-1">
                  <Filter size={14} />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="h-9 gap-1">
                  <Calendar size={14} />
                  Custom Date
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="mb-6">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="debits">Debits</TabsTrigger>
                <TabsTrigger value="credits">Credits</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="rounded-lg border overflow-hidden">
              <div className="bg-gray-50 p-4 border-b grid grid-cols-12 gap-4 font-medium text-sm text-gray-600">
                <div className="col-span-2">Date</div>
                <div className="col-span-4">Description</div>
                <div className="col-span-2">Reference</div>
                <div className="col-span-1 text-right">Debit</div>
                <div className="col-span-1 text-right">Credit</div>
                <div className="col-span-2 text-right">Balance</div>
              </div>

              <div className="divide-y">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="p-4 grid grid-cols-12 gap-4 items-center hover:bg-gray-50">
                    <div className="col-span-2 text-gray-600 text-sm">{transaction.date}</div>
                    <div className="col-span-4">
                      <span className="font-medium">{transaction.description}</span>
                    </div>
                    <div className="col-span-2 text-gray-600 text-sm">{transaction.reference}</div>
                    <div className="col-span-1 text-right font-medium text-red-600">
                      {transaction.debit > 0 ? formatCurrency(transaction.debit) : "-"}
                    </div>
                    <div className="col-span-1 text-right font-medium text-green-600">
                      {transaction.credit > 0 ? formatCurrency(transaction.credit) : "-"}
                    </div>
                    <div className="col-span-2 text-right font-medium">{formatCurrency(transaction.balance)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex gap-6">
                <div>
                  <p className="text-sm text-gray-600">Total Debits</p>
                  <p className="font-bold text-red-600">{formatCurrency(50298.0)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Credits</p>
                  <p className="font-bold text-green-600">{formatCurrency(150250.75)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Net Change</p>
                  <p className="font-bold text-blue-600">{formatCurrency(99952.75)}</p>
                </div>
              </div>

              <div className="flex gap-1">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
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

