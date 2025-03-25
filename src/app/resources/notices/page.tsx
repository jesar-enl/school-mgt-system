"use client";

import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import { Search, Filter, Bell, Calendar, GraduationCap, Users, Trophy, Clock, Pin, AlertCircle, FileText, CalendarDays, Book } from "lucide-react";

export default function NoticeBoardPage() {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        Notice Board
                    </h1>
                    <p className="text-xl text-gray-600">
                        Stay informed with the latest announcements and updates
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="mb-8 grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search notices..."
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                            />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" className="flex-1 flex items-center gap-2">
                            <Filter className="w-4 h-4" />
                            Filter
                        </Button>
                        <Button className="flex-1 flex items-center gap-2 bg-primary hover:bg-primary/90">
                            <Bell className="w-4 h-4" />
                            Subscribe
                        </Button>
                    </div>
                </div>

                {/* Important Notices */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                        <AlertCircle className="w-6 h-6 text-red-500" />
                        Important Notices
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Term 2 Fee Payment Deadline",
                                date: "March 10, 2024",
                                type: "Urgent",
                                description: "Last date for Term 2 fee payment without late charges"
                            },
                            {
                                title: "COVID-19 Safety Guidelines Update",
                                date: "March 8, 2024",
                                type: "Important",
                                description: "Updated health and safety protocols for all students and staff"
                            }
                        ].map((notice) => (
                            <div key={notice.title} className="bg-red-50 rounded-xl p-6 border border-red-100">
                                <div className="flex items-start gap-4">
                                    <Pin className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                                    <div>
                                        <span className="text-sm font-medium text-red-600 bg-red-100 px-2 py-1 rounded-full">
                                            {notice.type}
                                        </span>
                                        <h4 className="text-lg font-semibold text-gray-900 mt-2">
                                            {notice.title}
                                        </h4>
                                        <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{notice.date}</span>
                                        </div>
                                        <p className="text-gray-600 mt-2">{notice.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* General Notices */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">General Notices</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Parent-Teacher Meeting Schedule",
                                date: "March 15, 2024",
                                type: "Academic",
                                icon: <Users className="w-6 h-6" />,
                                description: "Schedule for Term 1 parent-teacher meetings"
                            },
                            {
                                title: "Annual Sports Day Registration",
                                date: "March 12, 2024",
                                type: "Sports",
                                icon: <Trophy className="w-6 h-6" />,
                                description: "Registration open for annual sports day events"
                            },
                            {
                                title: "Mock Exam Timetable",
                                date: "March 11, 2024",
                                type: "Examination",
                                icon: <FileText className="w-6 h-6" />,
                                description: "Schedule for upcoming mock examinations"
                            },
                            {
                                title: "Library Book Return Notice",
                                date: "March 9, 2024",
                                type: "Library",
                                icon: <Book className="w-6 h-6" />,
                                description: "Return all borrowed books before term end"
                            },
                            {
                                title: "School Club Activities Update",
                                date: "March 7, 2024",
                                type: "Extra-curricular",
                                icon: <Users className="w-6 h-6" />,
                                description: "New schedule for after-school club activities"
                            },
                            {
                                title: "Scholarship Applications Open",
                                date: "March 5, 2024",
                                type: "Administrative",
                                icon: <GraduationCap className="w-6 h-6" />,
                                description: "Applications open for merit-based scholarships"
                            }
                        ].map((notice) => (
                            <div key={notice.title} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        {notice.icon}
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-primary/80 bg-primary/10 px-2 py-1 rounded-full">
                                            {notice.type}
                                        </span>
                                        <h4 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-primary transition-colors duration-300">
                                            {notice.title}
                                        </h4>
                                        <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                                            <CalendarDays className="w-4 h-4" />
                                            <span>{notice.date}</span>
                                        </div>
                                        <p className="text-gray-600 mt-2">{notice.description}</p>
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