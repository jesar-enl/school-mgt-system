import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Function to check if a user role has access to a specific path
const checkRoleAccess = (role: string | undefined, path: string): boolean => {
    // Public paths that don't require authentication
    const publicPaths = ['/', '/login'];
    if (publicPaths.includes(path)) return true;

    // No role means no access to protected routes
    if (!role) return false;

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
}

export function middleware(request: NextRequest) {
    // Get the pathname of the request (e.g. /, /protected)
    const path = request.nextUrl.pathname;

    // Get the token from cookies
    const authToken = request.cookies.get('auth_token')?.value;
    const userRole = request.cookies.get('user_role')?.value;

    // Check if the path requires authentication
    const isPublicPath = ['/', '/login'].includes(path);

    // If the path is public and user is authenticated, redirect to their dashboard
    if (isPublicPath && authToken && userRole) {
        let redirectPath = '/student/dashboard';
        if (userRole === 'admin') redirectPath = '/admin';
        else if (userRole === 'teacher') redirectPath = '/teacher/dashboard';
        else if (userRole === 'staff') redirectPath = '/staff/dashboard';

        return NextResponse.redirect(new URL(redirectPath, request.url));
    }

    // If the path is protected and user is not authenticated,
    // redirect to the login page
    if (!isPublicPath && !authToken) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('from', path);
        return NextResponse.redirect(loginUrl);
    }

    // If the user is authenticated but doesn't have access to the requested path,
    // redirect to their dashboard
    if (!isPublicPath && authToken && userRole && !checkRoleAccess(userRole, path)) {
        let redirectPath = '/student/dashboard';
        if (userRole === 'admin') redirectPath = '/admin';
        else if (userRole === 'teacher') redirectPath = '/teacher/dashboard';
        else if (userRole === 'staff') redirectPath = '/staff/dashboard';

        return NextResponse.redirect(new URL(redirectPath, request.url));
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
} 