export const companies = [
  {
    id: 1,
    name: 'TechCorp',
    description: 'Leading technology company specializing in AI and machine learning',
    location: 'Warsaw, Poland',
    employees: '500-1000',
    industry: 'Technology',
    website: 'https://techcorp.com',
    logo: '/logos/techcorp.png'
  },
  {
    id: 2,
    name: 'StartupXYZ',
    description: 'Innovative startup disrupting the fintech industry',
    location: 'Krakow, Poland',
    employees: '50-100',
    industry: 'Fintech',
    website: 'https://startupxyz.com',
    logo: '/logos/startupxyz.png'
  },
  {
    id: 3,
    name: 'DesignStudio',
    description: 'Creative agency focused on digital design and branding',
    location: 'Gdansk, Poland',
    employees: '20-50',
    industry: 'Design',
    website: 'https://designstudio.com',
    logo: '/logos/designstudio.png'
  }
]

export const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    companyId: 1,
    location: "Warsaw, Poland",
    salary: "$70,000 - $90,000",
    type: "Full-time",
    description: "We're looking for a skilled Senior Frontend Developer to join our team and work on cutting-edge AI applications. You'll be responsible for building responsive, user-friendly interfaces using React and Next.js.",
    requirements: [
      "5+ years of experience with React",
      "Experience with Next.js and TypeScript",
      "Strong CSS and JavaScript skills",
      "Experience with state management (Redux/Zustand)",
      "Knowledge of testing frameworks"
    ],
    benefits: [
      "Competitive salary",
      "Remote work options",
      "Health insurance",
      "Learning budget",
      "Flexible hours"
    ],
    postedDate: "2 days ago",
    featured: true,
    remote: true
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "StartupXYZ",
    companyId: 2,
    location: "Krakow, Poland",
    salary: "$60,000 - $80,000",
    type: "Full-time",
    description: "Join our backend team and work on scalable fintech applications. You'll be building APIs and microservices that handle millions of transactions.",
    requirements: [
      "3+ years of experience with Node.js",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of microservices architecture",
      "Experience with Docker and Kubernetes",
      "Understanding of financial systems"
    ],
    benefits: [
      "Stock options",
      "Health insurance",
      "Team building events",
      "Modern office",
      "Career development"
    ],
    postedDate: "1 week ago",
    featured: true,
    remote: false
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "DesignStudio",
    companyId: 3,
    location: "Gdansk, Poland",
    salary: "$50,000 - $65,000",
    type: "Full-time",
    description: "Create beautiful and intuitive user experiences for our clients' digital products. Work with a creative team on diverse projects.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma and Adobe Creative Suite",
      "Understanding of user research methods",
      "Portfolio showcasing design projects",
      "Knowledge of design systems"
    ],
    benefits: [
      "Creative environment",
      "Flexible hours",
      "Design tools budget",
      "Conference attendance",
      "Health insurance"
    ],
    postedDate: "3 days ago",
    featured: false,
    remote: true
  }
]

export function getFeaturedJobs() {
  return jobs.filter(job => job.featured)
}

export function getAllJobs() {
  return jobs
}

export function getJobById(id) {
  return jobs.find(job => job.id === parseInt(id))
}

export function getCompanyById(id) {
  return companies.find(company => company.id === parseInt(id))
}

export function getJobsByCompany(companyId) {
  return jobs.filter(job => job.companyId === parseInt(companyId))
}

export function getAllCompanies() {
  return companies
}
