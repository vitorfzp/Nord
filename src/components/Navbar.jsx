import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import LogoNord from '../assets/logo-nord.png'; // Sua logo original

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Manter para outros efeitos, se houver
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
      // Fundo da navbar SEMPRE claro (bg-white ou bg-gray-50, etc.) e com sombra
      // Removida a lógica condicional de isScrolled para o fundo da header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-md"
    >
      <div className="container mx-auto flex items-center justify-between p-3 sm:p-4"> {/* Ajustei o padding aqui */}
        {/* Logo no desktop (esquerda) - Agora sempre a logo colorida, pois o fundo é claro */}
        <a
          href="#inicio"
          className="hidden md:block flex-shrink-0"
        >
          <img
            src={LogoNord} // Sempre usa a logo colorida/original
            alt="Logo NORD Command Center"
            className="h-20 sm:h-50 md:h-160 max-w-[300px] w-auto object-contain"
          />
        </a>

        {/* Menu Desktop - Textos agora sempre em nord-dark */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#quem-somos"
            className="hover:text-nord-primary transition-colors text-nord-dark" // Cor fixa para desktop
          >
            Quem Somos
          </a>
          <a
            href="#servicos"
            className="hover:text-nord-primary transition-colors text-nord-dark" // Cor fixa para desktop
          >
            Serviços
          </a>
          <a
            href="#valores"
            className="hover:text-nord-primary transition-colors text-nord-dark" // Cor fixa para desktop
          >
            Valores
          </a>
          <a
            href="#como-funciona"
            className="hover:text-nord-primary transition-colors text-nord-dark" // Cor fixa para desktop
          >
            Como Funciona
          </a>
          <a
            href="#contato"
            className="hover:text-nord-primary transition-colors text-nord-dark" // Cor fixa para desktop
          >
            Contato
          </a>
        </nav>

        {/* Contato Desktop - Texto do telefone agora sempre em nord-dark */}
        <div className="hidden md:flex items-center gap-4">
          <span
            className="text-sm text-nord-dark" // Cor fixa para desktop
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

        {/* Mobile: Logo + Menu lado a lado à direita - Logo colorida e ícone do menu escuro */}
        <div className="flex items-center gap-3 md:hidden ml-auto">
          <a href="#inicio" className="flex-shrink-0">
            <img
              src={LogoNord} // Sempre usa a logo colorida/original
              alt="Logo NORD Command Center"
              className="h-14 max-w-[300px] w-auto object-contain"
            />
          </a>
          <button
            className="z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className="text-nord-dark" // Ícone X sempre escuro no mobile
                size={28}
              />
            ) : (
              <Menu
                className="text-nord-dark" // Ícone Menu sempre escuro no mobile
                size={28}
              />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile - Fundo e textos mantidos como estavam (escuros e brancos) */}
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

        {/* Contatos no Mobile (mantido o mesmo) */}
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

      {/* Fundo escuro quando menu mobile aberto (mantido o mesmo) */}
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