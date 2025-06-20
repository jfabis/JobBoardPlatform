import JobCard from '@/components/JobCard'
import SearchBar from '@/components/SearchBar'
import { getAllJobs } from '@/lib/data'

export default function JobsPage() {
  const jobs = getAllJobs()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">All Jobs</h1>
      
      <div className="mb-8">
        <SearchBar />
      </div>

      <div className="flex gap-8">
        {/* Filters */}
        <aside className="w-64">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Filters</h3>
            {/* Dodaj filtry */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Job Type</label>
              <select className="w-full p-2 border rounded">
                <option>All Types</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Job List */}
        <div className="flex-1">
          <div className="grid gap-6">
            {jobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
