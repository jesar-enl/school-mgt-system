"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, HomeIcon, BookOpenCheck, Building2, Wallet, Library, Mail, ChevronDown, GraduationCap, BookOpen, Clock, Award, Trophy, Users, ClipboardCheck, LogOut, User, Settings, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Cookies from 'js-cookie';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
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

    const navLinks = [
        { name: "Home", href: "/", icon: <HomeIcon className="w-5 h-5" /> },
        {
            name: "Academic",
            href: "/academic",
            icon: <BookOpenCheck className="w-5 h-5" />,
            dropdownItems: [
                { href: "/academic/classes", label: "Class Management", icon: <GraduationCap className="w-4 h-4" /> },
                { href: "/academic/subjects", label: "Subject Management", icon: <BookOpen className="w-4 h-4" /> },
                { href: "/academic/curriculum", label: "Curriculum", icon: <BookOpen className="w-4 h-4" /> },
                { href: "/academic/timetable", label: "Timetable", icon: <Clock className="w-4 h-4" /> },
                { href: "/academic/exam", label: "Examinations", icon: <Award className="w-4 h-4" /> },
                { href: "/academic/assessment", label: "Assessment", icon: <ClipboardCheck className="w-4 h-4" /> },
                { href: "/academic/results", label: "Results", icon: <Trophy className="w-4 h-4" /> }
            ]
        },
        {
            name: "Administration",
            href: "/admin",
            icon: <Building2 className="w-5 h-5" />,
            dropdownItems: [
                { href: "/admin/teachers", label: "Teacher Management", icon: <Users className="w-4 h-4" /> },
                { href: "/admin/students", label: "Student Management", icon: <GraduationCap className="w-4 h-4" /> },
                { href: "/admin/staff", label: "Staff Management", icon: <Users className="w-4 h-4" /> },
                { href: "/admin/departments", label: "Departments", icon: <Building2 className="w-4 h-4" /> },
                { href: "/admin/attendance", label: "Attendance", icon: <Clock className="w-4 h-4" /> }
            ]
        },
        {
            name: "Finance",
            href: "/finance",
            icon: <Wallet className="w-5 h-5" />,
            dropdownItems: [
                { href: "/finance/fees", label: "Fees Management", icon: <Wallet className="w-4 h-4" /> },
                { href: "/finance/payments", label: "Payment History", icon: <Clock className="w-4 h-4" /> },
                { href: "/finance/expenses", label: "Expenses", icon: <Wallet className="w-4 h-4" /> },
                { href: "/finance/salary", label: "Salary Management", icon: <Wallet className="w-4 h-4" /> },
                { href: "/finance/reports", label: "Financial Reports", icon: <BookOpen className="w-4 h-4" /> }
            ]
        },
        {
            name: "Resources",
            href: "/resources",
            icon: <Library className="w-5 h-5" />,
            dropdownItems: [
                { href: "/resources/library", label: "Library", icon: <Library className="w-4 h-4" /> },
                { href: "/resources/materials", label: "Study Materials", icon: <BookOpen className="w-4 h-4" /> },
                { href: "/resources/facilities", label: "Facilities", icon: <Building2 className="w-4 h-4" /> },
                { href: "/resources/events", label: "Events Calendar", icon: <Clock className="w-4 h-4" /> },
                { href: "/resources/notices", label: "Notice Board", icon: <BookOpen className="w-4 h-4" /> }
            ]
        },
        { name: "Contact", href: "/contact", icon: <Mail className="w-5 h-5" /> }
    ];

    return (
        <div className="min-h-screen flex flex-col">
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
                            <div className="hidden md:flex items-center justify-between flex-1 ml-8">
                                <div className="flex items-center space-x-8">
                                    {navLinks.map((link) => (
                                        <div key={link.name} className="relative group">
                                            {link.dropdownItems ? (
                                                <>
                                                    <button className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-navy-700 transition-colors duration-300">
                                                        {link.icon}
                                                        {link.name}
                                                        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                                                    </button>
                                                    <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                                        <div className="py-2 bg-white/90 backdrop-blur-lg rounded-xl shadow-lg shadow-navy-600/10 border border-navy-200">
                                                            {link.dropdownItems.map((item) => (
                                                                <Link
                                                                    key={item.label}
                                                                    href={item.href}
                                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-navy-50 hover:to-gray-50 hover:text-navy-700 transition-all duration-300"
                                                                >
                                                                    {item.icon}
                                                                    {item.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    className="relative group text-lg font-medium text-gray-700 hover:text-navy-700 transition-colors duration-300"
                                                >
                                                    <span className="relative flex items-center gap-2">
                                                        {link.icon}
                                                        {link.name}
                                                        <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-navy-600 via-navy-400 to-gray-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                                    </span>
                                                    <div className="absolute -inset-3 rounded-lg bg-gradient-to-r from-navy-50 to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Auth Section */}
                                <div className="flex items-center space-x-4">
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
                                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-navy-200 py-1">
                                                    <div className="px-4 py-2 border-b border-navy-200">
                                                        <p className="text-sm font-medium text-navy-900">{getUserDisplayName()}</p>
                                                        <p className="text-xs text-gray-500">{userRole}</p>
                                                    </div>
                                                    <Link
                                                        href="/profile"
                                                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-navy-50"
                                                    >
                                                        <User className="w-4 h-4" />
                                                        Profile
                                                    </Link>
                                                    <Link
                                                        href="/settings"
                                                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-navy-50"
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
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden">
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="p-2 rounded-lg hover:bg-navy-50 transition-all duration-300"
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
                    <div className="px-4 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-lg border-t border-navy-200">
                        {/* Mobile menu items */}
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.dropdownItems ? (
                                    <div className="space-y-2">
                                        <div className="px-3 py-2 text-base font-medium text-gray-700 flex items-center gap-3">
                                            {link.icon}
                                            {link.name}
                                        </div>
                                        <div className="pl-11 space-y-1">
                                            {link.dropdownItems.map((item) => (
                                                <Link
                                                    key={item.label}
                                                    href={item.href}
                                                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-navy-700 hover:bg-navy-50 rounded-lg transition-all duration-300"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {item.icon}
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-3 px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-700 hover:bg-navy-50 rounded-lg transition-all duration-300"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.icon}
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* Mobile Auth Section */}
                        <div className="pt-4 space-y-2">
                            {isAuthenticated ? (
                                <>
                                    <div className="px-3 py-2 border-t border-navy-200">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-navy-600 to-gray-600 flex items-center justify-center text-white">
                                                <User className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-navy-900">{getUserDisplayName()}</p>
                                                <p className="text-sm text-gray-500">{userRole}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <Link
                                                href="/profile"
                                                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-navy-50 rounded-lg"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                <User className="w-4 h-4" />
                                                Profile
                                            </Link>
                                            <Link
                                                href="/settings"
                                                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-navy-50 rounded-lg"
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
                                    className="w-full relative group overflow-hidden border-navy-300 hover:border-navy-500 transition-colors duration-300 bg-white/50 hover:bg-white/80"
                                    asChild
                                >
                                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                        <span className="relative z-10">Login</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-navy-100 via-navy-200 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow pt-16">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-br from-navy-200 via-white to-gray-50 border-t border-navy-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {/* School Info */}
                        <div className="md:col-span-2">
                            <Link href="/" className="inline-block group mb-6">
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-gray-700">
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