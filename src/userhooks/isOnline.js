import { useState, useEffect } from 'react'

export default function IsOnline() {
  const [isOnline, setIsOnline] = useState(true)
  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true))
    window.addEventListener('offline', () => setIsOnline(false))
    return () => {
      window.removeEventListener('online', () => setIsOnline(true))
      window.removeEventListener('offline', () => setIsOnline(false))
    }
  }, [])
  return (
    <h2> 
        { isOnline ? 'You are ONLINE' : 'Disconnected!'}
    </h2>
  )
}