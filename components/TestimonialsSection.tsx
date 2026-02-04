
import React from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-blanco-piso overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-dorado-elegante uppercase tracking-[0.4em] text-xs font-bold">Nuestra Comunidad</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gris-texto mt-4 italic">Lo que dicen de nosotros</h2>
          <div className="w-16 h-px bg-dorado-elegante mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-10 rounded-2xl shadow-[0_20px_50px_-15px_rgba(106,127,166,0.1)] relative group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 right-10 -translate-y-1/2">
                <div className="w-12 h-12 bg-dorado-elegante rounded-full flex items-center justify-center text-white shadow-lg">
                  <i className="fas fa-quote-right text-lg"></i>
                </div>
              </div>
              
              <p className="text-gris-texto/80 italic leading-relaxed mb-8 text-[15px]">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blanco-piso group-hover:border-dorado-elegante transition-colors">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-gris-texto">{testimonial.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-azul-base font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
