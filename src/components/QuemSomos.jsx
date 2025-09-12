import React from 'react';
import { MapPin } from 'lucide-react';
import mapaBrasil from '../assets/mapa.png'; 

const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Coluna de Texto */}
        <div>
          <span className="inline-flex items-center gap-2 bg-nord-primary/10 text-nord-primary text-sm px-6 py-1 rounded-full mb-4 ">
            <MapPin size={16} />
            Nossa História
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-nord-dark mb-4">Quem Somos</h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Nascido em Mogi Mirim, o NORD Command Center representa a evolução natural da medicina diagnóstica brasileira. Nossa missão é quebrar barreiras geográficas e levar expertise em imagem médica para onde ela é necessária.
          </p>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Com atuação nacional, conectamos centros de saúde em todo o Brasil aos melhores especialistas, garantindo que a distância nunca seja um obstáculo para um diagnóstico de qualidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="text-center bg-white border border-gray-200 p-8 rounded-lg w-full shadow-sm">
              <p className="text-3xl font-extrabold text-nord-primary mb-2">5+</p>
              <p className="text-gray-600 text-lg">Anos de Experiência</p>
            </div>
            <div className="text-center bg-white border border-gray-200 p-8 rounded-lg w-full shadow-sm">
              <p className="text-3xl font-extrabold text-nord-primary mb-2">1000+</p>
              <p className="text-gray-600 text-lg">Exames Realizados</p>
            </div>
          </div>
        </div>

        {/* Coluna da Imagem */}
        <div>
        <img
  src={mapaBrasil}
  alt="Mapa do Brasil com conexões digitais"
  className="rounded-2xl w-80,1 h-90" 
/>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;