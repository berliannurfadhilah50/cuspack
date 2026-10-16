import { useState } from 'react';
import { ArrowLeft, CheckCircle2, MessageCircle } from 'lucide-react';
import { formatRupiah } from '@/data/services';
import type { UseCartReturn } from '@/hooks/useCart';

type Props = {
  cart: UseCartReturn;
  onWhatsApp: (msg: string) => void;
  onBack: () => void;
};

type Errors = Record<string, string>;

export default function Checkout({ cart, onWhatsApp, onBack }: Props) {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState<{ name: string; pay: string; tot: number; orderNo: string } | null>(null);
  const { tot } = cart.calc();

  const fields: [string, string, string][] = [
    ['nm', 'Nama lengkap', 'text'],
    ['br', 'Nama brand kosmetik', 'text'],
    ['em', 'Email', 'email'],
    ['wa', 'Nomor WhatsApp', 'tel'],
    ['pr', 'Jenis produk kosmetik', 'text'],
    ['pk', 'Jenis & ukuran kemasan (jika diketahui)', 'text'],
    ['cn', 'Konsep desain yang diinginkan', 'text'],
    ['cl', 'Warna utama', 'text'],
  ];

  const validate = (): boolean => {
    const e: Errors = {};
    const get = (k: string) =>
      (document.getElementById('f' + k) as HTMLInputElement)?.value.trim() || '';

    fields.forEach(([k]) => {
      if (!get(k)) e[k] = 'Wajib diisi';
    });

    if (get('em') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get('em')))
      e['em'] = 'Masukkan email yang valid';

    const waVal = get('wa').replace(/[\s-]/g, '');
    if (waVal && !/^(\+62|62|0)8[0-9]{7,12}$/.test(waVal))
      e['wa'] = 'Gunakan nomor WhatsApp Indonesia, mis. 0812xxxxxxx';

    const file = (document.getElementById('ff') as HTMLInputElement)?.files?.[0];
    if (file) {
      if (!['image/jpeg', 'image/png', 'application/pdf'].includes(file.type))
        e['ff'] = 'Format harus JPG, PNG, atau PDF';
      else if (file.size > 5 * 1048576) e['ff'] = 'Ukuran maksimal 5 MB';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    const get = (k: string) =>
      (document.getElementById('f' + k) as HTMLInputElement)?.value.trim() || '';

    const pay = (document.getElementById('fpay') as HTMLSelectElement)?.value || 'bank';
    const orderNo =
      'CP-' +
      new Date().toISOString().slice(0, 10).replace(/-/g, '') +
      '-' +
      Math.floor(1000 + Math.random() * 9000);

    cart.clearCart();
    setDone({ name: get('nm'), pay, tot, orderNo });
  };

  if (done) {
    return (
      <div>
        <h3 className="text-lg font-bold text-emerald-950 mb-4 flex items-center gap-2">
          <CheckCircle2 size={22} className="text-emerald-600" />
          Pesanan Dibuat
        </h3>
        <p className="text-sm text-gray-500 mb-5">
          Terima kasih, <span className="font-semibold text-emerald-950">{done.name}</span>.
        </p>

        <div className="space-y-2 mb-5">
          {[
            ['Nomor pesanan', done.orderNo],
            ['Status', 'Menunggu Pembayaran'],
            ['Total tagihan', formatRupiah(done.tot)],
          ].map(([label, val]) => (
            <div
              key={label}
              className="flex justify-between text-sm py-2.5 border-b border-cream-200"
            >
              <span className="text-gray-500">{label}</span>
              <span className="font-semibold text-emerald-950">{val}</span>
            </div>
          ))}
        </div>

        <div className="bg-cream-100 rounded-xl p-4 mb-5 text-sm text-gray-600 leading-relaxed">
          {done.pay === 'bank' ? (
            <>
              <p className="font-semibold text-emerald-950 mb-2">Transfer Bank</p>
              <p>Bank: [diisi admin]</p>
              <p>No. rekening: [diisi admin]</p>
              <p>Atas nama: [diisi admin]</p>
              <p className="text-xs text-gray-400 mt-2">
                Setelah transfer, unggah bukti. Pembayaran dinyatakan berhasil
                hanya setelah diverifikasi admin.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-emerald-950 mb-2">QRIS</p>
              <p className="text-xs text-gray-400">
                Kode QRIS resmi akan tampil di sini setelah gateway
                (Midtrans/Xendit) dihubungkan.
              </p>
            </>
          )}
        </div>

        <p className="text-xs text-amber-600 bg-amber-50 rounded-lg px-3 py-2 mb-5">
          Mode demo: tidak ada pembayaran sungguhan yang diproses.
        </p>

        <div className="flex gap-2">
          <button
            onClick={() =>
              onWhatsApp(
                `Halo CUSPACK, nomor pesanan saya ${done.orderNo}. Saya ingin konfirmasi pembayaran.`
              )
            }
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1eb858] text-white rounded-full py-3 text-sm font-semibold transition-colors"
          >
            <MessageCircle size={16} />
            Konfirmasi via WhatsApp
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold text-emerald-950">Checkout</h3>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-emerald-600 transition-colors"
        >
          <ArrowLeft size={15} />
          Kembali
        </button>
      </div>

      <p className="text-xs text-amber-600 bg-amber-50 rounded-lg px-3 py-2 mb-5">
        Mode demo: pesanan belum tersimpan di server. Total final harus dihitung
        ulang di backend.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-3">
        {fields.map(([k, label, type]) => (
          <div key={k}>
            <label htmlFor={`f${k}`} className="text-xs font-semibold text-gray-600 mb-1.5 block">
              {label}
            </label>
            <input
              id={`f${k}`}
              type={type}
              className="w-full px-3.5 py-2.5 border border-cream-300 rounded-xl text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
            {errors[k] && (
              <p className="text-xs text-red-500 mt-1">{errors[k]}</p>
            )}
          </div>
        ))}

        <div>
          <label htmlFor="fnt" className="text-xs font-semibold text-gray-600 mb-1.5 block">
            Referensi & catatan
          </label>
          <textarea
            id="fnt"
            rows={3}
            className="w-full px-3.5 py-2.5 border border-cream-300 rounded-xl text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
          />
        </div>

        <div>
          <label htmlFor="ff" className="text-xs font-semibold text-gray-600 mb-1.5 block">
            Logo / referensi (JPG, PNG, PDF, maks 5 MB)
          </label>
          <input
            id="ff"
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            className="w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-emerald-50 file:text-emerald-700 file:font-semibold hover:file:bg-emerald-100 cursor-pointer"
          />
          {errors['ff'] && (
            <p className="text-xs text-red-500 mt-1">{errors['ff']}</p>
          )}
        </div>

        <div>
          <label htmlFor="fpay" className="text-xs font-semibold text-gray-600 mb-1.5 block">
            Metode pembayaran
          </label>
          <select
            id="fpay"
            className="w-full px-3.5 py-2.5 border border-cream-300 rounded-xl text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all bg-white"
          >
            <option value="bank">Transfer bank</option>
            <option value="qris">QRIS</option>
          </select>
        </div>

        <div className="flex justify-between text-lg font-bold text-emerald-950 pt-3 border-t border-cream-200">
          <span>Total</span>
          <span>{formatRupiah(tot)}</span>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-full py-3.5 font-semibold text-sm transition-all shadow-lg shadow-emerald-600/20 hover:shadow-xl"
        >
          Buat Pesanan (DEMO)
        </button>
      </form>
    </div>
  );
}
