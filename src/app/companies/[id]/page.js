import Link from 'next/link'
import JobCard from '@/components/JobCard'
import { getCompanyById, getJobsByCompany } from '@/lib/data'

export default function CompanyDetails({ params }) {
  const company = getCompanyById(params.id)
  const companyJobs = getJobsByCompany(params.id)

  if (!company) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-gray-600">Company not found</h1>
        <Link href="/companies" className="text-blue-600 hover:underline mt-4 inline-block">
          ← Back to companies
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Company Header */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{company.name}</h1>
            <p className="text-gray-600 text-lg mb-4">{company.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <span className="font-semibold">📍 Location:</span> {company.location}
              </div>
              <div>
                <span className="font-semibold">👥 Employees:</span> {company.employees}
              </div>
              <div>
                <span className="font-semibold">🏢 Industry:</span> {company.industry}
              </div>
              <div>
                <span className="font-semibold">🌐 Website:</span> 
                <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                  {company.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Jobs */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Open Positions at {company.name}</h2>
        {companyJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <p className="text-gray-600">No open positions at the moment</p>
          </div>
        )}
      </section>
    </div>
  )
}
