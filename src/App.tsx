import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CabinList from './components/CabinList';
import BookingCalculator from './components/BookingCalculator';
import Location from './components/Location';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [selectedCabinId, setSelectedCabinId] = useState<string>('cruz-del-sur');

  const handleSelectForBooking = (cabinId: string) => {
    setSelectedCabinId(cabinId);
    // Smooth scroll to the calculator section
    const element = document.getElementById('cotizador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-night-950 text-[#F5F2ED] antialiased selection:bg-gold-500 selection:text-night-950">
      {/* 1. Header Navigation Bar */}
      <Navbar />

      {/* 2. Hero Presentation section */}
      <Hero />

      {/* 3. Our values & Philosophy */}
      <About />

      {/* 4. Active Cabins Showcase */}
      <CabinList onSelectForBooking={handleSelectForBooking} />

      {/* 5. Dynamic Booking Calculator & WhatsApp Generator */}
      <BookingCalculator
        selectedCabinId={selectedCabinId}
        setSelectedCabinId={setSelectedCabinId}
      />

      {/* 6. Physical Location with Google Maps directions */}
      <Location />

      {/* 7. Guest Reviews & Trust testimonials */}
      <Reviews />

      {/* 9. FAQs Accordion */}
      <FAQ />

      {/* 10. Direct contacts & footer */}
      <Footer />
    </div>
  );
}

