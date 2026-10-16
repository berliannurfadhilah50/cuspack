import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const faqs = [
  {
    q: 'Berapa lama pengerjaan?',
    a: 'Sesuai paket, dihitung setelah brief dan bahan lengkap diterima.',
  },
  {
    q: 'Apakah bisa revisi?',
    a: 'Ya, jumlah revisi mengikuti paket yang dipilih.',
  },
  {
    q: 'Apa saja yang perlu saya siapkan?',
    a: 'Logo, ukuran kemasan (jika ada), warna utama, dan referensi desain.',
  },
  {
    q: 'Metode pembayaran apa yang tersedia?',
    a: 'Transfer bank dan QRIS. Pembayaran dikonfirmasi setelah diverifikasi oleh tim kami.',
  },
];

export default function FAQ() {
  const ref = useReveal();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" ref={ref} className="py-20 sm:py-28 bg-cream-100">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <div className="reveal text-center mb-12">
          <span className="inline-block text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950 mb-4">
            Pertanyaan Umum
          </h2>
        </div>

        <div className="reveal space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="bg-white rounded-xl border border-cream-200 overflow-hidden transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-semibold text-emerald-950 text-sm sm:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-emerald-600 transition-transform duration-300 ${
                    openIdx === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIdx === i
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
