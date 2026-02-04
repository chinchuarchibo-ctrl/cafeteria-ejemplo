
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-azul-base py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-white tracking-[0.2em]">
          ALGARROBO<span className="text-dorado-elegante">.</span>
        </div>
        <div className="hidden md:flex space-x-8 text-white uppercase text-[11px] tracking-[0.25em] font-medium">
          <a href="#hero" className="hover:text-dorado-elegante transition-colors">Inicio</a>
          <a href="#menu" className="hover:text-dorado-elegante transition-colors">Menú</a>
          <a href="#ai-barista" className="hover:text-dorado-elegante transition-colors">Barista IA</a>
          <a href="#about" className="hover:text-dorado-elegante transition-colors">Nosotros</a>
          <a href="#contact" className="hover:text-dorado-elegante transition-colors">Contacto</a>
        </div>
        <button className="bg-dorado-elegante text-white px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-azul-base transition-all transform hover:scale-105">
          Reservar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
