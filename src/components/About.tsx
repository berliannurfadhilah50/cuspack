import { Target, FlaskConical, Ruler, RefreshCw } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const features = [
  {
    icon: Target,
    title: 'Sesuai Karakter Brand',
    desc: 'Konsep disusun dari brief dan identitas visual Anda.',
  },
  {
    icon: FlaskConical,
    title: 'Paham Produk Kosmetik',
    desc: 'Desain mempertimbangkan ukuran botol, jar, dan tube.',
  },
  {
    icon: Ruler,
    title: 'Siap Dicetak',
    desc: 'Paket Premium menyertakan file siap produksi.',
  },
  {
    icon: RefreshCw,
    title: 'Revisi Terukur',
    desc: 'Jumlah revisi jelas di setiap paket.',
  },
];

export default function About() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="reveal max-w-2xl mb-12">
          <span className="inline-block text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950 mb-4">
            PT CUSPACK — Packaging Design Studio
          </h2>
          <p className="text-gray-600 text-lg">
            Studio desain yang berfokus pada kemasan sekunder kosmetik, yaitu
            box dan karton luar yang membungkus produk Anda. Kami membantu brand
            skincare, makeup, dan parfum tampil konsisten di rak maupun di
            etalase online.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 border border-cream-200 transition-all duration-300 hover:-translate-y-2"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 grid place-items-center mb-5 group-hover:bg-emerald-600 transition-colors duration-300">
                <f.icon
                  size={24}
                  className="text-emerald-600 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-emerald-950 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
