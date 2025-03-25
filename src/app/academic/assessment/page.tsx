"use client";

import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import {
    BarChart2,
    BookOpen,
    Calendar,
    CheckCircle,
    ChevronDown,
    Download,
    Edit,
    Eye,
    Filter,
    GraduationCap,
    Plus,
    Search,
    UserCheck
} from "lucide-react";

export default function AssessmentPage() {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        Student Assessment
                    </h1>
                    <p className="text-xl text-gray-600">
                        Track student progress, manage continuous assessments, and analyze performance
                    </p>
                </div>

                {/* Summary Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <UserCheck className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Assessments</p>
                                <p className="text-2xl font-semibold">128</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Completed</p>
                                <p className="text-2xl font-semibold">96</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">This Week</p>
                                <p className="text-2xl font-semibold">18</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                                <BarChart2 className="w-6 h-6 text-purple-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Avg. Performance</p>
                                <p className="text-2xl font-semibold">78%</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Bar */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        <div className="flex gap-4">
                            <Button variant="outline" className="flex items-center gap-2">
                                <GraduationCap className="w-4 h-4" />
                                Class
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Subject
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Filter className="w-4 h-4" />
                                Filter
                            </Button>
                        </div>
                        <div className="flex gap-4">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search assessments..."
                                    className="w-60 pl-12 pr-4 py-2 rounded-lg border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                            <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                                <Plus className="w-4 h-4" />
                                New Assessment
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Assessment Table */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold">Recent Assessments</h3>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Export Data
                        </Button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Assessment Title</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Type</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Class</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Subject</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Date</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Completion</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {[
                                    {
                                        title: "Cell Structure Quiz",
                                        type: "Quiz",
                                        class: "Senior 3",
                                        subject: "Biology",
                                        date: "2024-05-15",
                                        completion: 100
                                    },
                                    {
                                        title: "Thermodynamics Assignment",
                                        type: "Assignment",
                                        class: "Senior 4",
                                        subject: "Physics",
                                        date: "2024-05-14",
                                        completion: 92
                                    },
                                    {
                                        title: "Essay Writing Exercise",
                                        type: "Classwork",
                                        class: "Senior 2",
                                        subject: "English",
                                        date: "2024-05-13",
                                        completion: 100
                                    },
                                    {
                                        title: "Chemical Equations Test",
                                        type: "Test",
                                        class: "Senior 1",
                                        subject: "Chemistry",
                                        date: "2024-05-10",
                                        completion: 100
                                    },
                                    {
                                        title: "Algebra Problem Set",
                                        type: "Homework",
                                        class: "Senior 3",
                                        subject: "Mathematics",
                                        date: "2024-05-08",
                                        completion: 85
                                    }
                                ].map((assessment, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <BookOpen className="w-4 h-4 text-primary" />
                                                </div>
                                                <span className="text-sm font-medium text-gray-900">{assessment.title}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${assessment.type === "Quiz" ? "bg-blue-50 text-blue-600" :
                                                assessment.type === "Test" ? "bg-purple-50 text-purple-600" :
                                                    assessment.type === "Assignment" ? "bg-orange-50 text-orange-600" :
                                                        assessment.type === "Homework" ? "bg-green-50 text-green-600" :
                                                            "bg-gray-50 text-gray-600"
                                                }`}>
                                                {assessment.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{assessment.class}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{assessment.subject}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{assessment.date}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full ${assessment.completion === 100 ? "bg-green-500" :
                                                            assessment.completion >= 80 ? "bg-blue-500" :
                                                                "bg-yellow-500"
                                                            }`}
                                                        style={{ width: `${assessment.completion}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-xs font-medium text-gray-600">{assessment.completion}%</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <Button variant="outline" size="sm" className="flex items-center gap-1">
                                                    <Eye className="w-3 h-3" />
                                                    View
                                                </Button>
                                                <Button variant="outline" size="sm" className="flex items-center gap-1">
                                                    <Edit className="w-3 h-3" />
                                                    Edit
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Performance Analytics */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Class Performance</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                        {["Senior 1", "Senior 2", "Senior 3", "Senior 4"].map((className, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                                <h4 className="font-medium text-gray-900 mb-2">{className}</h4>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-500">Average Performance</span>
                                    <span className="text-lg font-semibold">{75 + Math.floor(Math.random() * 15)}%</span>
                                </div>
                                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-primary to-indigo-600"
                                        style={{ width: `${75 + Math.floor(Math.random() * 15)}%` }}
                                    ></div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-500">Complete</span>
                                        <span className="font-medium">{80 + Math.floor(Math.random() * 20)}%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Total Assessments</span>
                                        <span className="font-medium">{20 + Math.floor(Math.random() * 10)}</span>
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
