export const authConfig = {
  pages: {
    signIn: '/auth/signin',
    signUp: '/auth/signup',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
      const isOnAuth = nextUrl.pathname.startsWith('/auth')
      
      // Redirect to dashboard if logged in and on auth pages
      if (isLoggedIn && isOnAuth) {
        return Response.redirect(new URL('/', nextUrl))
      }
      
      // Allow access to auth pages when not logged in
      if (!isLoggedIn && isOnAuth) {
        return true
      }
      
      // Protect all other routes
      if (!isLoggedIn && !isOnAuth) {
        return Response.redirect(new URL('/auth/signin', nextUrl))
      }
      
      return true
    },
  },
  providers: [], // Add providers with an empty array for now
}
