import { NextResponse } from 'next/server'

import getSession from '@/lib/session';

import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const session = await getSession();

    const loggedIn = session && session.user;

    const guestPage = pathname.includes("/auth");
    const protectedPage = !guestPage;

    if (!loggedIn && protectedPage) {
        return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
    }

    if (loggedIn && guestPage) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }


    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|public|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}
