import { X, MessageCircle, Clock, Plus } from 'lucide-react';
import { getService, formatRupiah, WA_NUMBER } from '@/data/services';
import type { UseCartReturn } from '@/hooks/useCart';

type Props = {
  serviceId: string | null;
  onClose: () => void;
  onAdd: (id: string) => void;
  onWhatsApp: (msg: string) => void;
  onOrder: () => void;
};

export default function DetailModal({
  serviceId,
  onClose,
  onAdd,
  onWhatsApp,
  onOrder,
}: Props) {
  if (!serviceId) return null;
  const s = getService(serviceId);
  if (!s) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-auto shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {s.image && (
          <div className="relative h-48 overflow-hidden rounded-t-2xl">
            <img
              src={s.image}
              alt={s.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm grid place-items-center hover:bg-white transition-colors"
            >
              <X size={18} className="text-gray-700" />
            </button>
          </div>
        )}

        <div className="p-6">
          {!s.image && (
            <button
              onClick={onClose}
              className="float-right w-9 h-9 rounded-full bg-gray-100 grid place-items-center hover:bg-gray-200 transition-colors"
            >
              <X size={18} className="text-gray-600" />
            </button>
          )}

          <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">
            {s.cat}
          </span>
          <h3 className="text-2xl font-bold text-emerald-950 mt-1 mb-2">
            {s.name}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>

          <div className="text-2xl font-bold text-emerald-600 mb-3">
            {formatRupiah(s.price)}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400 mb-5">
            <Clock size={15} />
            {s.turnaround}. Dihitung setelah brief dan bahan diterima.
          </div>

          {s.features && (
            <div className="bg-cream-50 rounded-xl p-4 mb-5">
              <h4 className="text-sm font-semibold text-emerald-950 mb-2">
                Termasuk:
              </h4>
              <ul className="space-y-1.5">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-xs text-gray-400 mb-5">
            Revisi: sesuai paket yang dipilih. Revisi tambahan dapat
            didiskusikan.
          </p>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                onAdd(s.id);
                onOrder();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full py-3 text-sm font-semibold transition-colors shadow-md shadow-emerald-600/20"
            >
              <Plus size={16} />
              Pesan
            </button>
            <button
              onClick={() =>
                onWhatsApp(
                  `Halo CUSPACK, saya ingin bertanya tentang layanan: ${s.name}.`
                )
              }
              className="inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1eb858] text-white rounded-full py-3 px-5 text-sm font-semibold transition-colors"
            >
              <MessageCircle size={16} />
              Konsultasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
