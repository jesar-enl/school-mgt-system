"use client";

import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import {
    Search,
    Plus,
    Users,
    GraduationCap,
    BookOpen,
    Microscope,
    Globe,
    Music,
    Dumbbell,
    Palette,
    Calculator,
    MoreVertical,
    UserCheck
} from "lucide-react";

export default function DepartmentsPage() {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        Departments
                    </h1>
                    <p className="text-xl text-gray-600">
                        Manage academic departments and faculty
                    </p>
                </div>

                {/* Summary Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Departments</p>
                                <p className="text-2xl font-semibold">8</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Faculty</p>
                                <p className="text-2xl font-semibold">32</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                <Users className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Students</p>
                                <p className="text-2xl font-semibold">450</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search and Actions */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search departments..."
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Button className="flex-1 bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                                <Plus className="w-4 h-4" />
                                Add Department
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Departments Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            name: "Mathematics",
                            icon: <Calculator className="w-6 h-6" />,
                            head: "Dr. John Smith",
                            faculty: 6,
                            students: 85,
                            color: "bg-blue-50 text-blue-500"
                        },
                        {
                            name: "Sciences",
                            icon: <Microscope className="w-6 h-6" />,
                            head: "Prof. Sarah Wilson",
                            faculty: 8,
                            students: 92,
                            color: "bg-green-50 text-green-500"
                        },
                        {
                            name: "Languages",
                            icon: <Globe className="w-6 h-6" />,
                            head: "Mrs. Emily Brown",
                            faculty: 5,
                            students: 78,
                            color: "bg-purple-50 text-purple-500"
                        },
                        {
                            name: "Arts",
                            icon: <Palette className="w-6 h-6" />,
                            head: "Mr. David Lee",
                            faculty: 4,
                            students: 65,
                            color: "bg-pink-50 text-pink-500"
                        },
                        {
                            name: "Music",
                            icon: <Music className="w-6 h-6" />,
                            head: "Ms. Lisa Chen",
                            faculty: 3,
                            students: 45,
                            color: "bg-yellow-50 text-yellow-500"
                        },
                        {
                            name: "Physical Education",
                            icon: <Dumbbell className="w-6 h-6" />,
                            head: "Mr. James Wilson",
                            faculty: 4,
                            students: 85,
                            color: "bg-orange-50 text-orange-500"
                        }
                    ].map((department, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl ${department.color} flex items-center justify-center`}>
                                        {department.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{department.name}</h3>
                                        <p className="text-sm text-gray-600">Department</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon">
                                    <MoreVertical className="w-4 h-4" />
                                </Button>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <UserCheck className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{department.head}</p>
                                        <p className="text-xs text-gray-600">Department Head</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                                    <div>
                                        <p className="text-2xl font-semibold text-gray-900">{department.faculty}</p>
                                        <p className="text-sm text-gray-600">Faculty Members</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-semibold text-gray-900">{department.students}</p>
                                        <p className="text-sm text-gray-600">Students</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
} 