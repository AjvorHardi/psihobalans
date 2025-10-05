import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Psihoterapija",
    description: "Važna potreba današnjeg čoveka. Razgovori koji donose promene.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
  },
  {
    title: "Online terapija",
    description: "U psihoterapijskom procesu možete učestvovati i iz udobnosti svog doma.",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop",
  },
  {
    title: "Geštalt ART",
    description: "Umetničko-psihoterapijske radionice gde kroz umetnost izražavamo i istražujemo sebe.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop",
  },
];

const ServicesSection = () => {
  return (
    <section id="usluge" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white text-2xl font-bold p-6 uppercase tracking-wide">
                    {service.title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-muted rounded-lg hover:bg-secondary transition-colors">
            <h4 className="font-semibold text-lg mb-2">Autogeni trening</h4>
            <p className="text-sm text-muted-foreground">
              Duboka relaksacija kojom ublažavate posledice današnjeg brzog tempa života.
            </p>
          </div>
          <div className="p-6 bg-muted rounded-lg hover:bg-secondary transition-colors">
            <h4 className="font-semibold text-lg mb-2">LGBT</h4>
            <p className="text-sm text-muted-foreground">
              Svako treba da ima pravo da slobodno ispoljava svoju seksualnu orijentaciju i ne oseća stid zbog toga.
            </p>
          </div>
          <div className="p-6 bg-muted rounded-lg hover:bg-secondary transition-colors">
            <h4 className="font-semibold text-lg mb-2">Međuljudski odnosi</h4>
            <p className="text-sm text-muted-foreground">
              Partnerski, porodični, prijateljski, poslovni odnosi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
