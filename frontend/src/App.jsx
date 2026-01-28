import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginPage from './pages/Auth/LoginPage'
import RegisterPage from'./pages/Auth/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'
import { Navigate } from 'react-router-dom'
import DashboardPage from './pages/Dashboard/DashboardPage'
import DocumentListPage from './pages/Documents/DocumentListPage'
import DocumentDetailPage from './pages/Documents/DocumentDetailPage'
import FlashcardsListPage from './pages/Flashcards/FlashcardsListPage'
import FlashcardPage from './pages/Flashcards/FlascardPage'
import QuizTakePage from './pages/Quizzes/QuizTakePage'
import QuizResultPage from './pages/Quizzes/QuizResultPage'
import ProfilePage from './pages/Profile/ProfilePage'
import ProtectedRoute from './components/auth/ProtectedRoute'

function App() {
  const isAuthenticated = true; // This would normally come from your app's state
  const loading = false; // This would normally come from your app's state

  if(loading){
    return(
      <div className=''>
        <p>Loading...</p>
        </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={isAuthenticated ? <Navigate to="/dashboard" replace/>:<Navigate to="/login" replace/>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      
      {/* Protected Routes */}
<Route element={<ProtectedRoute/>}>
  <Route path="/dashboard" element={<DashboardPage />} />
  <Route path="/documents" element={<DocumentListPage />} />
  <Route path="/documents/:id" element={<DocumentDetailPage />} />
  <Route path="/flashcards" element={<FlashcardsListPage />} />
  <Route path="/documents/:id/flashcards" element={<FlashcardPage />} />
  <Route path="/quizzes/:quizId" element={<QuizTakePage />} />
  <Route path="/quizzes/:quizId/results" element={<QuizResultPage />} />
  <Route path="/profile" element={<ProfilePage />} />
</Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>

  )
}

export default App
