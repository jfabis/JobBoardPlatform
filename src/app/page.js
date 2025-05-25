import Link from 'next/link'
import SearchBar from '@/components/SearchBar'
import JobCard from '@/components/JobCard'
import { getFeaturedJobs } from '@/lib/data'

export default function Home() {
  const featuredJobs = getFeaturedJobs()

  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mb-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to FluffyJobs</h1>
        <p className="text-xl mb-8">Find your perfect job or hire amazing talent</p>
        <SearchBar />
      </section>

      {/* Featured Jobs */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Featured Jobs</h2>
          <Link href="/jobs" className="text-blue-600 hover:underline text-lg">
            View all jobs →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-4xl font-bold text-blue-600">500+</h3>
          <p className="text-gray-600 text-lg">Active Jobs</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-4xl font-bold text-purple-600">200+</h3>
          <p className="text-gray-600 text-lg">Companies</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-4xl font-bold text-green-600">1000+</h3>
          <p className="text-gray-600 text-lg">Successful Hires</p>
        </div>
      </section>
    </div>
  )
}
