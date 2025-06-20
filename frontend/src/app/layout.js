import './globals.css'
import { auth } from '../lib/auth'
import AuthProvider from '@/components/SessionProvider'
import { AppProvider } from '@/context/AppContext'
import Header from '@/components/Header'

export const metadata = {
  title: 'FluffyJobs',
  description: 'Find your dream job or hire the best talent',
}

export default async function RootLayout({ children }) {
  const session = await auth()

  return (
    <html lang="en">
      <body className="bg-gray-50">
        <AuthProvider session={session}>
          <AppProvider>
            <Header />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </AppProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
