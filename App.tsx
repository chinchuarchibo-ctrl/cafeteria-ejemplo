
import React from 'react';
import Navbar from './components/Navbar';
import MenuSection from './components/MenuSection';
import AIBarista from './components/AIBarista';
import TestimonialsSection from './components/TestimonialsSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-blanco-piso">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="hero-gradient h-screen flex items-center justify-center text-center text-white relative">
        <div className="absolute inset-0 bg-azul-base/40"></div>
        <div className="relative z-10 px-6 max-w-4xl">
          <span className="uppercase tracking-[0.6em] text-[10px] mb-6 block opacity-80 animate-fade-in">Algarrobo · Valparaíso · Chile</span>
          <h1 className="text-7xl md:text-9xl font-serif mb-8 leading-tight italic animate-slide-up">
            Café <span className="text-dorado-elegante">Algarrobo</span>
          </h1>
          <p className="text-lg md:text-xl font-light italic mb-12 text-white/90 tracking-[0.1em] max-w-2xl mx-auto">
            La elegancia de la brisa marina fusionada con la calidez de nuestro tueste artesanal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#menu" className="bg-dorado-elegante text-white px-12 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-azul-base transition-all w-full sm:w-auto shadow-xl">
              Explorar Menú
            </a>
            <a href="#ai-barista" className="bg-white/10 backdrop-blur-md border border-white/30 px-12 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-azul-base transition-all w-full sm:w-auto">
              Asistente IA
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <i className="fas fa-chevron-down text-xl"></i>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-full h-full bg-blanco-piso -z-10 rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1000" 
                alt="Vista costera Algarrobo" 
                className="rounded-2xl shadow-[0_30px_60px_-15px_rgba(106,127,166,0.2)] object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-azul-base p-10 text-white rounded-2xl shadow-2xl">
                <p className="text-5xl font-serif font-bold italic text-dorado-elegante">Chile</p>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold mt-2 opacity-60">Litoral Central</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-dorado-elegante uppercase tracking-[0.4em] text-xs font-bold">Nuestra Esencia</span>
              <h2 className="text-4xl md:text-6xl font-serif text-gris-texto mt-6 mb-10 italic leading-tight">Serenidad frente al Pacífico</h2>
              <p className="text-gris-texto/70 leading-relaxed text-lg mb-8">
                Ubicado en la emblemática comuna de Algarrobo, nuestro café nace como un refugio de sofisticación. Aquí, el azul del cielo de Valparaíso se mezcla con la mística de la madera de algarrobo, creando un espacio donde el tiempo se detiene.
              </p>
              <div className="flex items-center gap-6">
                 <div className="h-[2px] w-12 bg-dorado-elegante"></div>
                 <p className="text-[15px] font-medium text-gris-texto uppercase tracking-[0.2em]">Tradición · Innovación · Mar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MenuSection />
      
      <AIBarista />

      <TestimonialsSection />

      {/* Footer / Contact */}
      <footer id="contact" className="bg-azul-base text-white pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white tracking-[0.2em] mb-8">ALGARROBO<span className="text-dorado-elegante">.</span></h3>
              <p className="text-[13px] text-white/70 leading-relaxed mb-10">
                Un santuario para los amantes del café de especialidad en la Quinta Región. Elegancia costera redefinida.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-white/60 hover:text-dorado-elegante transition-colors"><i className="fab fa-instagram text-xl"></i></a>
                <a href="#" className="text-white/60 hover:text-dorado-elegante transition-colors"><i className="fab fa-facebook text-xl"></i></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-dorado-elegante mb-8">Dirección</h4>
              <p className="text-sm text-white/80 leading-loose">
                Valparaíso, Algarrobo<br />
                V Región, Chile
              </p>
              <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-white mt-6 inline-block hover:text-dorado-elegante transition-colors font-bold border-b border-dorado-elegante/30 pb-1">
                Ver Ubicación
              </a>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-dorado-elegante mb-8">Horario Estival</h4>
              <ul className="text-sm text-white/80 space-y-4">
                <li className="flex justify-between"><span>Lun - Jue</span> <span className="text-white/40">08:00 - 20:00</span></li>
                <li className="flex justify-between"><span>Vie - Sáb</span> <span className="text-white/40">09:00 - 22:00</span></li>
                <li className="flex justify-between"><span>Dom</span> <span className="text-white/40">10:00 - 19:00</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-dorado-elegante mb-8">Newsletter</h4>
              <p className="text-xs text-white/60 mb-6 italic">Reciba invitaciones exclusivas a nuestras catas.</p>
              <form className="relative">
                <input 
                  type="email" 
                  placeholder="Su correo electrónico" 
                  className="bg-white/5 border-b border-white/20 p-4 text-[13px] w-full focus:outline-none focus:border-dorado-elegante transition-colors placeholder:text-white/20"
                />
                <button className="absolute right-0 bottom-4 text-dorado-elegante hover:text-white transition-colors">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] text-white/30">
            <p>&copy; 2024 Café Algarrobo Chile. Excelencia en cada grano.</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
