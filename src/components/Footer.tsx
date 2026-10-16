import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100/60 pt-16 pb-24 sm:pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-xl bg-emerald-600 grid place-items-center text-white font-bold text-sm">
                C
              </span>
              <span className="font-bold text-lg tracking-wide text-white">
                CUSPACK
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              PT CUSPACK — Packaging Design Studio. Jasa desain kemasan
              sekunder kosmetik yang profesional, kreatif, dan sesuai karakter
              brand Anda.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-emerald-500" />
                info@cushpack.id
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-emerald-500" />
                +62 812 0000 0000
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="text-emerald-500" />
                Jakarta, Indonesia
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Media Sosial</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-emerald-600 grid place-items-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-emerald-600 grid place-items-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; 2026 PT CUSPACK. All rights reserved.</p>
          <p>Designed with care for cosmetic brands.</p>
        </div>
      </div>
    </footer>
  );
}
