import React from 'react';

const services = [
  { id: '01', title: "Games", desc: "Reparo de consoles e controles." },
  { id: '02', title: "Celular", desc: "Troca de tela, bateria e placa." },
  { id: '03', title: "Computador", desc: "Manutenção e montagem de máquinas." },
  { id: '04', title: "Notebook", desc: "Limpeza e upgrades de performance." }
];

function Services() {
  return (
    <section className="py-20 px-6 bg-zinc-900" id="servicos">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black mb-12 text-center uppercase italic">
          Nossos <span className="text-brandYellow">Serviços</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(s => (
            <div key={s.id} className="bg-black p-6 border-b-4 border-brandYellow rounded-lg hover:-translate-y-2 transition-transform">
              <span className="text-brandYellow font-mono text-sm">{s.id} //</span>
              <h3 className="text-xl font-bold mt-2 uppercase">{s.title}</h3>
              <p className="text-gray-400 text-sm mt-4">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;