"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { BookOpenCheck, LockKeyhole, LogIn, Mail } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Cookies from 'js-cookie';

export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            // Here you would implement your actual authentication logic
            // For demo purposes, we're simulating the authentication
            // In a real application, this would be an API call to your backend

            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Example role detection based on email pattern (for demo only)
            let userRole = "student";
            let redirectPath = "/student/dashboard";

            if (email.includes("admin")) {
                userRole = "admin";
                redirectPath = "/admin";
            } else if (email.includes("teacher")) {
                userRole = "teacher";
                redirectPath = "/teacher/dashboard";
            } else if (email.includes("staff")) {
                userRole = "staff";
                redirectPath = "/staff/dashboard";
            }

            // Set authentication cookies
            // In a real application, these would be secure HTTP-only cookies set by the server
            Cookies.set('auth_token', 'demo_token_' + Math.random(), { expires: 7 });
            Cookies.set('user_role', userRole, { expires: 7 });

            // Check if there's a redirect URL in the query params
            const from = searchParams.get('from');
            if (from && from.startsWith('/')) {
                // Check if the user has access to the requested page based on their role
                const canAccess = checkRoleAccess(userRole, from);
                if (canAccess) {
                    router.push(from);
                } else {
                    router.push(redirectPath);
                }
            } else {
                router.push(redirectPath);
            }
        } catch (err) {
            setError("Invalid email or password. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    // Function to check if a user role has access to a specific path
    const checkRoleAccess = (role: string, path: string): boolean => {
        // Admin has access to everything
        if (role === "admin") return true;

        // Check path patterns for different roles
        if (role === "student") {
            const allowedPaths = [
                "/student",
                "/academic/results",
                "/academic/assessment",
                "/academic/timetable",
                "/resources/materials",
            ];
            return allowedPaths.some(allowedPath => path.startsWith(allowedPath));
        }

        if (role === "teacher") {
            const allowedPaths = [
                "/teacher",
                "/academic/classes",
                "/academic/assessment",
                "/academic/timetable",
                "/academic/results",
                "/resources/materials",
            ];
            return allowedPaths.some(allowedPath => path.startsWith(allowedPath));
        }

        if (role === "staff") {
            const allowedPaths = [
                "/staff",
                "/admin/attendance",
                "/finance/fees",
                "/resources/facilities",
                "/resources/library",
            ];
            return allowedPaths.some(allowedPath => path.startsWith(allowedPath));
        }

        return false;
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-primary/5 to-primary/10 px-4 py-12 sm:px-6 lg:px-8">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.15),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(var(--primary-rgb),0.15),transparent_60%)]" />
            <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

            {/* Floating decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-float" />
            <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-indigo-500/30 rounded-full animate-float delay-500" />
            <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-primary/20 rounded-full animate-float delay-1000" />

            <div className="relative z-10 w-full max-w-md">
                {/* Logo and heading */}
                <div className="text-center mb-10">
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 via-indigo-500/30 to-purple-500/20 blur-lg opacity-70" />
                            <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg">
                                <BookOpenCheck className="w-8 h-8 text-primary" />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
                        Welcome Back to Joyious SS
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Sign in to access your personalized school management dashboard
                    </p>
                </div>

                {/* Login Form */}
                <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl px-8 py-10 border border-primary/10">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        {error && (
                            <div className="p-3 text-sm text-red-500 bg-red-50 rounded-lg border border-red-100">
                                {error}
                            </div>
                        )}

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email / Username
                            </label>
                            <div className="relative rounded-lg shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/30 sm:text-sm"
                                    placeholder="admin@joyious.edu"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                                For demo: Use email containing "admin" for admin access
                            </p>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative rounded-lg shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <LockKeyhole className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/30 sm:text-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-gray-600">
                                    Remember me
                                </label>
                            </div>

                            <Link
                                href="#"
                                className="font-medium text-primary hover:text-indigo-600 transition-colors"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <div>
                            <Button
                                type="submit"
                                className="w-full relative group overflow-hidden bg-gradient-to-r from-primary via-indigo-600 to-purple-600 hover:from-primary/90 hover:via-indigo-600/90 hover:to-purple-600/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="h-5 w-5 border-2 border-white border-opacity-50 border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <LogIn className="w-5 h-5" />
                                )}
                                <span className="relative z-10">{isLoading ? "Signing in..." : "Sign in"}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Contact admin note */}
                <div className="mt-8 text-center text-sm text-gray-600">
                    <p>Don't have an account?</p>
                    <p className="mt-1">
                        Please contact your school administrator to get access to the system.
                    </p>
                </div>

                {/* Return to home */}
                <div className="mt-6 text-center">
                    <Link
                        href="/"
                        className="text-sm font-medium text-primary hover:text-indigo-600 transition-colors"
                    >
                        Return to home page
                    </Link>
                </div>
            </div>
        </div>
    );
} 