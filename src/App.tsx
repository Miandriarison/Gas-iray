import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ProfessionalDashboard from './pages/dashboard/ProfessionalDashboard';
import InvestorDashboard from './pages/dashboard/InvestorDashboard';
import IndividualDashboard from './pages/dashboard/IndividualDashboard';

const AppContent: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={user ? <Navigate to={getDashboardPath(user.role)} replace /> : <LoginPage />} />
          <Route path="/register" element={user ? <Navigate to={getDashboardPath(user.role)} replace /> : <RegisterPage />} />

          {/* Protected Dashboard Routes */}
          <Route 
            path="/dashboard/pro" 
            element={
              <ProtectedRoute requiredRole="professional">
                <ProfessionalDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/invest" 
            element={
              <ProtectedRoute requiredRole="investor">
                <InvestorDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/user" 
            element={
              <ProtectedRoute requiredRole="individual">
                <IndividualDashboard />
              </ProtectedRoute>
            } 
          />

          {/* Default dashboard redirect */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Navigate to={user ? getDashboardPath(user.role) : '/login'} replace />
              </ProtectedRoute>
            } 
          />

          {/* Placeholder routes for future features */}
          <Route path="/messages" element={<ProtectedRoute><div className="p-8 text-center">Messagerie (à développer)</div></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><div className="p-8 text-center">Paramètres (à développer)</div></ProtectedRoute>} />
          <Route path="/help" element={<div className="p-8 text-center">Centre d'aide (à développer)</div>} />
          <Route path="/contact" element={<div className="p-8 text-center">Contact (à développer)</div>} />
          <Route path="/privacy" element={<div className="p-8 text-center">Politique de confidentialité (à développer)</div>} />
          <Route path="/terms" element={<div className="p-8 text-center">Conditions d'utilisation (à développer)</div>} />

          {/* 404 Route */}
          <Route path="*" element={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-gray-600 mb-8">Page non trouvée</p>
                <a href="/" className="text-blue-600 hover:text-blue-500">
                  Retour à l'accueil
                </a>
              </div>
            </div>
          } />
        </Routes>
      </main>
      {!user && <Footer />}
    </div>
  );
};

const getDashboardPath = (role: string) => {
  switch (role) {
    case 'professional':
      return '/dashboard/pro';
    case 'investor':
      return '/dashboard/invest';
    case 'individual':
      return '/dashboard/user';
    default:
      return '/dashboard/pro';
  }
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;