import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const articles = [
  {
    title: "Visokoosetljive osobe",
    date: "March 23, 2021",
    category: "Research",
    excerpt: "Visokoosetljive osobe su preterano nadražene unutrašnjim i spoljašnjim stimulusima i njihov mozak...",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop",
  },
  {
    title: "Online terapija",
    date: "March 24, 2021",
    category: "Therapy",
    excerpt: "Poslednjih godinu dana mnogi načini funkcionisanja i rada su se izmenili, pa tako i način psihoterapijskih susreta...",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=300&fit=crop",
  },
  {
    title: "Psihoterapija – pitanja i odgovori",
    date: "March 25, 2021",
    category: "Science",
    excerpt: "Klijenti se najčešće javljaju kada već 'dogori'. Kada ih nešto toliko ometa u životu, kada ih iscrpljuje...",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
  },
  {
    title: "Anksioznost i panični napadi",
    date: "March 28, 2021",
    category: "Therapy",
    excerpt: "Anksioznost i panični napadi su poremećaji koji se sve češće javljaju u praksi. Mnogi klijenti dolaze...",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
  },
];

const BlogSection = () => {
  return (
    <section id="clanci" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Najlepše mesto… je sada i ovde…</h2>
          <p className="text-xl text-muted-foreground">psihoterapija i psihologija</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar size={14} />
                  <span>{article.date}</span>
                </div>
                <span className="inline-block px-3 py-1 text-xs bg-primary/10 text-primary rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground">{article.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
