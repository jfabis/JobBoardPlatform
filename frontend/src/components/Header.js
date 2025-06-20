'use client'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export default function Header() {
  const { data: session, status } = useSession()

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          FluffyJobs
        </Link>
        
        <div className="flex items-center space-x-6">
          {session ? (
            <>
              <Link href="/jobs" className="hover:text-blue-600">Jobs</Link>
              <Link href="/companies" className="hover:text-blue-600">Companies</Link>
              <Link href="/jobs/post" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Post Job
              </Link>
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Hello, {session.user?.name}</span>
                <button
                  onClick={() => signOut()}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Sign Out
                </button>
              </div>
            </>
          ) : (
            <div className="flex space-x-4">
              <Link href="/auth/signin" className="text-blue-600 hover:underline">
                Sign In
              </Link>
              <Link href="/auth/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
