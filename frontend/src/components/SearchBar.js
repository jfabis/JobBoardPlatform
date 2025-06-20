'use client'
import { useState } from 'react'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    // Implementuj logikę wyszukiwania
    console.log('Searching for:', query, 'in', location)
  }

  return (
    <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Job title, keywords..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
        />
        <input
          type="text"
          placeholder="Location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold"
        >
          Search Jobs
        </button>
      </div>
    </form>
  )
}
