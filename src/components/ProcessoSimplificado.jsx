import React from 'react';
import { Wifi, Monitor, Settings, CheckCircle, ArrowRight } from 'lucide-react';

const ProcessoSimplificado = () => {
  const steps = [
    {
      number: '01',
      icon: <Wifi size={32} />,
      title: 'Conexão Segura',
      description: 'Estabelecemos uma conexão criptografada e segura entre nosso centro de comando e seu equipamento médico.',
      features: ["Criptografia de ponta", "Conexão estável", "Protocolo seguro", "Verificação de identidade"]
    },
    {
      number: '02',
      icon: <Monitor size={32} />,
      title: 'Operação Remota',
      description: 'Nossa equipe assume o controle total do equipamento em tempo real, operando com precisão profissional.',
      features: ["Controle em tempo real", "Interface intuitiva", "Monitoramento contínuo", "Equipe especializada"]
    },
    {
      number: '03',
      icon: <Settings size={32} />,
      title: 'Protocolo Otimizado',
      description: 'Ajustamos todos os parâmetros específicos para seu equipamento e tipo de exame, maximizando a qualidade.',
      features: ["Personalização total", "Otimização por marca", "Protocolos específicos", "Qualidade garantida"]
    },
    {
      number: '04',
      icon: <CheckCircle size={32} />,
      title: 'Resultado Garantido',
      description: 'Entregamos exames com qualidade superior, prontos para análise e diagnóstico médico preciso.',
      features: ["Qualidade superior", "Entrega rápida", "Suporte contínuo", "Garantia de resultado"]
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block bg-nord-primary/10 text-nord-primary text-sm px-4 py-1 rounded-full mb-4">
          Processo Simplificado
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-nord-dark mb-4">Como Funciona</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-16 leading-relaxed">
          Um processo simples e seguro que conecta nossa expertise à sua necessidade, garantindo exames de qualidade superior em qualquer lugar do Brasil.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-white p-8 rounded-lg shadow-md border border-gray-100 text-left flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-nord-primary/50"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-nord-primary text-white flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>
              
              <div className="text-nord-dark bg-nord-light-gray p-3 rounded-lg mb-4 mt-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-nord-dark mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{step.description}</p>
              
              <ul className="space-y-1 text-sm text-gray-700">
                {step.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="text-nord-primary" size={14} /> {feature}
                  </li>
                ))}
              </ul>

              {index < steps.length - 1 && (
                <div className="absolute top-1/2 right-0 -mr-10 transform -translate-y-1/2 hidden md:block">
                  <ArrowRight className="w-8 h-8 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessoSimplificado;