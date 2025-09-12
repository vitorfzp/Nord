import React from 'react';
import { Target, Heart, Lightbulb, MapPin } from 'lucide-react';

const Valores = () => {
  const values = [
    { icon: <Target />, title: "Confiabilidade", description: "Protocolos rigorosos e especialistas experientes garantem resultados precisos." },
    { icon: <Heart />, title: "Acessibilidade", description: "Levamos tecnologia de ponta para qualquer lugar, democratizando o acesso." },
    { icon: <Lightbulb />, title: "Especialização", description: "Equipe altamente qualificada com anos de experiência em ressonância e tomografia." },
    { icon: <MapPin />, title: "Inovação", description: "Pioneiros em operação remota no Brasil, sempre na vanguarda da tecnologia." }
  ];

  return (
    <section id="valores" className="py-20 bg-nord-light-gray">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-nord-dark mb-4">Nossos Valores</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          Princípios que norteiam cada operação e definem nossa excelência em imagem médica remota.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center border hover:border-nord-primary transition-all">
              <div className="bg-nord-primary/10 text-nord-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-nord-dark mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Valores;