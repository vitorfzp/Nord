import React from 'react';
import { Monitor, Settings, Headset, CheckCircle, Zap } from 'lucide-react'; // Adicionado Zap para o ícone de operação
import medicoOperando from '../assets/medico.jpg'; // << Importe a imagem do médico aqui

const Servicos = () => {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block bg-nord-primary/10 text-nord-primary text-sm px-4 py-1 rounded-full mb-4">
          Nossos Serviços
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-nord-dark mb-12">Tecnologia Médica Remota</h2>

        {/* NOVA SEÇÃO: Controle Total à Distância */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 text-left">
          {/* Imagem do Médico */}
          <div className="relative">
            <img
              src={medicoOperando}
              alt="Médico operando equipamento"
              className="rounded-2xl w-full h-auto shadow-xl"
            />
            {/* Tag "Operação em tempo real" */}
            <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2 text-sm text-gray-700">
              <span className="block w-2 h-2 bg-nord-primary rounded-full"></span>
              Operação em tempo real
            </div>
          </div>

          {/* Texto e Métricas */}
          <div>
            <h3 className="text-3xl font-bold text-nord-dark mb-4">Controle Total à Distância</h3>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Nossa plataforma permite que especialistas operem equipamentos de ressonância magnética e tomografia computadorizada remotamente, com a mesma precisão e segurança de uma operação presencial.
            </p>
            <div className="flex gap-4">
              <div className="bg-nord-primary/10 p-6 rounded-lg flex-1 text-center">
                <p className="text-4xl font-bold text-nord-primary">99.9%</p>
                <p className="text-gray-600 text-sm">Uptime garantido</p>
              </div>
              <div className="bg-nord-primary/10 p-6 rounded-lg flex-1 text-center">
                <p className="text-4xl font-bold text-nord-primary">&lt;50ms</p>
                <p className="text-gray-600 text-sm">Latência média</p>
              </div>
            </div>
          </div>
        </div>
        {/* FIM DA NOVA SEÇÃO */}


        {/* Antiga Seção de Cards - Mantida Abaixo para Replicar o Segundo Design da Imagem */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Card: Operação Remota */}
          <div className="bg-nord-light-gray p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-nord-dark text-white p-3 rounded-lg"><Monitor size={24} /></div>
              <div>
                <h3 className="text-xl font-bold text-nord-dark">Operação Remota</h3>
                <p className="text-nord-primary font-medium">Ressonância e Tomografia</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 flex-grow">
              Controle completo e em tempo real de equipamentos de ressonância magnética e tomografia computadorizada, garantindo qualidade e eficiência em cada exame.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle className="text-nord-primary" size={16} /> Operação 24/7</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-nord-primary" size={16} /> Múltiplos equipamentos</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-nord-primary" size={16} /> Conexão segura</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-nord-primary" size={16} /> Tempo real</li>
            </ul>
          </div>

          {/* Card: Otimização de Protocolos */}
          <div className="bg-nord-light-gray p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-nord-dark text-white p-3 rounded-lg"><Settings size={24} /></div>
              <div>
                <h3 className="text-xl font-bold text-nord-dark">Otimização de Protocolos</h3>
                <p className="text-nord-primary font-medium">Personalização Avançada</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 flex-grow">
              Ajuste preciso de protocolos por marca, modelo e situação clínica específica, maximizando a qualidade diagnóstica e reduzindo tempo de exame.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle className="text-nord-primary" size={16} /> Protocolos customizados</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-nord-primary" size={16} /> Otimização por equipamento</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-nord-primary" size={16} /> Redução de tempo</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-nord-primary" size={16} /> Qualidade superior</li>
            </ul>
          </div>

          {/* Card: Suporte Especializado */}
          <div className="bg-nord-light-gray p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-nord-dark text-white p-3 rounded-lg"><Headset size={24} /></div>
              <div>
                <h3 className="text-xl font-bold text-nord-dark">Suporte Especializado</h3>
                <p className="text-nord-primary font-medium">Atendimento Imediato</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 flex-grow">
              Equipe de especialistas disponível para suporte técnico e clínico instantâneo, resolvendo qualquer situação durante o procedimento.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle className="text-nord-primary" size={16} /> Suporte 24/7</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-nord-primary" size={16} /> Resposta imediata</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-nord-primary" size={16} /> Especialistas experientes</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-nord-primary" size={16} /> Resolução rápida</li>
            </ul>
          </div>
        </div>
        {/* FIM DA ANTIGA SEÇÃO DE CARDS */}

      </div>
    </section>
  );
};

export default Servicos;