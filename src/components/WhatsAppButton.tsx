import { MessageCircle } from 'lucide-react';

type Props = {
  onClick: (msg: string) => void;
};

export default function WhatsAppButton({ onClick }: Props) {
  return (
    <button
      onClick={() => onClick('Halo CUSPACK, saya ingin bertanya.')}
      className="fixed right-5 bottom-5 z-40 w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#1eb858] text-white grid place-items-center shadow-xl shadow-green-500/30 hover:scale-110 transition-all"
      aria-label="WhatsApp"
    >
      <MessageCircle size={26} />
      <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-20" />
    </button>
  );
}
