"use client";

import { useState } from "react";
import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import {
    Users,
    GraduationCap,
    Building2,
    Calendar,
    ClipboardList,
    Settings,
    BarChart3,
    Bell,
    FileText,
    UserPlus,
    BookOpen,
    DollarSign,
    Shield,
    ArrowUpRight,
    ArrowDownRight,
    Clock,
    CheckCircle2,
    AlertCircle
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("overview");

    // Mock data for demonstration
    const stats = {
        totalStudents: 1250,
        totalTeachers: 85,
        totalStaff: 45,
        totalDepartments: 8,
        attendanceRate: 95,
        pendingApprovals: 12,
        upcomingEvents: 5,
        activeClasses: 32
    };

    const recentActivities = [
        {
            type: "student",
            action: "New registration",
            name: "John Doe",
            time: "2 minutes ago",
            status: "pending"
        },
        {
            type: "teacher",
            action: "Leave request",
            name: "Jane Smith",
            time: "15 minutes ago",
            status: "pending"
        },
        {
            type: "staff",
            action: "Document upload",
            name: "HR Department",
            time: "1 hour ago",
            status: "completed"
        },
        {
            type: "system",
            action: "System update",
            name: "Maintenance",
            time: "2 hours ago",
            status: "completed"
        }
    ];

    const quickActions = [
        {
            title: "Add New Student",
            icon: UserPlus,
            href: "/admin/students",
            color: "bg-blue-500"
        },
        {
            title: "Add New Teacher",
            icon: GraduationCap,
            href: "/admin/teachers",
            color: "bg-green-500"
        },
        {
            title: "Manage Attendance",
            icon: Calendar,
            href: "/admin/attendance",
            color: "bg-purple-500"
        },
        {
            title: "Department Settings",
            icon: Building2,
            href: "/admin/departments",
            color: "bg-orange-500"
        }
    ];

    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
                            Admin Dashboard
                        </h1>
                        <p className="text-xl text-gray-600 mt-2">
                            Welcome back, Administrator
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" className="relative">
                            <Bell className="w-5 h-5 mr-2" />
                            Notifications
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                3
                            </span>
                        </Button>
                        <Button variant="outline">
                            <Settings className="w-5 h-5 mr-2" />
                            Settings
                        </Button>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <Users className="w-6 h-6 text-blue-500" />
                            </div>
                            <div className="text-green-500 flex items-center">
                                <ArrowUpRight className="w-4 h-4 mr-1" />
                                <span className="text-sm">+5%</span>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{stats.totalStudents}</h3>
                        <p className="text-gray-600">Total Students</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-green-100 rounded-lg">
                                <GraduationCap className="w-6 h-6 text-green-500" />
                            </div>
                            <div className="text-green-500 flex items-center">
                                <ArrowUpRight className="w-4 h-4 mr-1" />
                                <span className="text-sm">+2%</span>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{stats.totalTeachers}</h3>
                        <p className="text-gray-600">Total Teachers</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <Building2 className="w-6 h-6 text-purple-500" />
                            </div>
                            <div className="text-red-500 flex items-center">
                                <ArrowDownRight className="w-4 h-4 mr-1" />
                                <span className="text-sm">-1%</span>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{stats.totalStaff}</h3>
                        <p className="text-gray-600">Total Staff</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-orange-100 rounded-lg">
                                <Calendar className="w-6 h-6 text-orange-500" />
                            </div>
                            <div className="text-green-500 flex items-center">
                                <ArrowUpRight className="w-4 h-4 mr-1" />
                                <span className="text-sm">+3%</span>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{stats.attendanceRate}%</h3>
                        <p className="text-gray-600">Attendance Rate</p>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Quick Actions */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {quickActions.map((action, index) => (
                                    <Link
                                        key={index}
                                        href={action.href}
                                        className="group relative bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        <div className={`${action.color} p-3 rounded-lg w-fit mb-3`}>
                                            <action.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="font-medium text-gray-900">{action.title}</h3>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Recent Activities */}
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
                            <div className="space-y-4">
                                {recentActivities.map((activity, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2 rounded-lg ${activity.type === "student" ? "bg-blue-100" :
                                                    activity.type === "teacher" ? "bg-green-100" :
                                                        activity.type === "staff" ? "bg-purple-100" :
                                                            "bg-gray-100"
                                                }`}>
                                                {activity.type === "student" ? <Users className="w-5 h-5 text-blue-500" /> :
                                                    activity.type === "teacher" ? <GraduationCap className="w-5 h-5 text-green-500" /> :
                                                        activity.type === "staff" ? <Building2 className="w-5 h-5 text-purple-500" /> :
                                                            <Settings className="w-5 h-5 text-gray-500" />}
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{activity.action}</p>
                                                <p className="text-sm text-gray-600">{activity.name}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm text-gray-500">{activity.time}</span>
                                            {activity.status === "pending" ? (
                                                <span className="text-yellow-500 text-sm">Pending</span>
                                            ) : (
                                                <span className="text-green-500 text-sm">Completed</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="space-y-8">
                        {/* Pending Approvals */}
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h2 className="text-xl font-semibold mb-4">Pending Approvals</h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-yellow-100 rounded-lg">
                                            <FileText className="w-5 h-5 text-yellow-500" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Leave Request</p>
                                            <p className="text-sm text-gray-600">Jane Smith</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm">Review</Button>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-yellow-100 rounded-lg">
                                            <UserPlus className="w-5 h-5 text-yellow-500" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">New Student</p>
                                            <p className="text-sm text-gray-600">John Doe</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm">Review</Button>
                                </div>
                            </div>
                        </div>

                        {/* Upcoming Events */}
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                        <Calendar className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Parent-Teacher Meeting</p>
                                        <p className="text-sm text-gray-600">Tomorrow, 2:00 PM</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="p-2 bg-green-100 rounded-lg">
                                        <BookOpen className="w-5 h-5 text-green-500" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Exam Schedule Release</p>
                                        <p className="text-sm text-gray-600">Friday, 10:00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* System Status */}
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h2 className="text-xl font-semibold mb-4">System Status</h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-green-100 rounded-lg">
                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">All Systems Operational</p>
                                            <p className="text-sm text-gray-600">Last checked: 5 minutes ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-yellow-100 rounded-lg">
                                            <Clock className="w-5 h-5 text-yellow-500" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Scheduled Maintenance</p>
                                            <p className="text-sm text-gray-600">Tonight, 2:00 AM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
} 