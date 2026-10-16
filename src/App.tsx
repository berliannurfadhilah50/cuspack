import { useCallback, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import DetailModal from '@/components/DetailModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useToast } from '@/components/Toast';
import { useCart } from '@/hooks/useCart';
import { WA_NUMBER } from '@/data/services';

export default function App() {
  const cart = useCart();
  const { showToast, toastEl } = useToast();

  const [cartOpen, setCartOpen] = useState(false);
  const [detailId, setDetailId] = useState<string | null>(null);

  const handleWhatsApp = useCallback(
    (msg: string) => {
      if (!WA_NUMBER) {
        showToast('Nomor WhatsApp belum diatur (placeholder).');
        return;
      }
      window.open(
        `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,
        '_blank',
        'noopener'
      );
    },
    [showToast]
  );

  const handleAdd = useCallback(
    (id: string) => {
      cart.addToCart(id);
      showToast('Ditambahkan ke keranjang');
    },
    [cart, showToast]
  );

  const handleDetail = useCallback((id: string) => {
    setDetailId(id);
  }, []);

  const handleOpenCart = useCallback(() => {
    setCartOpen(true);
  }, []);

  const handleCloseCart = useCallback(() => {
    setCartOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-cream-50 overflow-x-hidden">
      <Navbar cartCount={cart.count} onCartClick={handleOpenCart} />

      <Hero onWhatsApp={handleWhatsApp} />
      <About />
      <Services onAdd={handleAdd} onDetail={handleDetail} />
      <Pricing onAdd={handleAdd} />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA onWhatsApp={handleWhatsApp} />
      <Footer />

      <WhatsAppButton onClick={handleWhatsApp} />

      <CartDrawer
        cart={cart}
        open={cartOpen}
        onClose={handleCloseCart}
        onToast={showToast}
        onWhatsApp={handleWhatsApp}
      />

      <DetailModal
        serviceId={detailId}
        onClose={() => setDetailId(null)}
        onAdd={handleAdd}
        onWhatsApp={handleWhatsApp}
        onOrder={() => {
          setDetailId(null);
          handleOpenCart();
        }}
      />

      {toastEl}
    </div>
  );
}
