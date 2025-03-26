"use client";

import { useState } from "react";
import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import { GraduationCap, Search, Edit, Users, MapPin, Save, X } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/src/components/ui/dialog";

// Define interfaces for type safety
interface ClassTeacher {
    id: string;
    name: string;
    email: string;
    subject: string;
}

interface ClassDetails {
    id: string;
    name: string;
    students: number;
    teacher: ClassTeacher;
    room: string;
    level: 'O-Level' | 'A-Level';
    section?: string;
}

export default function ClassManagement() {
    // State for managing classes data
    const [classes, setClasses] = useState<ClassDetails[]>([
        {
            id: "1",
            name: "Senior 1",
            students: 35,
            teacher: {
                id: "t1",
                name: "John Doe",
                email: "john.doe@joyious.edu",
                subject: "Mathematics"
            },
            room: "Block A - 101",
            level: "O-Level",
        },
        {
            id: "2",
            name: "Senior 2",
            students: 32,
            teacher: {
                id: "t2",
                name: "Jane Smith",
                email: "jane.smith@joyious.edu",
                subject: "English"
            },
            room: "Block A - 102",
            level: "O-Level",
        },
        {
            id: "3",
            name: "Senior 3",
            students: 30,
            teacher: {
                id: "t3",
                name: "Robert Wilson",
                email: "robert.wilson@joyious.edu",
                subject: "Physics"
            },
            room: "Block B - 201",
            level: "O-Level",
        },
        {
            id: "4",
            name: "Senior 4",
            students: 28,
            teacher: {
                id: "t4",
                name: "Mary Johnson",
                email: "mary.johnson@joyious.edu",
                subject: "Biology"
            },
            room: "Block B - 202",
            level: "O-Level",
        },
        {
            id: "5",
            name: "Senior 5-A",
            students: 45,
            teacher: {
                id: "t5",
                name: "David Brown",
                email: "david.brown@joyious.edu",
                subject: "History"
            },
            room: "Block C - 301",
            level: "A-Level",
            section: "Arts"
        },
        {
            id: "6",
            name: "Senior 5-B",
            students: 25,
            teacher: {
                id: "t6",
                name: "Ben Morgan",
                email: "ben.morgan@joyious.edu",
                subject: "Geography"
            },
            room: "Block C - 302",
            level: "A-Level",
            section: "Arts"
        },
        {
            id: "7",
            name: "Senior 5-C",
            students: 35,
            teacher: {
                id: "t7",
                name: "Joan Martins",
                email: "martins.joan@joyious.edu",
                subject: "Agriculture"
            },
            room: "Block C - 303",
            level: "A-Level",
            section: "Science"
        },
        {
            id: "8",
            name: "Senior 5-D",
            students: 25,
            teacher: {
                id: "t8",
                name: "Davids Brown M",
                email: "davids.brown@joyious.edu",
                subject: "Chemistry"
            },
            room: "Block C - 304",
            level: "A-Level",
            section: "Science"
        },
        {
            id: "9",
            name: "Senior 6-A",
            students: 22,
            teacher: {
                id: "t9",
                name: "Mitts Johns",
                email: "mitjohns02@joyious.edu",
                subject: "Economics"
            },
            room: "Block C - 305",
            level: "A-Level",
            section: "Arts"
        },
        {
            id: "10",
            name: "Senior 6-B",
            students: 22,
            teacher: {
                id: "t10",
                name: "Joyce Meyer",
                email: "service.meyer@joyious.edu",
                subject: "Literature"
            },
            room: "Block C - 306",
            level: "A-Level",
            section: "Arts"
        },
        {
            id: "11",
            name: "Senior 6-C",
            students: 22,
            teacher: {
                id: "t11",
                name: "Billy Grandon",
                email: "grandonbilly@joyious.edu",
                subject: "Mathematics"
            },
            room: "Block C - 307",
            level: "A-Level",
            section: "Science"
        },
        {
            id: "12",
            name: "Senior 6-D",
            students: 22,
            teacher: {
                id: "t12",
                name: "Sarah Davis",
                email: "sarah.davis@joyious.edu",
                subject: "Biology"
            },
            room: "Block C - 308",
            level: "A-Level",
            section: "Science"
        },
    ]);

    // State for search functionality
    const [searchQuery, setSearchQuery] = useState("");

    // State for managing dialogs
    const [selectedClass, setSelectedClass] = useState<ClassDetails | null>(null);
    const [isViewDetailsOpen, setIsViewDetailsOpen] = useState(false);
    const [isManageOpen, setIsManageOpen] = useState(false);
    const [editedClass, setEditedClass] = useState<ClassDetails | null>(null);

    // Filter classes based on search query
    const filteredClasses = classes.filter(cls =>
        cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cls.teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cls.room.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cls.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (cls.section?.toLowerCase() || "").includes(searchQuery.toLowerCase())
    );

    // Handle class update
    const handleUpdateClass = () => {
        if (editedClass) {
            setClasses(prevClasses =>
                prevClasses.map(cls =>
                    cls.id === editedClass.id ? editedClass : cls
                )
            );
            setIsManageOpen(false);
            setEditedClass(null);
        }
    };

    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        Class Management
                    </h1>
                    <p className="text-xl text-gray-600">
                        Manage and organize school classes, sections, and student assignments efficiently
                    </p>
                </div>

                {/* Search Bar */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search classes by name, teacher, room, level, or section..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                        />
                    </div>
                </div>

                {/* Content Area */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredClasses.map((classItem) => (
                        <div
                            key={classItem.id}
                            className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Enhanced gradient background */}
                            <div className="absolute inset-0">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-indigo-50/10 to-purple-50/5" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-navy-50/20 via-transparent to-gray-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-[-100%] bg-gradient-to-tr from-primary/5 via-transparent to-indigo-500/5 rotate-45 transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
                            </div>
                            <div className="p-6 relative">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-navy-100 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                                        <GraduationCap className="w-6 h-6 text-navy-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{classItem.name}</h3>
                                        <p className="text-sm text-gray-500">{classItem.students} Students</p>
                                    </div>
                                    <span className="ml-auto text-sm font-medium px-2 py-1 rounded-full bg-navy-50 text-navy-700">
                                        {classItem.level}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Class Teacher:</span>
                                        <span className="font-medium text-gray-900">{classItem.teacher.name}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Room:</span>
                                        <span className="font-medium text-gray-900">{classItem.room}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Section:</span>
                                        <span className="font-medium text-gray-900">{classItem.section}</span>
                                    </div>
                                </div>
                                <div className="mt-6 flex gap-2">
                                    <Button
                                        variant="outline"
                                        className="flex-1 border-navy-200 hover:border-navy-400 hover:bg-navy-50"
                                        onClick={() => {
                                            setSelectedClass(classItem);
                                            setIsViewDetailsOpen(true);
                                        }}
                                    >
                                        View Details
                                    </Button>
                                    <Button
                                        className="flex-1 bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900"
                                        onClick={() => {
                                            setSelectedClass(classItem);
                                            setIsManageOpen(true);
                                        }}
                                    >
                                        Manage
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View Details Dialog */}
                <Dialog open={isViewDetailsOpen} onOpenChange={setIsViewDetailsOpen}>
                    <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-navy-900">
                                Class Details
                            </DialogTitle>
                            <DialogDescription>
                                Detailed information about {selectedClass?.name}
                            </DialogDescription>
                        </DialogHeader>
                        {selectedClass && (
                            <div className="mt-6 space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <h4 className="font-medium text-navy-900">Class Information</h4>
                                        <div className="space-y-1">
                                            <p className="text-sm"><span className="text-gray-500">Name:</span> {selectedClass.name}</p>
                                            <p className="text-sm"><span className="text-gray-500">Level:</span> {selectedClass.level}</p>
                                            <p className="text-sm"><span className="text-gray-500">Section:</span> {selectedClass.section}</p>
                                            <p className="text-sm"><span className="text-gray-500">Room:</span> {selectedClass.room}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-medium text-navy-900">Class Teacher</h4>
                                        <div className="space-y-1">
                                            <p className="text-sm"><span className="text-gray-500">Name:</span> {selectedClass.teacher.name}</p>
                                            <p className="text-sm"><span className="text-gray-500">Email:</span> {selectedClass.teacher.email}</p>
                                            <p className="text-sm"><span className="text-gray-500">Subject:</span> {selectedClass.teacher.subject}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <h4 className="font-medium text-navy-900 mb-2">Class Statistics</h4>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="bg-navy-50 rounded-lg p-4 text-center">
                                            <Users className="w-6 h-6 text-navy-600 mx-auto mb-2" />
                                            <p className="text-2xl font-bold text-navy-900">{selectedClass.students}</p>
                                            <p className="text-sm text-gray-600">Students</p>
                                        </div>
                                        <div className="bg-navy-50 rounded-lg p-4 text-center">
                                            <MapPin className="w-6 h-6 text-navy-600 mx-auto mb-2" />
                                            <p className="text-sm font-medium text-navy-900">{selectedClass.room}</p>
                                            <p className="text-sm text-gray-600">Location</p>
                                        </div>
                                        <div className="bg-navy-50 rounded-lg p-4 text-center">
                                            <Edit className="w-6 h-6 text-navy-600 mx-auto mb-2" />
                                            <p className="text-sm font-medium text-navy-900">{selectedClass.section}</p>
                                            <p className="text-sm text-gray-600">Section</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>

                {/* Enhanced Manage Class Dialog */}
                <Dialog open={isManageOpen} onOpenChange={(open) => {
                    if (!open) {
                        setEditedClass(null);
                    }
                    setIsManageOpen(open);
                }}>
                    <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-navy-900">
                                Manage Class
                            </DialogTitle>
                            <DialogDescription>
                                Manage details and settings for {selectedClass?.name}
                            </DialogDescription>
                        </DialogHeader>
                        {selectedClass && (
                            <div className="mt-6 space-y-6">
                                <div className="grid gap-6">
                                    {/* Class Details Form */}
                                    <div className="space-y-4">
                                        <h4 className="font-medium text-navy-900">Class Information</h4>
                                        <div className="grid gap-4">
                                            <div>
                                                <label className="text-sm font-medium text-gray-700">Class Name</label>
                                                <input
                                                    type="text"
                                                    value={editedClass?.name || selectedClass.name}
                                                    onChange={(e) => setEditedClass(prev => ({
                                                        ...(prev || selectedClass),
                                                        name: e.target.value
                                                    }))}
                                                    className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-gray-700">Room</label>
                                                <input
                                                    type="text"
                                                    value={editedClass?.room || selectedClass.room}
                                                    onChange={(e) => setEditedClass(prev => ({
                                                        ...(prev || selectedClass),
                                                        room: e.target.value
                                                    }))}
                                                    className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-gray-700">Section</label>
                                                <select
                                                    value={editedClass?.section || selectedClass.section || ""}
                                                    onChange={(e) => setEditedClass(prev => ({
                                                        ...(prev || selectedClass),
                                                        section: e.target.value
                                                    }))}
                                                    className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                                >
                                                    <option value="">No Section</option>
                                                    <option value="Science">Science</option>
                                                    <option value="Arts">Arts</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Teacher Information Form */}
                                    <div className="space-y-4 pt-4 border-t border-gray-200">
                                        <h4 className="font-medium text-navy-900">Teacher Information</h4>
                                        <div className="grid gap-4">
                                            <div>
                                                <label className="text-sm font-medium text-gray-700">Teacher Name</label>
                                                <input
                                                    type="text"
                                                    value={editedClass?.teacher.name || selectedClass.teacher.name}
                                                    onChange={(e) => setEditedClass(prev => ({
                                                        ...(prev || selectedClass),
                                                        teacher: {
                                                            ...(prev?.teacher || selectedClass.teacher),
                                                            name: e.target.value
                                                        }
                                                    }))}
                                                    className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-gray-700">Teacher Email</label>
                                                <input
                                                    type="email"
                                                    value={editedClass?.teacher.email || selectedClass.teacher.email}
                                                    onChange={(e) => setEditedClass(prev => ({
                                                        ...(prev || selectedClass),
                                                        teacher: {
                                                            ...(prev?.teacher || selectedClass.teacher),
                                                            email: e.target.value
                                                        }
                                                    }))}
                                                    className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-gray-700">Subject</label>
                                                <input
                                                    type="text"
                                                    value={editedClass?.teacher.subject || selectedClass.teacher.subject}
                                                    onChange={(e) => setEditedClass(prev => ({
                                                        ...(prev || selectedClass),
                                                        teacher: {
                                                            ...(prev?.teacher || selectedClass.teacher),
                                                            subject: e.target.value
                                                        }
                                                    }))}
                                                    className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
                                        <Button
                                            variant="outline"
                                            onClick={() => {
                                                setEditedClass(null);
                                                setIsManageOpen(false);
                                            }}
                                            className="border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                        >
                                            <X className="w-4 h-4 mr-2" />
                                            Cancel
                                        </Button>
                                        <Button
                                            onClick={handleUpdateClass}
                                            className="bg-gradient-to-r from-primary to-indigo-600 text-white hover:from-primary/90 hover:to-indigo-600/90"
                                            disabled={!editedClass}
                                        >
                                            <Save className="w-4 h-4 mr-2" />
                                            Save Changes
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </MainLayout>
    );
} 