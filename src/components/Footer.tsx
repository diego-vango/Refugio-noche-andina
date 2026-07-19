import React from 'react';
import { Star, Phone, Instagram, MapPin, Mail, Shield, Heart } from 'lucide-react';

const logo = "/src/assets/images/noche_andina_logo_1784502776106.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-night-950 text-[#F5F2ED] pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative starry sparks in footer */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-0.5 h-0.5 bg-white rounded-full" />
        <div className="absolute top-2/3 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" />
        <div className="absolute top-1/5 right-10 w-0.5 h-0.5 bg-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper footer grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Col 1: Brand block (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#inicio" className="flex items-center space-x-2 group w-fit">
              <div className="w-10 h-10 rounded-full border border-white/10 bg-night-900 flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src={logo}
                  alt="Refugio Noche Andina Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight text-white uppercase">
                  Refugio Noche Andina
                </span>
                <span className="font-mono text-[9px] text-gold-400 tracking-wider uppercase font-black">
                  Valle del Elqui / Región de Coquimbo
                </span>
              </div>
            </a>
            
            <p className="font-sans text-xs text-[#A0A5B0] leading-relaxed font-normal">
              Tu estancia inolvidable en las tierras de Gabriela Mistral, disfrutando de casas rurales cómodas y acogedoras en Vicuña, Valle del Elqui.
            </p>

            {/* Badges of trust */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1 text-[10px] uppercase font-mono text-gold-400 font-bold">
                <Shield className="w-3.5 h-3.5" />
                <span>Pago Seguro</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-black uppercase tracking-[0.2em] text-gold-500">
              Enlaces rápidos
            </h4>
            <ul className="font-sans text-xs text-[#A0A5B0] space-y-2.5 font-normal">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
              </li>
              <li>
                <a href="#cabanas" className="hover:text-white transition-colors">Cabañas</a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-white transition-colors">Cotizador</a>
              </li>
              <li>
                <a href="#preguntas" className="hover:text-white transition-colors">Preguntas</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-black uppercase tracking-[0.2em] text-gold-500">
              Contacto directo
            </h4>
            <ul className="font-sans text-xs text-[#A0A5B0] space-y-3 font-normal">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Sector rural Vicuña, Valle del Elqui, Región de Coquimbo, Chile</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="https://wa.me/56923768452" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-mono">
                  +56 9 2376 8452
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="https://www.instagram.com/refugionocheandina" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-mono">
                  @refugionocheandina
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="font-mono text-[#8E9299]">reservas@refugionocheandina.cl</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Instagram Mockup Grid (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-black uppercase tracking-[0.2em] text-gold-500">
              Síguenos en Instagram
            </h4>
            <div className="grid grid-cols-3 gap-2">
              <a
                href="https://www.instagram.com/refugionocheandina"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square rounded-lg overflow-hidden group border border-white/5 bg-white/5"
              >
                <img
                  src="/src/assets/images/elqui_valley_hero_1784501630579.jpg"
                  alt="Valley thumb"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/refugionocheandina"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square rounded-lg overflow-hidden group border border-white/5 bg-white/5"
              >
                <img
                  src="/src/assets/images/cruz_del_sur_cabin_1784501640234.jpg"
                  alt="Cabin thumb"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/refugionocheandina"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square rounded-lg overflow-hidden group border border-white/5 bg-white/5"
              >
                <img
                  src="/src/assets/images/los_pimientos_cabin_1784501649919.jpg"
                  alt="Patio thumb"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
              </a>
            </div>
            <a
              href="https://www.instagram.com/refugionocheandina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10px] uppercase font-sans font-bold text-gold-400 hover:text-white tracking-wider transition-colors"
            >
              <span>Ver perfil @refugionocheandina</span>
              <span>↗</span>
            </a>
          </div>

        </div>

        {/* Lower footer: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-[#8E9299] font-normal">
          <p>© {currentYear} Refugio Noche Andina. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Desarrollado con</span>
            <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
            <span>para un turismo consciente.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
