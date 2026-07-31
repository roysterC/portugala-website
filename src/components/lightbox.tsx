'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface LightboxProps {
  images: string[];
  name: string;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const FOCUSABLE = 'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';

export function Lightbox({ images, name, index, onClose, onPrev, onNext }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    el.focus();

    function trapFocus(e: KeyboardEvent) {
      if (e.key !== 'Tab') return;
      const nodes = Array.from(el!.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }

    el.addEventListener('keydown', trapFocus);
    return () => el.removeEventListener('keydown', trapFocus);
  }, []);

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center overscroll-contain"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight') onNext();
        if (e.key === 'ArrowLeft') onPrev();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      tabIndex={-1}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-1 focus-visible:ring-offset-black/50"
        aria-label="Close gallery"
      >
        &times;
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 text-white/80 hover:text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-1 focus-visible:ring-offset-black/50"
        aria-label="Previous image"
      >
        &lsaquo;
      </button>

      <div
        className="relative w-[90vw] h-[80vh] max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt={`${name} — photo ${index + 1}`}
          fill
          className="object-contain"
          sizes="90vw"
        />
      </div>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 text-white/80 hover:text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-1 focus-visible:ring-offset-black/50"
        aria-label="Next image"
      >
        &rsaquo;
      </button>

      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-mono">
        {index + 1} / {images.length}
      </p>
    </div>
  );
}
