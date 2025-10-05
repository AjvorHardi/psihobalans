import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const articles = [
  {
    title: "Psihoterapija za putovanje kroz buru",
    date: "March 8, 2022",
    category: "Therapy",
    excerpt: "Pune dve godine je prošlo od proglašenja pandemije korona virusa. Sa njom su došli i mnogi strahovi, gubici, bolesti i ogromna promena načina života",
    image: "https://psihobalans.rs/wp-content/uploads/2022/03/pexels-johannes-plenio-1118874-580x375.jpg"
  },
  {
    title: "Anksioznost- jednostavni saveti",
    date: "December 22, 2023",
    category: "Uncategorized",
    excerpt: "Anksioznost je stanje straha od nepoznate opasnosti, strepnja da će se nešto loše desiti. Praćena je mnoštvom telesnih simptoma poput...",
    image: "https://psihobalans.rs/wp-content/uploads/2023/12/pexels-nathan-cowley-897817-580x375.jpg"
  },
  {
    title: "Zamotavanje 2023.",
    date: "December 16, 2023",
    category: "Art, Relaxation, Therapy",
    excerpt: "Nova godina za većinu ljudi predstavlja novi početak. Često gledamo u svoje ciljeve za narednu godinu i planiramo ono što...",
    image: "https://psihobalans.rs/wp-content/uploads/2022/12/pexels-anna-tarazevich-6146659-scaled-e1671551298662-580x375.jpg"
  },
  {
    title: "Anksioznost",
    date: "December 16, 2023",
    category: "Uncategorized",
    excerpt: "Anksioznost je prirodna emocionalna reakcija koja se javlja kod skoro svake osobe tokom života. Ovaj osećaj obuhvata strah, uznemirenost i...",
    image: "https://psihobalans.rs/wp-content/uploads/2023/12/pexels-engin-akyurt-3356489-580x375.jpg"
  },
  {
    title: "Paleta emocija- Umetnost otkrivanja unutrašnjih dubina kroz boje",
    date: "November 21, 2023",
    category: "Art, Relaxation, Therapy",
    excerpt: "Prijavite se za pravo istraživanje unutrašnjosti i naučite da se izrazite kroz pokret, oblik i boju! Dođite da slikamo, crtamo...",
    image: "https://psihobalans.rs/wp-content/uploads/2023/11/pexels-alexander-grey-1212407-580x375.jpg"
  },
  {
    title: "Geštalt art u maju!",
    date: "April 18, 2023",
    category: "Art, Relaxation, Therapy",
    excerpt: "Želiš da se kreativno izraziš, ali ne znaš kako? Osećaš da te emocije stiskaju, a ne znaš kako da ih...",
    image: "https://psihobalans.rs/wp-content/uploads/2023/04/viber_image_2023-04-18_14-26-11-843-580x375.jpg"
  },
  {
    title: "Autogeni trening, februar 2023.",
    date: "January 30, 2023",
    category: "Relaxation, Therapy",
    excerpt: "Nakon dužeg vremena, počinje grupa autogenog treninga uživo u Novom Sadu! Za sve one kojima je potreban odmor, koji žele...",
    image: "https://psihobalans.rs/wp-content/uploads/2023/01/pexels-andrea-piacquadio-3757942-1-580x375.jpg"
  },
  {
    title: "Zamotavanje 2022.",
    date: "December 20, 2022",
    category: "Art, Relaxation, Therapy",
    excerpt: "Nova godina za većinu ljudi predstavlja novi početak. Često gledamo u svoje ciljeve za narednu godinu i planiramo ono...",
    image: "https://psihobalans.rs/wp-content/uploads/2022/12/pexels-anna-tarazevich-6146659-scaled-e1671551298662-580x375.jpg"
  },
  {
    title: "Stres i antistres",
    date: "October 28, 2022",
    category: "Relaxation, Therapy",
    excerpt: "Današnji tempo života sa sobom nosi danak poput nervoze, nemira, rasute pažnje, zaboravnosti, anksioznosti, depresije, psihosomatskih tegoba, bolesti i mnogih...",
    image: "https://psihobalans.rs/wp-content/uploads/2022/10/pexels-pixabay-531828-580x375.jpg"
  },
  {
    title: "Moj šareni put",
    date: "September 21, 2022",
    category: "Art, Therapy",
    excerpt: "Kakva su Vaša sećanja na časove likovnog? Moja vrlo jadna iz ove perspektive. Moj šareni put počinje sećanjima iz osnovne...",
    image: "https://psihobalans.rs/wp-content/uploads/2022/09/pexels-alexander-grey-1153895-580x375.jpg"
  },
  {
    title: "Unesi boje u svoj dan- geštalt art ponovo stiže!",
    date: "September 5, 2022",
    category: "Art, Therapy",
    excerpt: "Želiš da se kreativno izraziš, ali ne znaš kako? Osećaš da te emocije stiskaju, a ne znaš kako da ih...",
    image: "https://psihobalans.rs/wp-content/uploads/2022/09/Untitled-design-580x375.png"
  },
  {
    title: '"To vam je od stresa"',
    date: "November 2, 2021",
    category: "Therapy",
    excerpt: 'Mnogim ljudima se "diže kosa na glavi" kada im lekari kažu da je neki njihov zdravstveni problem nastao zbog stresa. Mislim da problem dolazi sa dve strane.',
    image: "https://psihobalans.rs/wp-content/uploads/2021/11/pexels-taryn-elliott-5737945b-580x375.jpg"
  }
];

const Clanci = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Najlepse mesto... je sada i ovde...</h1>
          <p className="text-gray-600 italic">psihoterapija i psihologija</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                <div className="text-sm text-gray-600 mb-3 italic">{article.category}</div>
                <h2 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <button className="text-primary hover:underline">READ MORE</button>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Clanci;
