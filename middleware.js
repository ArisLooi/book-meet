import { NextResponse } from "next/server";

export async function middleware(request) {
    const isAuthenticated = false;

    if (!isAuthenticated) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    console.log(`Requested Page: ${pathname}`)

    return NextResponse.next();
}

export const config = {
    matcher: ['/bookings'],
};