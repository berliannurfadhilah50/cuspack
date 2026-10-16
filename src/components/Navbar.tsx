import { useEffect, useState } from 'react';
import { Menu, X, ShoppingBag, Package } from 'lucide-react';

type Props = {
  cartCount: number;
  onCartClick: () => void;
};

export default function Navbar({ cartCount, onCartClick }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#layanan', label: 'Layanan' },
    { href: '#paket', label: 'Paket' },
    { href: '#portofolio', label: 'Portofolio' },
    { href: '#alur', label: 'Alur' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-dark shadow-lg shadow-emerald-950/20'
          : 'bg-emerald-950'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="w-9 h-9 rounded-xl bg-emerald-600 grid place-items-center text-white font-bold text-sm shadow-lg shadow-emerald-600/30 group-hover:scale-110 transition-transform">
              C
            </span>
            <span className="font-bold text-lg tracking-wide text-white">
              CUSPACK
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-emerald-100/80 hover:text-white transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <button
              onClick={onCartClick}
              className="relative flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full px-4 py-2 text-sm font-semibold transition-all hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105"
            >
              <ShoppingBag size={16} />
              <span>Keranjang</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold-500 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] grid place-items-center px-1 animate-scale-in">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-1 animate-fade-in">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-emerald-100/90 hover:text-white hover:bg-white/10 rounded-lg px-4 py-3 text-sm transition-colors"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                onCartClick();
              }}
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white rounded-lg px-4 py-3 text-sm font-semibold mt-2"
            >
              <Package size={16} />
              Keranjang ({cartCount})
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
