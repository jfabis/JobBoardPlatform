import { GET, POST } from '@/app/api/users/route'
import { NextRequest } from 'next/server'

describe('/api/users', () => {
  it('GET returns users', async () => {
    const request = new NextRequest('http://localhost:3000/api/users')
    const response = await GET(request)
    const data = await response.json()
    
    expect(response.status).toBe(200)
    expect(data.users).toBeDefined()
    expect(Array.isArray(data.users)).toBe(true)
  })

  it('POST creates new user', async () => {
    const userData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'hashedpassword'
    }
    
    const request = new NextRequest('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify(userData)
    })
    
    const response = await POST(request)
    const data = await response.json()
    
    expect(response.status).toBe(201)
    expect(data.user.name).toBe('Test User')
    expect(data.user.email).toBe('test@example.com')
  })
})
