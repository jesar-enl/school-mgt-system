"use client";

import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import { Search, Filter, Download, PieChart, TrendingUp, DollarSign, Plus, Building2, BookOpen, Users, Utensils } from "lucide-react";

export default function ExpensesPage() {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        School Expenses
                    </h1>
                    <p className="text-xl text-gray-600">
                        Track and manage all school-related expenses
                    </p>
                </div>

                {/* Summary Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <DollarSign className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Expenses</p>
                                <p className="text-2xl font-semibold">UGX 156,200,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                                <Building2 className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Infrastructure</p>
                                <p className="text-2xl font-semibold">UGX 45,800,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                <Users className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Staff Salary</p>
                                <p className="text-2xl font-semibold">UGX 82,500,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-purple-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Academic</p>
                                <p className="text-2xl font-semibold">UGX 27,900,000</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold">Expense Distribution</h3>
                            <PieChart className="w-5 h-5 text-gray-500" />
                        </div>
                        <div className="h-64 flex items-center justify-center text-gray-500">
                            Pie Chart Visualization
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold">Monthly Trend</h3>
                            <TrendingUp className="w-5 h-5 text-gray-500" />
                        </div>
                        <div className="h-64 flex items-center justify-center text-gray-500">
                            Line Chart Visualization
                        </div>
                    </div>
                </div>

                {/* Expense Categories */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold">Expense Categories</h3>
                        <Button className="flex items-center gap-2">
                            <Plus className="w-4 h-4" />
                            Add Expense
                        </Button>
                    </div>
                    <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Infrastructure",
                                icon: <Building2 className="w-6 h-6" />,
                                amount: "UGX 45,800,000",
                                percentage: 29.3,
                                color: "bg-green-50 text-green-500"
                            },
                            {
                                name: "Staff Salary",
                                icon: <Users className="w-6 h-6" />,
                                amount: "UGX 82,500,000",
                                percentage: 52.8,
                                color: "bg-blue-50 text-blue-500"
                            },
                            {
                                name: "Academic Resources",
                                icon: <BookOpen className="w-6 h-6" />,
                                amount: "UGX 27,900,000",
                                percentage: 17.9,
                                color: "bg-purple-50 text-purple-500"
                            },
                            {
                                name: "Cafeteria",
                                icon: <Utensils className="w-6 h-6" />,
                                amount: "UGX 12,500,000",
                                percentage: 8.0,
                                color: "bg-orange-50 text-orange-500"
                            }
                        ].map((category) => (
                            <div key={category.name} className="p-6 rounded-xl border border-gray-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center`}>
                                        {category.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{category.name}</h4>
                                        <p className="text-sm text-gray-600">{category.percentage}% of total</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Amount</span>
                                        <span className="font-semibold">{category.amount}</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary"
                                            style={{ width: `${category.percentage}%` }}
                                        />
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