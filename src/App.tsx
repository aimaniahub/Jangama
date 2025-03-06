import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { RegistrationForm } from './components/RegistrationForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      <Header />
      
      <main className="max-w-4xl mx-auto py-8 px-4">
        <RegistrationForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;