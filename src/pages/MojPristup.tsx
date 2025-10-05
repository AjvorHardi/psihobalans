import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MojPristup = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Moj pristup</h1>
            <p className="text-gray-600 italic text-lg">Kroz razgovor do napretka</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                Moj pristup je pre svega topao i prihvatajući prema svakom klijentu koji mi dolazi. Trudim se da izgradimo dobar odnos, da ga razumem i prihvatim, a zatim mu pomognem da i sam to učini. Svaki klijent je jedinstven. Ne postoje šeme, šabloni ni recepti po kojima se određeni problem rešava. Imam individualni pristup ka svakome i osim geštalt terapije, koristim i elemente drugih pristupa koje poznajem, pre svega REBT terapiju i tehnike dubinske relaksacije. Nekim klijentima je potrebna osoba kojoj će ispričati sve što ih muči i to im bude dovoljno. Neki žele mnogo dublji, zahtevniji i složeniji rad i tada sam tu da im to i omogućim.
              </p>
              
              <p className="text-gray-700 leading-relaxed mt-4">
                Prvi susret namenjen je međusobnom upoznavanju i postavljanju cilja za terapijski rad. Često klijenti pričaju sve vreme ovog susreta, a ja sam tu da postavljam potpitanja. Nekima je potrebno malo više da se otvore i ne znaju šta je relevantno da ispričaju, pa sam ja aktivnija u postavljanju pitanja koja su mi važna. Na ovom susretu dogovaramo se i o dinamici viđanja, pravilima o otkazivanju seansi, načinima plaćanja i ostalim generalijama. Na svakom sledećem susretu bavimo se ciljem koji smo odredili, ali neretko skrenemo s puta zbog aktuelnih dešavanja u životu klijenta koji se ispostave prioritetnijim u datom trenutku. Obično je potrebno desetak seansi kako bi klijent primetio prve promene u svom životu, uz uslov da se aktivno time bavi i između seansi.
              </p>
              
              <p className="text-gray-700 leading-relaxed mt-4">
                Važno je da znate da Vam nikada neću dati odgovore na Vaša životna pitanja, niti odgovoriti šta Vi treba da uradite, već ću Vam pomoći da sami pronađete svoje odgovore- kroz razgovor, prava pitanja, intervencije, eksperimente.. Ponekad ću Vam predložiti neku tehniku ili vežbu koju možete da isprobavate kod kuće, da vidite da li Vam je korisna.
              </p>
            </div>

            <div>
              <img 
                src="https://psihobalans.rs/wp-content/uploads/2024/01/Moj-pristup.jpg" 
                alt="Moj pristup" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <blockquote className="text-xl italic text-gray-700 border-l-4 border-primary pl-6">
              Smatram da je psihoterapija od koristi svakome, i onima koji se nalaze u životnim krizama i onima sa izraženim simptomima, ali i onima koji žele da se razvijaju i napreduju i da otklone barijere koje ih ometaju u svakodnevnom životu.
            </blockquote>
            <p className="text-gray-700 mt-4 pl-6">
              Smatram da je upravo tada i najlepša, kada nemate problem koji Vas jako pritiska, već ste odlučili da se bavite kvalitetom svog života.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Geštalt terapija</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Geštalt terapija nastala je 1951. godine, iako je formirana i desetak godina ranije u konceptima njenog začetnika Frica Perlsa i prvoj knjizi „Ego, glad i agresija". Geštalt se može prevesti kao celina, kao forma koja je kompletna i ima svoj smisao. U geštalt terapiji, svako je odgovoran za sopstvene izbore, izbegavanja, pojavljivanje i (ne)pojavljivanje. Često se pitamo kako mi učestvujemo u onome što nam se dešava i kakav je smisao toga. Geštalt se može nazvati i posebnom filozofijom koja je često suprotna tradicionalnim pogledima.
              </p>
              
              <p className="text-gray-700 leading-relaxed mt-4">
                Akcenat tokom terapijskog rada je na "sada i ovde"- kako se osećam sada dok pričam o problemu, kakve su mi telesne senzacije, kako izgleda taj proces. Uz pomoć terapeuta, klijent kroz eksperimente isprobava različite načine bivanja u bezbednom okruženju. Terapeut ne interpretira, nego opisuje ono što vidi, čuje, oseća i deli to sa klijentom. Jedna od osnovnih pretpostavki geštalta je da moramo prihvatiti ono što jeste, a kada se to desi, spontano dolazi do promene. Mnogo pažnje se obraća na disanje, pokrete, one sitne i one krupnije, radimo na snovima, sanjarenju..Koristimo kreativne materijale (boje, plastelin..) Dovodimo određene osobe i situacije u sada i ovde, završavamo nezavršene poslove, izgovaramo neizgovoreno, vičemo ili plačemo. Sve je to geštalt. Tragamo za onim što je naša potreba i tražimo načine za zadovoljenje.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img 
              src="https://psihobalans.rs/wp-content/uploads/2021/03/SertifikatiFILOfakPsih.png" 
              alt="Certifikat" 
              className="w-full rounded-lg shadow-md"
            />
            <img 
              src="https://psihobalans.rs/wp-content/uploads/2021/03/SertifikatiGestalt.png" 
              alt="Certifikat Geštalt" 
              className="w-full rounded-lg shadow-md"
            />
            <img 
              src="https://psihobalans.rs/wp-content/uploads/2021/03/SertifikatiEAGT.png" 
              alt="Certifikat EAGT" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MojPristup;
