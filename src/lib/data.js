export const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Warsaw, Poland",
      salary: "$60,000 - $80,000",
      type: "Full-time",
      description: "We're looking for a skilled Frontend Developer to join our team...",
      postedDate: "2 days ago",
      featured: true
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "StartupXYZ",
      location: "Krakow, Poland",
      salary: "$70,000 - $90,000",
      type: "Full-time",
      description: "Join our backend team and work on scalable applications...",
      postedDate: "1 week ago",
      featured: true
    },
    // Dodaj więcej ofert...
  ]
  
  export function getFeaturedJobs() {
    return jobs.filter(job => job.featured).slice(0, 6)
  }
  
  export function getAllJobs() {
    return jobs
  }
  
  export function getJobById(id) {
    return jobs.find(job => job.id === parseInt(id))
  }
  