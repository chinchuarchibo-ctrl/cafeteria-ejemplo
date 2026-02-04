
import React, { useState } from 'react';
import { getBaristaRecommendation } from '../services/geminiService';
import { Recommendation } from '../types';

const AIBarista: React.FC = () => {
  const [mood, setMood] = useState('');
  const [pref, setPref] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Recommendation | null>(null);

  const handleRecommend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood || !pref) return;
    setLoading(true);
    try {
      const rec = await getBaristaRecommendation(mood, pref);
      setResult(rec);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-barista" className="py-24 bg-azul-base text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
         <i className="fas fa-water text-[40rem] -mr-40 mt-20"></i>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-dorado-elegante uppercase tracking-[0.4em] text-xs font-bold">Sugerencia Inteligente</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-4 italic">Concierge de Autor</h2>
              <p className="mt-8 text-white/70 leading-relaxed text-sm">
                Descubra el maridaje ideal que nuestra IA ha diseñado para armonizar con su momento presente y la brisa de Algarrobo.
              </p>

              <form onSubmit={handleRecommend} className="mt-10 space-y-6">
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-dorado-elegante mb-3 group-focus-within:text-white transition-colors">¿Cuál es su ánimo hoy?</label>
                  <input
                    type="text"
                    placeholder="Ej: Contemplativo, Enérgico, Sereno..."
                    className="w-full bg-white/5 border-b border-white/20 p-4 text-sm focus:outline-none focus:border-dorado-elegante transition-all placeholder:text-white/20"
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-dorado-elegante mb-3 group-focus-within:text-white transition-colors">Preferencia de notas</label>
                  <input
                    type="text"
                    placeholder="Ej: Salino, Tostado, Vainilla..."
                    className="w-full bg-white/5 border-b border-white/20 p-4 text-sm focus:outline-none focus:border-dorado-elegante transition-all placeholder:text-white/20"
                    value={pref}
                    onChange={(e) => setPref(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-dorado-elegante text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-azul-base transition-all disabled:opacity-50 shadow-lg"
                >
                  {loading ? 'Consultando al Experto...' : 'Obtener Recomendación'}
                </button>
              </form>
            </div>

            <div className="w-full lg:w-1/2 min-h-[400px] flex items-center justify-center border border-white/5 rounded-2xl bg-white/[0.02] p-10 backdrop-blur-sm relative">
              {loading ? (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-dorado-elegante border-t-transparent rounded-full animate-spin"></div>
                  <p className="mt-6 text-xs tracking-[0.2em] italic text-dorado-elegante">Diseñando su experiencia...</p>
                </div>
              ) : result ? (
                <div className="text-center animate-fade-in">
                  <div className="inline-block px-4 py-1 rounded-full border border-dorado-elegante/30 text-dorado-elegante text-[10px] uppercase tracking-widest mb-6">
                    Sugerencia del Barista
                  </div>
                  <h3 className="text-3xl font-serif italic mb-2 text-white">{result.drink}</h3>
                  <p className="text-dorado-elegante uppercase tracking-[0.3em] text-[11px] mb-8">con {result.pairing}</p>
                  <p className="text-[15px] italic leading-relaxed text-white/80 max-w-sm mx-auto">
                    "{result.description}"
                  </p>
                  <button onClick={() => setResult(null)} className="mt-10 text-[10px] uppercase tracking-widest text-dorado-elegante hover:text-white transition-colors">
                    Nueva consulta
                  </button>
                </div>
              ) : (
                <div className="text-center group">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <i className="fas fa-wind text-3xl text-dorado-elegante/40"></i>
                  </div>
                  <p className="text-sm italic text-white/30 tracking-wide">Inicie su consulta para recibir una propuesta personalizada.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBarista;
