import { ClipboardList, FileText, CreditCard, PenTool, Download } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const steps = [
  { icon: ClipboardList, title: 'Pilih Layanan', desc: 'Tambahkan layanan atau paket ke keranjang.' },
  { icon: FileText, title: 'Isi Brief', desc: 'Ceritakan produk, warna, dan referensi Anda.' },
  { icon: CreditCard, title: 'Bayar', desc: 'Transfer bank atau QRIS.' },
  { icon: PenTool, title: 'Konsep & Revisi', desc: 'Kami kirim konsep, Anda beri masukan.' },
  { icon: Download, title: 'File Akhir', desc: 'Unduh hasil sesuai paket.' },
];

export default function Process() {
  const ref = useReveal();

  return (
    <section id="alur" ref={ref} className="py-20 sm:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950 mb-4">
            Alur Pemesanan
          </h2>
          <p className="text-gray-600 text-lg">
            Lima langkah dari memilih layanan sampai file akhir.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-[44px] left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="reveal relative text-center group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative inline-flex w-20 h-20 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-2xl bg-emerald-50 group-hover:bg-emerald-600 transition-colors duration-300" />
                  <div className="relative w-full h-full grid place-items-center">
                    <step.icon
                      size={30}
                      className="text-emerald-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-emerald-900 text-white text-xs font-bold grid place-items-center shadow-md">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-emerald-950 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
