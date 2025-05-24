import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          JobBoard
        </Link>
        <div className="flex space-x-6">
          <Link href="/jobs" className="hover:text-blue-600">Jobs</Link>
          <Link href="/companies" className="hover:text-blue-600">Companies</Link>
          <Link href="/jobs/post" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Post Job
          </Link>
        </div>
      </nav>
    </header>
  )
}
