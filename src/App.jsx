import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Settings from './pages/Settings'
import Profile from './pages/Profile'

import { useEffect, useState } from 'react'
import apiRequest from './api'
import ProtectedRoute from './components/ProtectedRoute'
import GuestRoute from './components/GuestRoute'

function App() {
  const [user, setUser] = useState(null) // user stores the currently authenticated user's info
  const [loading, setLoading] = useState(true) // tells us whether the session is still running

  const updateUser = async () => {
    try {
      const data = await apiRequest('/auth/me')
      setUser(data.user)
    } catch (error) {
      setUser(null)
    }
  }

  const handleLogout = async() => {
    try{
      await apiRequest('/auth/logout', {
        method: 'POST'
      });

      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  useEffect(() => { //checks the session when the app mounts 
    const checkSession = async () => {
      try {
        const data = await apiRequest('/auth/me') // asks who i s currently logged in 
        console.log('Current user:', data)
        setUser(data.user) // stores the returned user info
      } catch (error) {
        console.log('No active session:', error.message)
        setUser(null)
      } finally { // runs when the req succeeds or fails
        setLoading(false)
      }
    }

    checkSession()
  }, [])

  return (
    <BrowserRouter>
      <Routes>

        {/* Default route */}
        <Route path="/" element={<Navigate to="/vault" replace />} />

        {/* Main application */}
        <Route
          path="/vault"
          element={
          <ProtectedRoute user={user} loading={loading}>
              <>
                  <Navbar />
                  <Manager />
              </>
          </ProtectedRoute>
          } 
        />

        {/* Settings page */}
        <Route
          path="/settings"
          element={
          <ProtectedRoute user={user} loading={loading}>
              <>
                  <Navbar />
                  <Settings />
              </>
          </ProtectedRoute>
          }
        />

        {/* Profile page */}
        <Route
          path="/profile"
          element={
          <ProtectedRoute user={user} loading={loading}>
              <>
                  <Navbar />
                  <Profile user={user} onLogout={handleLogout} />
              </>
          </ProtectedRoute>
          }
        />

        {/* Authentication pages */}
        <Route
          path="/login"
          element={
            <GuestRoute user={user} loading={loading}>
              <Login onLogin={updateUser} />
            </GuestRoute>
          }
        />
        <Route
          path="/register"
          element={
            <GuestRoute user={user} loading={loading}>
              <Register />
            </GuestRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <GuestRoute user={user} loading={loading}>
              <ForgotPassword />
            </GuestRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
