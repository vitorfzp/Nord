import React from 'react';
import { Monitor, Settings, Headset } from 'lucide-react';

const Servicos = () => {
  const services = [
    {
      icon: <Monitor size={28} />,
      title: 'Operação Remota',
      subtitle: 'Ressonância e Tomografia',
      description: 'Controle completo e em tempo real de equipamentos, garantindo qualidade e eficiência em cada exame.'
    },
    {
      icon: <Settings size={28} />,
      title: 'Otimização de Protocolos',
      subtitle: 'Personalização Avançada',
      description: 'Ajuste preciso de protocolos para maximizar a qualidade diagnóstica e reduzir o tempo de exame.'
    },
    {
      icon: <Headset size={28} />,
      title: 'Suporte Especializado',
      subtitle: 'Atendimento Imediato',
      description: 'Equipe de especialistas disponível para suporte técnico e clínico instantâneo durante os procedimentos.'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block bg-nord-primary/10 text-nord-primary text-sm px-4 py-1 rounded-full mb-4">
          Nossos Serviços
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-nord-dark mb-12">Tecnologia Médica Remota</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {services.map((service, index) => (
            <div key={index} className="bg-nord-light-gray p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-nord-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-nord-dark">{service.title}</h3>
              <p className="text-nord-primary font-medium mb-4">{service.subtitle}</p>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;