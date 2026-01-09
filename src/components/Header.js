import React from 'react';
import logo from '../assets/logo-bolatec.png';

function Header() {
  return (
    <header className="bg-black/90 backdrop-blur-md border-b border-brandYellow/10 py-4 px-10 flex justify-between items-center fixed top-0 w-full z-50">
      <div className="flex items-center">
        <img src={logo} alt="Bolatec Logo" className="h-10 w-auto" />
      </div>
      
      <nav className="hidden md:flex gap-8 text-xs font-black uppercase tracking-widest">
        <a href="#sobre" className="hover:text-brandYellow transition-colors">Sobre</a>
        <a href="#servicos" className="hover:text-brandYellow transition-colors">Serviços</a>
        <a href="https://wa.me/551123616734" className="text-brandYellow">Contato</a>
      </nav>
    </header>
  );
}

export default Header;