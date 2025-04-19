import React from 'react';
import './index.css';
import './components/Dashboard.css';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Dashboard from './components/Dashboard';
import AuthPage from './components/AuthPage';

const AppContent = () => {
  const { currentUser, loading } = useAuth();
  
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  
  return currentUser ? <Dashboard /> : <AuthPage />;
};

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </div>
  );
}

export default App;
