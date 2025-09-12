import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import LogoNord from '../assets/logo-nord.png'; // <<<<< IMPORTAÇÃO DO NOVO LOGO AQUI

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* <<<<< AQUI ESTÁ A ALTERAÇÃO: Usando a tag <img> com o logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <img src={LogoNord} alt="Logo NORD" className="h-14" /> {/* Ajuste 'h-10' para o tamanho desejado */}
        </a>
        {/* <<<<< FIM DA ALTERAÇÃO */}

        <nav className="hidden md:flex space-x-8">
          <a href="#quem-somos" className={`hover:text-nord-primary transition-colors ${isScrolled ? 'text-nord-dark' : 'text-white'}`}>Quem Somos</a>
          <a href="#servicos" className={`hover:text-nord-primary transition-colors ${isScrolled ? 'text-nord-dark' : 'text-white'}`}>Serviços</a>
          <a href="#valores" className={`hover:text-nord-primary transition-colors ${isScrolled ? 'text-nord-dark' : 'text-white'}`}>Valores</a>
          <a href="#contato" className={`hover:text-nord-primary transition-colors ${isScrolled ? 'text-nord-dark' : 'text-white'}`}>Contato</a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <span className={`text-sm ${isScrolled ? 'text-nord-dark' : 'text-white'}`}>+55 19 99583-4691</span>
          <a href="#contato" className="bg-nord-primary text-white px-5 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm font-semibold">
            Fale Conosco
          </a>
        </div>
        <button className="md:hidden">
          <Menu className={isScrolled ? 'text-nord-dark' : 'text-white'} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;