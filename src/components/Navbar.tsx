import { useState } from "react";
import { Menu, X, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    label: "POČETNA",
    href: "#"
  }, {
    label: "MOJ PRISTUP",
    href: "#pristup"
  }, {
    label: "USLUGE",
    href: "#usluge"
  }, {
    label: "O MENI",
    href: "#omeni"
  }, {
    label: "ČLANCI",
    href: "#clanci"
  }, {
    label: "KONTAKT",
    href: "#kontakt"
  }];
  return <>
      {/* Top bar - Part 1 */}
      <div className="bg-gray-100 py-2 px-4 text-sm">
        <div className="container mx-auto flex items-center gap-6">
          <a href="mailto:psihobalans.rs@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Mail size={14} />
            <span className="hidden sm:inline">psihobalans.rs@gmail.com</span>
          </a>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={14} />
            <span className="hidden md:inline">Đure Jakšića 15, 21 000 Novi Sad, Srbija</span>
          </div>
        </div>
      </div>

      {/* Logo bar - Part 2 */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-md bg-teal-900">
              <span className="text-white font-bold text-2xl">P</span>
            </div>
            <span style={{
            fontFamily: 'serif'
          }} className="text-2xl font-bold tracking-wider text-teal-900 md:text-4xl">
              PSIHOBALANS
            </span>
          </a>

          {/* Phone on desktop */}
          <div className="hidden md:block">
            <span className="text-gray-600 italic text-sm">Pozovite: </span>
            <a href="tel:0642636513" className="text-lg font-medium text-gray-800 hover:text-primary transition-colors italic">
              064 263 6513
            </a>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Navigation bar - Part 3 */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex items-center justify-center h-14">
            {navItems.map(item => <a key={item.label} href={item.href} className="px-6 py-4 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors uppercase tracking-wide font-source border-b-2 border-transparent hover:border-gray-300">
                {item.label}
              </a>)}
          </div>

          {/* Mobile navigation */}
          {isOpen && <div className="lg:hidden pb-4 pt-2">
              <div className="flex flex-col gap-2">
                {navItems.map(item => <a key={item.label} href={item.href} className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
                    {item.label}
                  </a>)}
              </div>
            </div>}
        </div>
      </nav>
    </>;
};
export default Navbar;