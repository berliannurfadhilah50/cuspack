import { useEffect, useState } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

type Props = {
  message: string;
  show: boolean;
  onClose: () => void;
};

export default function Toast({ message, show, onClose }: Props) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 2500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`fixed left-1/2 bottom-24 -translate-x-1/2 z-[70] transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="bg-emerald-950 text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2.5 text-sm font-medium">
        {message.includes('tidak') || message.includes('belum') ? (
          <AlertCircle size={17} className="text-amber-400" />
        ) : (
          <CheckCircle2 size={17} className="text-emerald-400" />
        )}
        {message}
      </div>
    </div>
  );
}

export function useToast() {
  const [toastMsg, setToastMsg] = useState('');
  const [toastShow, setToastShow] = useState(false);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setToastShow(true);
  };

  const toastEl = (
    <Toast
      message={toastMsg}
      show={toastShow}
      onClose={() => setToastShow(false)}
    />
  );

  return { showToast, toastEl };
}
