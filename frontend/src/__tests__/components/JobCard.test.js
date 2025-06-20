import { render, screen } from '@testing-library/react'
import JobCard from '@/components/JobCard'

const mockJob = {
  id: 1,
  title: 'Frontend Developer',
  company: 'TechCorp',
  location: 'Warsaw, Poland',
  salary: '$60,000 - $80,000',
  type: 'Full-time',
  postedDate: '2 days ago',
  remote: true
}

describe('JobCard', () => {
  it('renders job information correctly', () => {
    render(<JobCard job={mockJob} />)
    
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument()
    expect(screen.getByText('TechCorp')).toBeInTheDocument()
    expect(screen.getByText('Warsaw, Poland')).toBeInTheDocument()
    expect(screen.getByText('$60,000 - $80,000')).toBeInTheDocument()
    expect(screen.getByText('Full-time')).toBeInTheDocument()
    expect(screen.getByText('Remote')).toBeInTheDocument()
  })

  it('renders view details button', () => {
    render(<JobCard job={mockJob} />)
    
    const viewButton = screen.getByText('View Details')
    expect(viewButton).toBeInTheDocument()
  })
})
