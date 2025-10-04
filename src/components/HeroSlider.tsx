import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Psihoterapija",
    subtitle: "Potreba današnjeg čoveka",
    quote: "Terapeut pomaže klijentu da izrazi dragocene aspekte svoje ličnosti, da upozna sebe i postane odgovoran za ono što jeste.",
    bgColor: "from-gray-200 to-gray-300",
  },
  {
    title: "Anksioznost",
    subtitle: "Zaronimo još dublje",
    quote: "Čovek nikada ništa ne prevazilazi tako što se tome opire. Možemo nešto prevazići samo ako u to dublje uronimo.",
    bgColor: "from-blue-100 to-gray-200",
  },
  {
    title: "LGBT",
    subtitle: "Razumevanje, podrška, prihvatanje",
    quote: "Sloboda nije nešto što ti neko daje, to uzimaš sam.",
    bgColor: "from-purple-100 to-pink-100",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`w-full h-full bg-gradient-to-br ${slide.bgColor} flex items-center justify-center`}>
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-4">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl italic text-foreground/80 mb-8 leading-relaxed">
                  "{slide.quote}"
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
