import Link from 'next/link'

export default function JobCard({ job }) {
  if (!job) {
    return null
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
          <p className="text-gray-600">{job.company}</p>
        </div>
        <span className={`px-2 py-1 rounded text-sm ${
          job.type === 'Full-time' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
        }`}>
          {job.type}
        </span>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-600 mb-2">📍 {job.location}</p>
        <p className="text-gray-600 mb-2">💰 {job.salary}</p>
        <p className="text-gray-700 text-sm">{job.description?.substring(0, 100)}...</p>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{job.postedDate}</span>
        <Link 
          href={`/jobs/${job.id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}
