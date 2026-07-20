import React from 'react';
import { REVIEWS } from '../data';
import { Star, CheckCircle2 } from 'lucide-react';

export default function Reviews() {
  return (
    <section className="py-24 bg-night-950 text-[#F5F2ED] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-mono text-xs font-black text-gold-500 tracking-[0.3em] uppercase mb-4">
            Testimonios
          </h2>
          <p className="font-serif text-3xl sm:text-5xl font-light italic text-[#F5F2ED] leading-tight">
            Opiniones de nuestros <br />
            <span className="not-italic font-sans font-black text-white uppercase tracking-tighter">huéspedes</span>
          </p>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-6 rounded-full" />
          <p className="font-sans text-sm text-[#A0A5B0] mt-4">
            Mira lo que opinan quienes ya se han desconectado de la rutina en nuestras acogedoras cabañas y disfrutado de la magia de Valle del Elqui.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => {
            const initials = rev.author.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

            return (
              <div
                key={rev.id}
                className="bg-night-900 p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-gold-500/30 hover:bg-night-950 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Rating Stars & Platform Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                      ))}
                    </div>
                    {rev.platform === 'airbnb' && (
                      <span className="font-sans text-[9px] font-black tracking-wider uppercase bg-red-500/10 text-red-400 border border-red-500/20 px-2.5 py-0.5 rounded-full">
                        Airbnb
                      </span>
                    )}
                    {rev.platform === 'booking' && (
                      <span className="font-sans text-[9px] font-black tracking-wider uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-0.5 rounded-full">
                        Booking.com
                      </span>
                    )}
                    {rev.platform === 'google' && (
                      <span className="font-sans text-[9px] font-black tracking-wider uppercase bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-2.5 py-0.5 rounded-full">
                        Google
                      </span>
                    )}
                  </div>

                  {/* Comment */}
                  <p className="font-sans text-sm text-[#A0A5B0] leading-relaxed font-normal italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>

                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/5 mt-6">
                  
                  {/* Initials Avatar */}
                  <div className="w-10 h-10 rounded-full bg-night-950 border border-white/10 text-gold-400 flex items-center justify-center font-mono text-xs font-bold shadow-sm shrink-0">
                    {initials}
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-sans text-sm font-black text-white uppercase tracking-tight">
                        {rev.author}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-[#8E9299] font-mono mt-0.5">
                      <span>Cabaña {rev.cabinName}</span>
                      <span>•</span>
                      <span>{rev.date}</span>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* AirBnb & Booking Trust badges */}
        <div className="mt-20 border-t border-white/5 pt-12 flex flex-wrap items-center justify-center gap-8 opacity-80 hover:opacity-100 transition-all">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E9299] font-black">
            Calificaciones destacadas en:
          </span>
          <div className="flex items-center gap-2">
            <span className="font-sans font-black text-white uppercase tracking-tighter text-sm">airbnb</span>
            <span className="font-mono text-xs text-gold-400 font-bold">★ 4.95/5</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-sans font-black text-white uppercase tracking-tighter text-sm">Booking.com</span>
            <span className="font-mono text-xs text-gold-400 font-bold">★ 9.4/10</span>
          </div>
        </div>

      </div>
    </section>
  );
}
