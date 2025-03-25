"use client";

import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import { BookOpen, Plus, Search, Users, Clock } from "lucide-react";

export default function SubjectManagement() {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        Subject Management
                    </h1>
                    <p className="text-xl text-gray-600">
                        Manage school subjects, assign teachers, and organize course materials
                    </p>
                </div>

                {/* Action Bar */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search subjects..."
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <Button className="flex-1 bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                                <Plus className="w-4 h-4" />
                                Add New Subject
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Subject Card Template */}
                    {["Mathematics", "Physics", "Chemistry"].map((subject, index) => (
                        <div
                            key={subject}
                            className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="p-6 relative">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                                        <BookOpen className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{subject}</h3>
                                        <p className="text-sm text-gray-500">Senior 1-4</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Users className="w-4 h-4" />
                                        <span>3 Teachers Assigned</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Clock className="w-4 h-4" />
                                        <span>4 Hours per Week</span>
                                    </div>
                                </div>
                                <div className="mt-6 flex gap-2">
                                    <Button
                                        variant="outline"
                                        className="flex-1 border-primary/20 hover:border-primary/40"
                                    >
                                        View Details
                                    </Button>
                                    <Button
                                        className="flex-1 bg-gradient-to-r from-primary to-indigo-600 text-white"
                                    >
                                        Manage
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
} 