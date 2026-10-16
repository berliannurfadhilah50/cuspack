import { useState } from 'react';
import { Clock, Plus, Eye } from 'lucide-react';
import { catalogServices, formatRupiah, type Service } from '@/data/services';
import { useReveal } from '@/hooks/useReveal';

type Props = {
  onAdd: (id: string) => void;
  onDetail: (id: string) => void;
};

export default function Services({ onAdd, onDetail }: Props) {
  const ref = useReveal();
  const cats = ['Semua', ...new Set(catalogServices.map((s) => s.cat))];
  const [active, setActive] = useState('Semua');

  const filtered =
    active === 'Semua'
      ? catalogServices
      : catalogServices.filter((s) => s.cat === active);

  return (
    <section id="layanan" ref={ref} className="py-20 sm:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="reveal max-w-2xl mb-10">
          <span className="inline-block text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950 mb-4">
            Katalog Layanan
          </h2>
          <p className="text-gray-600 text-lg">
            Pilih layanan sesuai jenis produk Anda. Data contoh, nantinya
            dikelola dari dashboard admin.
          </p>
        </div>

        {/* Filter chips */}
        <div className="reveal flex flex-wrap gap-2 mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === c
                  ? 'bg-emerald-900 text-white shadow-lg shadow-emerald-900/20 scale-105'
                  : 'bg-white text-gray-600 border border-cream-300 hover:border-emerald-400 hover:text-emerald-700'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((s: Service, i) => (
            <article
              key={s.id}
              className="reveal group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 border border-cream-200 transition-all duration-300 hover:-translate-y-2 flex flex-col"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {s.cat}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-emerald-950 mb-1.5">
                  {s.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                  {s.desc}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold text-emerald-600">
                    {formatRupiah(s.price)}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Clock size={13} />
                    {s.turnaround}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => onDetail(s.id)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-full py-2.5 text-sm font-semibold transition-colors"
                  >
                    <Eye size={15} />
                    Detail
                  </button>
                  <button
                    onClick={() => onAdd(s.id)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full py-2.5 text-sm font-semibold transition-colors shadow-md shadow-emerald-600/20"
                  >
                    <Plus size={15} />
                    Tambah
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
