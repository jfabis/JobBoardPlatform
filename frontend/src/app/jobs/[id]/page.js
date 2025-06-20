import Link from 'next/link'
import { getJobById, getCompanyById } from '@/lib/data'

export default async function JobDetails({ params }) {
  const { id } = await params
  const job = getJobById(id)
  const company = job ? getCompanyById(job.companyId) : null

  if (!job) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-gray-600">Job not found</h1>
        <Link href="/jobs" className="text-blue-600 hover:underline mt-4 inline-block">
          ← Back to jobs
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Job Header */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
            <Link href={`/companies/${job.companyId}`} className="text-2xl text-blue-600 hover:underline">
              {job.company}
            </Link>
          </div>
          <div className="text-right">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {job.type}
            </span>
            {job.remote && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium ml-2">
                Remote
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <span className="font-semibold">📍 Location:</span>
            <p className="text-gray-600">{job.location}</p>
          </div>
          <div>
            <span className="font-semibold">💰 Salary:</span>
            <p className="text-gray-600">{job.salary}</p>
          </div>
          <div>
            <span className="font-semibold">📅 Posted:</span>
            <p className="text-gray-600">{job.postedDate}</p>
          </div>
        </div>

        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold text-lg">
          Apply Now
        </button>
      </div>

      {/* Job Description */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Job Description</h2>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Requirements</h2>
            <ul className="space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-xl font-bold mb-4">Benefits</h3>
            <ul className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {company && (
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">About {company.name}</h3>
              <p className="text-gray-700 mb-4">{company.description}</p>
              <Link href={`/companies/${company.id}`} className="text-blue-600 hover:underline">
                View company profile →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
