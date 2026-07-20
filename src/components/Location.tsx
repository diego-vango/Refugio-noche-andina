import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';
import mapImg from '../assets/images/valle_elqui_map_1784506602529.jpg';

export default function Location() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=-29.99874891290801%2C-70.68444014484847";
  const embedMapsUrl = "https://maps.google.com/maps?q=-29.99874891290801,-70.68444014484847&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="ubicacion" className="py-24 bg-night-950 text-[#F5F2ED] relative overflow-hidden border-t border-white/5">
      {/* Ambient glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs font-black text-gold-500 tracking-[0.3em] uppercase mb-4">
            Ubicación del Refugio
          </h2>
          <p className="font-serif text-3xl sm:text-5xl font-light italic text-[#F5F2ED] leading-tight">
            Encuentra el camino <br />
            <span className="not-italic font-sans font-black text-white uppercase tracking-tighter">hacia la desconexión total</span>
          </p>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Card & Details Left */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-night-900 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gold-500" />
              
              <div className="flex items-center gap-3 text-gold-400 mb-4">
                <MapPin className="w-6 h-6 animate-pulse" />
                <span className="font-mono text-xs font-black tracking-widest uppercase">Dirección Física</span>
              </div>
              
              <h3 className="font-sans text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
                Ruta D-359, Vicuña
              </h3>
              <p className="font-mono text-xs text-gold-400 font-bold mb-6">
                Valle del Elqui, Región de Coquimbo
              </p>

              <p className="font-sans text-sm text-[#A0A5B0] leading-relaxed mb-6">
                Estamos situados en un sector rural y privilegiado por su silencio absoluto. Es el punto de partida ideal para recorrer los pueblos tradicionales del Elqui, sus viñedos, destilerías pisqueras artesanales y contemplar los cielos nocturnos más limpios de la precordillera.
              </p>

              {/* Distances/Directions list */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8E9299] font-sans flex items-center gap-2">
                    <Navigation className="w-3.5 h-3.5 text-gold-500/60" /> Desde Vicuña (Centro)
                  </span>
                  <span className="text-white font-mono font-bold">Aprox. 10 mins</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8E9299] font-sans flex items-center gap-2">
                    <Navigation className="w-3.5 h-3.5 text-gold-500/60" /> Desde La Serena / Coquimbo
                  </span>
                  <span className="text-white font-mono font-bold">Aprox. 55 mins</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8E9299] font-sans flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5 text-gold-500/60" /> Entorno natural
                  </span>
                  <span className="text-gold-400 font-mono font-bold uppercase tracking-wider text-[10px]">Silencio de campo</span>
                </div>
              </div>
            </div>

            {/* Direct CTA Link */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-gold-500 hover:bg-gold-400 text-night-950 font-sans font-black text-xs tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-gold-500/10 group"
            >
              <span>Abrir en Google Maps</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Styled Live Map Display Right */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[16/11] bg-night-900 group shadow-2xl">
              {/* Interactive Iframe Google Maps */}
              <iframe
                src={embedMapsUrl}
                className="w-full h-full border-0 opacity-80 hover:opacity-100 transition-opacity duration-300 rounded-3xl grayscale invert-[0.9] contrast-[1.1] hue-rotate-[190deg]"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Refugio Noche Andina"
              />
              
              {/* Overlay styling for smooth edges */}
              <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none" />

              {/* Hover link button on top of map */}
              <div className="absolute bottom-4 right-4 z-20">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-night-950/90 hover:bg-gold-500 hover:text-night-950 text-white font-sans text-[10px] tracking-widest uppercase font-bold py-2.5 px-4 rounded-xl border border-white/10 transition-all shadow-lg"
                >
                  <MapPin className="w-3.5 h-3.5 text-gold-500 group-hover:text-night-950" />
                  <span>¿Cómo llegar?</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
