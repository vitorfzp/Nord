import React from 'react';
import nordLogo from '../assets/react.svg';

const Footer = () => {
  return (
    <footer className="bg-nord-dark text-white py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <img src={nordLogo} alt="NORD Command Center Logo" className="h-8 mb-4"/>
          <p className="text-gray-400 text-sm">
            Conectando especialistas em imagem médica a qualquer lugar do Brasil.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Navegação</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#inicio" className="hover:text-white">Início</a></li>
            <li><a href="#quem-somos" className="hover:text-white">Quem Somos</a></li>
            <li><a href="#servicos" className="hover:text-white">Serviços</a></li>
            <li><a href="#contato" className="hover:text-white">Contato</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Serviços</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Operação Remota</li>
            <li>Otimização de Protocolos</li>
            <li>Suporte Especializado 24/7</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Contato</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>+55 19 99583-4691</li>
            <li>contato@nordcommand.com.br</li>
            <li>Mogi Mirim - SP</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-8">
        <p>&copy; 2025 NORD Command Center. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;