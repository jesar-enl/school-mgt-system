"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import {
    Calendar,
    Clock,
    Download,
    Edit,
    Filter,
    Plus,
    Printer,
    Search,
    ChevronDown,
    BookOpen,
    GraduationCap
} from "lucide-react";

export default function TimetablePage() {
    const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(() => {
        const role = Cookies.get("user_role");
        setUserRole(role || null);
    }, []);

    const isAdmin = userRole === "admin";

    // Static timetable data
    const timetableData = {
        "8:00 AM - 9:00 AM": ["Mathematics", "Physics", "Chemistry", "Biology", "English"],
        "9:00 AM - 10:00 AM": ["Physics", "Chemistry", "Biology", "English", "Mathematics"],
        "10:30 AM - 11:30 AM": ["Chemistry", "Biology", "English", "Mathematics", "Physics"],
        "11:30 AM - 12:30 PM": ["Biology", "English", "Mathematics", "Physics", "Chemistry"],
        "2:00 PM - 3:00 PM": ["English", "Mathematics", "Physics", "Chemistry", "Biology"],
        "3:00 PM - 4:00 PM": ["Mathematics", "Physics", "Chemistry", "Biology", "English"]
    };

    const teacherAssignments = {
        "Mathematics": "Mr. John Smith",
        "Physics": "Mrs. Sarah Wilson",
        "Chemistry": "Dr. Michael Brown",
        "Biology": "Ms. Emily Davis",
        "English": "Mr. Robert Johnson"
    };

    // Color assignments for subjects
    const subjectColors = {
        "Mathematics": "bg-blue-50 text-blue-700 border-blue-100",
        "Physics": "bg-green-50 text-green-700 border-green-100",
        "Chemistry": "bg-purple-50 text-purple-700 border-purple-100",
        "Biology": "bg-yellow-50 text-yellow-700 border-yellow-100",
        "English": "bg-pink-50 text-pink-700 border-pink-100"
    };

    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        Timetable Management
                    </h1>
                    <p className="text-xl text-gray-600">
                        Organize and manage class schedules, teacher assignments, and room allocations
                    </p>
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
                            <Button variant="outline" className="flex items-center gap-2">
                                <Printer className="w-4 h-4" />
                                Print
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Download className="w-4 h-4" />
                                Export
                            </Button>
                            {isAdmin && (
                                <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                                    <Plus className="w-4 h-4" />
                                    Add Slot
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Timetable */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold">Senior 3 Timetable</h3>
                        {isAdmin && (
                            <Button variant="outline" className="flex items-center gap-2">
                                <Edit className="w-4 h-4" />
                                Edit Timetable
                            </Button>
                        )}
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Time</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Monday</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Tuesday</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Wednesday</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Thursday</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Friday</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {Object.entries(timetableData).map(([timeSlot, subjects], index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-gray-400" />
                                                <span className="text-sm font-medium text-gray-500">{timeSlot}</span>
                                            </div>
                                        </td>
                                        {subjects.map((subject, subIndex) => (
                                            <td key={subIndex} className="px-6 py-4">
                                                <div className={`px-3 py-2 rounded-lg border ${subjectColors[subject]}`}>
                                                    <div className="font-medium">{subject}</div>
                                                    <div className="text-xs mt-1 flex items-center gap-1">
                                                        <BookOpen className="w-3 h-3" />
                                                        <span>{teacherAssignments[subject]}</span>
                                                    </div>
                                                    <div className="text-xs mt-1">Room 10{index + 1}</div>
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Class Summaries */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    {["Senior 1", "Senior 2", "Senior 4"].map((className, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-gray-900">{className} Timetable</h3>
                                <Button variant="outline" size="sm">View</Button>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Classes per week:</span>
                                    <span className="font-medium text-gray-900">30</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Subjects:</span>
                                    <span className="font-medium text-gray-900">8</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Last updated:</span>
                                    <span className="font-medium text-gray-900">May 10, 2024</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
} 