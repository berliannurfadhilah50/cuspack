import { Check, Star, Clock } from 'lucide-react';
import { packageServices, formatRupiah } from '@/data/services';
import { useReveal } from '@/hooks/useReveal';

type Props = {
  onAdd: (id: string) => void;
};

export default function Pricing({ onAdd }: Props) {
  const ref = useReveal();

  return (
    <section id="paket" ref={ref} className="py-20 sm:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950 mb-4">
            Paket Harga
          </h2>
          <p className="text-gray-600 text-lg">
            Harga dan ketentuan adalah data awal yang dapat diubah admin. Waktu
            pengerjaan dihitung sejak brief dan bahan yang diperlukan kami
            terima.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packageServices.map((pkg, i) => (
            <div
              key={pkg.id}
              className={`reveal relative rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                pkg.hot
                  ? 'bg-emerald-950 text-white shadow-2xl shadow-emerald-900/30 md:scale-105 border-2 border-emerald-500'
                  : 'bg-white text-emerald-950 shadow-sm hover:shadow-xl border border-cream-200'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {pkg.hot && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <Star size={12} className="fill-white" />
                  Populer
                </span>
              )}

              <h3 className={`text-xl font-bold mb-2 ${pkg.hot ? 'text-white' : 'text-emerald-950'}`}>
                {pkg.name}
              </h3>
              <p className={`text-sm mb-5 ${pkg.hot ? 'text-emerald-200/70' : 'text-gray-500'}`}>
                {pkg.desc}
              </p>

              <div className="mb-6">
                <span className={`text-3xl font-bold ${pkg.hot ? 'text-white' : 'text-emerald-600'}`}>
                  {formatRupiah(pkg.price)}
                </span>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {pkg.features?.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={`mt-0.5 w-5 h-5 rounded-full grid place-items-center flex-shrink-0 ${
                        pkg.hot ? 'bg-emerald-500' : 'bg-emerald-50'
                      }`}
                    >
                      <Check
                        size={12}
                        className={pkg.hot ? 'text-white' : 'text-emerald-600'}
                      />
                    </span>
                    <span className={pkg.hot ? 'text-emerald-100/90' : 'text-gray-600'}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className={`flex items-center gap-1.5 text-xs mb-5 ${pkg.hot ? 'text-emerald-300/60' : 'text-gray-400'}`}>
                <Clock size={13} />
                {pkg.turnaround}
              </div>

              <button
                onClick={() => onAdd(pkg.id)}
                className={`w-full py-3 rounded-full font-semibold text-sm transition-all ${
                  pkg.hot
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20'
                }`}
              >
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
