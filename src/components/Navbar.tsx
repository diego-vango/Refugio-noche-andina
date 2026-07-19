import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const logo = "/src/assets/images/noche_andina_logo_1784502776106.jpg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Cabañas', href: '#cabanas' },
    { name: 'Cotizador', href: '#cotizador' },
    { name: 'Preguntas', href: '#preguntas' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-night-950/95 backdrop-blur-md shadow-lg border-b border-white/10 py-4'
          : 'bg-gradient-to-b from-night-950/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#inicio" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 rounded-full border border-gold-400/30 bg-night-900 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 shrink-0">
              <img
                src={logo}
                alt="Refugio Noche Andina Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-black tracking-tighter text-[#F5F2ED] uppercase">
                Refugio <span className="font-serif italic font-light text-gold-400 lowercase">noche andina</span>
              </span>
              <span className="font-mono text-[8px] text-[#8E9299] tracking-[0.1em] uppercase">
                Valle del Elqui / Región de Coquimbo
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-[11px] tracking-widest uppercase font-semibold text-[#8E9299] hover:text-[#F5F2ED] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* WhatsApp Direct Booking Button */}
          <div className="hidden lg:flex items-center">
            <a
              id="nav-whatsapp-btn"
              href="https://wa.me/56923768452"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#F5F2ED] hover:bg-gold-400 text-night-950 font-sans text-xs font-bold tracking-widest uppercase rounded-full shadow-md transition-all hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Reserva Directa</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#F5F2ED] hover:text-gold-400 focus:outline-none p-1"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden absolute top-full left-0 right-0 bg-night-950/95 backdrop-blur-lg border-b border-white/10 shadow-2xl py-6 px-6 animate-fadeIn"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-sans text-xs tracking-widest uppercase font-semibold text-gray-300 hover:text-gold-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            <hr className="border-white/10" />
            <a
              id="mobile-nav-whatsapp"
              href="https://wa.me/56923768452"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#F5F2ED] hover:bg-gold-400 text-night-950 font-sans text-xs font-bold tracking-widest uppercase rounded-lg shadow-md transition-all"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Reservar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
