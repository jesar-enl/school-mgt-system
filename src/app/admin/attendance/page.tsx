"use client";

import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import {
    Search,
    Filter,
    Calendar,
    Users,
    GraduationCap,
    Check,
    X,
    Clock,
    FileText,
    Download,
    ChevronDown,
    CheckCircle2,
    XCircle,
    AlertCircle
} from "lucide-react";

export default function AttendancePage() {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        Attendance Management
                    </h1>
                    <p className="text-xl text-gray-600">
                        Track and manage student and staff attendance
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
                                <p className="text-sm text-gray-600">Total Students</p>
                                <p className="text-2xl font-semibold">450</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                                <Check className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Present Today</p>
                                <p className="text-2xl font-semibold">412</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                                <X className="w-6 h-6 text-red-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Absent Today</p>
                                <p className="text-2xl font-semibold">38</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                <Clock className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Avg. Attendance</p>
                                <p className="text-2xl font-semibold">91%</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs and Date Selector */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        <div className="flex border border-gray-200 rounded-lg divide-x overflow-hidden">
                            <button className="px-4 py-2 bg-primary/10 text-primary font-medium">Students</button>
                            <button className="px-4 py-2 text-gray-600 hover:bg-gray-50">Staff</button>
                            <button className="px-4 py-2 text-gray-600 hover:bg-gray-50">Reports</button>
                        </div>
                        <div className="flex gap-4">
                            <Button variant="outline" className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Today, May 15, 2024
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                            <Button className="bg-primary hover:bg-primary/90 text-white">
                                Take Attendance
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Filter and Search */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search students..."
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Button variant="outline" className="flex-1 flex items-center gap-2">
                                <GraduationCap className="w-4 h-4" />
                                Class
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" className="flex-1 flex items-center gap-2">
                                <Filter className="w-4 h-4" />
                                Filter
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Attendance Table */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold">Class 10A Attendance</h3>
                        <div className="flex items-center gap-4">
                            <Button variant="outline" className="flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                Report
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Download className="w-4 h-4" />
                                Export
                            </Button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Student Name</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Roll No.</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Today</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Week</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Month</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Overall</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {[
                                    {
                                        name: "John Smith",
                                        rollNo: "10A01",
                                        today: "Present",
                                        week: "4/5",
                                        month: "19/22",
                                        overall: "92%"
                                    },
                                    {
                                        name: "Sarah Johnson",
                                        rollNo: "10A02",
                                        today: "Present",
                                        week: "5/5",
                                        month: "22/22",
                                        overall: "98%"
                                    },
                                    {
                                        name: "Robert Brown",
                                        rollNo: "10A03",
                                        today: "Absent",
                                        week: "3/5",
                                        month: "18/22",
                                        overall: "85%"
                                    },
                                    {
                                        name: "Emily Davis",
                                        rollNo: "10A04",
                                        today: "Late",
                                        week: "4/5",
                                        month: "20/22",
                                        overall: "89%"
                                    },
                                    {
                                        name: "Michael Wilson",
                                        rollNo: "10A05",
                                        today: "Present",
                                        week: "5/5",
                                        month: "21/22",
                                        overall: "94%"
                                    }
                                ].map((student, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <span className="text-xs font-semibold text-primary">{student.name.slice(0, 2)}</span>
                                                </div>
                                                <span className="text-sm font-medium text-gray-900">{student.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{student.rollNo}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                {student.today === "Present" ? (
                                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                ) : student.today === "Absent" ? (
                                                    <XCircle className="w-4 h-4 text-red-500" />
                                                ) : (
                                                    <AlertCircle className="w-4 h-4 text-yellow-500" />
                                                )}
                                                <span className={`text-sm font-medium ${student.today === "Present" ? "text-green-600" :
                                                        student.today === "Absent" ? "text-red-600" :
                                                            "text-yellow-600"
                                                    }`}>
                                                    {student.today}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">{student.week}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">{student.month}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">{student.overall}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <Button variant="outline" size="sm" className="flex items-center gap-1">
                                                    <Check className="w-3 h-3" />
                                                    Present
                                                </Button>
                                                <Button variant="outline" size="sm" className="flex items-center gap-1">
                                                    <X className="w-3 h-3" />
                                                    Absent
                                                </Button>
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