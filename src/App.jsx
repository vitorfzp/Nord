import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <Routes>
      {/* Rota para a página inicial */}
      <Route path="/" element={<Index />} />
      
      {/* Rota para a página de política de privacidade */}
      <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;