import React from "react";

function WhatsAppButton() {
  const phoneNumber = "551123616734"; // Substitua pelo número real
  const message = "Olá! Gostaria de saber mais sobre os jogos.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-brandYellow text-black px-8 py-4 rounded-full font-black uppercase tracking-tighter shadow-[0_10px_20px_rgba(255,215,0,0.3)] hover:scale-110 transition-transform flex items-center gap-2"
      >
        <span>Falar no WhatsApp</span>
      </a>
    </div>
  );
}

export default WhatsAppButton;