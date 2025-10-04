import { useState } from "react";
import { Menu, X, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "POČETNA", href: "#" },
    { label: "MOJ PRISTUP", href: "#pristup" },
    { label: "USLUGE", href: "#usluge" },
    { label: "O MENI", href: "#omeni" },
    { label: "ČLANCI", href: "#clanci" },
    { label: "KONTAKT", href: "#kontakt" },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-muted py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="mailto:psihobalans.rs@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={16} />
              <span className="hidden sm:inline">psihobalans.rs@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} />
              <span className="hidden md:inline">Đure Jakšića 15, 21 000 Novi Sad, Srbija</span>
            </div>
          </div>
          <div className="text-muted-foreground">
            <span className="hidden sm:inline">Pozovite: </span>
            <a href="tel:0642636513" className="font-semibold hover:text-foreground transition-colors">064 263 6513</a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold font-serif text-foreground">PSIHOBALANS</span>
            </a>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Mobile navigation */}
          {isOpen && (
            <div className="lg:hidden pb-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
