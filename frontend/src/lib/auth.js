import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { authConfig } from './auth.config'
import { getUserByEmail } from './users'
import bcrypt from 'bcryptjs'

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log('Authorize called with credentials:', credentials)
        
        const { email, password } = credentials
        
        if (!email || !password) {
          console.log('Missing email or password')
          return null
        }
        
        const user = await getUserByEmail(email)
        if (!user) {
          console.log('User not found in database')
          return null
        }
        
        console.log('User found, comparing passwords...')
        const passwordsMatch = await bcrypt.compare(password, user.password)
        console.log('Password match:', passwordsMatch)
        
        if (passwordsMatch) {
          console.log('Authentication successful for user:', user.email)
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          }
        }
        
        console.log('Password mismatch')
        return null
      },
    }),
  ],
})
