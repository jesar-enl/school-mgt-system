"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { BookOpen, GraduationCap, Users, Settings, Award, Clock, Shield, Globe, Mail, Phone, School, Microscope, Palette, Calculator, Book, Music, Trophy, Home as HomeIcon, BookOpenCheck, Building2, Wallet, Library, Menu, X, ChevronDown, ClipboardCheck, User, LogOut, Facebook, Twitter, Instagram, Linkedin, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

export default function Home() {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(() => {
        // Check authentication status on component mount
        const token = Cookies.get('auth_token');
        const role = Cookies.get('user_role');
        setIsAuthenticated(!!token);
        setUserRole(role || null);
    }, []);

    const handleLogout = () => {
        // Remove authentication cookies
        Cookies.remove('auth_token');
        Cookies.remove('user_role');
        setIsAuthenticated(false);
        setUserRole(null);
        router.push('/login');
    };

    // Function to get user display name based on role
    const getUserDisplayName = () => {
        switch (userRole) {
            case 'admin':
                return 'Administrator';
            case 'teacher':
                return 'Teacher';
            case 'staff':
                return 'Staff Member';
            case 'student':
                return 'Student';
            default:
                return 'User';
        }
    };

    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <nav className="fixed w-full z-50">
                {/* Background with multiple layers for depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy-50 via-white to-gray-50" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent" />
                <div className="absolute inset-0 border-b border-navy-200 backdrop-blur-md" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_-30%,rgba(0,31,63,0.15),transparent)]" />

                <div className="relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            {/* Brand */}
                            <div className="flex-shrink-0">
                                <Link href="/" className="group relative flex items-center space-x-2">
                                    <div className="relative">
                                        <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-navy-600/20 via-navy-400/40 to-gray-500/20 blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70 group-hover:opacity-100" />
                                        <h1 className="relative font-bold text-2xl bg-gradient-to-r from-navy-800 via-navy-600 to-gray-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                                            Joyious SS
                                        </h1>
                                    </div>
                                </Link>
                            </div>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex flex-1 justify-center">
                                <div className="flex items-center space-x-8">
                                    {/* Home */}
                                    <Link
                                        href="/"
                                        className="relative group text-lg font-medium text-gray-700 hover:text-navy-700 transition-colors duration-300"
                                    >
                                        <span className="relative flex items-center gap-2">
                                            <HomeIcon className="w-5 h-5" />
                                            Home
                                            <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-navy-600 via-navy-400 to-gray-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                        </span>
                                        <div className="absolute -inset-3 rounded-lg bg-gradient-to-r from-navy-50 to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </Link>

                                    {/* Academic */}
                                    <div className="relative group">
                                        <button className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-primary transition-colors duration-300">
                                            <BookOpenCheck className="w-5 h-5" />
                                            Academic
                                            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                                        </button>
                                        <div className="absolute left-0 mt-2 w-56 opacity-0 translate-y-2 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            <div className="py-2 bg-white/90 backdrop-blur-lg rounded-xl shadow-lg shadow-primary/10 border border-primary/20">
                                                {[
                                                    { href: "/academic/classes", label: "Class Management", icon: <GraduationCap className="w-4 h-4" /> },
                                                    { href: "/academic/subjects", label: "Subject Management", icon: <BookOpen className="w-4 h-4" /> },
                                                    { href: "/academic/curriculum", label: "Curriculum", icon: <BookOpen className="w-4 h-4" /> },
                                                    { href: "/academic/timetable", label: "Timetable", icon: <Clock className="w-4 h-4" /> },
                                                    { href: "/academic/exam", label: "Examinations", icon: <Award className="w-4 h-4" /> },
                                                    { href: "/academic/assessment", label: "Assessment", icon: <ClipboardCheck className="w-4 h-4" /> },
                                                    { href: "/academic/results", label: "Results", icon: <Trophy className="w-4 h-4" /> }
                                                ].map((item) => (
                                                    <Link
                                                        key={item.label}
                                                        href={item.href}
                                                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-indigo-500/10 hover:text-primary transition-all duration-300"
                                                    >
                                                        {item.icon}
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Administration */}
                                    <div className="relative group">
                                        <button className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-primary transition-colors duration-300">
                                            <Building2 className="w-5 h-5" />
                                            Administration
                                            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                                        </button>
                                        <div className="absolute left-0 mt-2 w-56 opacity-0 translate-y-2 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            <div className="py-2 bg-white/90 backdrop-blur-lg rounded-xl shadow-lg shadow-primary/10 border border-primary/20">
                                                {[
                                                    { href: "/admin/teachers", label: "Teacher Management", icon: <Users className="w-4 h-4" /> },
                                                    { href: "/admin/students", label: "Student Management", icon: <GraduationCap className="w-4 h-4" /> },
                                                    { href: "/admin/staff", label: "Staff Management", icon: <Users className="w-4 h-4" /> },
                                                    { href: "/admin/departments", label: "Departments", icon: <Building2 className="w-4 h-4" /> },
                                                    { href: "/admin/attendance", label: "Attendance", icon: <Clock className="w-4 h-4" /> }
                                                ].map((item) => (
                                                    <Link
                                                        key={item.label}
                                                        href={item.href}
                                                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-indigo-500/10 hover:text-primary transition-all duration-300"
                                                    >
                                                        {item.icon}
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Finance */}
                                    <div className="relative group">
                                        <button className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-primary transition-colors duration-300">
                                            <Wallet className="w-5 h-5" />
                                            Finance
                                            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                                        </button>
                                        <div className="absolute left-0 mt-2 w-56 opacity-0 translate-y-2 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            <div className="py-2 bg-white/90 backdrop-blur-lg rounded-xl shadow-lg shadow-primary/10 border border-primary/20">
                                                {[
                                                    { href: "/finance/fees", label: "Fees Management", icon: <Wallet className="w-4 h-4" /> },
                                                    { href: "/finance/payments", label: "Payment History", icon: <Clock className="w-4 h-4" /> },
                                                    { href: "/finance/expenses", label: "Expenses", icon: <Wallet className="w-4 h-4" /> },
                                                    { href: "/finance/salary", label: "Salary Management", icon: <Wallet className="w-4 h-4" /> },
                                                    { href: "/finance/reports", label: "Financial Reports", icon: <BookOpen className="w-4 h-4" /> }
                                                ].map((item) => (
                                                    <Link
                                                        key={item.label}
                                                        href={item.href}
                                                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-indigo-500/10 hover:text-primary transition-all duration-300"
                                                    >
                                                        {item.icon}
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Resources */}
                                    <div className="relative group">
                                        <button className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-primary transition-colors duration-300">
                                            <Library className="w-5 h-5" />
                                            Resources
                                            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                                        </button>
                                        <div className="absolute left-0 mt-2 w-56 opacity-0 translate-y-2 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            <div className="py-2 bg-white/90 backdrop-blur-lg rounded-xl shadow-lg shadow-primary/10 border border-primary/20">
                                                {[
                                                    { href: "/resources/library", label: "Library", icon: <Library className="w-4 h-4" /> },
                                                    { href: "/resources/materials", label: "Study Materials", icon: <BookOpen className="w-4 h-4" /> },
                                                    { href: "/resources/facilities", label: "Facilities", icon: <Building2 className="w-4 h-4" /> },
                                                    { href: "/resources/events", label: "Events Calendar", icon: <Clock className="w-4 h-4" /> },
                                                    { href: "/resources/notices", label: "Notice Board", icon: <BookOpen className="w-4 h-4" /> }
                                                ].map((item) => (
                                                    <Link
                                                        key={item.label}
                                                        href={item.href}
                                                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-indigo-500/10 hover:text-primary transition-all duration-300"
                                                    >
                                                        {item.icon}
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contact */}
                                    <Link
                                        href="/contact"
                                        className="relative group text-lg font-medium text-gray-700 hover:text-primary transition-colors duration-300"
                                    >
                                        <span className="relative flex items-center gap-2">
                                            <Mail className="w-5 h-5" />
                                            Contact
                                            <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                        </span>
                                        <div className="absolute -inset-3 rounded-lg bg-gradient-to-r from-primary/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </Link>
                                </div>
                            </div>

                            {/* Auth Section */}
                            <div className="hidden md:flex items-center space-x-4">
                                {isAuthenticated ? (
                                    <div className="relative">
                                        <button
                                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-navy-50 transition-colors duration-200"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-navy-600 to-gray-600 flex items-center justify-center text-white">
                                                <User className="w-5 h-5" />
                                            </div>
                                            <span className="font-medium text-navy-800">{getUserDisplayName()}</span>
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* User Dropdown Menu */}
                                        {isUserMenuOpen && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1">
                                                <div className="px-4 py-2 border-b border-gray-100">
                                                    <p className="text-sm font-medium text-gray-900">{getUserDisplayName()}</p>
                                                    <p className="text-xs text-gray-500">{userRole}</p>
                                                </div>
                                                <Link
                                                    href="/profile"
                                                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                                >
                                                    <User className="w-4 h-4" />
                                                    Profile
                                                </Link>
                                                <Link
                                                    href="/settings"
                                                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                                >
                                                    <Settings className="w-4 h-4" />
                                                    Settings
                                                </Link>
                                                <button
                                                    onClick={handleLogout}
                                                    className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left"
                                                >
                                                    <LogOut className="w-4 h-4" />
                                                    Logout
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Button
                                        variant="outline"
                                        className="relative group overflow-hidden border-navy-300 hover:border-navy-500 transition-colors duration-300 bg-white/50 hover:bg-white/80"
                                        asChild
                                    >
                                        <Link href="/login">
                                            <span className="relative z-10">Login</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-navy-100 via-navy-200 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </Link>
                                    </Button>
                                )}
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden">
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="p-2 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-indigo-500/10 transition-all duration-300"
                                >
                                    {isMobileMenuOpen ? (
                                        <X className="w-6 h-6 text-gray-700" />
                                    ) : (
                                        <Menu className="w-6 h-6 text-gray-700" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-4 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-lg border-t border-primary/20">
                        {/* Mobile menu items */}
                        <Link href="/" className="flex items-center gap-3 px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-indigo-500/10 rounded-lg transition-all duration-300">
                            <HomeIcon className="w-5 h-5" />
                            Home
                        </Link>

                        {/* Academic Dropdown */}
                        <div className="space-y-2">
                            <div className="px-3 py-2 text-base font-medium text-gray-700 flex items-center gap-3">
                                <BookOpenCheck className="w-5 h-5" />
                                Academic
                            </div>
                            <div className="pl-11 space-y-1">
                                <Link
                                    href="/academic/classes"
                                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-indigo-500/10 rounded-lg transition-all duration-300"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <GraduationCap className="w-4 h-4" />
                                    Class Management
                                </Link>
                                <Link
                                    href="/academic/subjects"
                                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-indigo-500/10 rounded-lg transition-all duration-300"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <BookOpen className="w-4 h-4" />
                                    Subject Management
                                </Link>
                                <Link
                                    href="/academic/curriculum"
                                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-indigo-500/10 rounded-lg transition-all duration-300"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <BookOpen className="w-4 h-4" />
                                    Curriculum
                                </Link>
                                <Link
                                    href="/academic/timetable"
                                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-indigo-500/10 rounded-lg transition-all duration-300"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Clock className="w-4 h-4" />
                                    Timetable
                                </Link>
                                <Link
                                    href="/academic/exam"
                                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-indigo-500/10 rounded-lg transition-all duration-300"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Award className="w-4 h-4" />
                                    Examinations
                                </Link>
                                <Link
                                    href="/academic/assessment"
                                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-indigo-500/10 rounded-lg transition-all duration-300"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <ClipboardCheck className="w-4 h-4" />
                                    Assessment
                                </Link>
                                <Link
                                    href="/academic/results"
                                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-indigo-500/10 rounded-lg transition-all duration-300"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Trophy className="w-4 h-4" />
                                    Results
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Auth Section */}
                        <div className="pt-4 space-y-2">
                            {isAuthenticated ? (
                                <>
                                    <div className="px-3 py-2 border-t border-gray-200">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-indigo-600 flex items-center justify-center text-white">
                                                <User className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{getUserDisplayName()}</p>
                                                <p className="text-sm text-gray-500">{userRole}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <Link
                                                href="/profile"
                                                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                <User className="w-4 h-4" />
                                                Profile
                                            </Link>
                                            <Link
                                                href="/settings"
                                                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                <Settings className="w-4 h-4" />
                                                Settings
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    handleLogout();
                                                    setIsMobileMenuOpen(false);
                                                }}
                                                className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left rounded-lg"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Button
                                    variant="outline"
                                    className="w-full relative group overflow-hidden border-primary/30 hover:border-primary/50 transition-colors duration-300 bg-white/50 hover:bg-white/80"
                                    asChild
                                >
                                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                        <span className="relative z-10">Login</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-indigo-500/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-12">
                {/* Hero Section */}
                <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
                    {/* Enhanced background effects with school colors */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-navy-50 to-gray-100" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,31,63,0.15),transparent_60%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(128,128,128,0.15),transparent_60%)]" />
                    <div className="absolute top-20 right-20 w-32 h-32 bg-navy-600/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 left-20 w-40 h-40 bg-gray-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                    {/* School badge/crest decoration */}
                    <div className="absolute top-1/4 right-10 w-40 h-40 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center rotate-12 transform hover:rotate-0 transition-transform duration-500">
                        <div className="w-32 h-32 rounded-full border-4 border-navy-600 flex items-center justify-center bg-white">
                            <div className="text-center">
                                <div className="text-navy-800 font-bold">EST.</div>
                                <div className="text-2xl font-bold text-navy-600">1990</div>
                            </div>
                        </div>
                    </div>

                    <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-8 relative">
                                {/* Decorative line */}
                                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-navy-500 to-gray-500" />

                                <div className="space-y-6 pl-6">
                                    <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl relative">
                                        Welcome to{" "}
                                        <span className="inline-block bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent animate-gradient">
                                            Joyious
                                        </span>{" "}
                                        Secondary School
                                    </h1>
                                    <p className="text-xl text-gray-700 relative group">
                                        <span className="block text-2xl font-semibold text-navy-800 mb-2">Excellence in Education</span>
                                        Nurturing Excellence in Both Ordinary and Advanced Level Education
                                        <span className="block mt-4 font-medium text-gray-600">
                                            Join us in our commitment to academic excellence, character development, and holistic growth.
                                        </span>
                                    </p>

                                    {/* Key Statistics */}
                                    <div className="grid grid-cols-3 gap-4 mt-8">
                                        <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-navy-200 hover:border-navy-400 transition-colors duration-300">
                                            <div className="text-3xl font-bold text-navy-800">30+</div>
                                            <div className="text-sm text-gray-600">Years of Excellence</div>
                                        </div>
                                        <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-navy-200 hover:border-navy-400 transition-colors duration-300">
                                            <div className="text-3xl font-bold text-navy-800">95%</div>
                                            <div className="text-sm text-gray-600">Pass Rate</div>
                                        </div>
                                        <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-navy-200 hover:border-navy-400 transition-colors duration-300">
                                            <div className="text-3xl font-bold text-navy-800">1:15</div>
                                            <div className="text-sm text-gray-600">Teacher Ratio</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 pl-6">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-navy-800 to-navy-600 hover:from-navy-700 hover:to-navy-500 text-white shadow-lg shadow-navy-600/25 hover:shadow-xl hover:shadow-navy-600/30 transition-all duration-300 relative overflow-hidden group"
                                        asChild
                                    >
                                        <Link href="#about">
                                            Discover More
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                        </Link>
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-2 border-navy-300 hover:border-navy-500 hover:bg-navy-50 text-navy-700 transition-all duration-300 relative overflow-hidden group"
                                        asChild
                                    >
                                        <Link href="#contact">
                                            Get in Touch
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-navy-100 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Enhanced Image Section */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-navy-600/20 via-navy-400/20 to-gray-500/20 rounded-3xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
                                <div className="relative">
                                    {/* Main Image */}
                                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy-100 via-white to-gray-100 p-1 transition-transform duration-500 group-hover:scale-[1.02]">
                                        <div className="w-full h-full rounded-xl bg-white/50 backdrop-blur-sm shadow-xl relative overflow-hidden">
                                            <Image
                                                src="/school-building.jpg"
                                                alt="Joyious Secondary School Building"
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-xl"
                                            />
                                        </div>
                                    </div>

                                    {/* Floating Achievement Cards */}
                                    <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-navy-200 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                                        <div className="text-navy-800 font-semibold">Best O'Level Results</div>
                                        <div className="text-gray-600 text-sm">District Winner 2023</div>
                                    </div>
                                    <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-navy-200 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                                        <div className="text-navy-800 font-semibold">Top A'Level School</div>
                                        <div className="text-gray-600 text-sm">Regional Rankings 2023</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-24 bg-white relative overflow-hidden">
                    {/* Enhanced decorative elements with more dynamic effects */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.08),transparent_70%)]" />
                    <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(var(--primary-rgb),0.05)_0deg,transparent_60deg,rgba(99,102,241,0.05)_120deg,transparent_180deg,rgba(var(--primary-rgb),0.05)_240deg,transparent_300deg)]" />
                    <div className="absolute top-20 left-[10%] w-28 h-28 border-2 border-primary/10 rounded-full animate-spin-slow" />
                    <div className="absolute bottom-20 right-[10%] w-24 h-24 border border-indigo-500/10 rounded-full animate-spin-slow delay-1000" />
                    <div className="absolute top-1/3 right-[25%] w-4 h-4 bg-primary/20 rounded-full animate-float" />
                    <div className="absolute bottom-1/3 left-[25%] w-6 h-6 bg-indigo-500/20 rounded-full animate-float delay-700" />

                    {/* Additional decorative elements */}
                    <div className="absolute top-1/2 left-[15%] w-32 h-32 bg-gradient-to-br from-primary/5 to-indigo-500/5 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute bottom-1/2 right-[15%] w-40 h-40 bg-gradient-to-bl from-indigo-500/5 to-primary/5 rounded-full blur-2xl animate-pulse delay-500" />

                    <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Enhanced Header Section */}
                        <div className="max-w-4xl mx-auto text-center mb-20 relative">
                            <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/10 rounded-full animate-pulse" />
                            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-indigo-500/10 rounded-full animate-pulse delay-700" />
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                            <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-8 relative inline-block group">
                                About Joyious Secondary School
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-indigo-600/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </h2>
                            <p className="text-xl text-gray-600 relative z-10 max-w-3xl mx-auto leading-relaxed">
                                Founded with a vision to provide quality education, Joyious Secondary School
                                offers both Ordinary and Advanced Level programs. We are committed to academic
                                excellence, character development, and holistic growth of our students.
                            </p>
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                        </div>

                        {/* Vision & Mission Section with Enhanced Design */}
                        <div className="grid md:grid-cols-2 gap-12 mb-20">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
                                <div className="relative p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-primary/10">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl -z-10" />
                                    <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent flex items-center gap-3">
                                        <div className="p-3 bg-primary/5 rounded-xl">
                                            <BookOpen className="w-7 h-7 text-primary transform group-hover:rotate-6 transition-transform duration-300" />
                                        </div>
                                        Our Vision
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 text-lg">
                                        To be a leading institution in providing quality education that nurtures academic excellence,
                                        innovation, and character development, preparing students to become responsible global citizens
                                        and future leaders.
                                    </p>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-3xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
                                <div className="relative p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-indigo-500/10">
                                    <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-xl -z-10" />
                                    <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent flex items-center gap-3">
                                        <div className="p-3 bg-indigo-500/5 rounded-xl">
                                            <Award className="w-7 h-7 text-indigo-500 transform group-hover:rotate-6 transition-transform duration-300" />
                                        </div>
                                        Our Mission
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 text-lg">
                                        To provide a comprehensive educational experience that fosters academic excellence,
                                        critical thinking, creativity, and moral values in a supportive and inclusive learning
                                        environment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Objectives Section */}
                        <div className="mb-20 relative">
                            {/* Background decorations */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-indigo-500/5 rounded-3xl -z-10" />
                            <div className="absolute -top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute -bottom-10 left-10 w-20 h-20 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500" />

                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent relative inline-block">
                                    Our Objectives
                                    <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-primary/30 to-indigo-500/30" />
                                </h3>
                                <p className="mt-6 text-gray-600 text-lg">
                                    We are committed to providing a comprehensive educational experience that prepares students for success in their academic and personal lives.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {objectives.map((objective, index) => (
                                    <div
                                        key={index}
                                        className="relative group p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-primary/10"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        {/* Enhanced decorative elements */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-indigo-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.1),transparent_50%)] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                                        <div className="relative flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 via-indigo-500/20 to-purple-500/20 flex items-center justify-center shrink-0 mt-1 transform group-hover:rotate-6 transition-transform duration-300 group-hover:scale-110">
                                                <div className="text-primary group-hover:text-indigo-600 transition-colors duration-300">
                                                    {objective.icon}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold bg-gradient-to-r from-primary via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                                                    {objective.title}
                                                </h4>
                                                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                                    {objective.text}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Enhanced corner decorations with gradients */}
                                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-indigo-500/50" />
                                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-purple-500/50" />
                                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-purple-500/50" />
                                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-indigo-500/50" />

                                        {/* Floating dots decoration */}
                                        <div className="absolute -top-2 -right-2 w-2 h-2 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping" />
                                        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-indigo-500/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping delay-300" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Enhanced Features Grid */}
                        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                            {aboutFeatures.map((feature, index) => (
                                <div
                                    key={feature.title}
                                    className="relative group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center"
                                    style={{ animationDelay: `${index * 200}ms` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-indigo-500/5 to-primary/5 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                                    <div className="relative">
                                        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-indigo-500/10 p-4 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 group-hover:scale-110">
                                            <div className="text-primary transform group-hover:scale-110 transition-transform duration-500">
                                                {feature.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                            {feature.description}
                                        </p>
                                    </div>
                                    {/* Enhanced corner decorations */}
                                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Classes Section */}
                <section id="classes" className="py-24 bg-gradient-to-b from-white via-primary/5 to-primary/10 relative overflow-hidden">
                    {/* Enhanced background effects */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.08),transparent_70%)]" />
                    <div className="absolute top-20 left-[10%] w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute bottom-20 right-[10%] w-40 h-40 bg-indigo-500/5 rounded-full blur-2xl animate-pulse delay-700" />

                    <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-16 relative">
                            Our Classes
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary/50 to-indigo-600/50 rounded-full" />
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* O-Level Classes with enhanced navy blue theme */}
                            <div className="space-y-8">
                                <h3 className="text-2xl font-semibold text-navy-900 mb-8 relative inline-block">
                                    Ordinary Level
                                    <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-navy-600 rounded-full" />
                                </h3>
                                {oLevelClasses.map((level, index) => (
                                    <div
                                        key={level.class}
                                        className="group relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]"
                                        style={{ animationDelay: `${index * 150}ms` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/5 via-navy-600/5 to-navy-900/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-navy-50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                        <div className="relative flex items-center space-x-4">
                                            <div className="w-12 h-12 rounded-lg bg-navy-100 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                                                <GraduationCap className="w-6 h-6 text-navy-600 transform group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-navy-900 group-hover:text-navy-700 transition-colors duration-300">{level.class}</h4>
                                                <p className="text-navy-600 group-hover:text-navy-800 transition-colors duration-300">{level.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* A-Level Classes with gray theme */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6 relative inline-block">
                                    Advanced Level
                                    <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gray-600 rounded-full" />
                                </h3>
                                {aLevelClasses.map((level) => (
                                    <div
                                        key={level.class}
                                        className="group relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative flex items-center space-x-4">
                                            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                                                <Award className="w-6 h-6 text-gray-600 transform group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">{level.class}</h4>
                                                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{level.description}</p>
                                            </div>
                                        </div>
                                        {/* Enhanced corner decorations */}
                                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-300 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gray-300 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gray-300 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-300 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Enhanced section title with new color scheme */}
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h3 className="text-3xl font-bold text-navy-900 relative inline-block">
                                Our Academic Programs
                                <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-navy-600 via-gray-500 to-navy-600" />
                            </h3>
                            <p className="mt-6 text-gray-700 text-lg">
                                Offering comprehensive education at both O'Level and A'Level, preparing students for academic excellence and future success.
                            </p>
                        </div>

                        {/* Background decorations with updated colors */}
                        <div className="absolute -top-10 right-10 w-20 h-20 bg-navy-600/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute -bottom-10 left-10 w-20 h-20 bg-gray-500/10 rounded-full blur-3xl animate-pulse delay-500" />
                    </div>
                </section>

                {/* Gallery Section */}
                <section id="gallery" className="py-24 bg-gradient-to-b from-white via-primary/5 to-primary/10 relative overflow-hidden">
                    {/* Enhanced background effects */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.08),transparent_70%)]" />
                    <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />

                    <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-16 relative">
                            School Gallery
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary/50 to-indigo-600/50 rounded-full" />
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((index) => (
                                <div
                                    key={index}
                                    className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <Image
                                        src={`/gallery-${index}.jpg`}
                                        alt={`School Gallery Image ${index}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute inset-0 flex items-end p-6">
                                        <div className="text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                            <h3 className="text-lg font-semibold">Gallery Image {index}</h3>
                                            <p className="text-sm text-gray-200">Click to view larger image</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-24 bg-white relative overflow-hidden">
                    {/* Enhanced background effects */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05),transparent_70%)]" />
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />

                    <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-16 relative">
                            Contact Us
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary/50 to-indigo-600/50 rounded-full" />
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div className="prose prose-lg">
                                    <h3 className="text-2xl font-semibold text-gray-900 relative inline-block">
                                        Get in Touch
                                        <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary/30 rounded-full" />
                                    </h3>
                                    <p className="text-gray-600">
                                        We'd love to hear from you. Please feel free to contact us with any questions about admissions,
                                        academics, or general inquiries.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { icon: <School className="w-5 h-5 text-primary" />, title: "Address", content: "123 School Road, Your City" },
                                        { icon: <Mail className="w-5 h-5 text-primary" />, title: "Email", content: "info@joyiousss.com" },
                                        { icon: <Phone className="w-5 h-5 text-primary" />, title: "Phone", content: "+256 123 456 789" }
                                    ].map((item, index) => (
                                        <div
                                            key={item.title}
                                            className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                                            style={{ animationDelay: `${index * 150}ms` }}
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-medium group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                                                <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">{item.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-indigo-500/20 to-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70" />
                                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                                    <form className="space-y-6">
                                        {[
                                            { label: "Name", type: "text", placeholder: "Your name" },
                                            { label: "Email", type: "email", placeholder: "Your email" }
                                        ].map((field) => (
                                            <div key={field.label} className="space-y-2">
                                                <label className="text-sm font-medium text-gray-700 block">{field.label}</label>
                                                <input
                                                    type={field.type}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-gray-300"
                                                    placeholder={field.placeholder}
                                                />
                                            </div>
                                        ))}
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700 block">Message</label>
                                            <textarea
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-gray-300"
                                                rows={4}
                                                placeholder="Your message"
                                            ></textarea>
                                        </div>
                                        <Button
                                            className="w-full bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 relative overflow-hidden group"
                                        >
                                            <span className="relative z-10">Send Message</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-br from-navy-50 via-white to-gray-50 border-t border-navy-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {/* School Info */}
                        <div className="md:col-span-2">
                            <Link href="/" className="inline-block group mb-6">
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent">
                                    Joyious Secondary School
                                </h3>
                            </Link>
                            <p className="text-gray-700 mb-6">
                                Nurturing Excellence in O'Level and A'Level Education, Building Character, Shaping Future Leaders
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="p-2 rounded-full bg-navy-100 hover:bg-navy-200 text-navy-600 transition-colors">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 rounded-full bg-navy-100 hover:bg-navy-200 text-navy-600 transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 rounded-full bg-navy-100 hover:bg-navy-200 text-navy-600 transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 rounded-full bg-navy-100 hover:bg-navy-200 text-navy-600 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-navy-900 mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/about" className="text-gray-600 hover:text-navy-700 transition-colors">About Us</Link>
                                </li>
                                <li>
                                    <Link href="/academic" className="text-gray-600 hover:text-navy-700 transition-colors">Academics</Link>
                                </li>
                                <li>
                                    <Link href="/admissions" className="text-gray-600 hover:text-navy-700 transition-colors">Admissions</Link>
                                </li>
                                <li>
                                    <Link href="/news" className="text-gray-600 hover:text-navy-700 transition-colors">News & Events</Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-gray-600 hover:text-navy-700 transition-colors">Contact Us</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold text-navy-900 mb-4">Contact Us</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start space-x-3 text-gray-600 hover:text-navy-700 transition-colors">
                                    <MapPin className="w-5 h-5 text-navy-600 flex-shrink-0 mt-0.5" />
                                    <span>123 School Street, City, Country</span>
                                </li>
                                <li className="flex items-center space-x-3 text-gray-600 hover:text-navy-700 transition-colors">
                                    <Phone className="w-5 h-5 text-navy-600" />
                                    <span>+1 234 567 890</span>
                                </li>
                                <li className="flex items-center space-x-3 text-gray-600 hover:text-navy-700 transition-colors">
                                    <Mail className="w-5 h-5 text-navy-600" />
                                    <span>info@joyious.edu</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 mt-8 border-t border-navy-200">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="text-sm text-gray-600">
                                © {new Date().getFullYear()} Joyious Secondary School. All rights reserved.
                            </div>
                            <div className="flex space-x-6 text-sm">
                                <Link href="/privacy" className="text-gray-600 hover:text-navy-700 transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="text-gray-600 hover:text-navy-700 transition-colors">
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

const aboutFeatures = [
    {
        title: "Academic Excellence",
        description: "Committed to providing high-quality education with experienced teachers and modern facilities.",
        icon: <BookOpen className="w-6 h-6 text-primary" />,
    },
    {
        title: "Holistic Development",
        description: "Focus on both academic and personal growth through various co-curricular activities.",
        icon: <Users className="w-6 h-6 text-primary" />,
    },
    {
        title: "Modern Facilities",
        description: "Well-equipped laboratories, library, and sports facilities to support learning.",
        icon: <School className="w-6 h-6 text-primary" />,
    },
];

const oLevelClasses = [
    {
        class: "Senior One (S.1)",
        description: "Foundation year focusing on core subjects and study skills"
    },
    {
        class: "Senior Two (S.2)",
        description: "Building on fundamentals with increased subject complexity"
    },
    {
        class: "Senior Three (S.3)",
        description: "Preparation year for O-Level subject selection"
    },
    {
        class: "Senior Four (S.4)",
        description: "O-Level completion year with UCE examination preparation"
    },
];

const aLevelClasses = [
    {
        class: "Senior Five (S.5)",
        description: "Specialized A-Level subjects with in-depth study"
    },
    {
        class: "Senior Six (S.6)",
        description: "Final year with UACE examination preparation"
    }
];

const objectives = [
    {
        icon: <GraduationCap className="w-5 h-5" />,
        title: "Academic Excellence",
        text: "To provide high-quality education that meets international standards and prepares students for global opportunities."
    },
    {
        icon: <Users className="w-5 h-5" />,
        title: "Collaborative Learning",
        text: "To foster a supportive learning environment that encourages collaboration, creativity, and critical thinking."
    },
    {
        icon: <BookOpen className="w-5 h-5" />,
        title: "Balanced Curriculum",
        text: "To maintain a balanced curriculum that emphasizes both academic excellence and practical skills development."
    },
    {
        icon: <Shield className="w-5 h-5" />,
        title: "Character Development",
        text: "To instill strong moral values, ethics, and leadership qualities in our students."
    },
    {
        icon: <Globe className="w-5 h-5" />,
        title: "Global Perspective",
        text: "To promote cultural awareness and prepare students to thrive in an increasingly interconnected world."
    },
    {
        icon: <Award className="w-5 h-5" />,
        title: "Individual Growth",
        text: "To recognize and nurture individual talents while promoting overall personal development."
    }
]; 