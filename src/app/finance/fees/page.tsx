"use client";

import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import { Wallet, Plus, Search, Clock, CheckCircle, AlertCircle } from "lucide-react";

export default function FeesManagement() {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        Fees Management
                    </h1>
                    <p className="text-xl text-gray-600">
                        Manage student fees, payments, and generate financial reports
                    </p>
                </div>

                {/* Action Bar */}
                <div className="mb-8 flex flex-wrap gap-4 items-center justify-between">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Search className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search payments..."
                            className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        />
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-indigo-600 text-white">
                        <Plus className="w-4 h-4 mr-2" />
                        Record Payment
                    </Button>
                </div>

                {/* Summary Cards */}
                <div className="grid gap-6 md:grid-cols-3 mb-8">
                    {[
                        { title: "Total Fees Collected", amount: "UGX 25,000,000", icon: <Wallet className="w-6 h-6" /> },
                        { title: "Pending Payments", amount: "UGX 8,500,000", icon: <Clock className="w-6 h-6" /> },
                        { title: "Outstanding Balance", amount: "UGX 12,000,000", icon: <AlertCircle className="w-6 h-6" /> }
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="p-6 relative">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">{item.title}</p>
                                        <h3 className="text-xl font-semibold text-gray-900">{item.amount}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Payments */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">Recent Payments</h3>
                    </div>
                    <div className="divide-y divide-gray-200">
                        {[
                            { student: "Alice Johnson", amount: "850,000", status: "Paid", date: "2024-03-15" },
                            { student: "Bob Smith", amount: "750,000", status: "Pending", date: "2024-03-14" },
                            { student: "Carol Williams", amount: "950,000", status: "Paid", date: "2024-03-13" }
                        ].map((payment) => (
                            <div
                                key={payment.student}
                                className="p-6 hover:bg-gray-50 transition-colors duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Wallet className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">{payment.student}</h4>
                                            <p className="text-sm text-gray-500">UGX {payment.amount}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className={`flex items-center gap-2 ${payment.status === "Paid" ? "text-green-600" : "text-yellow-600"}`}>
                                            {payment.status === "Paid" ? (
                                                <CheckCircle className="w-4 h-4" />
                                            ) : (
                                                <Clock className="w-4 h-4" />
                                            )}
                                            <span className="text-sm font-medium">{payment.status}</span>
                                        </div>
                                        <span className="text-sm text-gray-500">{payment.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
} 