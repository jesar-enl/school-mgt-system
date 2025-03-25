"use client";

import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import {
    Calendar,
    Clock,
    Download,
    Edit,
    Eye,
    FileText,
    Filter,
    GraduationCap,
    Plus,
    Search,
    ChevronDown,
    CheckCircle,
    AlertCircle,
    ClipboardList
} from "lucide-react";

export default function ExaminationPage() {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        Examination Management
                    </h1>
                    <p className="text-xl text-gray-600">
                        Manage exams, create schedules, and monitor student performance
                    </p>
                </div>

                {/* Summary Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Upcoming Exams</p>
                                <p className="text-2xl font-semibold">12</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                                <FileText className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Ongoing Exams</p>
                                <p className="text-2xl font-semibold">3</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Completed</p>
                                <p className="text-2xl font-semibold">24</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center">
                                <AlertCircle className="w-6 h-6 text-yellow-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Pending Results</p>
                                <p className="text-2xl font-semibold">8</p>
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
                                <Filter className="w-4 h-4" />
                                Filter
                            </Button>
                        </div>
                        <div className="flex gap-4">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search exams..."
                                    className="w-60 pl-12 pr-4 py-2 rounded-lg border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                            <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                                <Plus className="w-4 h-4" />
                                New Exam
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Examination Table */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold">Upcoming Examinations</h3>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Export Schedule
                        </Button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Exam Name</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Class</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Subject</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Date</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Time</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {[
                                    {
                                        name: "End of Term Mathematics",
                                        class: "Senior 3",
                                        subject: "Mathematics",
                                        date: "2024-05-20",
                                        time: "9:00 AM - 11:00 AM",
                                        status: "Scheduled"
                                    },
                                    {
                                        name: "Physics Mid-term",
                                        class: "Senior 2",
                                        subject: "Physics",
                                        date: "2024-05-21",
                                        time: "2:00 PM - 4:00 PM",
                                        status: "Scheduled"
                                    },
                                    {
                                        name: "Chemistry Practical",
                                        class: "Senior 4",
                                        subject: "Chemistry",
                                        date: "2024-05-18",
                                        time: "10:00 AM - 12:30 PM",
                                        status: "Ongoing"
                                    },
                                    {
                                        name: "English Literature",
                                        class: "Senior 1",
                                        subject: "English",
                                        date: "2024-05-22",
                                        time: "8:00 AM - 10:00 AM",
                                        status: "Scheduled"
                                    },
                                    {
                                        name: "Biology Theory",
                                        class: "Senior 3",
                                        subject: "Biology",
                                        date: "2024-05-19",
                                        time: "1:00 PM - 3:00 PM",
                                        status: "Ongoing"
                                    }
                                ].map((exam, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <FileText className="w-4 h-4 text-primary" />
                                                </div>
                                                <span className="text-sm font-medium text-gray-900">{exam.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{exam.class}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{exam.subject}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{exam.date}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{exam.time}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${exam.status === "Scheduled" ? "bg-blue-50 text-blue-600" :
                                                exam.status === "Ongoing" ? "bg-green-50 text-green-600" :
                                                    "bg-yellow-50 text-yellow-600"
                                                }`}>
                                                {exam.status}
                                            </span>
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

                {/* Recent Result Cards */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Recent Exam Results</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {["Mathematics Final Exam", "English Mid-term", "Science Practical"].map((examName, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <ClipboardList className="w-5 h-5 text-primary" />
                                        </div>
                                        <h4 className="font-semibold text-gray-900">{examName}</h4>
                                    </div>
                                    <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-600">Published</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Class:</span>
                                        <span className="font-medium text-gray-900">Senior {index + 1}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Average Score:</span>
                                        <span className="font-medium text-gray-900">{70 + Math.floor(Math.random() * 15)}%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Highest Score:</span>
                                        <span className="font-medium text-gray-900">{90 + Math.floor(Math.random() * 10)}%</span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <Button className="w-full bg-gradient-to-r from-primary to-indigo-600 text-white">
                                        View Results
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
} 