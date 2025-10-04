import { Button } from "@/components/ui/button";

const OnlineTherapySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=600&fit=crop"
                alt="Online terapija"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold mb-4">Online terapija</h2>
            <p className="text-xl text-primary mb-6">Rešite nedoumice.</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Online psihoterapija donosi niz benefita klijentima. Prvo, pruža udobnost i praktičnost, omogućavajući im
              pristup terapeutskoj podršci iz udobnosti vlastitog doma. Ova vrsta terapije takođe uklanja geografske
              barijere, omogućavajući klijentima da biraju terapeuta iz bilo kog dela sveta.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Povećava privatnost, jer se sesije odvijaju u privatnom okruženju, teško dostupnom drugima. Takođe, online
              psihoterapija često pruža fleksibilnost u terminima, prilagođavajući se rasporedu klijenta. Sve ovo zajedno
              čini online psihoterapiju pristupačnom, prilagodljivom i efikasnom opcijom za očuvanje mentalnog zdravlja.
            </p>
            <Button size="lg">Saznajte više o online terapiji</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineTherapySection;
