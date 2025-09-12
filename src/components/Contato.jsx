import React from 'react';

const Contato = () => {
  return (
    <section id="contato" className="py-20 bg-nord-light-gray">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-nord-dark mb-4">Vamos Conversar</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          Escolha a melhor forma de entrar em contato. Estamos prontos para transformar sua operação médica.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          <a href="https://wa.me/5519995834691" target="_blank" rel="noopener noreferrer" className="flex-1 bg-nord-primary text-white p-8 rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
            <p>Atendimento rápido e direto para suas dúvidas.</p>
          </a>
          <a href="mailto:contato@nordcommand.com.br" className="flex-1 bg-nord-dark text-white p-8 rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-2">E-mail</h3>
            <p>Envie sua mensagem e retornaremos em até 24 horas.</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contato;