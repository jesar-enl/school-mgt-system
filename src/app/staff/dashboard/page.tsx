"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import {
    Users,
    Building2,
    ClipboardCheck,
    Clock,
    Calendar,
    Bell,
    BarChart,
    CheckCircle,
    Wallet,
    Library,
    BookOpenCheck,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import MainLayout from "@/src/components/layout/MainLayout";

export default function StaffDashboard() {
    const router = useRouter();
    const [staffName, setStaffName] = useState("Staff Member");
    const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(() => {
        // Check authentication and role
        const role = Cookies.get("user_role");
        if (!role || role !== "staff") {
            router.push("/login");
            return;
        }
        setUserRole(role);
        // In a real app, fetch staff details from API
        // setStaffName(fetchedName);
    }, [router]);

    const quickLinks = [
        { href: "/admin/attendance", icon: Clock, label: "Attendance" },
        { href: "/finance/fees", icon: Wallet, label: "Fee Management" },
        { href: "/resources/facilities", icon: Building2, label: "Facilities" },
        { href: "/resources/library", icon: Library, label: "Library" },
    ];

    const pendingTasks = [
        {
            type: "Attendance",
            title: "Update Staff Attendance Records",
            deadline: "Today",
            priority: "High",
        },
        {
            type: "Finance",
            title: "Process Student Fee Payments",
            deadline: "Tomorrow",
            priority: "Medium",
        },
        {
            type: "Facility",
            title: "Schedule Lab Maintenance",
            deadline: "Next Week",
            priority: "Low",
        },
    ];

    const recentActivities = [
        {
            type: "Fee Collection",
            amount: "₹25,000",
            student: "John Doe - Grade 10",
            time: "10:30 AM",
            status: "Success",
        },
        {
            type: "Library",
            action: "Book Return",
            student: "Jane Smith - Grade 11",
            time: "11:45 AM",
            status: "Completed",
        },
        {
            type: "Facility",
            action: "Lab Equipment Check",
            location: "Physics Lab",
            time: "9:15 AM",
            status: "Completed",
        },
    ];

    return (
        <MainLayout>
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-8">
                    {/* Welcome Section */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Welcome back, {staffName}!
                        </h1>
                        <p className="text-gray-600 mt-2">
                            Manage school operations and administrative tasks.
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
                                    <p className="text-sm text-gray-600">Total Staff</p>
                                    <p className="text-2xl font-semibold text-gray-900">45</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-primary/10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Wallet className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Fee Collection</p>
                                    <p className="text-2xl font-semibold text-gray-900">₹2.5L</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-primary/10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Library className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Library Books</p>
                                    <p className="text-2xl font-semibold text-gray-900">5,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-primary/10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Building2 className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Facilities</p>
                                    <p className="text-2xl font-semibold text-gray-900">15</p>
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

                    {/* Recent Activities */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-primary/10">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {recentActivities.map((activity, index) => (
                                <div key={index} className="p-4 rounded-lg border border-primary/10 bg-primary/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-primary">{activity.type}</span>
                                        <span className="text-xs text-gray-500">{activity.time}</span>
                                    </div>
                                    {activity.amount && (
                                        <p className="text-sm font-medium text-gray-900">{activity.amount}</p>
                                    )}
                                    {activity.action && (
                                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                                    )}
                                    {activity.student && (
                                        <p className="text-sm text-gray-700">{activity.student}</p>
                                    )}
                                    {activity.location && (
                                        <p className="text-sm text-gray-700">{activity.location}</p>
                                    )}
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${activity.status === "Success"
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
            </div>
        </MainLayout>
    );
} 