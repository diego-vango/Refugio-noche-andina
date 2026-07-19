import React, { useState } from 'react';
import { Cabin } from '../types';
import { Users, BedDouble, CalendarCheck, ShieldAlert, ArrowRight, Heart, Sparkles, ExternalLink } from 'lucide-react';

interface CabinCardProps {
  key?: string;
  cabin: Cabin;
  onSelectForBooking: (cabinId: string) => void;
}

export default function CabinCard({ cabin, onSelectForBooking }: CabinCardProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'features'>('info');

  // Format CLP currency
  const formatCLP = (price: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div
      id={`cabin-card-${cabin.id}`}
      className="bg-night-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-gold-500/5 border border-white/5 hover:border-gold-500/20 transition-all duration-300 flex flex-col lg:flex-row"
    >
      {/* Cabin Image and Highlights Overlay */}
      <div className="relative lg:w-[45%] h-72 sm:h-96 lg:h-auto overflow-hidden">
        <img
          src={cabin.mainImage}
          alt={cabin.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Absolute Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-transparent to-transparent" />
        
        {/* Floating Tags */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {cabin.highlights.map((hl, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 bg-night-950/90 backdrop-blur-md text-gold-400 font-mono text-[10px] uppercase tracking-wider rounded-full border border-gold-400/20"
            >
              <Sparkles className="w-2.5 h-2.5 text-gold-400 fill-gold-400" />
              {hl}
            </span>
          ))}
        </div>

        {/* Capacity overlay on bottom of image for mobile */}
        <div className="absolute bottom-4 left-4 flex gap-3 text-[#F5F2ED] font-sans text-xs">
          <span className="bg-night-950/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-white/5">
            <Users className="w-3.5 h-3.5 text-gold-400" />
            {cabin.capacity}
          </span>
          <span className="bg-night-950/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-white/5">
            <BedDouble className="w-3.5 h-3.5 text-gold-400" />
            {cabin.beds}
          </span>
        </div>
      </div>

      {/* Cabin Details */}
      <div className="p-6 sm:p-8 lg:w-[55%] flex flex-col justify-between">
        <div>
          {/* Header and Price */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <h3 className="font-sans text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              {cabin.name}
            </h3>
            <div className="flex flex-col items-start sm:items-end">
              <span className="font-mono text-xl font-bold text-gold-400">
                {formatCLP(cabin.pricePerNight)}
              </span>
              <span className="font-sans text-[10px] text-[#8E9299] font-black uppercase tracking-widest">
                por noche
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="font-sans text-sm text-[#A0A5B0] leading-relaxed font-normal mb-6">
            {cabin.description}
          </p>

          {/* Tab buttons */}
          <div className="flex border-b border-white/10 mb-5">
            <button
              onClick={() => setActiveTab('info')}
              className={`font-sans text-xs font-black uppercase tracking-widest pb-2.5 px-1 border-b-2 transition-all mr-6 ${
                activeTab === 'info'
                  ? 'border-gold-500 text-gold-400'
                  : 'border-transparent text-[#8E9299] hover:text-[#F5F2ED]'
              }`}
            >
              Detalle & Estructura
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`font-sans text-xs font-black uppercase tracking-widest pb-2.5 px-1 border-b-2 transition-all ${
                activeTab === 'features'
                  ? 'border-gold-500 text-gold-400'
                  : 'border-transparent text-[#8E9299] hover:text-[#F5F2ED]'
              }`}
            >
              Servicios Incluidos ({cabin.features.length})
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[160px] mb-6">
            {activeTab === 'info' ? (
              <div className="space-y-4">
                <p className="font-sans text-xs text-[#8E9299] leading-relaxed italic font-normal">
                  {cabin.secondaryDescription}
                </p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 bg-night-950/80 p-4 rounded-2xl border border-white/5">
                  {cabin.specs.map((spec, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="font-sans text-[9px] text-[#8E9299] font-bold uppercase tracking-widest">
                        {spec.label}
                      </span>
                      <span className="font-sans text-xs font-black text-[#F5F2ED] mt-0.5 uppercase tracking-wider">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#A0A5B0]">
                {cabin.features.map((feat, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gold-500 shrink-0 font-bold">✓</span>
                    <span className="leading-tight font-normal">{feat}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Action Footers */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          
          {/* Main Direct Booking Trigger */}
          <button
            id={`book-trigger-${cabin.id}`}
            onClick={() => onSelectForBooking(cabin.id)}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#F5F2ED] hover:bg-gold-500 text-night-950 font-sans text-xs font-black tracking-wider uppercase rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 text-night-950" />
            <span>Consultar Disponibilidad</span>
          </button>

          {/* OTAs Fallback */}
          <div className="flex items-center justify-center gap-3">
            <span className="font-sans text-[10px] text-[#8E9299] font-bold uppercase tracking-widest hidden sm:inline">
              O reserva vía:
            </span>
            <a
              id={`airbnb-${cabin.id}`}
              href={cabin.airbnbLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#8E9299] hover:text-[#FF5A5F] border border-white/10 hover:border-[#FF5A5F]/30 px-3 py-2 rounded-full transition-colors bg-white/5"
            >
              <span>Airbnb</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              id={`booking-${cabin.id}`}
              href={cabin.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#8E9299] hover:text-[#003580] border border-white/10 hover:border-[#003580]/30 px-3 py-2 rounded-full transition-colors bg-white/5"
            >
              <span>Booking</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
