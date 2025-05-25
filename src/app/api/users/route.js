export const runtime = 'nodejs' // To działa w API routes

import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

const usersFilePath = path.join(process.cwd(), 'data', 'users.json')

function loadUsers() {
  try {
    const dataDir = path.dirname(usersFilePath)
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    if (fs.existsSync(usersFilePath)) {
      const data = fs.readFileSync(usersFilePath, 'utf8')
      return JSON.parse(data)
    }
  } catch (error) {
    console.error('Error loading users:', error)
  }
  
  const defaultUsers = [
    {
      id: '1',
      name: 'Admin User',
      email: 'admin@fluffyjobs.com',
      password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
    }
  ]
  
  saveUsers(defaultUsers)
  return defaultUsers
}

function saveUsers(users) {
  try {
    const dataDir = path.dirname(usersFilePath)
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf8')
  } catch (error) {
    console.error('Error saving users:', error)
  }
}

// GET - pobierz użytkownika po email
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')
  const id = searchParams.get('id')
  
  const users = loadUsers()
  
  if (email) {
    const user = users.find(u => u.email === email)
    return NextResponse.json({ user: user || null })
  }
  
  if (id) {
    const user = users.find(u => u.id === id)
    return NextResponse.json({ user: user || null })
  }
  
  return NextResponse.json({ users })
}

// POST - dodaj nowego użytkownika
export async function POST(request) {
  try {
    const userData = await request.json()
    const users = loadUsers()
    
    const newUser = {
      id: (users.length + 1).toString(),
      ...userData
    }
    
    users.push(newUser)
    saveUsers(users)
    
    return NextResponse.json({ user: newUser }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add user' }, { status: 500 })
  }
}
