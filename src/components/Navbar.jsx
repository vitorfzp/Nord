import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import LogoNord from '../assets/logo-nord.png'; // Garanta que este caminho está correto

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-3 sm:p-4">
        {/* Logo no desktop (esquerda) */}
        <a
          href="#inicio"
          className="hidden md:block flex-shrink-0"
        >
          <img
            src={LogoNord}
            alt="Logo NORD Command Center"
            className="h-8 sm:h-10 md:h-12 max-w-[150px] w-auto object-contain"
          />
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#quem-somos"
            className={`hover:text-nord-primary transition-colors ${
              isScrolled ? 'text-nord-dark' : 'text-white'
            }`}
          >
            Quem Somos
          </a>
          <a
            href="#servicos"
            className={`hover:text-nord-primary transition-colors ${
              isScrolled ? 'text-nord-dark' : 'text-white'
            }`}
          >
            Serviços
          </a>
          <a
            href="#valores"
            className={`hover:text-nord-primary transition-colors ${
              isScrolled ? 'text-nord-dark' : 'text-white'
            }`}
          >
            Valores
          </a>
          <a
            href="#como-funciona"
            className={`hover:text-nord-primary transition-colors ${
              isScrolled ? 'text-nord-dark' : 'text-white'
            }`}
          >
            Como Funciona
          </a>
          <a
            href="#contato"
            className={`hover:text-nord-primary transition-colors ${
              isScrolled ? 'text-nord-dark' : 'text-white'
            }`}
          >
            Contato
          </a>
        </nav>

        {/* Contato Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <span
            className={`text-sm ${
              isScrolled ? 'text-nord-dark' : 'text-white'
            }`}
          >
            +55 19 99583-4691
          </span>
          <a
            href="#contato"
            className="bg-nord-primary text-white px-5 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm font-semibold"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile: Logo + Menu lado a lado à direita */}
        <div className="flex items-center gap-3 md:hidden ml-auto">
          <a href="#inicio" className="flex-shrink-0">
            <img
              src={LogoNord}
              alt="Logo NORD Command Center"
              className="h-8 max-w-[120px] w-auto object-contain"
            />
          </a>
          <button
            className="z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={isScrolled ? 'text-nord-dark' : 'text-white'}
                size={28}
              />
            ) : (
              <Menu
                className={isScrolled ? 'text-nord-dark' : 'text-white'}
                size={28}
              />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`fixed top-0 ${
          isMobileMenuOpen ? 'right-0' : '-right-full'
        } h-screen w-full sm:w-80 bg-nord-dark p-8 shadow-lg transition-all duration-300 z-40 flex flex-col`}
      >
        <div className="flex justify-end mb-8">
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="text-white" size={28} />
          </button>
        </div>

        <nav className="flex flex-col space-y-6 text-xl text-white mb-auto">
          <a
            href="#inicio"
            onClick={handleNavLinkClick}
            className="hover:text-nord-primary transition-colors"
          >
            Início
          </a>
          <a
            href="#quem-somos"
            onClick={handleNavLinkClick}
            className="hover:text-nord-primary transition-colors"
          >
            Quem Somos
          </a>
          <a
            href="#servicos"
            onClick={handleNavLinkClick}
            className="hover:text-nord-primary transition-colors"
          >
            Serviços
          </a>
          <a
            href="#valores"
            onClick={handleNavLinkClick}
            className="hover:text-nord-primary transition-colors"
          >
            Valores
          </a>
          <a
            href="#como-funciona"
            onClick={handleNavLinkClick}
            className="hover:text-nord-primary transition-colors"
          >
            Como Funciona
          </a>
          <a
            href="#contato"
            onClick={handleNavLinkClick}
            className="hover:text-nord-primary transition-colors"
          >
            Contato
          </a>
        </nav>

        {/* Contatos no Mobile */}
        <div className="flex flex-col space-y-4 text-white text-base">
          <div className="flex items-center gap-3">
            <Phone className="text-nord-primary" size={20} />
            <a href="tel:+5519995834691" className="hover:underline">
              +55 19 99583-4691
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-nord-primary" size={20} />
            <a
              href="mailto:contato@nordcommand.com.br"
              className="hover:underline"
            >
              contato@nordcommand.com.br
            </a>
          </div>
          <a
            href="#contato"
            onClick={handleNavLinkClick}
            className="bg-nord-primary text-white px-5 py-2 rounded-md hover:bg-opacity-90 transition-colors font-semibold text-center mt-4"
          >
            Fale Conosco
          </a>
        </div>
      </div>

      {/* Fundo escuro quando menu mobile aberto */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
