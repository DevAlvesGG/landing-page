import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon } from 'lucide-react';

function Hero() {
  const phoneNumber = "551123616734"; 
  const message = "Olá! Gostaria de fazer um orçamento.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Configuração dos hexágonos decorativos (posições, tamanhos e delays para parecer orgânico)
  const hexagons = [
    { id: 1, size: 120, top: '10%', left: '5%', delay: 0, duration: 6 },
    { id: 2, size: 80, top: '50%', left: '12%', delay: 1.5, duration: 8 },
    { id: 3, size: 160, top: '65%', left: '2%', delay: 0.5, duration: 7 },
    { id: 4, size: 90, top: '15%', right: '8%', delay: 2, duration: 9 },
    { id: 5, size: 140, top: '40%', right: '3%', delay: 1, duration: 6.5 },
    { id: 6, size: 70, top: '75%', right: '14%', delay: 2.5, duration: 7.5 },
  ]

  return (
    <section className="relative bg-brandBlack pt-32 pb-20 px-6 overflow-hidden min-h-[500px] flex items-center justify-center">
      
      {/* 1. Detalhe de luz de fundo (Radial Gradient original) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brandYellow/10 via-transparent to-transparent pointer-events-none z-0"></div>

      {/* 2. Camada de Hexágonos Animados em 3D/Paralaxe */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {hexagons.map((hex) => (
          <motion.div
            key={hex.id}
            style={{
              position: 'absolute',
              top: hex.top,
              left: hex.left,
              right: hex.right,
              width: hex.size,
              height: hex.size,
            }}
            // Animação de flutuação contínua (Efeito Tech/Sutil)
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: hex.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: hex.delay,
            }}
            // Efeito interativo: reage levemente ao passar o mouse por perto ou hover fictício
            whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 15px rgba(250, 204, 21, 0.6))" }}
          >
            <Hexagon 
              size={hex.size} 
              className="text-brandYellow/15 fill-brandYellow/5 stroke-[1.5] drop-shadow-[0_0_8px_rgba(250,204,21,0.2)]"
            />
          </motion.div>
        ))}
      </div>

      {/* Content - Mantido estrito à sua estrutura com z-10 para ficar acima do fundo */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
         <span className="text-brandYellow">Bolatec</span> Assistência Técnica 
        </h1>
        
        <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-max mx-auto font-medium tracking-widest uppercase whitespace-nowrap">
          Games • Celular • Tablet • Computador • Notebook • TV
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
          <a 
            href={url} 
            className="bg-brandYellow text-black px-10 py-4 rounded-md font-black uppercase hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-[0_4px_20px_rgba(250,204,21,0.3)]"
          >
            Orçamento Grátis
          </a>
          <a 
            href="#servicos" 
            className="border-2 border-white/20 text-white px-10 py-4 rounded-md font-black uppercase hover:border-brandYellow hover:text-brandYellow transition-all backdrop-blur-sm"
          >
            Ver Serviços
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;