"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import {
    Users,
    BookOpen,
    ClipboardCheck,
    Clock,
    Calendar,
    Bell,
    BarChart,
    CheckCircle,
    BookOpenCheck,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import MainLayout from "@/src/components/layout/MainLayout";

export default function TeacherDashboard() {
    const router = useRouter();
    const [teacherName, setTeacherName] = useState("Teacher");
    const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(() => {
        // Check authentication and role
        const role = Cookies.get("user_role");
        if (!role || role !== "teacher") {
            router.push("/login");
            return;
        }
        setUserRole(role);
        // In a real app, fetch teacher details from API
        // setTeacherName(fetchedName);
    }, [router]);

    const quickLinks = [
        { href: "/academic/classes", icon: Users, label: "My Classes" },
        { href: "/academic/assessment", icon: ClipboardCheck, label: "Assessments" },
        { href: "/academic/timetable", icon: Clock, label: "Schedule" },
        { href: "/resources/materials", icon: BookOpen, label: "Teaching Materials" },
    ];

    const upcomingClasses = [
        {
            subject: "Mathematics",
            class: "Grade 10-A",
            time: "9:00 AM",
            room: "Room 101",
            topic: "Algebra - Chapter 4",
        },
        {
            subject: "Mathematics",
            class: "Grade 11-B",
            time: "10:30 AM",
            room: "Room 203",
            topic: "Calculus - Derivatives",
        },
        {
            subject: "Mathematics",
            class: "Grade 9-C",
            time: "1:00 PM",
            room: "Room 105",
            topic: "Geometry - Triangles",
        },
    ];

    const pendingTasks = [
        {
            type: "Assessment",
            title: "Grade Math Quiz - Grade 10-A",
            deadline: "Today",
            priority: "High",
        },
        {
            type: "Report",
            title: "Monthly Progress Report - Grade 11-B",
            deadline: "Tomorrow",
            priority: "Medium",
        },
        {
            type: "Material",
            title: "Prepare Notes - Grade 9-C",
            deadline: "Next Week",
            priority: "Low",
        },
    ];

    return (
        <MainLayout>
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-8">
                    {/* Welcome Section */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Welcome back, {teacherName}!
                        </h1>
                        <p className="text-gray-600 mt-2">
                            Manage your classes and track student progress.
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-primary/10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Total Students</p>
                                    <p className="text-2xl font-semibold text-gray-900">150</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-primary/10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <BookOpenCheck className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Classes</p>
                                    <p className="text-2xl font-semibold text-gray-900">5</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-primary/10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <ClipboardCheck className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Assessments</p>
                                    <p className="text-2xl font-semibold text-gray-900">12</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-primary/10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <BarChart className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Average Performance</p>
                                    <p className="text-2xl font-semibold text-gray-900">85%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links and Pending Tasks */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-primary/10">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {quickLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <link.icon className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-medium text-gray-700">{link.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Pending Tasks */}
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-primary/10">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Pending Tasks</h2>
                            <div className="space-y-4">
                                {pendingTasks.map((task, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{task.title}</p>
                                            <p className="text-xs text-gray-500">{task.type} • Due {task.deadline}</p>
                                        </div>
                                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${task.priority === "High"
                                            ? "bg-red-100 text-red-800"
                                            : task.priority === "Medium"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : "bg-green-100 text-green-800"
                                            }`}>
                                            {task.priority}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Today's Schedule */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-primary/10">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Today's Schedule</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {upcomingClasses.map((classInfo, index) => (
                                <div key={index} className="p-4 rounded-lg border border-primary/10 bg-primary/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-primary">{classInfo.subject}</span>
                                        <span className="text-xs text-gray-500">{classInfo.time}</span>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700">{classInfo.class}</p>
                                    <p className="text-sm text-gray-700">{classInfo.topic}</p>
                                    <p className="text-xs text-gray-500 mt-1">{classInfo.room}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
} 