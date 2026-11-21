import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Settings from './pages/Settings'
import Profile from './pages/Profile'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* Default route */}
        <Route path="/" element={<Navigate to="/vault" replace />} />

        {/* Main application */}
        <Route
          path="/vault"
          element={
            <>
              <Navbar />
              <Manager />
            </>
          }
        />

        {/* Settings page */}
        <Route
          path="/settings"
          element={
            <>
              <Navbar />
              <Settings />
            </>
          }
        />

        {/* Profile page */}
        <Route
          path="/profile"
          element={
            <>
              <Navbar />
              <Profile />
            </>
          }
        />

        {/* Authentication pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
