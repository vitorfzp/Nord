import React from 'react';


const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-20 bg-nord-light-gray">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-nord-primary/10 text-nord-primary text-sm px-4 py-1 rounded-full mb-4">
              Nossa História
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-nord-dark mb-4">Quem Somos</h2>
            <p className="text-gray-600 mb-6">
              Nascido em Mogi Mirim, o NORD Command Center representa a evolução da medicina diagnóstica. Nossa missão é quebrar barreiras geográficas e levar expertise em imagem médica para onde ela é necessária.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold text-nord-primary">5+</p>
                <p className="text-gray-500">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-nord-primary">1000+</p>
                <p className="text-gray-500">Exames Realizados</p>
              </div>
            </div>
          </div>
          <div>
            <img src={brazilMap} alt="Mapa do Brasil" className="rounded-lg shadow-lg"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;