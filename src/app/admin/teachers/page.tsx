"use client";

import { useState } from "react";
import MainLayout from "@/src/components/layout/MainLayout";
import { Button } from "@/src/components/ui/button";
import {
    Users,
    Plus,
    Search,
    Mail,
    Phone,
    BookOpen,
    X,
    User,
    Briefcase,
    Building,
    Calendar,
    BookOpenCheck,
    GraduationCap,
    Hash,
    LockKeyhole,
    Eye,
    EyeOff,
    CheckCircle,
    AlertCircle
} from "lucide-react";

export default function TeacherManagement() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState("");

    // Form states
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        department: "Mathematics",
        qualification: "",
        joinDate: "",
        address: "",
        gender: "",
        employeeId: "",
        username: "",
        password: "",
        confirmPassword: "",
        subjects: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Auto-generate username when first and last name are entered
        if (name === "firstName" || name === "lastName") {
            if (formData.firstName && name === "lastName") {
                const autoUsername = `${formData.firstName.toLowerCase()}.${value.toLowerCase()}`;
                setFormData(prev => ({
                    ...prev,
                    username: autoUsername
                }));
            } else if (formData.lastName && name === "firstName") {
                const autoUsername = `${value.toLowerCase()}.${formData.lastName.toLowerCase()}`;
                setFormData(prev => ({
                    ...prev,
                    username: autoUsername
                }));
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (formData.password !== formData.confirmPassword) {
            setFormError("Passwords do not match");
            return;
        }

        if (formData.password.length < 8) {
            setFormError("Password must be at least 8 characters");
            return;
        }

        // In a real app, this would be an API call to create the teacher
        // For demo, we'll simulate success after a delay
        setFormError("");

        setTimeout(() => {
            console.log("Teacher created:", formData);
            setFormSubmitted(true);

            // Reset form after 2 seconds and close modal
            setTimeout(() => {
                setFormSubmitted(false);
                setIsModalOpen(false);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    department: "Mathematics",
                    qualification: "",
                    joinDate: "",
                    address: "",
                    gender: "",
                    employeeId: "",
                    username: "",
                    password: "",
                    confirmPassword: "",
                    subjects: []
                });
            }, 2000);
        }, 1000);
    };

    return (
        <MainLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                        Teacher Management
                    </h1>
                    <p className="text-xl text-gray-600">
                        Manage teaching staff, assignments, and performance tracking
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
                                    placeholder="Search teachers..."
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <Button
                                className="flex-1 bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
                                onClick={() => setIsModalOpen(true)}
                            >
                                <Plus className="w-4 h-4" />
                                Add New Teacher
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Teacher Card Template */}
                    {["John Doe", "Jane Smith", "Robert Johnson"].map((name, index) => (
                        <div
                            key={name}
                            className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="p-6 relative">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                                        <Users className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                                        <p className="text-sm text-gray-500">Mathematics Department</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Mail className="w-4 h-4" />
                                        <span>{name.toLowerCase().replace(" ", ".")}@school.com</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Phone className="w-4 h-4" />
                                        <span>+256 7XX XXX XXX</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <BookOpen className="w-4 h-4" />
                                        <span>4 Classes Assigned</span>
                                    </div>
                                </div>
                                <div className="mt-6 flex gap-2">
                                    <Button
                                        variant="outline"
                                        className="flex-1 border-primary/20 hover:border-primary/40"
                                    >
                                        View Profile
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

            {/* Teacher Creation Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
                    <div className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 shadow-xl">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center border-b pb-4 mb-6">
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
                                Add New Teacher
                            </h2>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="rounded-full w-8 h-8 p-0"
                                onClick={() => setIsModalOpen(false)}
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </div>

                        {formSubmitted ? (
                            <div className="flex flex-col items-center justify-center p-8">
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                    <CheckCircle className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Teacher Added Successfully</h3>
                                <p className="text-gray-600 mb-4 text-center">
                                    The new teacher account has been created and they can now log in to the system.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {formError && (
                                    <div className="bg-red-50 text-red-500 p-4 rounded-lg flex items-start gap-3 border border-red-100">
                                        <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                        <p>{formError}</p>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <User className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                                                placeholder="John"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <User className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                                                placeholder="Doe"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Email</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                                                placeholder="john.doe@joyious.edu"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Phone className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                                                placeholder="+256 7XX XXX XXX"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Department</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Building className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <select
                                                name="department"
                                                value={formData.department}
                                                onChange={handleInputChange}
                                                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                                                required
                                            >
                                                <option value="Mathematics">Mathematics</option>
                                                <option value="Science">Science</option>
                                                <option value="Languages">Languages</option>
                                                <option value="Humanities">Humanities</option>
                                                <option value="Arts">Arts</option>
                                                <option value="Physical Education">Physical Education</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Qualification</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <GraduationCap className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                name="qualification"
                                                value={formData.qualification}
                                                onChange={handleInputChange}
                                                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                                                placeholder="Bachelor of Education"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Join Date</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Calendar className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="date"
                                                name="joinDate"
                                                value={formData.joinDate}
                                                onChange={handleInputChange}
                                                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Employee ID</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Hash className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                name="employeeId"
                                                value={formData.employeeId}
                                                onChange={handleInputChange}
                                                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                                                placeholder="TCH-2024-001"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Account Information Section */}
                                <div className="border-t pt-6 mt-8">
                                    <h3 className="text-lg font-semibold mb-4">Login Credentials</h3>
                                    <p className="mb-6 text-sm text-gray-600">
                                        Create login credentials for this teacher. They will use these credentials to access the system.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Username</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <User className="w-5 h-5 text-gray-400" />
                                                </div>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    value={formData.username}
                                                    onChange={handleInputChange}
                                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                                                    placeholder="john.doe"
                                                    required
                                                />
                                            </div>
                                            <p className="text-xs text-gray-500">Auto-generated from first and last name</p>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Password</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <LockKeyhole className="w-5 h-5 text-gray-400" />
                                                </div>
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleInputChange}
                                                    className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                                                    placeholder="••••••••"
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {showPassword ? (
                                                        <EyeOff className="h-5 w-5 text-gray-400" />
                                                    ) : (
                                                        <Eye className="h-5 w-5 text-gray-400" />
                                                    )}
                                                </button>
                                            </div>
                                            <p className="text-xs text-gray-500">Password must be at least 8 characters</p>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <LockKeyhole className="w-5 h-5 text-gray-400" />
                                                </div>
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    name="confirmPassword"
                                                    value={formData.confirmPassword}
                                                    onChange={handleInputChange}
                                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                                                    placeholder="••••••••"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Form Actions */}
                                <div className="border-t pt-6 flex justify-end gap-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="border-gray-200"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="bg-primary hover:bg-primary/90 text-white"
                                    >
                                        Create Teacher Account
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </MainLayout>
    );
} 