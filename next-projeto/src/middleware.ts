import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { origin } = request.nextUrl
    const cookieStore = cookies()
    const token = cookieStore.get('meu-cookie')

    if (!token) {
        return NextResponse.redirect(new URL(origin))
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/admin/:path*',
}
