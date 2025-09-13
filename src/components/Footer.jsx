import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram } from 'lucide-react'; // <<<< Adicionado Instagram
import LogoNord from '../assets/logo-nord.png';

const Footer = () => {
  return (
    <footer className="bg-nord-dark text-white relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 text-left">

          {/* Coluna 1: Logo de Imagem e Descrição */}
          <div className="space-y-4">
            <img 
              src={LogoNord} 
              alt="Logo NORD Command Center" 
              className="h-12 w-auto"
            />
            <p className="text-gray-400 text-sm leading-relaxed pt-2">
              Conectando especialistas em imagem médica a qualquer lugar do Brasil. Saúde sem distância, precisão sem limites.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#quem-somos" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Operação Remota de Ressonância</li>
              <li>Operação Remota de Tomografia</li>
              <li>Otimização de Protocolos</li>
              <li>Suporte Especializado 24/7</li>
              <li>Consultoria Técnica</li>
            </ul>
          </div>

          {/* Coluna 4: Contato (agora com Instagram) */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="text-nord-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <a href="https://wa.me/5519995834691" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">+55 19 99583-4691</a>
                  <p className="text-xs">WhatsApp 24/7</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-nord-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <a href="mailto:contato@nordcommand.com.br" className="text-white hover:underline">contato@nordcommand.com.br</a>
                  <p className="text-xs">Resposta em 24h</p>
                </div>
              </li>
              {/* <<<< NOVO ITEM INSTAGRAM AQUI */}
              <li className="flex items-start gap-3">
                <Instagram className="text-nord-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <a href="https://www.instagram.com/nordcommand/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">@nordcommand</a>
                  <p className="text-xs">Siga-nos</p>
                </div>
              </li>
              {/* FIM DO NOVO ITEM */}
              <li className="flex items-start gap-3">
                <MapPin className="text-nord-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-white">Mogi Mirim - SP</p>
                  <p className="text-xs">Centro de Operações</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 NORD Command Center. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Feito com 💚 para a saúde brasileira</p>
        </div>
      </div>
      
      <a 
        href="https://wa.me/5519995834691"
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-5 right-5 bg-nord-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-80 transition-all z-40"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  );
};

export default Footer;