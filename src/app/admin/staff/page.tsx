"use client";

import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import {
    Search,
    Filter,
    Plus,
    Users,
    GraduationCap,
    ClipboardList,
    UserCheck,
    Mail,
    Phone,
    MapPin,
    Calendar,
    MoreVertical
} from "lucide-react";

export default function StaffManagementPage() {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        Staff Management
                    </h1>
                    <p className="text-xl text-gray-600">
                        Manage school staff, roles, and responsibilities
                    </p>
                </div>

                {/* Summary Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Staff</p>
                                <p className="text-2xl font-semibold">45</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Teaching Staff</p>
                                <p className="text-2xl font-semibold">32</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                <ClipboardList className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Departments</p>
                                <p className="text-2xl font-semibold">8</p>
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
                                    placeholder="Search staff members..."
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Button className="flex-1 bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                                <Plus className="w-4 h-4" />
                                Add Staff
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Filter className="w-4 h-4" />
                                Filter
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Staff Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            name: "John Doe",
                            position: "Senior Mathematics Teacher",
                            department: "Mathematics",
                            email: "john.doe@school.com",
                            phone: "+256 700 123 456",
                            address: "Kampala, Uganda",
                            joinDate: "2022-01-15",
                            status: "Active"
                        },
                        {
                            name: "Jane Smith",
                            position: "Head of Science Department",
                            department: "Science",
                            email: "jane.smith@school.com",
                            phone: "+256 700 789 012",
                            address: "Entebbe, Uganda",
                            joinDate: "2021-08-20",
                            status: "Active"
                        },
                        {
                            name: "Robert Wilson",
                            position: "Physical Education Teacher",
                            department: "Sports",
                            email: "robert.wilson@school.com",
                            phone: "+256 700 345 678",
                            address: "Jinja, Uganda",
                            joinDate: "2023-03-10",
                            status: "Active"
                        },
                        {
                            name: "Mary Johnson",
                            position: "English Teacher",
                            department: "Languages",
                            email: "mary.johnson@school.com",
                            phone: "+256 700 901 234",
                            address: "Kampala, Uganda",
                            joinDate: "2022-09-01",
                            status: "On Leave"
                        }
                    ].map((staff, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <UserCheck className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{staff.name}</h3>
                                        <p className="text-sm text-gray-600">{staff.position}</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon">
                                    <MoreVertical className="w-4 h-4" />
                                </Button>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Mail className="w-4 h-4" />
                                    <span>{staff.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Phone className="w-4 h-4" />
                                    <span>{staff.phone}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <MapPin className="w-4 h-4" />
                                    <span>{staff.address}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Calendar className="w-4 h-4" />
                                    <span>Joined {staff.joinDate}</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">{staff.department}</span>
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${staff.status === "Active" ? "bg-green-50 text-green-600" : "bg-yellow-50 text-yellow-600"
                                        }`}>
                                        {staff.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
} 