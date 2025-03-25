"use client";

import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import { Search, FileText, BookOpen, Video, Download, Filter, ArrowUpDown } from "lucide-react";

export default function MaterialsPage() {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        Study Materials
                    </h1>
                    <p className="text-xl text-gray-600">
                        Access study materials, notes, and resources for all subjects
                    </p>
                </div>

                {/* Search and Filter Section */}
                <div className="mb-8 grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search materials by subject, type, or topic..."
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                            />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" className="flex-1 flex items-center gap-2">
                            <Filter className="w-4 h-4" />
                            Filter
                        </Button>
                        <Button variant="outline" className="flex-1 flex items-center gap-2">
                            <ArrowUpDown className="w-4 h-4" />
                            Sort
                        </Button>
                    </div>
                </div>

                {/* Material Types */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { title: "Notes & PDFs", count: 120, icon: <FileText className="w-6 h-6" /> },
                        { title: "Study Guides", count: 85, icon: <BookOpen className="w-6 h-6" /> },
                        { title: "Video Lectures", count: 45, icon: <Video className="w-6 h-6" /> },
                        { title: "Downloads", count: 200, icon: <Download className="w-6 h-6" /> }
                    ].map((type) => (
                        <div key={type.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                {type.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">{type.title}</h3>
                            <p className="text-gray-600">{type.count} items</p>
                        </div>
                    ))}
                </div>

                {/* Subject Materials */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Subject Materials</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Mathematics",
                            "Physics",
                            "Chemistry",
                            "Biology",
                            "English",
                            "History"
                        ].map((subject) => (
                            <div key={subject} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                <h4 className="font-semibold text-gray-900 mb-3">{subject}</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">Notes</span>
                                        <span className="text-primary">12 files</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">Study Guides</span>
                                        <span className="text-primary">8 files</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">Practice Tests</span>
                                        <span className="text-primary">5 files</span>
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