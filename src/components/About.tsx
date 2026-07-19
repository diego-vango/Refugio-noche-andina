import React from 'react';
import { Heart, Sun, Map } from 'lucide-react';

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-night-900 text-[#F5F2ED] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-mono text-xs font-black text-gold-500 tracking-[0.3em] uppercase mb-4">
            Nuestra Filosofía
          </h2>
          <p className="font-serif text-3xl sm:text-5xl font-light italic text-[#F5F2ED] leading-tight">
            Un refugio natural <br />
            <span className="not-italic font-sans font-black text-white uppercase tracking-tighter">diseñado para el descanso</span>
          </p>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Descriptive text */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-sans text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Tu estadía inolvidable en las mágicas tierras de Gabriela Mistral
            </h3>
            <p className="font-sans text-base text-[#A0A5B0] leading-relaxed font-normal">
              Nacido del amor por la naturaleza árida pero fértil del Valle del Elqui, <strong className="text-white">Refugio Noche Andina</strong> es un espacio pensado para quienes anhelan la paz, el descanso consciente y la aventura. Nos ubicamos en las cercanías de <strong className="text-white">Vicuña</strong>, rodeados por cerros majestuosos que absorben el calor solar del día y revelan cielos nocturnos de una pureza incomparable.
            </p>
            <p className="font-sans text-base text-[#A0A5B0] leading-relaxed font-normal">
              Nuestras cabañas combinan el encanto rústico con las comodidades esenciales para asegurar una estadía relajante y reparadora. Cada espacio ha sido diseñado con esmero para brindarte privacidad, confort y la calidez de un verdadero hogar de campo, permitiéndote desconectar por completo y recargar energías. Además, te asesoramos directamente para coordinar las mejores actividades de la zona —como tours astronómicos privados, trekking guiado, paseos en bicicleta o visitas a pisqueras artesanales— conversando de manera directa con nosotros.
            </p>

            {/* Quote Block of Gabriela Mistral */}
            <div className="relative p-6 rounded-2xl bg-night-950 border-l-4 border-gold-500 my-8">
              <span className="absolute -top-5 left-4 text-gold-500/20 font-serif text-7xl select-none">“</span>
              <p className="font-serif italic text-white text-base leading-relaxed relative z-10">
                &ldquo;Tengo un día que es de piedra y de montaña, y un río que camina bajo el sol de oro... Elqui es un surco de luz donde mi infancia anduvo vestida de asombro y silencio.&rdquo;
              </p>
              <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-gold-400 block mt-3">
                — Inspirados en el legado de Gabriela Mistral
              </span>
            </div>
          </div>

          {/* Column 2: Highlights/Values Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1 */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-night-950 border border-white/5 hover:border-gold-500/30 hover:shadow-xl hover:shadow-gold-500/5 transition-all">
              <div className="p-3 bg-gold-500/10 rounded-xl text-gold-400 shrink-0">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans text-sm tracking-wider uppercase font-black text-[#F5F2ED]">
                  Energía del Sol & Estrellas
                </h4>
                <p className="font-sans text-xs text-[#A0A5B0] mt-1 leading-relaxed">
                  Disfruta de más de 300 días despejados al año y noches infinitas con contaminación lumínica cero.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-night-950 border border-white/5 hover:border-gold-500/30 hover:shadow-xl hover:shadow-gold-500/5 transition-all">
              <div className="p-3 bg-gold-500/10 rounded-xl text-gold-400 shrink-0">
                <Map className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans text-sm tracking-wider uppercase font-black text-[#F5F2ED]">
                  Ubicación Estratégica en Vicuña
                </h4>
                <p className="font-sans text-xs text-[#A0A5B0] mt-1 leading-relaxed">
                  A minutos de atractivos culturales, observatorios turísticos, ríos y senderos de trekking cordilleranos.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-night-950 border border-white/5 hover:border-gold-500/30 hover:shadow-xl hover:shadow-gold-500/5 transition-all">
              <div className="p-3 bg-gold-500/10 rounded-xl text-gold-400 shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans text-sm tracking-wider uppercase font-black text-[#F5F2ED]">
                  Hospitalidad Familiar Directa
                </h4>
                <p className="font-sans text-xs text-[#A0A5B0] mt-1 leading-relaxed">
                  Atención directa por sus dueños, recomendaciones locales honestas y gestión rápida vía WhatsApp.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
