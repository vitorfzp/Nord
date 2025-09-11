import React from "react";


const Hero = () => {
  return (
    <section 
      id="inicio"
      className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center" 
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="absolute inset-0 bg-nord-dark bg-opacity-50"></div>
      <div className="container relative z-10 text-center px-4 opacity-0 animate-fade-in">
        <span className="inline-block border border-nord-primary text-nord-primary text-sm px-4 py-1 rounded-full mb-4">
          Saúde sem distância
        </span>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Inteligência remota, <br />
          <span className="text-nord-primary">precisão local</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
          O NORD Command Center conecta especialistas em imagem médica a qualquer lugar do Brasil, garantindo segurança, eficiência e qualidade.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#contato" className="bg-nord-primary text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors">
            Fale com a gente &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;