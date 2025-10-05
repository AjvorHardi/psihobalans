import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  {
    title: "Psihoterapija",
    categories: "Family, Individualna terapija, LGBT, Odnosi, Psihoterapija",
    image: "https://psihobalans.rs/wp-content/uploads/2021/02/Tri-banera-naslovna1-580x390.jpg"
  },
  {
    title: "Online psihoterapija",
    categories: "Family, Grupe, Individualna terapija, Odnosi, Psihoterapija, Relaksacija, Trening",
    image: "https://psihobalans.rs/wp-content/uploads/2021/02/Tri-banera-naslovna2-580x390.jpg"
  },
  {
    title: "Međuljudski odnosi",
    categories: "Family, Grupe, Individualna terapija, LGBT, Odnosi, Psihoterapija",
    image: "https://psihobalans.rs/wp-content/uploads/2021/02/Tri-banera-naslovna3-580x390.jpg"
  },
  {
    title: "Autogeni trening",
    categories: "Family, Individualna terapija, Psihoterapija, Relaksacija, Trening",
    image: "https://psihobalans.rs/wp-content/uploads/2015/11/Project-autogeni-580x390.jpg"
  },
  {
    title: "LGBT",
    categories: "Family, Grupe, Individualna terapija, LGBT, Odnosi, Psihoterapija",
    image: "https://psihobalans.rs/wp-content/uploads/2021/02/gej-curasel-naslovna-580x390.jpg"
  },
  {
    title: "Geštalt art radionice",
    categories: "Individual, Individualna terapija, Odnosi, Psihoterapija, Relaksacija, Trening",
    image: "https://psihobalans.rs/wp-content/uploads/2015/11/Gestalt-art-1-580x390.jpg"
  }
];

