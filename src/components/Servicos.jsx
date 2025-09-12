import React from 'react';
import { Monitor, Settings, Headset, CheckCircle } from 'lucide-react';

const Servicos = () => {
  const services = [
    {
      icon: <Monitor size={24} />,
      title: 'Operação Remota',
      subtitle: 'Ressonância e Tomografia',
      description: 'Controle completo e em tempo real de equipamentos de ressonância magnética e tomografia computadorizada, garantindo qualidade e eficiência em cada exame.',
      features: ["Operação 24/7", "Múltiplos equipamentos", "Conexão segura", "Tempo real"]
    },
    {
      icon: <Settings size={24} />,
      title: 'Otimização de Protocolos',
      subtitle: 'Personalização Avançada',
      description: 'Ajuste preciso de protocolos por marca, modelo e situação clínica específica, maximizando a qualidade diagnóstica e reduzindo tempo de exame.',
      features: ["Protocolos customizados", "Otimização por equipamento", "Redução de tempo", "Qualidade superior"]
    },
    {
      icon: <Headset size={24} />,
      title: 'Suporte Especializado',
      subtitle: 'Atendimento Imediato',
      description: 'Equipe de especialistas disponível para suporte técnico e clínico instantâneo, resolvendo qualquer situação durante o procedimento.',
      features: ["Suporte 24/7", "Resposta imediata", "Especialistas experientes", "Resolução rápida"]
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
            <div key={index} className="bg-nord-light-gray p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-nord-dark text-white p-3 rounded-lg">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-nord-dark">{service.title}</h3>
                  <p className="text-nord-primary font-medium">{service.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="text-nord-primary" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;