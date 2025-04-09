import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { RegistrationForm } from './components/RegistrationForm';
import { SuccessMessage } from './components/SuccessMessage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
        <Header />
        
        <main className="max-w-4xl mx-auto py-8 px-4">
          <Routes>
            <Route path="/" element={<RegistrationForm />} />
            <Route path="/success" element={<SuccessMessage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;