import React from 'react';

function Hero() {
  return (
    <section className="relative bg-brandBlack pt-32 pb-20 px-6 overflow-hidden">
      {/* Detalhe de luz de fundo para dar profundidade */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brandYellow/10 via-transparent to-transparent"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
          Assistência <span className="text-brandYellow">Técnica</span>
        </h1>
        
        <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium tracking-widest uppercase">
          Games • Celular • Computador • Notebook
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
          <a href="#contato" className="bg-brandYellow text-black px-10 py-4 rounded-md font-black uppercase hover:bg-yellow-400 transition-all transform hover:scale-105">
            Orçamento Grátis
          </a>
          <a href="#servicos" className="border-2 border-white/20 text-white px-10 py-4 rounded-md font-black uppercase hover:border-brandYellow transition-all">
            Ver Serviços
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;