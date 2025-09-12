import React from 'react';
import { Zap, ShieldCheck, Globe } from 'lucide-react';
import heroBackground from '../assets/hero-background.png'; // <<<<< IMPORTAÇÃO DA IMAGEM AQUI

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-nord-dark text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }} // <<<<< APLICAÇÃO DA IMAGEM AQUI
    >
      {/* Este div aplica o overlay escuro/verde por cima da imagem para melhor legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-r from-nord-dark via-nord-dark/80 to-nord-primary/20 opacity-90"></div>
      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-block border border-nord-primary text-nord-primary text-sm px-4 py-1 rounded-full mb-4">
            Saúde sem distância
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Inteligência remota, <br />
            <span className="text-nord-primary">precisão local</span>
          </h1>
          <p className="max-w-xl text-lg text-gray-300 mb-8">
            O NORD Command Center conecta especialistas em imagem médica a qualquer lugar do Brasil, garantindo segurança e qualidade em exames de ressonância e tomografia.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contato" className="bg-nord-primary text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors">
              Fale com a gente &rarr;
            </a>
            <a href="#servicos" className="bg-transparent border border-white/50 text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors">
              Saiba mais
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm flex items-center gap-4 border border-white/10">
            <Zap className="text-nord-primary" size={28} />
            <div>
              <h3 className="font-bold">Operação Instantânea</h3>
              <p className="text-gray-300 text-sm">Conexão e controle em tempo real.</p>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm flex items-center gap-4 border border-white/10">
            <ShieldCheck className="text-nord-primary" size={28} />
            <div>
              <h3 className="font-bold">Máxima Segurança</h3>
              <p className="text-gray-300 text-sm">Protocolos rigorosos de proteção de dados.</p>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm flex items-center gap-4 border border-white/10">
            <Globe className="text-nord-primary" size={28} />
            <div>
              <h3 className="font-bold">Alcance Nacional</h3>
              <p className="text-gray-300 text-sm">De Mogi Mirim para todo o Brasil.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;