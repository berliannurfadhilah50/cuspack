import { Quote, Star } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const testimonials = [
  {
    text: 'Proses brief mudah dipahami, hasil desain melebihi ekspektasi kami. Detail dan finishing sangat profesional.',
    name: 'Sarah Wijaya',
    brand: 'Glowful Skincare',
    initial: 'S',
  },
  {
    text: 'Revisi jelas dan terstruktur. Tim CUSPACK sangat responsif dan paham kebutuhan brand kosmetik.',
    name: 'Andini Putri',
    brand: 'Lustre Makeup',
    initial: 'A',
  },
  {
    text: 'Kemasan parfum yang mereka desain membuat produk kami terlihat premium di etalase. Sangat direkomendasikan!',
    name: 'Reza Mahendra',
    brand: 'Aura Parfum',
    initial: 'R',
  },
];

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-emerald-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Apa Kata Klien Kami
          </h2>
          <p className="text-emerald-200/60 text-lg">
            Contoh tampilan, bukan ulasan pelanggan nyata.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote size={36} className="text-emerald-500/40 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    className="fill-gold-400 text-gold-400"
                  />
                ))}
              </div>
              <p className="text-emerald-100/80 text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 grid place-items-center text-white font-bold">
                  {t.initial}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-emerald-300/60 text-xs">{t.brand}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
