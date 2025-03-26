"use client";

import { useState } from "react";
import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import {
    BookOpen, Plus, Search, Users, Clock, Edit, Save, X,
    BookText, Languages, Music, Dumbbell, Beaker, Binary, Coffee,
    Laptop, Pencil, Ruler, Map, Building, Banknote, Utensils, Calculator,
    Palette, Book, GraduationCap, Leaf, PenTool
} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/src/components/ui/dialog";

// Define interfaces for type safety
interface SubjectTeacher {
    id: string;
    name: string;
    email: string;
    experience: number;
}

interface Subject {
    id: string;
    name: string;
    level: 'O-Level' | 'A-Level';
    category: string;
    hoursPerWeek: number;
    isCompulsory: boolean;
    teachers: SubjectTeacher[];
    description: string;
    icon: keyof typeof subjectIcons;
}

// Subject icons mapping
const subjectIcons = {
    BookOpen,
    BookText,
    Languages,
    Music,
    Dumbbell,
    Flask: Beaker,
    Binary,
    Coffee,
    Laptop,
    Pencil,
    Ruler,
    Map,
    Building,
    Banknote,
    Utensils,
    Calculator,
    Palette,
    Book,
    GraduationCap,
    Leaf,
    PenTool
};

export default function SubjectManagement() {
    // State for subjects data
    const [subjects, setSubjects] = useState<Subject[]>([
        // O-Level Compulsory Subjects
        {
            id: "s1",
            name: "English",
            level: "O-Level",
            category: "Compulsory",
            hoursPerWeek: 6,
            isCompulsory: true,
            teachers: [
                { id: "t1", name: "Jane Smith", email: "jane.smith@school.edu", experience: 8 },
                { id: "t2", name: "John Williams", email: "john.williams@school.edu", experience: 5 }
            ],
            description: "English language and literature fundamentals for O-Level students.",
            icon: "BookText"
        },
        {
            id: "s2",
            name: "CRE",
            level: "O-Level",
            category: "Compulsory",
            hoursPerWeek: 4,
            isCompulsory: true,
            teachers: [
                { id: "t3", name: "Sarah Johnson", email: "sarah.johnson@school.edu", experience: 7 }
            ],
            description: "Christian Religious Education covering ethics, morals, and religious studies.",
            icon: "Book"
        },
        {
            id: "s3",
            name: "History",
            level: "O-Level",
            category: "Compulsory",
            hoursPerWeek: 5,
            isCompulsory: true,
            teachers: [
                { id: "t4", name: "Michael Brown", email: "michael.brown@school.edu", experience: 10 },
                { id: "t5", name: "Angela Davis", email: "angela.davis@school.edu", experience: 6 },
                { id: "t6", name: "Robert Wilson", email: "robert.wilson@school.edu", experience: 8 }
            ],
            description: "Study of historical events, civilizations, and cultural developments.",
            icon: "Book"
        },
        {
            id: "s4",
            name: "Geography",
            level: "O-Level",
            category: "Compulsory",
            hoursPerWeek: 5,
            isCompulsory: true,
            teachers: [
                { id: "t7", name: "Emma Clark", email: "emma.clark@school.edu", experience: 7 },
                { id: "t8", name: "Daniel White", email: "daniel.white@school.edu", experience: 4 }
            ],
            description: "Study of physical features of the earth and human society's impact on environment.",
            icon: "Map"
        },
        {
            id: "s5",
            name: "Mathematics",
            level: "O-Level",
            category: "Compulsory",
            hoursPerWeek: 8,
            isCompulsory: true,
            teachers: [
                { id: "t9", name: "Thomas Green", email: "thomas.green@school.edu", experience: 9 },
                { id: "t10", name: "Lisa Miller", email: "lisa.miller@school.edu", experience: 5 }
            ],
            description: "Core mathematical concepts, algebra, geometry, and problem-solving skills.",
            icon: "Calculator"
        },
        {
            id: "s6",
            name: "Physics",
            level: "O-Level",
            category: "Compulsory",
            hoursPerWeek: 6,
            isCompulsory: true,
            teachers: [
                { id: "t11", name: "Richard Lee", email: "richard.lee@school.edu", experience: 8 },
                { id: "t12", name: "Olivia Taylor", email: "olivia.taylor@school.edu", experience: 6 }
            ],
            description: "Study of matter, energy, and their interactions.",
            icon: "Flask"
        },
        {
            id: "s7",
            name: "Chemistry",
            level: "O-Level",
            category: "Compulsory",
            hoursPerWeek: 6,
            isCompulsory: true,
            teachers: [
                { id: "t13", name: "James Wilson", email: "james.wilson@school.edu", experience: 7 },
                { id: "t14", name: "Sophia Moore", email: "sophia.moore@school.edu", experience: 5 }
            ],
            description: "Study of composition, properties, and reactions of substances.",
            icon: "Flask"
        },
        {
            id: "s8",
            name: "Biology",
            level: "O-Level",
            category: "Compulsory",
            hoursPerWeek: 6,
            isCompulsory: true,
            teachers: [
                { id: "t15", name: "William Harris", email: "william.harris@school.edu", experience: 9 },
                { id: "t16", name: "Emily Davis", email: "emily.davis@school.edu", experience: 4 }
            ],
            description: "Study of living organisms and their interactions with the environment.",
            icon: "Leaf"
        },

        // O-Level Optional Subjects
        {
            id: "s9",
            name: "Literature in English",
            level: "O-Level",
            category: "Optional",
            hoursPerWeek: 4,
            isCompulsory: false,
            teachers: [
                { id: "t17", name: "Catherine Jones", email: "catherine.jones@school.edu", experience: 7 }
            ],
            description: "Analysis of literary works, poetry, drama, and prose.",
            icon: "BookOpen"
        },
        {
            id: "s10",
            name: "French",
            level: "O-Level",
            category: "Optional",
            hoursPerWeek: 4,
            isCompulsory: false,
            teachers: [
                { id: "t18", name: "Claire Dubois", email: "claire.dubois@school.edu", experience: 10 }
            ],
            description: "French language acquisition and cultural studies.",
            icon: "Languages"
        },

        // A-Level Science Subjects
        {
            id: "s20",
            name: "Mathematics",
            level: "A-Level",
            category: "Science",
            hoursPerWeek: 8,
            isCompulsory: false,
            teachers: [
                { id: "t30", name: "George Wilson", email: "george.wilson@school.edu", experience: 12 },
                { id: "t31", name: "Diana Smith", email: "diana.smith@school.edu", experience: 9 }
            ],
            description: "Advanced mathematics including calculus, statistics, and mechanics.",
            icon: "Calculator"
        },
        {
            id: "s21",
            name: "Physics",
            level: "A-Level",
            category: "Science",
            hoursPerWeek: 8,
            isCompulsory: false,
            teachers: [
                { id: "t32", name: "Howard Lee", email: "howard.lee@school.edu", experience: 10 },
                { id: "t33", name: "Priscilla Gray", email: "priscilla.gray@school.edu", experience: 8 }
            ],
            description: "Advanced physics concepts, mechanics, electricity, and modern physics.",
            icon: "Flask"
        },
        {
            id: "s22",
            name: "Chemistry",
            level: "O-Level",
            category: "Compulsory",
            hoursPerWeek: 6,
            isCompulsory: true,
            teachers: [
                { id: "t13", name: "James Wilson", email: "james.wilson@school.edu", experience: 7 },
                { id: "t14", name: "Sophia Moore", email: "sophia.moore@school.edu", experience: 5 }
            ],
            description: "Study of composition, properties, and reactions of substances.",
            icon: "Flask"
        },
        {
            id: "s23",
            name: "Biology",
            level: "O-Level",
            category: "Compulsory",
            hoursPerWeek: 6,
            isCompulsory: true,
            teachers: [
                { id: "t15", name: "William Harris", email: "william.harris@school.edu", experience: 9 },
                { id: "t16", name: "Emily Davis", email: "emily.davis@school.edu", experience: 4 }
            ],
            description: "Study of living organisms and their interactions with the environment.",
            icon: "Leaf"
        },

        // A-Level Arts Subjects
        {
            id: "s30",
            name: "Geography",
            level: "A-Level",
            category: "Arts",
            hoursPerWeek: 6,
            isCompulsory: false,
            teachers: [
                { id: "t40", name: "Ethan Morris", email: "ethan.morris@school.edu", experience: 9 },
                { id: "t41", name: "Lucy Yang", email: "lucy.yang@school.edu", experience: 7 },
                { id: "t42", name: "Victor Peters", email: "victor.peters@school.edu", experience: 11 }
            ],
            description: "Advanced study of physical and human geography with field research techniques.",
            icon: "Map"
        },
        {
            id: "s31",
            name: "History",
            level: "A-Level",
            category: "Arts",
            hoursPerWeek: 6,
            isCompulsory: false,
            teachers: [
                { id: "t43", name: "Natalie Brown", email: "natalie.brown@school.edu", experience: 13 },
                { id: "t44", name: "Owen Martinez", email: "owen.martinez@school.edu", experience: 8 },
                { id: "t45", name: "Frances Lewis", email: "frances.lewis@school.edu", experience: 10 }
            ],
            description: "In-depth historical studies with focus on analysis and interpretation of historical events.",
            icon: "Book"
        },
        {
            id: "s32",
            name: "Economics",
            level: "A-Level",
            category: "Arts",
            hoursPerWeek: 4,
            isCompulsory: false,
            teachers: [
                { id: "t46", name: "Natalie Brown", email: "natalie.brown@school.edu", experience: 13 },
            ],
            description: "Study of economic theories, policies, and global economic systems.",
            icon: "Banknote"
        },
        {
            id: "s33",
            name: "Entrepreneurship",
            level: "A-Level",
            category: "Arts",
            hoursPerWeek: 3,
            isCompulsory: false,
            teachers: [
                { id: "t46", name: "Frances Lewis", email: "frances.lewis@school.edu", experience: 10 }
            ],
            description: "Introduction to business management, innovation, and entrepreneurship.",
            icon: "Building"
        },
        {
            id: "s34",
            name: "Literature in English",
            level: "A-Level",
            category: "Arts",
            hoursPerWeek: 2,
            isCompulsory: false,
            teachers: [
                { id: "t17", name: "Catherine Jones", email: "catherine.jones@school.edu", experience: 7 }
            ],
            description: "Analysis of literary works, poetry, drama, and prose.",
            icon: "BookOpen"
        },
        {
            id: "s35",
            name: "French",
            level: "A-Level",
            category: "Arts",
            hoursPerWeek: 2,
            isCompulsory: false,
            teachers: [
                { id: "t18", name: "Claire Dubois", email: "claire.dubois@school.edu", experience: 10 }
            ],
            description: "French language acquisition and cultural studies.",
            icon: "Languages"
        },
                

        // Subsidiary Subjects
        {
            id: "s40",
            name: "General Paper",
            level: "A-Level",
            category: "Subsidiary",
            hoursPerWeek: 4,
            isCompulsory: true,
            teachers: [
                { id: "t50", name: "Melissa Hughes", email: "melissa.hughes@school.edu", experience: 6 }
            ],
            description: "Critical thinking, comprehension, and essay writing on current affairs.",
            icon: "PenTool"
        },
        {
            id: "s41",
            name: "Subsidiary ICT",
            level: "A-Level",
            category: "Subsidiary",
            hoursPerWeek: 4,
            isCompulsory: false,
            teachers: [
                {id: "t51", name: "John Johns", email: "johns_john@school.edu", experience: 5}
            ],
            description: "Introduction to Information and Communication Technology concepts.",
            icon: "Laptop"
        },
        {
            id: "s41",
            name: "Subsidiary Maths",
            level: "A-Level",
            category: "Subsidiary",
            hoursPerWeek: 4,
            isCompulsory: false,
            teachers: [
                {id: "t52", name: "Bright Mercy", email: "bright.mercy@school.edu", experience: 9}
            ],
            description: "Introduction to Advanced Mathematics concepts.",
            icon: "Calculator"
        }
    ]);

    // State for search functionality
    const [searchQuery, setSearchQuery] = useState("");

    // State for managing dialogs
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
    const [isViewDetailsOpen, setIsViewDetailsOpen] = useState(false);
    const [isManageOpen, setIsManageOpen] = useState(false);
    const [isAddSubjectOpen, setIsAddSubjectOpen] = useState(false);
    const [editedSubject, setEditedSubject] = useState<Subject | null>(null);

    // Filter subjects based on search query
    const filteredSubjects = subjects.filter(subject =>
        subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subject.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subject.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subject.teachers.some(teacher =>
            teacher.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    // Handle subject update
    const handleUpdateSubject = () => {
        if (editedSubject) {
            setSubjects(prevSubjects =>
                prevSubjects.map(subject =>
                    subject.id === editedSubject.id ? editedSubject : subject
                )
            );
            setIsManageOpen(false);
            setEditedSubject(null);
        }
    };

    // Get icon component for a subject
    const getSubjectIcon = (iconName: keyof typeof subjectIcons) => {
        const IconComponent = subjectIcons[iconName];
        return <IconComponent className="w-6 h-6" />;
    };

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
                                    placeholder="Search subjects by name, level, category, or teacher..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <Button
                                className="flex-1 bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
                                onClick={() => setIsAddSubjectOpen(true)}
                            >
                                <Plus className="w-4 h-4" />
                                Add New Subject
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="space-y-8">
                    {/* O-Level Section */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-navy-600 to-navy-800 bg-clip-text text-transparent flex items-center">
                            <span className="mr-2">O'Level Subjects</span>
                            <div className="h-1 flex-grow bg-gradient-to-r from-navy-600/20 to-navy-800/20 rounded-full ml-4" />
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {filteredSubjects
                                .filter(subject => subject.level === "O-Level")
                                .map((subject) => (
                                    <div
                                        key={subject.id}
                                        className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                                    >
                                        {/* Enhanced gradient background */}
                                        <div className="absolute inset-0">
                                            <div className="absolute inset-0 bg-gradient-to-br from-navy-50/30 via-navy-100/20 to-navy-50/10" />
                                            <div className="absolute inset-0 bg-gradient-to-tr from-navy-100/20 via-transparent to-navy-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                        <div className="p-6 relative">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-lg bg-navy-100 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                                                    {getSubjectIcon(subject.icon)}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900">{subject.name}</h3>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm text-gray-500">{subject.category}</span>
                                                        {subject.isCompulsory && (
                                                            <span className="text-xs px-2 py-0.5 bg-navy-100 text-navy-800 rounded-full">Compulsory</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Users className="w-4 h-4" />
                                                    <span>{subject.teachers.length} Teachers Assigned</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{subject.hoursPerWeek} Hours per Week</span>
                                                </div>
                                            </div>
                                            <div className="mt-6 flex gap-2">
                                                <Button
                                                    variant="outline"
                                                    className="flex-1 border-navy-200 hover:border-navy-400 hover:bg-navy-50"
                                                    onClick={() => {
                                                        setSelectedSubject(subject);
                                                        setIsViewDetailsOpen(true);
                                                    }}
                                                >
                                                    View Details
                                                </Button>
                                                <Button
                                                    className="flex-1 bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900"
                                                    onClick={() => {
                                                        setSelectedSubject(subject);
                                                        setEditedSubject({ ...subject });
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
                    </div>

                    {/* A-Level Section */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent flex items-center">
                            <span className="mr-2">A'Level Subjects</span>
                            <div className="h-1 flex-grow bg-gradient-to-r from-gray-600/20 to-gray-800/20 rounded-full ml-4" />
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {filteredSubjects
                                .filter(subject => subject.level === "A-Level")
                                .map((subject) => (
                                    <div
                                        key={subject.id}
                                        className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                                    >
                                        {/* Enhanced gradient background */}
                                        <div className="absolute inset-0">
                                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-gray-100/20 to-gray-50/10" />
                                            <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/20 via-transparent to-gray-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                        <div className="p-6 relative">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                                                    {getSubjectIcon(subject.icon)}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900">{subject.name}</h3>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm text-gray-500">{subject.category}</span>
                                                        {subject.isCompulsory && (
                                                            <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-800 rounded-full">Compulsory</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Users className="w-4 h-4" />
                                                    <span>{subject.teachers.length} Teachers Assigned</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{subject.hoursPerWeek} Hours per Week</span>
                                                </div>
                                            </div>
                                            <div className="mt-6 flex gap-2">
                                                <Button
                                                    variant="outline"
                                                    className="flex-1 border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                                                    onClick={() => {
                                                        setSelectedSubject(subject);
                                                        setIsViewDetailsOpen(true);
                                                    }}
                                                >
                                                    View Details
                                                </Button>
                                                <Button
                                                    className="flex-1 bg-gradient-to-r from-gray-600 to-gray-800 text-white hover:from-gray-700 hover:to-gray-900"
                                                    onClick={() => {
                                                        setSelectedSubject(subject);
                                                        setEditedSubject({ ...subject });
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
                    </div>
                </div>

                {/* View Details Dialog */}
                <Dialog open={isViewDetailsOpen} onOpenChange={setIsViewDetailsOpen}>
                    <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-navy-900">
                                Subject Details
                            </DialogTitle>
                            <DialogDescription>
                                Detailed information about {selectedSubject?.name}
                            </DialogDescription>
                        </DialogHeader>
                        {selectedSubject && (
                            <div className="mt-6 space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <h4 className="font-medium text-navy-900">Subject Information</h4>
                                        <div className="space-y-1">
                                            <p className="text-sm"><span className="text-gray-500">Name:</span> {selectedSubject.name}</p>
                                            <p className="text-sm"><span className="text-gray-500">Level:</span> {selectedSubject.level}</p>
                                            <p className="text-sm"><span className="text-gray-500">Category:</span> {selectedSubject.category}</p>
                                            <p className="text-sm"><span className="text-gray-500">Hours/Week:</span> {selectedSubject.hoursPerWeek}</p>
                                            <p className="text-sm"><span className="text-gray-500">Status:</span> {selectedSubject.isCompulsory ? 'Compulsory' : 'Optional'}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-medium text-navy-900">Description</h4>
                                        <p className="text-sm text-gray-700">{selectedSubject.description}</p>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <h4 className="font-medium text-navy-900 mb-2">Assigned Teachers</h4>
                                    <div className="space-y-3">
                                        {selectedSubject.teachers.map((teacher) => (
                                            <div key={teacher.id} className="bg-gray-50 rounded-lg p-3">
                                                <p className="font-medium text-gray-900">{teacher.name}</p>
                                                <p className="text-sm text-gray-600">{teacher.email}</p>
                                                <p className="text-xs text-gray-500">{teacher.experience} years experience</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>

                {/* Manage Subject Dialog */}
                <Dialog open={isManageOpen} onOpenChange={(open) => {
                    if (!open) {
                        setEditedSubject(null);
                    }
                    setIsManageOpen(open);
                }}>
                    <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-navy-900">
                                Manage Subject
                            </DialogTitle>
                            <DialogDescription>
                                Update details and teachers for {selectedSubject?.name}
                            </DialogDescription>
                        </DialogHeader>
                        {selectedSubject && editedSubject && (
                            <div className="mt-6 space-y-6">
                                <div className="grid gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-sm font-medium text-gray-700">Subject Name</label>
                                            <input
                                                type="text"
                                                value={editedSubject.name}
                                                onChange={(e) => setEditedSubject({
                                                    ...editedSubject,
                                                    name: e.target.value
                                                })}
                                                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-gray-700">Level</label>
                                            <select
                                                value={editedSubject.level}
                                                onChange={(e) => setEditedSubject({
                                                    ...editedSubject,
                                                    level: e.target.value as 'O-Level' | 'A-Level'
                                                })}
                                                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                            >
                                                <option value="O-Level">O-Level</option>
                                                <option value="A-Level">A-Level</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-sm font-medium text-gray-700">Category</label>
                                            <input
                                                type="text"
                                                value={editedSubject.category}
                                                onChange={(e) => setEditedSubject({
                                                    ...editedSubject,
                                                    category: e.target.value
                                                })}
                                                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-gray-700">Hours per Week</label>
                                            <input
                                                type="number"
                                                value={editedSubject.hoursPerWeek}
                                                onChange={(e) => setEditedSubject({
                                                    ...editedSubject,
                                                    hoursPerWeek: parseInt(e.target.value)
                                                })}
                                                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Status</label>
                                        <div className="flex items-center mt-1 space-x-4">
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    checked={editedSubject.isCompulsory}
                                                    onChange={() => setEditedSubject({
                                                        ...editedSubject,
                                                        isCompulsory: true
                                                    })}
                                                    className="text-navy-600 focus:ring-navy-500 h-4 w-4"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">Compulsory</span>
                                            </label>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    checked={!editedSubject.isCompulsory}
                                                    onChange={() => setEditedSubject({
                                                        ...editedSubject,
                                                        isCompulsory: false
                                                    })}
                                                    className="text-navy-600 focus:ring-navy-500 h-4 w-4"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">Optional</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Description</label>
                                        <textarea
                                            value={editedSubject.description}
                                            onChange={(e) => setEditedSubject({
                                                ...editedSubject,
                                                description: e.target.value
                                            })}
                                            rows={3}
                                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                        />
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-200">
                                    <div className="flex justify-between items-center mb-4">
                                        <h4 className="font-medium text-navy-900">Assigned Teachers</h4>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="text-xs h-8"
                                            onClick={() => {
                                                setEditedSubject({
                                                    ...editedSubject,
                                                    teachers: [
                                                        ...editedSubject.teachers,
                                                        {
                                                            id: `new-${Date.now()}`,
                                                            name: "",
                                                            email: "",
                                                            experience: 0
                                                        }
                                                    ]
                                                });
                                            }}
                                        >
                                            <Plus className="w-3 h-3 mr-1" /> Add Teacher
                                        </Button>
                                    </div>
                                    <div className="space-y-4">
                                        {editedSubject.teachers.map((teacher, index) => (
                                            <div key={teacher.id} className="bg-gray-50 rounded-lg p-4 relative">
                                                <button
                                                    onClick={() => {
                                                        setEditedSubject({
                                                            ...editedSubject,
                                                            teachers: editedSubject.teachers.filter((_, i) => i !== index)
                                                        });
                                                    }}
                                                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                                <div className="grid grid-cols-2 gap-3">
                                                    <div>
                                                        <label className="text-xs font-medium text-gray-700">Name</label>
                                                        <input
                                                            type="text"
                                                            value={teacher.name}
                                                            onChange={(e) => {
                                                                const updatedTeachers = [...editedSubject.teachers];
                                                                updatedTeachers[index] = {
                                                                    ...updatedTeachers[index],
                                                                    name: e.target.value
                                                                };
                                                                setEditedSubject({
                                                                    ...editedSubject,
                                                                    teachers: updatedTeachers
                                                                });
                                                            }}
                                                            className="mt-1 w-full rounded-md border border-gray-300 p-1.5 text-sm focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="text-xs font-medium text-gray-700">Email</label>
                                                        <input
                                                            type="email"
                                                            value={teacher.email}
                                                            onChange={(e) => {
                                                                const updatedTeachers = [...editedSubject.teachers];
                                                                updatedTeachers[index] = {
                                                                    ...updatedTeachers[index],
                                                                    email: e.target.value
                                                                };
                                                                setEditedSubject({
                                                                    ...editedSubject,
                                                                    teachers: updatedTeachers
                                                                });
                                                            }}
                                                            className="mt-1 w-full rounded-md border border-gray-300 p-1.5 text-sm focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                                        />
                                                    </div>
                                                    <div className="col-span-2">
                                                        <label className="text-xs font-medium text-gray-700">Experience (years)</label>
                                                        <input
                                                            type="number"
                                                            value={teacher.experience}
                                                            onChange={(e) => {
                                                                const updatedTeachers = [...editedSubject.teachers];
                                                                updatedTeachers[index] = {
                                                                    ...updatedTeachers[index],
                                                                    experience: parseInt(e.target.value)
                                                                };
                                                                setEditedSubject({
                                                                    ...editedSubject,
                                                                    teachers: updatedTeachers
                                                                });
                                                            }}
                                                            className="mt-1 w-full rounded-md border border-gray-300 p-1.5 text-sm focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
                                    <Button
                                        variant="outline"
                                        onClick={() => {
                                            setEditedSubject(null);
                                            setIsManageOpen(false);
                                        }}
                                        className="border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                    >
                                        <X className="w-4 h-4 mr-2" />
                                        Cancel
                                    </Button>
                                    <Button
                                        onClick={handleUpdateSubject}
                                        className="bg-gradient-to-r from-primary to-indigo-600 text-white hover:from-primary/90 hover:to-indigo-600/90"
                                    >
                                        <Save className="w-4 h-4 mr-2" />
                                        Save Changes
                                    </Button>
                                </div>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>

                {/* Add New Subject Dialog */}
                <Dialog open={isAddSubjectOpen} onOpenChange={setIsAddSubjectOpen}>
                    <DialogContent className="sm:max-w-[600px] overflow-auto">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-navy-900">
                                Add New Subject
                            </DialogTitle>
                            <DialogDescription>
                                Create a new subject and assign teachers
                            </DialogDescription>
                        </DialogHeader>
                        <div className="mt-6 space-y-6">
                            <div className="grid gap-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Subject Name</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Computer Science"
                                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Level</label>
                                        <select
                                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Select level</option>
                                            <option value="O-Level">O-Level</option>
                                            <option value="A-Level">A-Level</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Category</label>
                                        <select
                                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Select category</option>
                                            <option value="Compulsory">Compulsory</option>
                                            <option value="Optional">Optional</option>
                                            <option value="Science">Science</option>
                                            <option value="Arts">Arts</option>
                                            <option value="Subsidiary">Subsidiary</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Hours per Week</label>
                                        <input
                                            type="number"
                                            placeholder="e.g. 6"
                                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700">Status</label>
                                    <div className="flex items-center mt-1 space-x-4">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                name="status"
                                                value="compulsory"
                                                className="text-navy-600 focus:ring-navy-500 h-4 w-4"
                                            />
                                            <span className="ml-2 text-sm text-gray-700">Compulsory</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                name="status"
                                                value="optional"
                                                className="text-navy-600 focus:ring-navy-500 h-4 w-4"
                                                defaultChecked
                                            />
                                            <span className="ml-2 text-sm text-gray-700">Optional</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700">Subject Icon</label>
                                    <select
                                        className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select icon</option>
                                        <option value="BookOpen">Book</option>
                                        <option value="Calculator">Calculator</option>
                                        <option value="Flask">Science</option>
                                        <option value="Languages">Languages</option>
                                        <option value="Map">Geography</option>
                                        <option value="Palette">Art</option>
                                        <option value="Laptop">Computer</option>
                                        <option value="PenTool">Writing</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700">Description</label>
                                    <textarea
                                        placeholder="Enter subject description..."
                                        rows={3}
                                        className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                    />
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200">
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="font-medium text-navy-900">Assign Teachers</h4>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-xs h-8"
                                    >
                                        <Plus className="w-3 h-3 mr-1" /> Add Teacher
                                    </Button>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="text-xs font-medium text-gray-700">Name</label>
                                            <input
                                                type="text"
                                                placeholder="Teacher name"
                                                className="mt-1 w-full rounded-md border border-gray-300 p-1.5 text-sm focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs font-medium text-gray-700">Email</label>
                                            <input
                                                type="email"
                                                placeholder="teacher@school.edu"
                                                className="mt-1 w-full rounded-md border border-gray-300 p-1.5 text-sm focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <label className="text-xs font-medium text-gray-700">Experience (years)</label>
                                            <input
                                                type="number"
                                                placeholder="0"
                                                className="mt-1 w-full rounded-md border border-gray-300 p-1.5 text-sm focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
                                <Button
                                    variant="outline"
                                    onClick={() => setIsAddSubjectOpen(false)}
                                    className="border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                >
                                    <X className="w-4 h-4 mr-2" />
                                    Cancel
                                </Button>
                                <Button
                                    onClick={() => {
                                        // Logic to add new subject would go here
                                        setIsAddSubjectOpen(false);
                                    }}
                                    className="bg-gradient-to-r from-primary to-indigo-600 text-white hover:from-primary/90 hover:to-indigo-600/90"
                                >
                                    <Save className="w-4 h-4 mr-2" />
                                    Create Subject
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </MainLayout>
    );
} 