import { useCallback, useEffect, useState } from 'react';
import type { CartItem } from '@/data/services';
import { getService, PROMOS } from '@/data/services';

const STORAGE_KEY = 'cp_cart';
const PROMO_KEY = 'cp_promo';

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [promo, setPromo] = useState('');

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      if (Array.isArray(stored)) setCart(stored);
      const storedPromo = localStorage.getItem(PROMO_KEY);
      if (storedPromo) setPromo(storedPromo);
    } catch {
      // ignore
    }
  }, []);

  const save = useCallback((items: CartItem[], p: string) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      localStorage.setItem(PROMO_KEY, p);
    } catch {
      // ignore
    }
  }, []);

  const addToCart = useCallback(
    (id: string) => {
      setCart((prev) => {
        const existing = prev.find((i) => i.id === id);
        const svc = getService(id);
        if (existing && svc?.qtyType === 'variable') {
          const updated = prev.map((i) =>
            i.id === id ? { ...i, qty: Math.min(i.qty + 1, 10) } : i
          );
          save(updated, promo);
          return updated;
        }
        if (existing) return prev;
        const updated = [...prev, { id, qty: 1 }];
        save(updated, promo);
        return updated;
      });
    },
    [promo, save]
  );

  const increment = useCallback(
    (id: string) => {
      setCart((prev) => {
        const updated = prev.map((i) =>
          i.id === id ? { ...i, qty: Math.min(i.qty + 1, 10) } : i
        );
        save(updated, promo);
        return updated;
      });
    },
    [promo, save]
  );

  const decrement = useCallback(
    (id: string) => {
      setCart((prev) => {
        const existing = prev.find((i) => i.id === id);
        if (existing && existing.qty > 1) {
          const updated = prev.map((i) =>
            i.id === id ? { ...i, qty: i.qty - 1 } : i
          );
          save(updated, promo);
          return updated;
        }
        const updated = prev.filter((i) => i.id !== id);
        save(updated, promo);
        return updated;
      });
    },
    [promo, save]
  );

  const removeItem = useCallback(
    (id: string) => {
      setCart((prev) => {
        const updated = prev.filter((i) => i.id !== id);
        save(updated, promo);
        return updated;
      });
    },
    [promo, save]
  );

  const clearCart = useCallback(() => {
    setCart([]);
    setPromo('');
    save([], '');
  }, [save]);

  const applyPromo = useCallback(
    (code: string): boolean => {
      const upper = code.trim().toUpperCase();
      if (!upper || PROMOS[upper]) {
        setPromo(upper);
        save(cart, upper);
        return true;
      }
      return false;
    },
    [cart, save]
  );

  const calc = useCallback(() => {
    const sub = cart.reduce((acc, item) => {
      const svc = getService(item.id);
      return acc + (svc ? svc.price * item.qty : 0);
    }, 0);
    const pct = PROMOS[promo] || 0;
    const dc = Math.round((sub * pct) / 100);
    return { sub, dc, tot: sub - dc };
  }, [cart, promo]);

  const count = cart.reduce((a, b) => a + b.qty, 0);

  return {
    cart,
    promo,
    count,
    addToCart,
    increment,
    decrement,
    removeItem,
    clearCart,
    applyPromo,
    calc,
  };
}

export type UseCartReturn = ReturnType<typeof useCart>;
