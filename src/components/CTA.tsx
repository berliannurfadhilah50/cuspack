import { ArrowRight, MessageCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

type Props = {
  onWhatsApp: (msg: string) => void;
};

export default function CTA({ onWhatsApp }: Props) {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-emerald-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-6 text-center">
        <div className="reveal">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-5 text-balance">
            Siap mulai mendesain kemasan Anda?
          </h2>
          <p className="text-emerald-200/70 text-lg mb-8">
            Pilih paket atau hubungi kami untuk konsultasi gratis.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#paket"
              className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full px-7 py-3.5 font-semibold transition-all hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105"
            >
              Mulai Pesan
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() =>
                onWhatsApp(
                  'Halo CUSPACK, saya ingin mulai memesan desain kemasan.'
                )
              }
              className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1eb858] text-white rounded-full px-7 py-3.5 font-semibold transition-all hover:shadow-xl hover:shadow-green-500/30 hover:scale-105"
            >
              <MessageCircle size={18} />
              Tanya via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
