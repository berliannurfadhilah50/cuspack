import { ArrowUpRight } from 'lucide-react';
import { portfolioItems } from '@/data/services';
import { useReveal } from '@/hooks/useReveal';

export default function Portfolio() {
  const ref = useReveal();

  return (
    <section id="portofolio" ref={ref} className="py-20 sm:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <span className="inline-block text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
              Portofolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950 mb-3">
              Karya Terpilih
            </h2>
            <p className="text-gray-600 text-lg">
              Visual placeholder. Ganti dengan karya asli melalui dashboard
              admin.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <div
              key={item.name}
              className="reveal group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-900/15 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="inline-block bg-emerald-500/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full mb-2">
                  {item.tag}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm grid place-items-center group-hover:bg-emerald-500 transition-colors">
                    <ArrowUpRight size={18} className="text-white" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
