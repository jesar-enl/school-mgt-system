"use client";

import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import { Search, Filter, Download, Calendar, ArrowUpDown, CreditCard, Receipt, Wallet } from "lucide-react";

export default function PaymentHistoryPage() {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        Payment History
                    </h1>
                    <p className="text-xl text-gray-600">
                        Track and manage all your payment transactions
                    </p>
                </div>

                {/* Summary Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <CreditCard className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Payments</p>
                                <p className="text-2xl font-semibold">UGX 24,500,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                                <Receipt className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Last Payment</p>
                                <p className="text-2xl font-semibold">UGX 1,200,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                <Wallet className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Pending</p>
                                <p className="text-2xl font-semibold">UGX 800,000</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search and Filter Section */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search transactions..."
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Button variant="outline" className="flex-1 flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Date Range
                            </Button>
                            <Button variant="outline" className="flex-1 flex items-center gap-2">
                                <Filter className="w-4 h-4" />
                                Filter
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Transactions Table */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold">Recent Transactions</h3>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Export
                        </Button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                        <div className="flex items-center gap-2">
                                            Date
                                            <ArrowUpDown className="w-4 h-4" />
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Description</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Category</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Amount</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {[
                                    {
                                        date: "2024-03-25",
                                        description: "Tuition Fee Payment",
                                        category: "Fees",
                                        amount: "UGX 1,200,000",
                                        status: "Completed"
                                    },
                                    {
                                        date: "2024-03-20",
                                        description: "Library Fine",
                                        category: "Fine",
                                        amount: "UGX 25,000",
                                        status: "Completed"
                                    },
                                    {
                                        date: "2024-03-15",
                                        description: "Lab Equipment Fee",
                                        category: "Fees",
                                        amount: "UGX 150,000",
                                        status: "Pending"
                                    },
                                    {
                                        date: "2024-03-10",
                                        description: "Sports Activity Fee",
                                        category: "Activities",
                                        amount: "UGX 75,000",
                                        status: "Completed"
                                    },
                                    {
                                        date: "2024-03-05",
                                        description: "Exam Registration",
                                        category: "Academic",
                                        amount: "UGX 200,000",
                                        status: "Failed"
                                    }
                                ].map((transaction, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 text-sm text-gray-900">{transaction.date}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">{transaction.description}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">{transaction.category}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">{transaction.amount}</td>
                                        <td className="px-6 py-4 text-sm">
                                            <span className={`px-2 py-1 rounded-full text-xs ${transaction.status === "Completed" ? "bg-green-50 text-green-600" :
                                                transaction.status === "Pending" ? "bg-yellow-50 text-yellow-600" :
                                                    "bg-red-50 text-red-600"
                                                }`}>
                                                {transaction.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
} 