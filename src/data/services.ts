export type Service = {
  id: string;
  cat: string;
  name: string;
  desc: string;
  price: number;
  turnaround: string;
  color: string;
  image: string;
  qtyType: 'variable' | 'fixed';
  isPackage?: boolean;
  hot?: boolean;
  features?: string[];
};

export type CartItem = {
  id: string;
  qty: number;
};

export const WA_NUMBER = '';
export const PROMOS: Record<string, number> = { DEMO10: 10 };

export const formatRupiah = (n: number): string =>
  'Rp' + n.toLocaleString('id-ID');

export const services: Service[] = [
  {
    id: 's1',
    cat: 'Box Skincare',
    name: 'Box Skincare Set',
    desc: 'Desain box sekunder untuk set skincare: toner, serum, krim.',
    price: 300000,
    turnaround: '5–7 hari kerja',
    color: '#0f9d6e',
    image: 'https://images.pexels.com/photos/8015895/pexels-photo-8015895.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    qtyType: 'variable',
  },
  {
    id: 's2',
    cat: 'Box Kosmetik',
    name: 'Box Kosmetik Standar',
    desc: 'Box lipat untuk produk kosmetik harian.',
    price: 200000,
    turnaround: '3–5 hari kerja',
    color: '#136b4d',
    image: 'https://images.pexels.com/photos/8015473/pexels-photo-8015473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    qtyType: 'variable',
  },
  {
    id: 's3',
    cat: 'Kemasan Serum',
    name: 'Kemasan Serum 30 ml',
    desc: 'Box slim untuk botol serum dropper.',
    price: 250000,
    turnaround: '4–6 hari kerja',
    color: '#0b3d2e',
    image: 'https://images.pexels.com/photos/8101534/pexels-photo-8101534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    qtyType: 'variable',
  },
  {
    id: 's4',
    cat: 'Kemasan Parfum',
    name: 'Gift Box Parfum',
    desc: 'Kemasan parfum dengan kesan mewah.',
    price: 450000,
    turnaround: '7–10 hari kerja',
    color: '#8a7a52',
    image: 'https://images.pexels.com/photos/12053220/pexels-photo-12053220.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    qtyType: 'variable',
  },
  {
    id: 's5',
    cat: 'Kemasan Makeup',
    name: 'Kemasan Palet Makeup',
    desc: 'Box palet eyeshadow dan blush.',
    price: 350000,
    turnaround: '5–7 hari kerja',
    color: '#17493a',
    image: 'https://images.pexels.com/photos/21308529/pexels-photo-21308529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    qtyType: 'variable',
  },
  {
    id: 's6',
    cat: 'Custom',
    name: 'Desain Custom',
    desc: 'Kemasan dengan bentuk dan kebutuhan khusus. Harga awal, final setelah konsultasi.',
    price: 500000,
    turnaround: '7–10 hari kerja',
    color: '#0a6e4d',
    image: 'https://images.pexels.com/photos/13534642/pexels-photo-13534642.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    qtyType: 'fixed',
  },
  {
    id: 'k1',
    cat: 'Paket',
    name: 'Paket Basic',
    desc: '1 konsep, 1 revisi, file digital.',
    price: 150000,
    turnaround: '3–5 hari kerja',
    color: '#0f9d6e',
    image: '',
    qtyType: 'fixed',
    isPackage: true,
    features: ['Satu konsep desain', 'Satu kali revisi', 'File hasil desain digital'],
  },
  {
    id: 'k2',
    cat: 'Paket',
    name: 'Paket Standard',
    desc: '2 konsep, 3 revisi.',
    price: 300000,
    turnaround: '5–7 hari kerja',
    color: '#0f9d6e',
    image: '',
    qtyType: 'fixed',
    isPackage: true,
    hot: true,
    features: ['Dua konsep desain', 'Tiga kali revisi', 'File resolusi tinggi', 'Mockup presentasi'],
  },
  {
    id: 'k3',
    cat: 'Paket',
    name: 'Paket Premium',
    desc: '3 konsep, 5 revisi.',
    price: 500000,
    turnaround: '7–10 hari kerja',
    color: '#0f9d6e',
    image: '',
    qtyType: 'fixed',
    isPackage: true,
    features: ['Tiga konsep desain', 'Lima kali revisi', 'File siap produksi', 'Mockup premium', 'Prioritas pengerjaan'],
  },
];

export const getService = (id: string): Service | undefined =>
  services.find((s) => s.id === id);

export const catalogServices = services.filter((s) => !s.isPackage);
export const packageServices = services.filter((s) => s.isPackage);

export const portfolioItems = [
  {
    name: 'Skincare Set',
    image: 'https://images.pexels.com/photos/8015897/pexels-photo-8015897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Box Skincare',
  },
  {
    name: 'Serum Dropper',
    image: 'https://images.pexels.com/photos/8100776/pexels-photo-8100776.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Kemasan Serum',
  },
  {
    name: 'Parfum Edition',
    image: 'https://images.pexels.com/photos/18833913/pexels-photo-18833913.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Gift Box',
  },
  {
    name: 'Makeup Palette',
    image: 'https://images.pexels.com/photos/32388555/pexels-photo-32388555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Kemasan Makeup',
  },
  {
    name: 'Minimalist Cream',
    image: 'https://images.pexels.com/photos/8015792/pexels-photo-8015792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Box Kosmetik',
  },
  {
    name: 'Luxury Serum',
    image: 'https://images.pexels.com/photos/16378446/pexels-photo-16378446.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Kemasan Serum',
  },
];

export const heroImages = {
  primary: 'https://images.pexels.com/photos/8015895/pexels-photo-8015895.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  secondary: 'https://images.pexels.com/photos/16233812/pexels-photo-16233812.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  tertiary: 'https://images.pexels.com/photos/36482359/pexels-photo-36482359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};
