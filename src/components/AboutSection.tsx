import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="omeni" className="py-20 bg-muted">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">Svetlana Prokić</h2>
            <h3 className="text-xl text-primary mb-6">Po struci sam psiholog i psihoterapeut.</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Moj pristup je pre svega topao i prihvatajući prema svakom klijentu koji mi dolazi. Trudim se da
                izgradimo dobar odnos, da ga razumem i prihvatim, a zatim mu pomognem da i sam to učini. Svaki klijent
                je jedinstven.
              </p>
              <p>
                Ne postoje šeme, šabloni ni recepti po kojima se određeni problem rešava. Imam individualni pristup ka
                svakome i osim geštalt terapije, koristim i elemente drugih pristupa koje poznajem, pre svega REBT
                terapiju i tehnike dubinske relaksacije.
              </p>
              <p>
                Smatram da je psihoterapija od koristi svakome, i onima koji se nalaze u životnim krizama i onima sa
                izraženim simptomima, ali i onima koji žele da se razvijaju i napreduju i da otklone barijere koje ih
                ometaju u svakodnevnom životu.
              </p>
            </div>
            <Button className="mt-8" size="lg">
              <Phone className="mr-2" size={20} />
              064 2636 513
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
                alt="Svetlana Prokić"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
