import React from 'react';
import { CABINS } from '../data';
import CabinCard from './CabinCard';

interface CabinListProps {
  onSelectForBooking: (cabinId: string) => void;
}

export default function CabinList({ onSelectForBooking }: CabinListProps) {
  return (
    <section id="cabanas" className="py-24 bg-night-950 text-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-mono text-xs font-black text-gold-500 tracking-[0.3em] uppercase mb-4">
            Nuestros Alojamientos
          </h2>
          <p className="font-serif text-3xl sm:text-5xl font-light italic text-[#F5F2ED] leading-tight">
            Casas Rurales <br />
            <span className="not-italic font-sans font-black text-white uppercase tracking-tighter">con todo el encanto elquino</span>
          </p>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-6 rounded-full" />
          <p className="font-sans text-sm text-[#A0A5B0] mt-4">
            Cada casa ha sido construida respetando el entorno, equipada con todo lo necesario para tu descanso e ideal para contemplar la majestuosidad de la cordillera.
          </p>
        </div>

        {/* Cabins Grid */}
        <div className="space-y-12">
          {CABINS.map((cabin) => (
            <CabinCard
              key={cabin.id}
              cabin={cabin}
              onSelectForBooking={onSelectForBooking}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

