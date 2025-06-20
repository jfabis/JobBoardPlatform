export const runtime = 'nodejs'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'
import { addUser, getUserByEmail } from '@/lib/users'

export async function POST(request) {
  console.log('=== REGISTRATION API ENDPOINT CALLED ===')
  
  try {
    console.log('Parsing request body...')
    const body = await request.json()
    console.log('Request body received:', body)
    
    const { name, email, password } = body
    console.log('Extracted data:', { name, email, password: password ? '[HIDDEN]' : 'MISSING' })

    // Walidacja danych
    if (!name || !email || !password) {
      console.log('❌ Validation failed: Missing required fields')
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      console.log('❌ Validation failed: Password too short')
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      )
    }

    console.log('✅ Validation passed')

    // Sprawdź czy użytkownik już istnieje
    console.log('Checking if user already exists...')
    const existingUser = await getUserByEmail(email)
    if (existingUser) {
      console.log('❌ User already exists:', email)
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      )
    }

    console.log('✅ User does not exist, proceeding with registration')

    // Hashuj hasło
    console.log('Hashing password...')
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log('✅ Password hashed successfully')

    // Dodaj użytkownika
    console.log('Adding user to database...')
    const newUser = await addUser({
      name,
      email,
      password: hashedPassword
    })

    console.log('✅ USER SUCCESSFULLY REGISTERED!')
    console.log('New user ID:', newUser.id)
    console.log('New user name:', newUser.name)
    console.log('New user email:', newUser.email)

    return NextResponse.json(
      { 
        message: 'User created successfully', 
        userId: newUser.id,
        userEmail: newUser.email 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('=== REGISTRATION ERROR ===')
    console.error('Error type:', error.constructor.name)
    console.error('Error message:', error.message)
    console.error('Full error:', error)
    
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    )
  }
}
