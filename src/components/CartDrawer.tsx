import { useState } from 'react';
import { X, Plus, Minus, Trash2, Tag, ShoppingBag, ArrowLeft, ArrowLeft as BackIcon } from 'lucide-react';
import { getService, formatRupiah } from '@/data/services';
import type { UseCartReturn } from '@/hooks/useCart';
import Checkout from '@/components/Checkout';

type Props = {
  cart: UseCartReturn;
  open: boolean;
  onClose: () => void;
  onToast: (msg: string) => void;
  onWhatsApp: (msg: string) => void;
};

type View = 'cart' | 'checkout';

export default function CartDrawer({ cart, open, onClose, onToast, onWhatsApp }: Props) {
  const [view, setView] = useState<View>('cart');
  const [promoInput, setPromoInput] = useState('');
  const { sub, dc, tot } = cart.calc();

  if (!open) return null;

  const handlePromo = () => {
    const ok = cart.applyPromo(promoInput);
    if (!ok && promoInput.trim()) onToast('Kode promo tidak valid');
    else if (ok && promoInput.trim()) onToast('Promo diterapkan (DEMO)');
    else if (ok && !promoInput.trim()) onToast('Promo dihapus');
  };

  const handleClose = () => {
    setView('cart');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[55] flex justify-end animate-fade-in"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <aside
        className="relative bg-cream-50 w-full max-w-md h-full overflow-y-auto shadow-2xl animate-slide-right"
        onClick={(e) => e.stopPropagation()}
      >
        {view === 'checkout' ? (
          <>
            <div className="sticky top-0 glass border-b border-cream-200 px-5 py-4 flex items-center justify-between z-10">
              <button
                onClick={() => setView('cart')}
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-emerald-600 transition-colors"
              >
                <BackIcon size={16} />
                Kembali
              </button>
              <button
                onClick={handleClose}
                className="w-9 h-9 rounded-full bg-white grid place-items-center hover:bg-cream-200 transition-colors"
              >
                <X size={18} className="text-gray-600" />
              </button>
            </div>
            <div className="p-5">
              <Checkout
                cart={cart}
                onWhatsApp={onWhatsApp}
                onBack={() => setView('cart')}
              />
            </div>
          </>
        ) : (
          <>
            {/* Header */}
            <div className="sticky top-0 glass border-b border-cream-200 px-5 py-4 flex items-center justify-between z-10">
              <h3 className="text-lg font-bold text-emerald-950 flex items-center gap-2">
                <ShoppingBag size={20} className="text-emerald-600" />
                Keranjang
              </h3>
              <button
                onClick={handleClose}
                className="w-9 h-9 rounded-full bg-white grid place-items-center hover:bg-cream-200 transition-colors"
              >
                <X size={18} className="text-gray-600" />
              </button>
            </div>

            <div className="p-5">
              {cart.cart.length === 0 ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 mx-auto rounded-full bg-cream-200 grid place-items-center mb-4">
                    <ShoppingBag size={32} className="text-gray-300" />
                  </div>
                  <p className="text-gray-400 text-sm">
                    Keranjang masih kosong. Pilih layanan dari katalog.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-4 inline-flex items-center gap-1.5 text-emerald-600 text-sm font-semibold hover:underline"
                  >
                    <ArrowLeft size={15} />
                    Kembali ke katalog
                  </button>
                </div>
              ) : (
                <>
                  {/* Items */}
                  <div className="space-y-1 mb-5">
                    {cart.cart.map((item) => {
                      const s = getService(item.id);
                      if (!s) return null;
                      return (
                        <div
                          key={item.id}
                          className="flex justify-between gap-3 py-3 border-b border-cream-200"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm text-emerald-950 truncate">
                              {s.name}
                            </p>
                            <p className="text-xs text-gray-400">{formatRupiah(s.price)}</p>
                            {s.qtyType === 'variable' ? (
                              <div className="flex items-center gap-2 mt-2">
                                <button
                                  onClick={() => cart.decrement(item.id)}
                                  className="w-7 h-7 rounded-full border border-cream-300 grid place-items-center hover:bg-cream-200 transition-colors"
                                >
                                  <Minus size={13} />
                                </button>
                                <span className="text-sm font-semibold w-6 text-center">
                                  {item.qty}
                                </span>
                                <button
                                  onClick={() => cart.increment(item.id)}
                                  className="w-7 h-7 rounded-full border border-cream-300 grid place-items-center hover:bg-cream-200 transition-colors"
                                >
                                  <Plus size={13} />
                                </button>
                              </div>
                            ) : (
                              <p className="text-xs text-gray-400 mt-1">Jumlah tetap 1</p>
                            )}
                          </div>
                          <div className="text-right flex flex-col items-end justify-between">
                            <p className="font-bold text-sm text-emerald-950">
                              {formatRupiah(s.price * item.qty)}
                            </p>
                            <button
                              onClick={() => cart.removeItem(item.id)}
                              className="text-gray-300 hover:text-red-500 transition-colors mt-1"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Promo */}
                  <div className="mb-5">
                    <label className="text-xs font-semibold text-gray-600 mb-2 block">
                      Kode Promo
                    </label>
                    <div className="flex gap-2">
                      <div className="flex-1 flex items-center gap-2 bg-white border border-cream-300 rounded-full px-4 py-2.5">
                        <Tag size={15} className="text-gray-400" />
                        <input
                          value={promoInput}
                          onChange={(e) => setPromoInput(e.target.value)}
                          placeholder="Contoh: DEMO10"
                          className="flex-1 outline-none text-sm bg-transparent"
                        />
                      </div>
                      <button
                        onClick={handlePromo}
                        className="px-5 py-2.5 border-2 border-emerald-600 text-emerald-600 rounded-full text-sm font-semibold hover:bg-emerald-50 transition-colors"
                      >
                        Pakai
                      </button>
                    </div>
                    {cart.promo && (
                      <p className="text-xs text-emerald-600 mt-2">
                        Promo "{cart.promo}" diterapkan (DEMO)
                      </p>
                    )}
                  </div>

                  {/* Totals */}
                  <div className="space-y-2 mb-5">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Subtotal</span>
                      <span>{formatRupiah(sub)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Diskon</span>
                      <span>-{formatRupiah(dc)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-emerald-950 pt-2 border-t border-cream-200">
                      <span>Total</span>
                      <span>{formatRupiah(tot)}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setView('checkout')}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-full py-3.5 font-semibold text-sm transition-all shadow-lg shadow-emerald-600/20 hover:shadow-xl"
                  >
                    Lanjut ke Checkout
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
