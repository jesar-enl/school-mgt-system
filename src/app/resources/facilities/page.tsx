"use client";

import MainLayout from "@/src/components/layout/MainLayout";
import { Building2, Microscope, Dumbbell, Library, Music2, Computer, Utensils, Stethoscope, Search, MapPin } from "lucide-react";

export default function FacilitiesPage() {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        School Facilities
                    </h1>
                    <p className="text-xl text-gray-600">
                        Explore our modern facilities and infrastructure
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-8">
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search facilities..."
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                        />
                    </div>
                </div>

                {/* Facilities Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Science Laboratories",
                            description: "State-of-the-art labs for Physics, Chemistry, and Biology experiments",
                            icon: <Microscope className="w-6 h-6" />,
                            details: ["Fully equipped workstations", "Modern lab equipment", "Safety gear provided"]
                        },
                        {
                            title: "Sports Complex",
                            description: "Comprehensive sports facilities for various athletic activities",
                            icon: <Dumbbell className="w-6 h-6" />,
                            details: ["Football field", "Basketball court", "Athletics track"]
                        },
                        {
                            title: "Library",
                            description: "Well-stocked library with digital resources and study areas",
                            icon: <Library className="w-6 h-6" />,
                            details: ["Extensive book collection", "Digital resources", "Quiet study zones"]
                        },
                        {
                            title: "Computer Labs",
                            description: "Modern computer labs with latest software and internet access",
                            icon: <Computer className="w-6 h-6" />,
                            details: ["High-speed internet", "Latest hardware", "Educational software"]
                        },
                        {
                            title: "Music Room",
                            description: "Dedicated space for music education and practice",
                            icon: <Music2 className="w-6 h-6" />,
                            details: ["Musical instruments", "Sound-proof rooms", "Recording equipment"]
                        },
                        {
                            title: "Cafeteria",
                            description: "Spacious dining area serving nutritious meals",
                            icon: <Utensils className="w-6 h-6" />,
                            details: ["Healthy menu options", "Clean environment", "Seating capacity: 200"]
                        },
                        {
                            title: "Medical Center",
                            description: "On-campus medical facility for student healthcare",
                            icon: <Stethoscope className="w-6 h-6" />,
                            details: ["Qualified nurse", "First aid services", "Emergency response"]
                        },
                        {
                            title: "Classrooms",
                            description: "Modern classrooms equipped with smart learning technology",
                            icon: <Building2 className="w-6 h-6" />,
                            details: ["Smart boards", "Air conditioning", "Ergonomic furniture"]
                        }
                    ].map((facility) => (
                        <div key={facility.title} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    {facility.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                                        {facility.title}
                                    </h3>
                                    <p className="text-gray-600 mt-1">{facility.description}</p>
                                </div>
                            </div>
                            <div className="pl-16">
                                <ul className="space-y-2">
                                    {facility.details.map((detail, index) => (
                                        <li key={index} className="flex items-center gap-2 text-gray-600">
                                            <MapPin className="w-4 h-4 text-primary/60" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
} 