const Usluge = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Usluge</h1>
          <p className="text-gray-600 italic">napravite sledeći korak</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 italic mb-4">{service.categories}</p>
                <button className="text-primary hover:underline">Read more</button>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-50 p-8 rounded-lg text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Zakažite svoj termin</h2>
            <p className="text-lg mb-2">Svetlana Prokić, diplomirani psiholog i geštalt terapeut</p>
            <p className="text-gray-700">
              Psihološko savetovanje i psihoterapija su oblici psihološke pomoći. Sastoje se uglavnom od razgovora, ali i korišćenja određenih tehnika (crtanja, vizualizacije, iskustvenih eksperimenata), koje nam pomažu da lakše dođemo do srži problema.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-center">Najčešća pitanja i nedoumice vezane za psihoterapiju.</h2>
          <h3 className="text-xl text-center mb-8 text-gray-700">Prvi susret sa psihoterapeutom – šta treba da znate</h3>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                KADA DA ZOVEM PSIHOTERAPEUTA?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Klijenti se najčešće javljaju kada već "dogori". Kada ih nešto toliko ometa u životu, kada ih iscrpljuje, kada je preteško i jako se loše osećaju. Kada procenjuju da su u depresiji, kada imaju česte panične napade ili anksioznost koja ih već dugo prati i ometa. Kada imaju fizičke tegobe kojima lekari ne mogu da nađu uzrok. Kada se desi iznenadni gubitak bliske osobe, bilo da je to smrt ili razvod. To je naravno u redu, i tada je svakome psihoterapeut najpotrebniji. Ipak, možete se javiti i onda kada nemate ozbiljne tegobe, ali osećate da ne ostvarujete svoj puni potencijal. Kada Vam je potrebna pomoć i podrška u nekom životnom zastoju, zastoju u karijeri, nekom problemu koji vas oduvek prati (npr. teškoća da nađete odgovarajućeg partnera ili konstantni sukobi sa majkom). Kada Vam je teško zbog gomile životnih obaveza, kada ste pod stresom ili Vam je potreban neko sa kim ćete porazgovarati i složiti svoje misli. Sve su to validni razlozi da pozovete psihoterapeuta.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                KOGA DA ZOVEM?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Klijenti najčešće dolaze preporukom neke bliske osobe ili pretragom interneta nalaze terapeuta koji radi u njihovom gradu. Kada tražite nekoga putem interneta, pogledajte biografiju te osobe- šta je prethodno radila, kakvi su joj stavovi o životu.. Pročitajte neki tekst ukoliko ima svoj sajt ili blog. Na taj način ćete videti da li Vam neko deluje kao dobar terapeut za Vas. Informišite se o edukaciji koju je završila i vidite da li Vam taj pravac odgovara- da li za vas ima smisla.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                RAZLIKA PSIHOLOG/PSIHOTERAPEUT/PSIHIJATAR?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Diplomirani psiholog je osoba koja je završila fakultet- smer Psihologija. U Novom Sadu je to Filozofski fakultet- Odsek za psihologiju ili neki od privatnih fakulteta. Psihijatar je osoba koja je završila studije medicine i specijalizovala se u oblasti psihijatrije. Dakle, to je doktor, specijalista psihijatrije. Psihoterapeut može biti psiholog, psihijatar ili neko koje završio studije drugih humanističkih nauka (sociologiju, socijalni rad i dr.), a zatim na svoju inicijativu upisao i edukaciju za psihoterapeuta. Edukacija se održava u privatnim školama (dakle, ne postoji državni fakultet koji vas obučava za terapeuta), obično traje četiri godine i ne postoji opcija "budžeta" tj. polaznici je sami finansiraju.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                KOJI PRAVAC DA ODABEREM?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Postoje razni pravci u psihoterapiji i u Novom Sadu su gotovo svi koji postoje i dostupni. Možete pročitati po nešto o svakome od njih, a onda izabrati onaj koji Vam najviše leži, onaj čija se filosofija poklapa sa Vašom. Neki pravci su se pokazali nešto efikasniji kod specifičnih problema (npr. REBT kod paničnih napada), ali ono što novija istraživanja pokazuju je to da je najvažniji odnos klijenta i terapeuta. Dakle, ako Vam se terapeut ne dopadne i ne osećate se dobro u kontaktu sa njim, onda Vam verovatno neće pomoći, bez obzira koji pravac koristi. Kada napišem "osećate se dobro" to ne znači da ćete se sve vreme osećati lepo (jer terapija zna biti veoma neprijatna u nekim momentima), ali da Vam se generalno sviđa kao osoba, da je to neko sa kim Vam je ugodno da provodite vreme i stvara Vam osećaj poverenja.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">
                ŠTA TREBA DA KAŽEM PRVI PUT?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Prvi poziv namenjen je zakazivanju prve seanse. Prilikom tog poziva treba da kažete šta je ono zbog čega se javljate. Neki terapeuti ne rade sa određenim temama i važno je da znaju zbog čega želite da dođete. Dakle, važno je da ukratko iznesete svoj problem, terapeut će Vam reći da li može sa Vama da radi, a zatim dogovarate termin Vašeg susreta.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold">
                DA LI JE DOVOLJNO SAMO JEDNOM DA DOĐEM NA PSIHOTERAPIJU?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Ne. Da bi psihoterapija bila uspešna, potrebno je da traje neko vreme. Na prvih nekoliko susreta se tek upoznajete sa psihoterapeutom, pričate mu o svom životu, teškoćama, obrascima ponašanja, a tek kada se upoznate, rad na konkretnom problemu može da krene. Postoje pravci koji praktikuju ograničen broj susreta i fokusiraju se odmah na problem, ali meni lično to nije bilo dovoljno. U geštalt terapiji prosečan broj susreta je 10 i najbolje je da dinamika viđanja bude jednom nedeljno u trajanju od 50 minuta. To je često dovoljno da osoba krene da rešava svoj problem, ali mnogi odluče da nastave da kroz terapiju istražuju svoj svet, završavaju nezavršene poslove iz prošlosti i zaceljuju stare rane.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Usluge;
