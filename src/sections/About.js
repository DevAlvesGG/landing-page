import React from "react";

function About() {
    return (
        <section id='sobre' className="py-20 px-10 bg-brandBlack text-white border-b border-brandYellow/20">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">

                {/* Lado do Texto */}
                <div className="flex-1">
                    <h2 className="text-4xl font-bold mb-6">
                        Sobre a <span className="text-brandYellow">Bolatec</span>
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Especialistas em dar vida nova aos seus equipamentos favoritos.
                        Seja um console de última geração, seu celular do dia a dia ou
                        aquele computador gamer que precisa de um upgrade, na Bolatec
                        unimos precisão técnica com a paixão por tecnologia.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <div className="border-l-4 border-brandYellow pl-4">
                            <span className="block font-bold text-2xl">10+</span>
                            <span className="text-sm text-gray-400">Anos de Experiência</span>
                        </div>
                    </div>
                </div>

                {/* Espaço para uma imagem futura ou ícone */}
                <div className="w-64 h-64 bg-zinc-900 border-2 border-brandYellow rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                    <span className="text-brandYellow font-bold">LOGO AQUI</span>
                </div>

            </div>
        </section>
    );
}

export default About;