import { auth } from './src/lib/auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  const { pathname } = req.nextUrl
  const isLoggedIn = !!req.auth

  // Public routes that don't require authentication
  const publicRoutes = ['/auth/signin', '/auth/signup']
  const isPublicRoute = publicRoutes.includes(pathname)

  // API routes that should be accessible
  const apiRoutes = ['/api/auth']
  const isApiRoute = apiRoutes.some(route => pathname.startsWith(route))

  // Static files and Next.js internals
  const isStaticFile = pathname.startsWith('/_next') || 
                      pathname.startsWith('/favicon') ||
                      pathname.includes('.')

  if (isStaticFile || isApiRoute) {
    return NextResponse.next()
  }

  // Redirect logged-in users away from auth pages
  if (isLoggedIn && isPublicRoute) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  // Redirect non-logged-in users to signin
  if (!isLoggedIn && !isPublicRoute) {
    const signInUrl = new URL('/auth/signin', req.nextUrl)
    signInUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(signInUrl)
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
