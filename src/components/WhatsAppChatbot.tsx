'use client';

import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const WA_NUMBER = '918248020159';
const WA_MESSAGE = encodeURIComponent(
  "Hi Solvifie! I'd like to know more about your recruitment services."
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function WhatsAppChatbot() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Auto-show popup after 4 seconds
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 4000);
    // Show button immediately
    const v = setTimeout(() => setVisible(true), 500);
    return () => { clearTimeout(t); clearTimeout(v); };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Popup card */}
      {open && (
        <div className="w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-[#25D366] px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <WhatsAppIcon size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm font-heading leading-tight">Solvifie Support</p>
                <p className="text-green-100 text-xs font-sans">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Chat bubble */}
          <div className="p-4 bg-[#f0f4f8]">
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[90%]">
              <p className="text-gray-800 text-sm font-sans leading-relaxed">
                👋 Hi there! Welcome to <span className="font-semibold">Solvifie</span>.
              </p>
              <p className="text-gray-600 text-sm font-sans mt-1 leading-relaxed">
                Looking to hire top talent or find your dream job? We're here to help!
              </p>
              <p className="text-gray-400 text-[10px] font-sans mt-2 text-right">Just now</p>
            </div>
          </div>

          {/* CTA */}
          <div className="px-4 pb-4 bg-[#f0f4f8]">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm py-3 rounded-xl transition-colors font-sans"
            >
              <WhatsAppIcon size={16} className="text-white" />
              Start Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Floating button */}
      {visible && (
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Chat on WhatsApp"
          className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          {open ? (
            <MessageCircle size={26} />
          ) : (
            <WhatsAppIcon size={26} className="text-white" />
          )}
          {/* Pulse ring */}
          {!open && (
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          )}
        </button>
      )}
    </div>
  );
}
