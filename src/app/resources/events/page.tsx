"use client";

import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import { Calendar, Search, Filter, GraduationCap, Users, Trophy, Music, Book, Flag, Clock, CalendarDays } from "lucide-react";

export default function EventsCalendarPage() {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        Events Calendar
                    </h1>
                    <p className="text-xl text-gray-600">
                        Stay updated with school events, activities, and important dates
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="mb-8 grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search events..."
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
                            <Calendar className="w-4 h-4" />
                            View
                        </Button>
                    </div>
                </div>

                {/* Upcoming Events */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6">Upcoming Events</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "End of Term Exams",
                                date: "March 15-25, 2024",
                                type: "Academic",
                                icon: <GraduationCap className="w-6 h-6" />,
                                description: "Final examinations for Term 1"
                            },
                            {
                                title: "Parents' Meeting",
                                date: "March 30, 2024",
                                type: "Meeting",
                                icon: <Users className="w-6 h-6" />,
                                description: "Term 1 academic performance review"
                            },
                            {
                                title: "Sports Day",
                                date: "April 5, 2024",
                                type: "Sports",
                                icon: <Trophy className="w-6 h-6" />,
                                description: "Annual inter-house sports competition"
                            }
                        ].map((event) => (
                            <div key={event.title} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        {event.icon}
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-primary/80 bg-primary/10 px-2 py-1 rounded-full">
                                            {event.type}
                                        </span>
                                        <h4 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-primary transition-colors duration-300">
                                            {event.title}
                                        </h4>
                                        <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                                            <CalendarDays className="w-4 h-4" />
                                            <span>{event.date}</span>
                                        </div>
                                        <p className="text-gray-600 mt-2">{event.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Past Events */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6">Past Events</h3>
                    <div className="space-y-4">
                        {[
                            {
                                title: "Annual Music Concert",
                                date: "February 28, 2024",
                                type: "Cultural",
                                icon: <Music className="w-6 h-6" />,
                                description: "Showcase of student musical talents"
                            },
                            {
                                title: "Book Fair",
                                date: "February 15, 2024",
                                type: "Academic",
                                icon: <Book className="w-6 h-6" />,
                                description: "Annual book exhibition and sale"
                            },
                            {
                                title: "Independence Day Celebration",
                                date: "February 1, 2024",
                                type: "Cultural",
                                icon: <Flag className="w-6 h-6" />,
                                description: "School celebration of Independence Day"
                            }
                        ].map((event) => (
                            <div key={event.title} className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                                        {event.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-semibold text-gray-900">{event.title}</h4>
                                            <span className="text-sm text-gray-500 flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {event.date}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm mt-1">{event.description}</p>
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