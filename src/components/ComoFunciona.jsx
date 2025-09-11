import React from 'react';

const ComoFunciona = () => {
  const steps = [
    { number: '01', title: 'Conexão Segura', description: 'Estabelecemos uma conexão criptografada e segura com seu equipamento.' },
    { number: '02', title: 'Operação Remota', description: 'Nossa equipe assume o controle do equipamento em tempo real com precisão.' },
    { number: '03', title: 'Protocolo Otimizado', description: 'Ajustamos os parâmetros para maximizar a qualidade da imagem.' },
    { number: '04', title: 'Resultado Garantido', description: 'Entregamos exames de qualidade superior, prontos para o diagnóstico.' }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-nord-light-gray">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-nord-dark mb-4">Como Funciona</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          Nosso processo simples e seguro conecta nossa expertise à sua necessidade em quatro passos.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-nord-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">{step.number}</div>
              <h3 className="text-xl font-bold text-nord-dark mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;