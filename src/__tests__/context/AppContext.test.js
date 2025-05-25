import { renderHook, act } from '@testing-library/react'
import { AppProvider, useAppContext } from '@/context/AppContext'

const wrapper = ({ children }) => <AppProvider>{children}</AppProvider>

describe('AppContext', () => {
  it('provides initial state', () => {
    const { result } = renderHook(() => useAppContext(), { wrapper })
    
    expect(result.current.state.user).toBeNull()
    expect(result.current.state.jobs).toEqual([])
    expect(result.current.state.loading).toBe(false)
  })

  it('updates jobs state', () => {
    const { result } = renderHook(() => useAppContext(), { wrapper })
    
    const mockJobs = [{ id: 1, title: 'Test Job' }]
    
    act(() => {
      result.current.setJobs(mockJobs)
    })
    
    expect(result.current.state.jobs).toEqual(mockJobs)
  })
})
