"use client";

import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import { Search, Book, BookOpen, BookCopy, Bookmark, Filter, ArrowUpDown } from "lucide-react";

export default function LibraryPage() {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        School Library
                    </h1>
                    <p className="text-xl text-gray-600">
                        Browse and search through our extensive collection of books
                    </p>
                </div>

                {/* Search and Filter Section */}
                <div className="mb-8 grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search books by title, author, or category..."
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

                {/* Categories Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { title: "Academic Books", count: 450, icon: <BookOpen className="w-6 h-6" /> },
                        { title: "Fiction", count: 230, icon: <Book className="w-6 h-6" /> },
                        { title: "Reference", count: 180, icon: <BookCopy className="w-6 h-6" /> },
                        { title: "Magazines", count: 120, icon: <Bookmark className="w-6 h-6" /> }
                    ].map((category) => (
                        <div key={category.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                {category.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                            <p className="text-gray-600">{category.count} books</p>
                        </div>
                    ))}
                </div>

                {/* Recent Books */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Recently Added Books</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((book) => (
                            <div key={book} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="w-20 h-28 bg-gray-100 rounded-lg"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Book Title {book}</h4>
                                        <p className="text-sm text-gray-600 mb-2">Author Name</p>
                                        <div className="flex items-center gap-2">
                                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Available</span>
                                        </div>
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