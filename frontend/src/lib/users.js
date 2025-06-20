// Funkcje pomocnicze do komunikacji z API

export async function getUserByEmail(email) {
  console.log('=== SEARCHING FOR USER ===')
  console.log('Looking for email:', email)
  
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/users?email=${encodeURIComponent(email)}`)
    const data = await response.json()
    
    console.log('Found user:', data.user ? 'YES' : 'NO')
    return data.user
  } catch (error) {
    console.error('Error fetching user:', error)
    return null
  }
}

export async function getUserById(id) {
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/users?id=${id}`)
    const data = await response.json()
    return data.user
  } catch (error) {
    console.error('Error fetching user by ID:', error)
    return null
  }
}

export async function getAllUsers() {
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/users`)
    const data = await response.json()
    return data.users
  } catch (error) {
    console.error('Error fetching all users:', error)
    return []
  }
}

export async function addUser(userData) {
  console.log('=== ADDING USER TO DATABASE ===')
  
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
    
    const data = await response.json()
    
    if (response.ok) {
      console.log('=== USER ADDED SUCCESSFULLY ===')
      console.log('New user:', data.user)
      return data.user
    } else {
      throw new Error(data.error)
    }
  } catch (error) {
    console.error('Error adding user:', error)
    throw error
  }
}

export async function updateUser(id, userData) {
  // Implementuj jeśli potrzebne
  return null
}

export async function deleteUser(id) {
  // Implementuj jeśli potrzebne
  return false
}
