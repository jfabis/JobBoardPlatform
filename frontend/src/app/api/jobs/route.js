import { getAllJobs } from '@/lib/data'

export async function GET() {
  const jobs = getAllJobs()
  return Response.json(jobs)
}

export async function POST(request) {
  const jobData = await request.json()
  
  // Tutaj dodałbyś logikę zapisywania do bazy danych
  console.log('New job posted:', jobData)
  
  return Response.json({ success: true, message: 'Job posted successfully' })
}
