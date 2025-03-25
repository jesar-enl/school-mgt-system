"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Mail, Lock, Eye, EyeOff, User, School, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

// Form validation schema
const registerSchema = z.object({
    schoolName: z.string().min(2, "School name must be at least 2 characters"),
    adminName: z.string().min(2, "Admin name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
    confirmPassword: z.string(),
    terms: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions",
    }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type RegisterForm = z.infer<typeof registerSchema>;

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<RegisterForm>({
        resolver: zodResolver(registerSchema),
    });

    const password = watch("password");

    const onSubmit = async (data: RegisterForm) => {
        try {
            setIsLoading(true);
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log(data);
            toast.success("Account created successfully!");
            // Add your registration logic here
        } catch (error) {
            toast.error("An error occurred while creating your account");
        } finally {
            setIsLoading(false);
        }
    };

    // Password strength indicator
    const getPasswordStrength = (password: string = "") => {
        const hasLength = password.length >= 8;
        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecial = /[^A-Za-z0-9]/.test(password);

        const strength = [hasLength, hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;

        return {
            strength,
            color: strength < 2 ? "bg-red-500" : strength < 4 ? "bg-yellow-500" : "bg-green-500",
        };
    };

    const passwordStrength = getPasswordStrength(password);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-primary/5 to-primary/10 relative overflow-hidden flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            {/* Enhanced decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--primary-rgb),0.12),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(var(--primary-rgb),0.12),transparent_50%)]" />

            {/* Animated shapes */}
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

            {/* Floating elements */}
            <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-float" />
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-indigo-500/30 rounded-full animate-float delay-700" />

            <div className="w-full max-w-md relative">
                {/* Back to home link */}
                <div className="absolute -top-12 left-0">
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                        <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
                        Back to home
                    </Link>
                </div>

                {/* Main card */}
                <div className="relative group">
                    {/* Card glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-gradient" />

                    <div className="relative bg-white/80 backdrop-blur-xl shadow-xl rounded-xl p-8">
                        {/* Logo and title */}
                        <div className="text-center mb-8">
                            <Link href="/" className="inline-block group mb-6">
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                                    SchoolMS
                                </h1>
                            </Link>
                            <h2 className="text-2xl font-semibold text-gray-900">Create an account</h2>
                            <p className="mt-2 text-gray-600">Join us to manage your school efficiently</p>
                        </div>

                        {/* Registration form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* School name field */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 block">School Name</label>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-indigo-500/20 rounded-lg blur group-hover:blur-md transition-all duration-300 opacity-75" />
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <School className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            {...register("schoolName")}
                                            type="text"
                                            className={`block w-full pl-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 bg-white/60 backdrop-blur-sm transition-all duration-300 ${errors.schoolName
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-gray-200 focus:border-primary/50"
                                                }`}
                                            placeholder="Enter school name"
                                        />
                                    </div>
                                    {errors.schoolName && (
                                        <p className="mt-1 text-sm text-red-500">{errors.schoolName.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Admin name field */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 block">Admin Name</label>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-indigo-500/20 rounded-lg blur group-hover:blur-md transition-all duration-300 opacity-75" />
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            {...register("adminName")}
                                            type="text"
                                            className={`block w-full pl-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 bg-white/60 backdrop-blur-sm transition-all duration-300 ${errors.adminName
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-gray-200 focus:border-primary/50"
                                                }`}
                                            placeholder="Enter admin name"
                                        />
                                    </div>
                                    {errors.adminName && (
                                        <p className="mt-1 text-sm text-red-500">{errors.adminName.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Email field */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 block">Email</label>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-indigo-500/20 rounded-lg blur group-hover:blur-md transition-all duration-300 opacity-75" />
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            className={`block w-full pl-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 bg-white/60 backdrop-blur-sm transition-all duration-300 ${errors.email
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-gray-200 focus:border-primary/50"
                                                }`}
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Password field */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 block">Password</label>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-indigo-500/20 rounded-lg blur group-hover:blur-md transition-all duration-300 opacity-75" />
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            {...register("password")}
                                            type={showPassword ? "text" : "password"}
                                            className={`block w-full pl-10 pr-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 bg-white/60 backdrop-blur-sm transition-all duration-300 ${errors.password
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-gray-200 focus:border-primary/50"
                                                }`}
                                            placeholder="Create a password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-300" />
                                            ) : (
                                                <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-300" />
                                            )}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                                    )}

                                    {/* Password strength indicator */}
                                    {password && (
                                        <div className="mt-2 space-y-2">
                                            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${passwordStrength.color} transition-all duration-300`}
                                                    style={{ width: `${(passwordStrength.strength / 5) * 100}%` }}
                                                />
                                            </div>
                                            <p className="text-xs text-gray-600">
                                                Password strength: {
                                                    passwordStrength.strength < 2 ? "Weak" :
                                                        passwordStrength.strength < 4 ? "Medium" : "Strong"
                                                }
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Confirm Password field */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 block">Confirm Password</label>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-indigo-500/20 rounded-lg blur group-hover:blur-md transition-all duration-300 opacity-75" />
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            {...register("confirmPassword")}
                                            type={showConfirmPassword ? "text" : "password"}
                                            className={`block w-full pl-10 pr-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 bg-white/60 backdrop-blur-sm transition-all duration-300 ${errors.confirmPassword
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-gray-200 focus:border-primary/50"
                                                }`}
                                            placeholder="Confirm your password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        >
                                            {showConfirmPassword ? (
                                                <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-300" />
                                            ) : (
                                                <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-300" />
                                            )}
                                        </button>
                                    </div>
                                    {errors.confirmPassword && (
                                        <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Terms and conditions */}
                            <div className="flex items-center">
                                <input
                                    {...register("terms")}
                                    type="checkbox"
                                    className={`h-4 w-4 border-gray-300 rounded focus:ring-primary/50 transition duration-300 ${errors.terms ? "border-red-500" : "text-primary"
                                        }`}
                                />
                                <label className="ml-2 block text-sm text-gray-700">
                                    I agree to the{" "}
                                    <Link href="/terms" className="text-primary hover:text-primary/80 transition-colors duration-300">
                                        Terms and Conditions
                                    </Link>
                                </label>
                            </div>
                            {errors.terms && (
                                <p className="text-sm text-red-500 -mt-4">{errors.terms.message}</p>
                            )}

                            {/* Register button */}
                            <Button
                                className="w-full bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 relative overflow-hidden group disabled:opacity-70"
                                type="submit"
                                disabled={isLoading}
                            >
                                <span className="relative z-10 flex items-center justify-center">
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                            Creating account...
                                        </>
                                    ) : (
                                        "Create Account"
                                    )}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            </Button>

                            {/* Login link */}
                            <p className="text-center text-sm text-gray-600">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            {/* Add animations */}
            <style jsx global>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-gradient {
                    background-size: 200% auto;
                    animation: gradient 4s linear infinite;
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .delay-700 {
                    animation-delay: 700ms;
                }
                .delay-1000 {
                    animation-delay: 1000ms;
                }
            `}</style>
        </div>
    );
} 