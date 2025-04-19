
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Pagine temporanee
const Login = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 className="text-2xl font-bold text-center text-primary mb-6">PhysioManager</h1>
      <p className="text-center text-gray-600 mb-6">Login page in sviluppo</p>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-primary mb-4">Dashboard</h1>
    <p className="text-gray-600">Benvenuto in PhysioManager! Dashboard in sviluppo.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
