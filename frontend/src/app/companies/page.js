import CompanyCard from '@/components/CompanyCard'
import { getAllCompanies } from '@/lib/data'

export default function CompaniesPage() {
  const companies = getAllCompanies()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Companies</h1>
        <p className="text-gray-600 text-lg">Discover amazing companies looking for talent</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map(company => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </div>
  )
}
