
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

const MenuSection: React.FC = () => {
  const [filter, setFilter] = useState<MenuItem['category'] | 'all'>('all');

  const filteredItems = filter === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === filter);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-dorado-elegante uppercase tracking-[0.4em] text-xs font-bold">Experiencia Gastronómica</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gris-texto mt-4 italic">Nuestra Carta</h2>
          <div className="w-16 h-px bg-dorado-elegante mx-auto mt-6"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['all', 'cafe', 'reposteria', 'brunch', 'especiales'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-8 py-2 text-[10px] uppercase tracking-[0.2em] transition-all rounded-full border
                ${filter === cat 
                  ? 'bg-azul-base text-white border-azul-base shadow-lg' 
                  : 'text-gris-texto border-gris-texto/10 hover:border-dorado-elegante hover:text-dorado-elegante'}`}
            >
              {cat === 'all' ? 'Todo' : cat.replace('reposteria', 'repostería')}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 max-w-6xl mx-auto">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-default">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg font-serif text-gris-texto group-hover:text-dorado-elegante transition-colors duration-300">
                  {item.name}
                </h3>
                <div className="flex-grow border-b border-dotted border-gris-texto/10 mx-4 h-1"></div>
                <span className="text-md font-medium text-gris-texto/80">{item.price}</span>
              </div>
              <p className="text-[13px] text-gris-texto/60 italic leading-relaxed max-w-md">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
