import React from 'react';
import Header from './components/Header';
import Services from './sections/Services';
import WhatsAppButton from './components/WhatsAppButton'
import About from './sections/About';
import Hero from './sections/Hero'
import './index.css';


function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
      </main>

      <WhatsAppButton />

      <footer className="py-12 bg-black border-t border-brandYellow/10 text-center">
        <div className="max-w-6xl mx-auto px-6">
          {/* Logo ou Nome da Loja no Rodapé */}
          <p className="text-brandYellow font-black uppercase tracking-tighter text-xl mb-4">
            Bolatec
          </p>

          <div className="text-gray-500 text-sm space-y-2">
            <p>&copy; 2026 Bolatec Assistência Técnica. Todos os direitos reservados.</p>

            {/* Sua Assinatura Profissional */}
            <div className="pt-6 border-t border-white/5 mt-6">
              <p className="text-gray-400">
                Desenvolvido por <span className="text-white font-bold">Gustavo Alves</span>
              </p>
              <a
                href="mailto:gustavodevgarcia@gmail.com"
                className="text-brandYellow hover:underline transition-all text-xs"
              >
                gustavodevgarcia@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
