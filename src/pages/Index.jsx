import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuemSomos from "@/components/QuemSomos";
import Servicos from "@/components/Servicos";
import ComoFunciona from "@/components/ComoFunciona";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll(".section-animate").forEach((el) => observer.observe(el));
    
    return () => {
      document.querySelectorAll(".section-animate").forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <div className="section-animate opacity-0"><QuemSomos /></div>
        <div className="section-animate opacity-0"><Servicos /></div>
        <div className="section-animate opacity-0"><ComoFunciona /></div>
        <div className="section-animate opacity-0"><Contato /></div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;