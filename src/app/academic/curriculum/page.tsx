"use client";

import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import {
    Book,
    BookOpen,
    Calendar,
    ChevronDown,
    Clock,
    Download,
    Edit,
    Eye,
    FileText,
    Filter,
    GraduationCap,
    LayoutGrid,
    List,
    Plus,
    Search,
    Settings
} from "lucide-react";

export default function CurriculumPage() {
    // Helper function to get the appropriate background color class
    const getColorClass = (color: string) => {
        switch (color) {
            case "primary": return "bg-primary/10";
            case "blue": return "bg-blue-50";
            case "purple": return "bg-purple-50";
            case "green": return "bg-green-50";
            case "yellow": return "bg-yellow-50";
            case "orange": return "bg-orange-50";
            default: return "bg-gray-100";
        }
    };

    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        Curriculum Management
                    </h1>
                    <p className="text-xl text-gray-600">
                        Organize and manage your school curriculum, educational content, and learning objectives
                    </p>
                </div>

                {/* Summary Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Subjects</p>
                                <p className="text-2xl font-semibold">14</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Classes</p>
                                <p className="text-2xl font-semibold">8</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                <Book className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Units</p>
                                <p className="text-2xl font-semibold">156</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-purple-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Academic Year</p>
                                <p className="text-2xl font-semibold">2023/24</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Bar */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        <div className="flex gap-4">
                            <Button variant="outline" className="flex items-center gap-2">
                                <GraduationCap className="w-4 h-4" />
                                Class
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Subject
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                            <div className="flex border rounded-lg overflow-hidden">
                                <Button variant="ghost" className="flex items-center gap-1 rounded-none border-r">
                                    <LayoutGrid className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" className="flex items-center gap-1 rounded-none">
                                    <List className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search curriculum..."
                                    className="w-60 pl-12 pr-4 py-2 rounded-lg border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                            <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                                <Plus className="w-4 h-4" />
                                Add Curriculum
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Subject Cards */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold">Senior 3 Curriculum</h3>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Export Curriculum
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Mathematics",
                                icon: <Book className="w-5 h-5 text-primary" />,
                                units: 18,
                                hours: 72,
                                color: "primary"
                            },
                            {
                                name: "Physics",
                                icon: <Book className="w-5 h-5 text-blue-500" />,
                                units: 16,
                                hours: 64,
                                color: "blue"
                            },
                            {
                                name: "Chemistry",
                                icon: <Book className="w-5 h-5 text-purple-500" />,
                                units: 14,
                                hours: 56,
                                color: "purple"
                            },
                            {
                                name: "Biology",
                                icon: <Book className="w-5 h-5 text-green-500" />,
                                units: 15,
                                hours: 60,
                                color: "green"
                            },
                            {
                                name: "English",
                                icon: <Book className="w-5 h-5 text-yellow-500" />,
                                units: 12,
                                hours: 48,
                                color: "yellow"
                            },
                            {
                                name: "History",
                                icon: <Book className="w-5 h-5 text-orange-500" />,
                                units: 10,
                                hours: 40,
                                color: "orange"
                            }
                        ].map((subject, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-lg ${getColorClass(subject.color)} flex items-center justify-center`}>
                                            {subject.icon}
                                        </div>
                                        <h4 className="font-semibold text-gray-900">{subject.name}</h4>
                                    </div>
                                    <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0">
                                        <Settings className="w-4 h-4 text-gray-500" />
                                    </Button>
                                </div>

                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Units:</span>
                                        <span className="font-medium text-gray-900">{subject.units}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Total Hours:</span>
                                        <span className="font-medium text-gray-900">{subject.hours}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Completion:</span>
                                        <span className="font-medium text-gray-900">{Math.floor(Math.random() * 30) + 70}%</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-100 flex gap-2">
                                    <Button variant="outline" size="sm" className="flex-1 flex items-center justify-center gap-1">
                                        <Eye className="w-3 h-3" />
                                        View
                                    </Button>
                                    <Button variant="outline" size="sm" className="flex-1 flex items-center justify-center gap-1">
                                        <Edit className="w-3 h-3" />
                                        Edit
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Updates */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold">Recent Curriculum Updates</h3>
                        <Button variant="outline" size="sm">
                            View All
                        </Button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Subject</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Class</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Updated By</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Date</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Change Type</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {[
                                    {
                                        subject: "Mathematics",
                                        class: "Senior 3",
                                        updatedBy: "John Doe",
                                        date: "2024-05-17",
                                        changeType: "Content Update"
                                    },
                                    {
                                        subject: "Physics",
                                        class: "Senior 4",
                                        updatedBy: "Mary Smith",
                                        date: "2024-05-16",
                                        changeType: "New Unit Added"
                                    },
                                    {
                                        subject: "English",
                                        class: "Senior 2",
                                        updatedBy: "Robert Johnson",
                                        date: "2024-05-15",
                                        changeType: "Timeline Adjustment"
                                    },
                                    {
                                        subject: "Chemistry",
                                        class: "Senior 1",
                                        updatedBy: "Sarah Williams",
                                        date: "2024-05-14",
                                        changeType: "Learning Objectives"
                                    },
                                    {
                                        subject: "Biology",
                                        class: "Senior 3",
                                        updatedBy: "David Brown",
                                        date: "2024-05-13",
                                        changeType: "Assessment Criteria"
                                    }
                                ].map((update, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <BookOpen className="w-4 h-4 text-primary" />
                                                </div>
                                                <span className="text-sm font-medium text-gray-900">{update.subject}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{update.class}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{update.updatedBy}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{update.date}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${update.changeType === "Content Update" ? "bg-blue-50 text-blue-600" :
                                                update.changeType === "New Unit Added" ? "bg-green-50 text-green-600" :
                                                    update.changeType === "Timeline Adjustment" ? "bg-purple-50 text-purple-600" :
                                                        update.changeType === "Learning Objectives" ? "bg-yellow-50 text-yellow-600" :
                                                            "bg-orange-50 text-orange-600"
                                                }`}>
                                                {update.changeType}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <Button variant="outline" size="sm" className="flex items-center gap-1">
                                                    <Eye className="w-3 h-3" />
                                                    View
                                                </Button>
                                                <Button variant="outline" size="sm" className="flex items-center gap-1">
                                                    <FileText className="w-3 h-3" />
                                                    Details
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Curriculum Timeline */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Academic Year Timeline</h3>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <Button variant="outline" className="flex items-center gap-2">
                                    <Filter className="w-4 h-4" />
                                    Filter
                                </Button>
                                <span className="text-sm font-medium text-gray-600">2023/2024 Academic Year</span>
                            </div>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                Term 2
                            </Button>
                        </div>

                        <div className="relative">
                            {/* Timeline axis */}
                            <div className="absolute left-16 right-6 top-1/2 h-1 bg-gray-200 rounded-full"></div>

                            {/* Timeline points */}
                            <div className="relative flex justify-between items-center px-6 py-8">
                                {["Term 1", "Term 2", "Term 3", "End of Year"].map((term, index) => (
                                    <div key={index} className="flex flex-col items-center gap-2 z-10">
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${index === 1 ? "bg-primary" : "bg-gray-200"
                                            }`}>
                                            <span className={`text-xs font-semibold ${index === 1 ? "text-white" : "text-gray-500"
                                                }`}>{index + 1}</span>
                                        </div>
                                        <span className="text-sm font-medium">{term}</span>
                                        <span className="text-xs text-gray-500">
                                            {index === 0 ? "Sept - Dec" :
                                                index === 1 ? "Jan - Apr" :
                                                    index === 2 ? "May - Aug" : "August"}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-sm font-medium mb-3">Current Focus Areas</h4>
                                    <ul className="space-y-2">
                                        {["Complete core subject materials", "Prepare for mid-year assessments", "Review curriculum objectives"].map((item, index) => (
                                            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium mb-3">Upcoming Milestones</h4>
                                    <ul className="space-y-2">
                                        {["End of Term Exams (April 25)", "Curriculum Review Meeting (May 5)", "New Content Integration (May 15)"].map((item, index) => (
                                            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
