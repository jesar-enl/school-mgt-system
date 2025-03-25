"use client";

import { ReactNode } from "react";

interface PageLayoutProps {
    children: ReactNode;
    title: string;
    subtitle?: string;
}

export default function PageLayout({ children, title, subtitle }: PageLayoutProps) {
    return (
        <div className="min-h-screen pt-20 bg-gradient-to-b from-white via-primary/5 to-primary/10">
            {/* Page Header */}
            <header className="py-8 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.08),transparent_70%)]" />
                <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-lg text-gray-600 max-w-3xl">
                                {subtitle}
                            </p>
                        )}
                        {/* Decorative line */}
                        <div className="absolute -bottom-4 left-0 w-20 h-1 bg-gradient-to-r from-primary/50 to-indigo-600/50 rounded-full" />
                    </div>
                </div>
            </header>

            {/* Page Content */}
            <main className="py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </div>
    );
} 