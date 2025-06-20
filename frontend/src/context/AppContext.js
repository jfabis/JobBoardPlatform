'use client'
import { createContext, useContext, useReducer, useEffect } from 'react'
import { useSession } from 'next-auth/react'

const AppContext = createContext()

const initialState = {
  user: null,
  jobs: [],
  companies: [],
  filters: {
    location: '',
    jobType: '',
    salary: ''
  },
  loading: false,
  error: null
}

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }
    case 'SET_JOBS':
      return { ...state, jobs: action.payload }
    case 'SET_COMPANIES':
      return { ...state, companies: action.payload }
    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const { data: session } = useSession()

  useEffect(() => {
    if (session?.user) {
      dispatch({ type: 'SET_USER', payload: session.user })
    }
  }, [session])

  const value = {
    state,
    dispatch,
    setJobs: (jobs) => dispatch({ type: 'SET_JOBS', payload: jobs }),
    setCompanies: (companies) => dispatch({ type: 'SET_COMPANIES', payload: companies }),
    setFilters: (filters) => dispatch({ type: 'SET_FILTERS', payload: filters }),
    setLoading: (loading) => dispatch({ type: 'SET_LOADING', payload: loading }),
    setError: (error) => dispatch({ type: 'SET_ERROR', payload: error })
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return context
}
