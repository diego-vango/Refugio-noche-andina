import React from 'react';
import { ArrowRight, Phone, Compass, Sparkles, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import elquiHeroImg from '../assets/images/elqui_valley_hero_1784501630579.jpg';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-night-950 pt-24"
    >
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={elquiHeroImg}
          alt="Breathtaking landscape of Valle del Elqui with starry sky"
          className="w-full h-full object-cover scale-105 opacity-40 filter brightness-[0.7] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
        {/* Layer Overlays for Premium Cinematic Feeling */}
        <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/60 to-black/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-night-950/90 pointer-events-none" />
      </div>

      {/* Floating Sparkles in the Sky (Background decoration) */}
      <div className="absolute inset-0 z-0 opacity-35 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-white rounded-full animate-ping duration-3000" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-yellow-100 rounded-full blur-[1px] animate-pulse duration-1000" />
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse duration-4000" />
        <div className="absolute top-10 right-10 w-1 h-1 bg-white rounded-full animate-ping duration-2000" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24">
        {/* Slogan pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-1.5 mb-6"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold-500 font-black">
            Reserva Directa • Sin Comisiones
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-[44px] sm:text-[76px] md:text-[110px] leading-[0.9] font-serif tracking-tighter mb-8 italic text-[#F5F2ED]"
        >
          Refugio <br className="hidden sm:block" />
          <span className="not-italic font-sans font-black text-white">Noche Andina</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-sans text-base sm:text-lg text-[#A0A5B0] max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Desconéctate en nuestras acogedoras cabañas diseñadas para el descanso profundo y la observación astronómica en el rincón más puro de la precordillera chilena.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            id="hero-book-btn"
            href="#cotizador"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#F5F2ED] hover:bg-gold-500 text-night-950 font-sans font-bold text-xs tracking-widest uppercase rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
          >
            <span>Reservar Directo</span>
            <ArrowRight className="w-4 h-4 text-night-950 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            id="hero-cabins-btn"
            href="#cabanas"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-md font-sans font-bold text-xs tracking-widest uppercase rounded-full transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
          >
            <span>Explorar Cabañas</span>
          </a>
        </motion.div>

        {/* Quick Features Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center">
            <span className="font-mono text-xl sm:text-2xl font-bold text-gold-400">WhatsApp</span>
            <span className="font-sans text-[10px] tracking-widest uppercase text-[#8E9299] font-bold mt-1">Contacto Directo</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-mono text-xl sm:text-2xl font-bold text-gold-400">Vicuña</span>
            <span className="font-sans text-[10px] tracking-widest uppercase text-[#8E9299] font-bold mt-1">Valle del Elqui</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-mono text-xl sm:text-2xl font-bold text-gold-400">Astro-friendly</span>
            <span className="font-sans text-[10px] tracking-widest uppercase text-[#8E9299] font-bold mt-1">Cielos Limpios</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-night-950 to-transparent pointer-events-none" />
    </section>
  );
}

