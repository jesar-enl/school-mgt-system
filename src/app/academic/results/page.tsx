"use client";

import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import {
    Award,
    BookOpen,
    ChevronDown,
    Download,
    FileText,
    Filter,
    GraduationCap,
    LayoutGrid,
    List,
    Mail,
    Plus,
    Printer,
    Search,
    Share2,
    Trophy
} from "lucide-react";

export default function ResultsPage() {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        Academic Results
                    </h1>
                    <p className="text-xl text-gray-600">
                        Manage and view student academic performance, generate report cards, and track progress
                    </p>
                </div>

                {/* Summary Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Trophy className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Results</p>
                                <p className="text-2xl font-semibold">486</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                                <Award className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Pass Rate</p>
                                <p className="text-2xl font-semibold">92%</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Top Performers</p>
                                <p className="text-2xl font-semibold">75</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                                <Mail className="w-6 h-6 text-purple-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Reports Sent</p>
                                <p className="text-2xl font-semibold">324</p>
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
                                Term
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                            <div className="flex border rounded-lg overflow-hidden">
                                <Button variant="ghost" className="flex items-center gap-1 rounded-none border-r">
                                    <LayoutGrid className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" className="flex items-center gap-1 rounded-none">
                                    <List className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search results..."
                                    className="w-60 pl-12 pr-4 py-2 rounded-lg border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                            <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                                <Plus className="w-4 h-4" />
                                Add Results
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Results Table */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold">Senior 3 Term 2 Results</h3>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex items-center gap-2">
                                <Printer className="w-4 h-4" />
                                Print Reports
                            </Button>
                            <Button variant="outline" size="sm" className="flex items-center gap-2">
                                <Share2 className="w-4 h-4" />
                                Share Results
                            </Button>
                            <Button variant="outline" size="sm" className="flex items-center gap-2">
                                <Download className="w-4 h-4" />
                                Export
                            </Button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Student</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Class</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Mathematics</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">English</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Science</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Average</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Grade</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {[
                                    {
                                        name: "John Smith",
                                        class: "Senior 3A",
                                        mathematics: 85,
                                        english: 78,
                                        science: 92,
                                        average: 85,
                                        grade: "A"
                                    },
                                    {
                                        name: "Emma Johnson",
                                        class: "Senior 3A",
                                        mathematics: 92,
                                        english: 88,
                                        science: 95,
                                        average: 92,
                                        grade: "A+"
                                    },
                                    {
                                        name: "Michael Brown",
                                        class: "Senior 3B",
                                        mathematics: 75,
                                        english: 82,
                                        science: 78,
                                        average: 78,
                                        grade: "B+"
                                    },
                                    {
                                        name: "Sarah Davis",
                                        class: "Senior 3A",
                                        mathematics: 88,
                                        english: 90,
                                        science: 87,
                                        average: 88,
                                        grade: "A"
                                    },
                                    {
                                        name: "James Wilson",
                                        class: "Senior 3B",
                                        mathematics: 79,
                                        english: 75,
                                        science: 80,
                                        average: 78,
                                        grade: "B+"
                                    }
                                ].map((student, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <GraduationCap className="w-4 h-4 text-primary" />
                                                </div>
                                                <span className="text-sm font-medium text-gray-900">{student.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{student.class}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{student.mathematics}%</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{student.english}%</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{student.science}%</td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{student.average}%</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${student.grade === "A+" ? "bg-green-50 text-green-600" :
                                                    student.grade === "A" ? "bg-blue-50 text-blue-600" :
                                                        "bg-yellow-50 text-yellow-600"
                                                }`}>
                                                {student.grade}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <Button variant="outline" size="sm" className="flex items-center gap-1">
                                                    <FileText className="w-3 h-3" />
                                                    Report
                                                </Button>
                                                <Button variant="outline" size="sm" className="flex items-center gap-1">
                                                    <Mail className="w-3 h-3" />
                                                    Send
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
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Class Performance */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-semibold mb-4">Class Performance</h3>
                        <div className="space-y-4">
                            {[
                                { class: "Senior 3A", average: 85, students: 42 },
                                { class: "Senior 3B", average: 78, students: 38 },
                                { class: "Senior 3C", average: 82, students: 40 }
                            ].map((classData, index) => (
                                <div key={index} className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium">{classData.class}</span>
                                        <span className="text-sm text-gray-600">{classData.students} students</span>
                                    </div>
                                    <div className="relative pt-1">
                                        <div className="flex mb-2 items-center justify-between">
                                            <div>
                                                <span className="text-xs font-semibold inline-block text-primary">
                                                    Average Score
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-xs font-semibold inline-block text-primary">
                                                    {classData.average}%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-primary/20">
                                            <div
                                                style={{ width: `${classData.average}%` }}
                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Subject Performance */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-semibold mb-4">Subject Performance</h3>
                        <div className="space-y-4">
                            {[
                                { subject: "Mathematics", average: 82, students: 120 },
                                { subject: "English", average: 78, students: 120 },
                                { subject: "Science", average: 85, students: 120 }
                            ].map((subjectData, index) => (
                                <div key={index} className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium">{subjectData.subject}</span>
                                        <span className="text-sm text-gray-600">{subjectData.students} students</span>
                                    </div>
                                    <div className="relative pt-1">
                                        <div className="flex mb-2 items-center justify-between">
                                            <div>
                                                <span className="text-xs font-semibold inline-block text-primary">
                                                    Average Score
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-xs font-semibold inline-block text-primary">
                                                    {subjectData.average}%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-primary/20">
                                            <div
                                                style={{ width: `${subjectData.average}%` }}
                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
} 