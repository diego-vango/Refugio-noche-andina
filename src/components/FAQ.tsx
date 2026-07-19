import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('q1');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'Todas las preguntas' },
    { value: 'booking', label: 'Reservas' },
    { value: 'location', label: 'Ubicación' },
    { value: 'amenities', label: 'Comodidades' },
  ];

  const filteredItems = activeCategory === 'all'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter(item => item.category === activeCategory);

  const toggleAccordion = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="preguntas" className="py-24 bg-night-950 text-[#F5F2ED] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-mono text-xs font-black text-gold-500 tracking-[0.3em] uppercase mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="font-serif text-3xl sm:text-5xl font-light italic text-[#F5F2ED] leading-tight">
            Resuelve tus <br />
            <span className="not-italic font-sans font-black text-white uppercase tracking-tighter">dudas e inquietudes</span>
          </p>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveCategory(cat.value);
                // Close accordion or open first of list when changing tabs
                setOpenId(null);
              }}
              className={`px-4 py-2.5 rounded-full font-sans text-[9px] uppercase tracking-widest font-bold transition-all cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-gold-500 text-night-950 shadow-lg shadow-gold-500/5'
                  : 'bg-night-900 text-[#8E9299] hover:bg-night-900/80 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-gold-500 bg-night-900/90 shadow-lg shadow-gold-500/5'
                    : 'border-white/5 bg-night-900 hover:border-white/10'
                }`}
              >
                {/* Header/Trigger */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex gap-3">
                    <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 ${
                      isOpen ? 'text-gold-400' : 'text-[#8E9299]'
                    }`} />
                    <span className="font-sans text-sm sm:text-base font-black text-white uppercase tracking-tight leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div className="p-1 rounded-full bg-night-950 text-[#8E9299] shrink-0 mt-0.5">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-gold-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-white/5' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 sm:p-6 bg-night-950">
                    <p className="font-sans text-xs sm:text-sm text-[#A0A5B0] leading-relaxed font-normal">
                      {item.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="text-center mt-12 p-6 rounded-2xl bg-night-900 border border-white/5">
          <p className="font-sans text-xs text-[#A0A5B0] font-normal leading-relaxed">
            ¿Tienes otra pregunta sobre las cabañas, la estadía o las actividades? Escríbenos directamente y te orientamos con gusto.
          </p>
          <a
            id="faq-whatsapp-link"
            href="https://wa.me/56923768452?text=Hola%20Refugio%20Noche%20Andina%2C%20tengo%20una%20consulta%20adicional%20sobre..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-sans text-xs font-black text-gold-400 hover:text-white uppercase tracking-wider transition-colors mt-3"
          >
            Preguntar por WhatsApp →
          </a>
        </div>

      </div>
    </section>
  );
}
