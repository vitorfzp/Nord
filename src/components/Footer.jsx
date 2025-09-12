import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-nord-dark text-white py-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p className="font-bold text-2xl mb-4">N<span className="text-nord-primary">O</span>RD</p>
        <div className="flex justify-center space-x-6 mb-4">
            <a href="#quem-somos" className="hover:text-nord-primary transition-colors">Quem Somos</a>
            <a href="#servicos" className="hover:text-nord-primary transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-nord-primary transition-colors">Contato</a>
        </div>
        <p>&copy; 2025 NORD Command Center. Todos os direitos reservados.</p>
        <p className="text-gray-500 text-sm mt-2">Mogi Mirim - SP, Brasil</p>
      </div>
    </footer>
  );
};

export default Footer;