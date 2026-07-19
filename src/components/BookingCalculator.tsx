import React, { useState, useEffect } from 'react';
import { CABINS } from '../data';
import { Calendar, Users, Phone, ShieldCheck, HelpCircle, Flame, Sparkles } from 'lucide-react';

interface BookingCalculatorProps {
  selectedCabinId: string;
  setSelectedCabinId: (cabinId: string) => void;
}

export default function BookingCalculator({ selectedCabinId, setSelectedCabinId }: BookingCalculatorProps) {
  // Date states - default checkin in 2 days, checkout in 5 days
  const today = new Date();
  const defaultCheckIn = new Date(today);
  defaultCheckIn.setDate(today.getDate() + 2);
  const defaultCheckOut = new Date(today);
  defaultCheckOut.setDate(today.getDate() + 5);

  const [checkIn, setCheckIn] = useState<string>(defaultCheckIn.toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState<string>(defaultCheckOut.toISOString().split('T')[0]);
  const [guests, setGuests] = useState<number>(2);
  
  // Experience additions
  const [addAstro, setAddAstro] = useState<boolean>(false);
  const [addTrekking, setAddTrekking] = useState<boolean>(false);
  const [addBike, setAddBike] = useState<boolean>(false);
  const [addYoga, setAddYoga] = useState<boolean>(false);

  // Calculate nights
  const [nights, setNights] = useState<number>(3);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const activeCabin = CABINS.find((c) => c.id === selectedCabinId) || CABINS[0];

  useEffect(() => {
    if (!checkIn || !checkOut) return;
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    
    if (d1 >= d2) {
      setErrorMsg('La fecha de salida debe ser posterior a la de entrada.');
      setNights(0);
    } else {
      setErrorMsg('');
      const diffTime = Math.abs(d2.getTime() - d1.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays);
    }
  }, [checkIn, checkOut]);

  // Handle cabin change to restrict guests
  const handleCabinChange = (cabinId: string) => {
    setSelectedCabinId(cabinId);
    const targetCabin = CABINS.find((c) => c.id === cabinId);
    if (targetCabin) {
      // Adjust guest count if it exceeds capacity
      if (cabinId === 'cruz-del-sur' && guests > 3) {
        setGuests(3);
      } else if (cabinId === 'los-pimientos' && guests < 1) {
        setGuests(4);
      }
    }
  };

  // Cost calculations
  const baseCost = nights > 0 ? activeCabin.pricePerNight * nights : 0;
  
  // Experience item costs
  const astroPrice = addAstro ? 15000 * guests : 0;
  const trekkingPrice = addTrekking ? 10000 * guests : 0;
  const bikePrice = addBike ? 12000 * nights * (guests > 2 ? 2 : guests) : 0; // capped at 2 bikes max for estimate
  const yogaPrice = addYoga ? 8000 * guests : 0;
  
  const totalCost = baseCost + astroPrice + trekkingPrice + bikePrice + yogaPrice;

  // Formatting helpers
  const formatCLP = (val: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(val);
  };

  // Compile WhatsApp prefilled message
  const generateWhatsAppMessage = () => {
    const d1Formatted = checkIn.split('-').reverse().join('/');
    const d2Formatted = checkOut.split('-').reverse().join('/');
    
    let msg = `Hola Refugio Noche Andina, me gustaría consultar disponibilidad para reservar la *${activeCabin.name}*.\n\n`;
    msg += `• *Fechas:* del ${d1Formatted} al ${d2Formatted} (${nights} noches)\n`;
    msg += `• *Huéspedes:* ${guests} ${guests === 1 ? 'persona' : 'personas'}\n`;
    
    const extraServices: string[] = [];
    if (addAstro) extraServices.push(`Tour Astroturismo para ${guests} pers.`);
    if (addTrekking) extraServices.push(`Trekking Guiado para ${guests} pers.`);
    if (addBike) extraServices.push(`Arriendo de Bicicleta (${nights} días)`);
    if (addYoga) extraServices.push(`Sesión de Yoga para ${guests} pers.`);
    
    if (extraServices.length > 0) {
      msg += `• *Servicios adicionales:* ${extraServices.join(', ')}\n`;
    }
    
    msg += `\n*Valor estimado total:* ${formatCLP(totalCost)}\n`;
    msg += `¿Tienen disponibilidad para esas fechas? ¡Muchas gracias!`;
    
    return msg;
  };

  const handleWhatsAppRedirect = () => {
    if (nights <= 0) return;
    const baseText = generateWhatsAppMessage();
    const encodedText = encodeURIComponent(baseText);
    const whatsappUrl = `https://wa.me/56923768452?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="cotizador" className="py-24 bg-night-950 text-[#F5F2ED] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-mono text-xs font-black text-gold-500 tracking-[0.3em] uppercase mb-4">
            Reservar Directo
          </h2>
          <p className="font-serif text-3xl sm:text-5xl font-light italic text-[#F5F2ED] leading-tight">
            Calcula tu estadía <br />
            <span className="not-italic font-sans font-black text-white uppercase tracking-tighter">y escríbenos por whatsapp</span>
          </p>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-6 rounded-full" />
          <p className="font-sans text-sm text-[#A0A5B0] mt-4">
            Ahorra comisiones de plataformas intermediarias. Haz tu consulta directa por WhatsApp con un solo clic. Respondemos de inmediato para coordinar tu transferencia y asegurar tu fecha.
          </p>
        </div>

        {/* Form and Bill Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 bg-night-900 p-6 sm:p-8 rounded-3xl border border-white/5 shadow-2xl space-y-6">
            <h3 className="font-sans text-sm tracking-wider uppercase font-black text-white pb-3 border-b border-white/10 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gold-400" />
              <span>1. Detalles de tu Estadía</span>
            </h3>

            {/* Cabin selector */}
            <div>
              <label className="block font-sans text-[10px] font-black text-[#8E9299] uppercase tracking-widest mb-2">
                Selecciona tu Casa Rural
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CABINS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => handleCabinChange(c.id)}
                    className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden cursor-pointer ${
                      selectedCabinId === c.id
                        ? 'border-gold-500 bg-gold-500/10 shadow-lg shadow-gold-500/5'
                        : 'border-white/5 hover:border-gold-500/20 bg-night-950'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-sans text-sm font-black text-[#F5F2ED]">
                        {c.name.split('"')[1] || c.name}
                      </span>
                      <span className="font-mono text-xs text-gold-400 font-bold">
                        {formatCLP(c.pricePerNight)}/n
                      </span>
                    </div>
                    <span className="font-sans text-xs text-[#A0A5B0] font-normal">
                      Capacidad: {c.capacity}
                    </span>
                    {selectedCabinId === c.id && (
                      <div className="absolute top-0 right-0 w-8 h-8 bg-gold-500 text-night-950 flex items-center justify-center rounded-bl-xl font-bold">
                        <span className="text-[10px]">✓</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Dates grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-sans text-[10px] font-black text-[#8E9299] uppercase tracking-widest mb-2">
                  Fecha de Entrada (Check-In)
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={today.toISOString().split('T')[0]}
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full font-mono text-sm p-3.5 bg-night-950 border border-white/10 text-[#F5F2ED] rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 focus:border-gold-500 cursor-pointer"
                  />
                </div>
              </div>
              <div>
                <label className="block font-sans text-[10px] font-black text-[#8E9299] uppercase tracking-widest mb-2">
                  Fecha de Salida (Check-Out)
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={checkIn || today.toISOString().split('T')[0]}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full font-mono text-sm p-3.5 bg-night-950 border border-white/10 text-[#F5F2ED] rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500 focus:border-gold-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {errorMsg && (
              <p className="font-sans text-xs font-bold text-red-400 bg-red-950/40 border border-red-500/10 p-3 rounded-lg">
                ⚠️ {errorMsg}
              </p>
            )}

            {/* Guest Selector */}
            <div>
              <label className="block font-sans text-[10px] font-black text-[#8E9299] uppercase tracking-widest mb-2">
                Cantidad de Huéspedes
              </label>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gold-400 mr-1" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="p-3.5 bg-night-950 border border-white/10 text-[#F5F2ED] rounded-xl font-sans text-sm focus:outline-none focus:ring-1 focus:ring-gold-500 focus:border-gold-500 w-full sm:w-48 cursor-pointer"
                >
                  {selectedCabinId === 'cruz-del-sur' ? (
                    <>
                      <option value={1}>1 Huésped</option>
                      <option value={2}>2 Huéspedes</option>
                      <option value={3}>3 Huéspedes (Max)</option>
                    </>
                  ) : (
                    <>
                      <option value={1}>1 Huésped</option>
                      <option value={2}>2 Huéspedes</option>
                      <option value={3}>3 Huéspedes</option>
                      <option value={4}>4 Huéspedes</option>
                      <option value={5}>5 Huéspedes</option>
                      <option value={6}>6 Huéspedes</option>
                      <option value={7}>7 Huéspedes (Max)</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            {/* Part 2: Special Experiences Add-ons */}
            <div className="pt-4 border-t border-white/10">
              <h3 className="font-sans text-sm tracking-wider uppercase font-black text-white pb-3 flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>2. Añadir Actividades & Tours (Opcional)</span>
              </h3>
              <p className="font-sans text-xs text-[#A0A5B0] mb-4 font-normal leading-relaxed">
                Añade experiencias exclusivas y guiadas a tu estadía para vivir la mística de Elqui a fondo. El precio se calculará de forma referencial.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Astro Tour */}
                <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                  addAstro ? 'border-gold-500 bg-gold-500/10' : 'border-white/5 bg-night-950 hover:bg-night-950/80'
                }`}>
                  <input
                    type="checkbox"
                    checked={addAstro}
                    onChange={(e) => setAddAstro(e.target.checked)}
                    className="mt-1 h-4.5 w-4.5 text-gold-500 focus:ring-gold-500 rounded border-white/20 bg-night-950 cursor-pointer"
                  />
                  <div>
                    <span className="block font-sans text-xs font-bold text-[#F5F2ED]">
                      Observación de Estrellas
                    </span>
                    <span className="block font-mono text-[10px] text-gold-400 font-bold mt-0.5">
                      +$15.000 CLP p/persona
                    </span>
                  </div>
                </label>

                {/* Trekking */}
                <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                  addTrekking ? 'border-gold-500 bg-gold-500/10' : 'border-white/5 bg-night-950 hover:bg-night-950/80'
                }`}>
                  <input
                    type="checkbox"
                    checked={addTrekking}
                    onChange={(e) => setAddTrekking(e.target.checked)}
                    className="mt-1 h-4.5 w-4.5 text-gold-500 focus:ring-gold-500 rounded border-white/20 bg-night-950 cursor-pointer"
                  />
                  <div>
                    <span className="block font-sans text-xs font-bold text-[#F5F2ED]">
                      Trekking Guiado Cerros
                    </span>
                    <span className="block font-mono text-[10px] text-gold-400 font-bold mt-0.5">
                      +$10.000 CLP p/persona
                    </span>
                  </div>
                </label>

                {/* Bike Rental */}
                <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                  addBike ? 'border-gold-500 bg-gold-500/10' : 'border-white/5 bg-night-950 hover:bg-night-950/80'
                }`}>
                  <input
                    type="checkbox"
                    checked={addBike}
                    onChange={(e) => setAddBike(e.target.checked)}
                    className="mt-1 h-4.5 w-4.5 text-gold-500 focus:ring-gold-500 rounded border-white/20 bg-night-950 cursor-pointer"
                  />
                  <div>
                    <span className="block font-sans text-xs font-bold text-[#F5F2ED]">
                      Arriendo de Bicicletas
                    </span>
                    <span className="block font-mono text-[10px] text-gold-400 font-bold mt-0.5">
                      +$12.000 CLP por día
                    </span>
                  </div>
                </label>

                {/* Yoga */}
                <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                  addYoga ? 'border-gold-500 bg-gold-500/10' : 'border-white/5 bg-night-950 hover:bg-night-950/80'
                }`}>
                  <input
                    type="checkbox"
                    checked={addYoga}
                    onChange={(e) => setAddYoga(e.target.checked)}
                    className="mt-1 h-4.5 w-4.5 text-gold-500 focus:ring-gold-500 rounded border-white/20 bg-night-950 cursor-pointer"
                  />
                  <div>
                    <span className="block font-sans text-xs font-bold text-[#F5F2ED]">
                      Sesión de Yoga en Valle
                    </span>
                    <span className="block font-mono text-[10px] text-gold-400 font-bold mt-0.5">
                      +$8.000 CLP p/persona
                    </span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Bill summary */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Boleta card */}
            <div className="bg-night-900 text-[#F5F2ED] p-6 sm:p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
              
              {/* Decorative light ring */}
              <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gold-500/5 blur-xl pointer-events-none" />

              <h3 className="font-sans text-[10px] tracking-widest uppercase text-gold-400 font-black mb-4 pb-2 border-b border-white/10">
                Resumen de Cotización
              </h3>

              {/* Price items list */}
              <div className="space-y-4 font-sans text-sm">
                
                {/* Base price row */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="block font-black text-white">{activeCabin.name.split('"')[1] || activeCabin.name}</span>
                    <span className="block text-[11px] text-[#8E9299] mt-0.5">
                      {formatCLP(activeCabin.pricePerNight)} x {nights} {nights === 1 ? 'noche' : 'noches'}
                    </span>
                  </div>
                  <span className="font-mono font-bold text-[#F5F2ED]">
                    {formatCLP(baseCost)}
                  </span>
                </div>

                {/* Extras list */}
                {(addAstro || addTrekking || addBike || addYoga) && (
                  <div className="pt-3 border-t border-white/5 space-y-2.5">
                    <span className="block font-mono text-[9px] uppercase text-gold-500 tracking-widest font-black">
                      Servicios Adicionales
                    </span>

                    {addAstro && (
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-[#A0A5B0]">Tour Astroturismo ({guests} pers.)</span>
                        <span className="font-mono text-[#F5F2ED]">{formatCLP(astroPrice)}</span>
                      </div>
                    )}

                    {addTrekking && (
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-[#A0A5B0]">Trekking Guiado ({guests} pers.)</span>
                        <span className="font-mono text-[#F5F2ED]">{formatCLP(trekkingPrice)}</span>
                      </div>
                    )}

                    {addBike && (
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-[#A0A5B0]">Arriendo Bicicletas ({nights} días)</span>
                        <span className="font-mono text-[#F5F2ED]">{formatCLP(bikePrice)}</span>
                      </div>
                    )}

                    {addYoga && (
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-[#A0A5B0]">Yoga en el Valle ({guests} pers.)</span>
                        <span className="font-mono text-[#F5F2ED]">{formatCLP(yogaPrice)}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Total row */}
                <div className="pt-5 mt-4 border-t border-white/10 flex justify-between items-end">
                  <div>
                    <span className="block font-sans text-xs tracking-wider uppercase font-black text-white">Valor Total</span>
                    <span className="block text-[10px] text-[#8E9299] mt-0.5">Sujeto a disponibilidad directa</span>
                  </div>
                  <span className="font-mono text-2xl font-black text-gold-400">
                    {formatCLP(totalCost)}
                  </span>
                </div>

              </div>

              {/* Message preview block */}
              <div className="mt-6 p-4 rounded-xl bg-night-950 border border-white/5">
                <span className="block font-mono text-[9px] uppercase tracking-widest text-gold-500 font-black mb-2">
                  Mensaje que se enviará:
                </span>
                <p className="font-sans text-xs text-[#A0A5B0] whitespace-pre-wrap leading-relaxed line-clamp-5 select-none italic">
                  {generateWhatsAppMessage()}
                </p>
              </div>

              {/* Big Booking Button */}
              <button
                id="whatsapp-submit-btn"
                disabled={nights <= 0}
                onClick={handleWhatsAppRedirect}
                className={`w-full mt-6 py-4 rounded-full font-sans font-bold text-xs tracking-widest uppercase shadow-xl flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
                  nights > 0
                    ? 'bg-[#F5F2ED] hover:bg-gold-500 text-night-950 hover:scale-[1.01] active:scale-95'
                    : 'bg-white/5 text-white/20 border border-white/5 cursor-not-allowed'
                }`}
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Solicitar por WhatsApp</span>
              </button>

            </div>

            {/* Secure Booking info card */}
            <div className="bg-night-900 p-6 rounded-2xl border border-white/5 shadow-2xl space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs font-black text-white uppercase tracking-widest">
                    ¿Por qué reservar directo?
                  </h4>
                  <ul className="font-sans text-xs text-[#A0A5B0] space-y-2 mt-3 font-normal list-disc pl-4 leading-relaxed">
                    <li><strong className="text-white">Sin comisiones extra:</strong> Ahorra hasta un 15% sobre las tarifas de Airbnb/Booking.</li>
                    <li><strong className="text-white">Anfitriones locales:</strong> Trato directo y respuestas al instante.</li>
                    <li><strong className="text-white">Flexibilidad:</strong> Reprogramación gratuita hasta 7 días antes de la llegada.</li>
                    <li><strong className="text-white">Simple:</strong> Pagas con transferencia local chilena cómoda y segura.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
