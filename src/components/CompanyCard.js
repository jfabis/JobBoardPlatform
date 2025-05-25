import Link from 'next/link'

export default function CompanyCard({ company }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
        <p className="text-gray-600 mb-2">{company.description}</p>
        <div className="text-sm text-gray-500">
          <p>📍 {company.location}</p>
          <p>👥 {company.employees} employees</p>
          <p>🏢 {company.industry}</p>
        </div>
      </div>
      
      <Link 
        href={`/companies/${company.id}`}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block"
      >
        View Profile
      </Link>
    </div>
  )
}
