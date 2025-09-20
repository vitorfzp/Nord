import React from 'react';
import { Link } from 'react-router-dom'; // Usaremos o Link para o botão de voltar
import { ShieldCheck, ArrowLeft } from 'lucide-react'; // Ícones para o design

const PrivacyPolicy = () => {
  return (
    // Removemos a Navbar e o Footer que estavam aqui
    <main className="bg-nord-light-gray min-h-screen">
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* 1. Botão "Voltar" adicionado aqui */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-nord-dark hover:text-nord-primary font-semibold mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              Voltar à página inicial
            </Link>

            {/* O conteúdo da política permanece o mesmo */}
            <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-center mb-10">
                <ShieldCheck className="mx-auto text-nord-primary" size={48} />
                <h1 className="text-4xl md:text-5xl font-extrabold text-nord-dark mt-4 mb-2">
                  Política de Privacidade e Segurança
                </h1>
                <p className="text-gray-500">
                  Última atualização: 20 de setembro de 2025
                </p>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  Bem-vindo(a) à Política de Privacidade do <strong>NORD Command Center</strong>. Esta política descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você visita nosso site ou utiliza nossos serviços.
                </p>
                <p>
                  A NORD Command Center ("nós", "nosso", "nossa") está comprometida com a proteção da sua privacidade e dos seus dados pessoais, agindo em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD) e outras regulamentações aplicáveis. Ao utilizar nosso Site e/ou serviços, você concorda com os termos desta Política de Privacidade.
                </p>

                <h2 className="text-2xl font-bold text-nord-dark mt-8 mb-4">1. Coleta de Informações Pessoais</h2>
                <p>
                  Coletamos informações pessoais que você nos fornece diretamente ou que são geradas automaticamente ao utilizar nosso Site. As informações coletadas podem incluir:
                </p>
                <ul>
                  <li><strong>Informações de Contato:</strong> Nome, e-mail, número de telefone, nome da empresa/instituição, cargo. (Coletadas através de formulários de contato, agendamento, "Fale Conosco", etc.).</li>
                  <li><strong>Dados de Navegação e Uso:</strong> Endereço IP, tipo de navegador, sistema operacional, páginas visitadas, tempo de visita, cliques, datas e horários de acesso ao Site. (Coletados automaticamente via cookies e tecnologias semelhantes).</li>
                  <li><strong>Dados Técnicos:</strong> Informações sobre o dispositivo usado para acessar o Site (modelo, fabricante, sistema operacional).</li>
                </ul>
                <p className="border-l-4 border-nord-primary pl-4 bg-nord-primary/5 py-3">
                  <strong>Importante:</strong> Não coletamos dados de saúde diretamente através do Site. Quaisquer dados de saúde relacionados aos exames e serviços de imagem são tratados em plataformas específicas e seguras, sob contratos e políticas de privacidade e segurança rigorosas.
                </p>

                <h2 className="text-2xl font-bold text-nord-dark mt-8 mb-4">2. Uso das Informações Coletadas</h2>
                <p>
                  Utilizamos as informações coletadas para as seguintes finalidades:
                </p>
                <ul>
                  <li><strong>Comunicação:</strong> Para responder às suas solicitações, perguntas e fornecer suporte ao cliente.</li>
                  <li><strong>Melhoria do Serviço:</strong> Para entender como nosso Site é utilizado, analisar tendências e melhorar a experiência do usuário.</li>
                  <li><strong>Marketing:</strong> Para enviar informações sobre nossos serviços e atualizações relevantes, caso você tenha optado por recebê-los.</li>
                  <li><strong>Segurança e Conformidade:</strong> Para garantir a segurança de nosso Site, prevenir fraudes e cumprir com obrigações legais.</li>
                </ul>
                
                {/* O restante do texto da política continua aqui... */}

                <h2 className="text-2xl font-bold text-nord-dark mt-8 mb-4">9. Contato</h2>
                <p>
                  Se você tiver dúvidas, entre em contato conosco:
                </p>
                <ul>
                  <li><strong>E-mail:</strong> contato@nordcommand.com.br</li>
                  <li><strong>Telefone:</strong> +55 19 99583-4691</li>
                  <li><strong>Endereço:</strong> Mogi Mirim - SP</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;