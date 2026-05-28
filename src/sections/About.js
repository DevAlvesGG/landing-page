import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="sobre"
      className="py-20 px-10 bg-brandBlack text-white border-b border-brandYellow/20"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Lado do Texto */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">
            Sobre a <span className="text-brandYellow">Bolatec</span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Especialistas em dar vida nova aos seus equipamentos favoritos. Seja
            um console de última geração, seu celular do dia a dia ou aquele
            computador gamer que precisa de um upgrade, na Bolatec unimos
            precisão técnica com a paixão por tecnologia.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="border-l-4 border-brandYellow pl-4">
              <span className="block font-bold text-2xl">10+</span>
              <span className="text-sm text-gray-400">Anos de Experiência</span>
            </div>
          </div>
        </div>

        {/* Espaço para uma imagem futura ou ícone */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "300px",
              height: "300px",
              border: "2px solid #FFD700",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#111",
              perspective: "1000px", // Importante para o efeito 3D
            }}
          >
            {/* Componente para o "flip" */}
            <motion.div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                transformStyle: "preserve-3d", // Essencial para o 3D flip
              }}
              animate={{ rotateY: 360 }} // Gira 360 graus no eixo Y
              transition={{
                repeat: Infinity,
                duration: 8, // Mais rápido para um efeito de flip
                ease: "easeInOut", // Suaviza o início e fim da animação
                repeatDelay: 1, // Pequeno atraso entre as repetições
              }}
              whileHover={{ scale: 1.05 }} // Efeito suave ao passar o mouse
            >
              {/* Frente do Card */}
              <div
                style={{
                  position: "absolute",
                  backfaceVisibility: "hidden", // Esconde o verso da frente
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "transparent",
                  fontSize: "3rem", // Tamanho do texto "Bolatec"
                  fontWeight: "bold",
                  color: "#FFD700", // Cor amarela da Bolatec
                }}
              >
                Bolatec
              </div>

              {/* Verso do Card (opcional, pode ser o mesmo ou algo diferente) */}
              <div
                style={{
                  position: "absolute",
                  backfaceVisibility: "hidden", // Esconde o verso do verso
                  transform: "rotateY(180deg)", // Vira o verso para "trás" inicialmente
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "transparent", // Pode mudar para uma cor de fundo
                  fontSize: "1.5rem", // Tamanho do texto no verso
                  fontWeight: "bold",
                  color: "#fff", // Cor branca para o verso
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                Precisão & Paixão pela Tecnologia
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
