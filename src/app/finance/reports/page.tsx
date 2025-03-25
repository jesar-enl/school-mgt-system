"use client";

import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import {
    BarChart3,
    PieChart,
    TrendingUp,
    Download,
    Calendar,
    Filter,
    Printer,
    FileText,
    ArrowUpRight,
    ArrowDownRight,
    DollarSign
} from "lucide-react";

export default function FinancialReportsPage() {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        Financial Reports
                    </h1>
                    <p className="text-xl text-gray-600">
                        Comprehensive financial analysis and reporting
                    </p>
                </div>

                {/* Report Actions */}
                <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex-1">
                        <div className="flex gap-4">
                            <Button variant="outline" className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Select Period
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Filter className="w-4 h-4" />
                                Filter
                            </Button>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" className="flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Export
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Printer className="w-4 h-4" />
                            Print
                        </Button>
                    </div>
                </div>

                {/* Summary Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <DollarSign className="w-6 h-6 text-primary" />
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-green-500" />
                        </div>
                        <p className="text-sm text-gray-600">Total Revenue</p>
                        <p className="text-2xl font-semibold">UGX 245,000,000</p>
                        <p className="text-sm text-green-600 mt-2">+12.5% from last month</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                                <FileText className="w-6 h-6 text-red-500" />
                            </div>
                            <ArrowDownRight className="w-5 h-5 text-red-500" />
                        </div>
                        <p className="text-sm text-gray-600">Total Expenses</p>
                        <p className="text-2xl font-semibold">UGX 156,200,000</p>
                        <p className="text-sm text-red-600 mt-2">+8.2% from last month</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-green-500" />
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-green-500" />
                        </div>
                        <p className="text-sm text-gray-600">Net Income</p>
                        <p className="text-2xl font-semibold">UGX 88,800,000</p>
                        <p className="text-sm text-green-600 mt-2">+15.3% from last month</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                <BarChart3 className="w-6 h-6 text-blue-500" />
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-green-500" />
                        </div>
                        <p className="text-sm text-gray-600">Outstanding Fees</p>
                        <p className="text-2xl font-semibold">UGX 12,000,000</p>
                        <p className="text-sm text-green-600 mt-2">-5.8% from last month</p>
                    </div>
                </div>

                {/* Charts Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* Revenue vs Expenses Chart */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-lg font-semibold">Revenue vs Expenses</h3>
                                <p className="text-sm text-gray-600">Monthly comparison</p>
                            </div>
                            <BarChart3 className="w-5 h-5 text-gray-500" />
                        </div>
                        <div className="h-80 flex items-center justify-center text-gray-500">
                            Bar Chart Visualization
                        </div>
                    </div>

                    {/* Income Distribution */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-lg font-semibold">Income Distribution</h3>
                                <p className="text-sm text-gray-600">By category</p>
                            </div>
                            <PieChart className="w-5 h-5 text-gray-500" />
                        </div>
                        <div className="h-80 flex items-center justify-center text-gray-500">
                            Pie Chart Visualization
                        </div>
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <div>
                            <h3 className="text-lg font-semibold">Recent Transactions</h3>
                            <p className="text-sm text-gray-600">Last 30 days</p>
                        </div>
                        <Button variant="outline" className="flex items-center gap-2">
                            View All
                        </Button>
                    </div>
                    <div className="p-6">
                        <div className="space-y-6">
                            {[
                                {
                                    title: "School Fees Collection",
                                    amount: "UGX 12,500,000",
                                    type: "income",
                                    date: "2024-03-25"
                                },
                                {
                                    title: "Staff Salary Payment",
                                    amount: "UGX 82,500,000",
                                    type: "expense",
                                    date: "2024-03-20"
                                },
                                {
                                    title: "Library Resources",
                                    amount: "UGX 3,500,000",
                                    type: "expense",
                                    date: "2024-03-15"
                                },
                                {
                                    title: "Registration Fees",
                                    amount: "UGX 4,800,000",
                                    type: "income",
                                    date: "2024-03-10"
                                }
                            ].map((transaction, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.type === "income" ? "bg-green-50" : "bg-red-50"
                                            }`}>
                                            {transaction.type === "income" ? (
                                                <ArrowUpRight className={`w-5 h-5 text-green-500`} />
                                            ) : (
                                                <ArrowDownRight className={`w-5 h-5 text-red-500`} />
                                            )}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">{transaction.title}</p>
                                            <p className="text-sm text-gray-500">{transaction.date}</p>
                                        </div>
                                    </div>
                                    <p className={`font-medium ${transaction.type === "income" ? "text-green-600" : "text-red-600"
                                        }`}>
                                        {transaction.type === "income" ? "+" : "-"} {transaction.amount}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
} 