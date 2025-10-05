import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="kontakt" className="bg-foreground text-background py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and about */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold font-serif">PSIHOBALANS</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Razumevanje, podrška, prihvatanje. Profesionalna psihoterapija i psihološko savetovanje u Novom Sadu.
            </p>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold mb-6">ADRESA</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-primary" />
                <div className="text-background/80">
                  <p>Đure Jakšića 15</p>
                  <p>21000 Novi Sad</p>
                  <p>Srbija</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">KONTAKT</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 text-primary" />
                <a href="tel:0642636513" className="text-background/80 hover:text-primary transition-colors">
                  064 263 6513
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0 text-primary" />
                <a href="mailto:psihobalans.rs@gmail.com" className="text-background/80 hover:text-primary transition-colors">
                  psihobalans.rs@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="mt-1 flex-shrink-0 text-primary" />
                <div className="text-background/80">
                  <p>Pon – pet 8-20h</p>
                  <p>Sub 8-14h</p>
                  <p className="text-sm mt-2">Obavezno zakazivanje</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-background/60 text-sm">
          <p>© {new Date().getFullYear()} Psihobalans. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
