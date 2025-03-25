"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import {
    BookOpen,
    GraduationCap,
    Calendar,
    Clock,
    Award,
    ClipboardCheck,
    Trophy,
    Bell,
    BookOpenCheck,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import MainLayout from "@/src/components/layout/MainLayout";

export default function StudentDashboard() {
    const router = useRouter();
    const [studentName, setStudentName] = useState("Student");
    const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(() => {
        // Check authentication and role
        const role = Cookies.get("user_role");
        if (!role || role !== "student") {
            router.push("/login");
            return;
        }
        setUserRole(role);
        // In a real app, fetch student details from API
        // setStudentName(fetchedName);
    }, [router]);

    const quickLinks = [
        { href: "/academic/results", icon: Trophy, label: "My Results" },
        { href: "/academic/assessment", icon: ClipboardCheck, label: "Assessments" },
        { href: "/academic/timetable", icon: Clock, label: "Class Schedule" },
        { href: "/resources/materials", icon: BookOpen, label: "Study Materials" },
    ];

    const recentActivities = [
        {
            type: "Assessment",
            title: "Mathematics Quiz 3",
            date: "2024-03-25",
            status: "Pending",
        },
        {
            type: "Result",
            title: "Physics Mid-Term",
            date: "2024-03-23",
            status: "Published",
        },
        {
            type: "Material",
            title: "Biology Notes Chapter 5",
            date: "2024-03-22",
            status: "New",
        },
    ];

    return (
        <MainLayout>
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-8">
                    {/* Welcome Section */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Welcome back, {studentName}!
                        </h1>
                        <p className="text-gray-600 mt-2">
                            Track your academic progress and stay updated with your courses.
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-primary/10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <BookOpenCheck className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Courses</p>
                                    <p className="text-2xl font-semibold text-gray-900">6</p>
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
                                    <Award className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Average Grade</p>
                                    <p className="text-2xl font-semibold text-gray-900">B+</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-primary/10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Trophy className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Achievements</p>
                                    <p className="text-2xl font-semibold text-gray-900">8</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
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

                        {/* Recent Activities */}
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-primary/10">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activities</h2>
                            <div className="space-y-4">
                                {recentActivities.map((activity, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                                            <p className="text-xs text-gray-500">{activity.type} • {activity.date}</p>
                                        </div>
                                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${activity.status === "Pending"
                                            ? "bg-yellow-100 text-yellow-800"
                                            : activity.status === "Published"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-blue-100 text-blue-800"
                                            }`}>
                                            {activity.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Schedule */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-primary/10">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Schedule</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-4 rounded-lg border border-primary/10 bg-primary/5">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-primary">Mathematics</span>
                                    <span className="text-xs text-gray-500">9:00 AM</span>
                                </div>
                                <p className="text-sm text-gray-700">Algebra - Chapter 4</p>
                                <p className="text-xs text-gray-500 mt-1">Room 101</p>
                            </div>
                            <div className="p-4 rounded-lg border border-primary/10 bg-primary/5">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-primary">Physics</span>
                                    <span className="text-xs text-gray-500">10:30 AM</span>
                                </div>
                                <p className="text-sm text-gray-700">Mechanics Lab</p>
                                <p className="text-xs text-gray-500 mt-1">Lab 3</p>
                            </div>
                            <div className="p-4 rounded-lg border border-primary/10 bg-primary/5">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-primary">English</span>
                                    <span className="text-xs text-gray-500">1:00 PM</span>
                                </div>
                                <p className="text-sm text-gray-700">Literature Review</p>
                                <p className="text-xs text-gray-500 mt-1">Room 205</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
} 