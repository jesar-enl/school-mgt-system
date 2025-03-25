"use client";

import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import { Search, Filter, Download, Calendar, Users, Wallet, BadgeDollarSign, UserCheck, Clock, CheckCircle2, XCircle } from "lucide-react";

export default function SalaryManagementPage() {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        Salary Management
                    </h1>
                    <p className="text-xl text-gray-600">
                        Manage staff salaries, payroll, and payment records
                    </p>
                </div>

                {/* Summary Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Staff</p>
                                <p className="text-2xl font-semibold">45</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                                <Wallet className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Monthly Payroll</p>
                                <p className="text-2xl font-semibold">UGX 82,500,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                <BadgeDollarSign className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Paid This Month</p>
                                <p className="text-2xl font-semibold">UGX 65,800,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center">
                                <Clock className="w-6 h-6 text-yellow-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Pending</p>
                                <p className="text-2xl font-semibold">UGX 16,700,000</p>
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
                                    placeholder="Search staff members..."
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Button variant="outline" className="flex-1 flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Select Month
                            </Button>
                            <Button variant="outline" className="flex-1 flex items-center gap-2">
                                <Filter className="w-4 h-4" />
                                Filter
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Staff Salary Table */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold">Staff Salary Records</h3>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Export Payroll
                        </Button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Staff Member</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Position</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Basic Salary</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Allowances</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Total</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {[
                                    {
                                        name: "John Doe",
                                        position: "Senior Teacher",
                                        basicSalary: "UGX 2,500,000",
                                        allowances: "UGX 500,000",
                                        total: "UGX 3,000,000",
                                        status: "Paid"
                                    },
                                    {
                                        name: "Jane Smith",
                                        position: "Administrator",
                                        basicSalary: "UGX 1,800,000",
                                        allowances: "UGX 300,000",
                                        total: "UGX 2,100,000",
                                        status: "Pending"
                                    },
                                    {
                                        name: "Robert Wilson",
                                        position: "Department Head",
                                        basicSalary: "UGX 2,800,000",
                                        allowances: "UGX 700,000",
                                        total: "UGX 3,500,000",
                                        status: "Paid"
                                    },
                                    {
                                        name: "Mary Johnson",
                                        position: "Teacher",
                                        basicSalary: "UGX 1,500,000",
                                        allowances: "UGX 300,000",
                                        total: "UGX 1,800,000",
                                        status: "Processing"
                                    }
                                ].map((staff, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <UserCheck className="w-4 h-4 text-primary" />
                                                </div>
                                                <span className="text-sm font-medium text-gray-900">{staff.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{staff.position}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">{staff.basicSalary}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">{staff.allowances}</td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{staff.total}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                {staff.status === "Paid" ? (
                                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                ) : staff.status === "Pending" ? (
                                                    <Clock className="w-4 h-4 text-yellow-500" />
                                                ) : (
                                                    <XCircle className="w-4 h-4 text-blue-500" />
                                                )}
                                                <span className={`text-sm font-medium ${staff.status === "Paid" ? "text-green-600" :
                                                    staff.status === "Pending" ? "text-yellow-600" :
                                                        "text-blue-600"
                                                    }`}>
                                                    {staff.status}
                                                </span>
                                            </div>
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