import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuemSomos from './components/QuemSomos';
import Valores from './components/Valores';
import Servicos from './components/Servicos';
import ProcessoSimplificado from './components/ProcessoSimplificado';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll(".section-animate").forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      {/* <<<<< ALTERAÇÃO AQUI: Adicionado pt-20 (padding-top: 5rem) */}
      <main className="pt-20"> 
        <Hero />
        <div className="section-animate"><QuemSomos /></div>
        <div className="section-animate"><Valores /></div>
        <div className="section-animate"><Servicos /></div>
        <div className="section-animate"><ProcessoSimplificado /></div>
        <div className="section-animate"><Contato /></div>
      </main>
      <Footer />
    </>
  );
}

export default App;