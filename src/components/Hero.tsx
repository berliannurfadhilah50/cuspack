import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { heroImages } from '@/data/services';

type Props = {
  onWhatsApp: (msg: string) => void;
};

export default function Hero({ onWhatsApp }: Props) {
  return (
    <header
      id="top"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-emerald-900"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-float-slow" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* Left */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-emerald-200 mb-6 animate-fade-in">
              <Sparkles size={15} className="text-gold-400" />
              <span>Premium Cosmetic Packaging Studio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-balance mb-6 animate-fade-up">
              Elevate Your Brand with{' '}
              <span className="shimmer-text">Premium Packaging</span> Design
            </h1>

            <p className="text-emerald-100/80 text-lg max-w-xl mb-8 animate-fade-up" style={{ animationDelay: '0.15s' }}>
              Solusi desain kemasan sekunder kosmetik yang profesional, kreatif,
              dan sesuai karakter brand Anda.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="#layanan"
                className="group inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full px-6 py-3 font-semibold transition-all hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105"
              >
                Jelajahi Layanan
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#paket"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-emerald-400/50 hover:border-emerald-300 text-white rounded-full px-6 py-3 font-semibold transition-all hover:bg-white/5"
              >
                Pesan Sekarang
              </a>
              <button
                onClick={() =>
                  onWhatsApp(
                    'Halo CUSPACK, saya ingin berkonsultasi tentang desain kemasan.'
                  )
                }
                className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1eb858] text-white rounded-full px-6 py-3 font-semibold transition-all hover:shadow-xl hover:shadow-green-500/30 hover:scale-105"
              >
                <MessageCircle size={18} />
                Konsultasi via WhatsApp
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10 animate-fade-up" style={{ animationDelay: '0.45s' }}>
              {[
                { num: '50+', label: 'Proyek Selesai' },
                { num: '8+', label: 'Tahun Pengalaman' },
                { num: '100%', label: 'Klien Puas' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white">{s.num}</div>
                  <div className="text-sm text-emerald-200/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating images */}
          <div className="relative h-[400px] sm:h-[480px] hidden lg:block">
            <div className="absolute top-0 left-0 w-[55%] rounded-3xl overflow-hidden shadow-2xl shadow-black/40 animate-float">
              <img
                src={heroImages.primary}
                alt="Skincare packaging design"
                className="w-full h-[300px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent" />
            </div>

            <div className="absolute top-8 right-0 w-[45%] rounded-3xl overflow-hidden shadow-2xl shadow-black/40 animate-float-delayed border-4 border-white/10">
              <img
                src={heroImages.secondary}
                alt="Serum bottle design"
                className="w-full h-[260px] object-cover"
                loading="eager"
              />
            </div>

            <div className="absolute bottom-0 left-1/4 w-[50%] rounded-3xl overflow-hidden shadow-2xl shadow-black/40 animate-float-slow border-4 border-gold-500/20">
              <img
                src={heroImages.tertiary}
                alt="Perfume gift box design"
                className="w-full h-[200px] object-cover"
                loading="eager"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute top-1/2 right-8 glass rounded-2xl px-5 py-3 shadow-xl animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 grid place-items-center">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Print Ready</div>
                  <div className="text-sm font-bold text-emerald-900">Premium Files</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-[60px] sm:h-[100px]">
          <path d="M0 100V40C240 80 480 0 720 20C960 40 1200 80 1440 50V100H0Z" fill="#fefcf7" />
        </svg>
      </div>
    </header>
  );
}
