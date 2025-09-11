import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import nordLogo from '../assets/react.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    document.body.style.overflow = newMenuState ? 'hidden' : '';
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    if (isMenuOpen) toggleMenu();
  };
  
  const navLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'quem-somos', label: 'Quem Somos' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'como-funciona', label: 'Como Funciona' },
    { id: 'contato', label: 'Contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" onClick={() => scrollToSection('inicio')} className="flex items-center space-x-2">
          <img src={nordLogo} alt="NORD Command Center Logo" className="h-8" />
        </a>

        <nav className="hidden md:flex space-x-8 text-nord-dark">
          {navLinks.map(link => (
            <a key={link.id} href={`#${link.id}`} onClick={() => scrollToSection(link.id)} className="hover:text-nord-primary transition-colors">{link.label}</a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-nord-dark text-sm">+55 19 99583-4691</span>
          <a href="#contato" onClick={() => scrollToSection('contato')} className="bg-nord-primary text-white px-5 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm">
            Fale Conosco
          </a>
        </div>

        <button className="md:hidden text-nord-dark p-3 focus:outline-none" onClick={toggleMenu} aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <div className={`fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <nav className="flex flex-col space-y-6 items-center mt-8">
          {navLinks.map(link => (
            <a key={link.id} href={`#${link.id}`} onClick={() => scrollToSection(link.id)} className="text-lg font-medium text-nord-dark w-full text-center py-2 rounded-lg hover:bg-gray-100">{link.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;