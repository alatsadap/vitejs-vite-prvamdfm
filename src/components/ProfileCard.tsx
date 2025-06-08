import React, { useState } from "react";
import { Instagram, Mail, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import BentoCard from "./BentoCard";

const ProfileCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/album/novita_1.jpg",
      title: "Profile Photo 1"
    },
    {
      image: "/album/novita_2.jpg",
      title: "Profile Photo 2"
    },
    {
      image: "/album/novita_3.jpg",
      title: "Profile Photo 3"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-96">
        {/* Profile Photo Carousel - Full width on mobile, spans 2 columns on desktop */}
        <BentoCard className="md:col-span-2 md:row-span-2 !p-0 !m-0 overflow-hidden h-64 md:h-full flex">
          <div className="relative w-full h-full flex-1">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
              style={{ margin: 0, padding: 0 }}
            />
            {/* Gradient overlay hanya dari bawah */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            
            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors z-10"
              tabIndex={0}
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors z-10"
              tabIndex={0}
            >
              <ChevronRight size={20} className="text-white" />
            </button>

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full border-2 border-white transition-colors duration-200 focus:outline-none ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Instagram */}
        <BentoCard 
          icon={Instagram}
          title="Instagram"
          description="@novitaintanp"
          onClick={() => window.open('https://instagram.com', '_blank')}
        />

        {/* Email */}
        <BentoCard 
          icon={Mail}
          title="Email"
          description="hello@example.com"
          onClick={() => window.open('mailto:hello@example.com')}
        />

        {/* Location */}
        <BentoCard 
          icon={MapPin}
          title="Location"
          description="San Francisco, kediri"
        />

        {/* Bio/About */}
        <BentoCard>
          <div className="h-full flex flex-col justify-center">
            <h3 className="font-bold text-xl mb-2">Intan Novita</h3>
            <p className="text-muted-foreground mb-2">Travel Enthusiast</p>
            <p className="text-sm">Building beautiful web experiences and exploring the world one destination at a time.</p>
          </div>
        </BentoCard>
      </div>
    </div>
  );
};

export default ProfileCard;
