'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
  name: string;
}

export function ImageGallery({ images, name }: ImageGalleryProps) {
  const display = images.slice(0, 5);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const remaining = images.length - display.length;

  return (
    <>
      {/* Grid */}
      <section className="px-6 pt-4 md:pt-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-2xl overflow-hidden h-[300px] md:h-[420px] lg:h-[500px]">
            {/* Main image */}
            <button
              type="button"
              onClick={() => setLightboxIndex(0)}
              className="relative col-span-2 row-span-2 cursor-pointer overflow-hidden"
            >
              <Image
                src={display[0]}
                alt={`${name} — photo 1`}
                fill
                priority
                className="object-cover hover:scale-[1.02] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                sizes="50vw"
              />
            </button>

            {/* Secondary images */}
            {display.slice(1).map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setLightboxIndex(i + 1)}
                className="relative cursor-pointer overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`${name} — photo ${i + 2}`}
                  fill
                  className="object-cover hover:scale-[1.02] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  sizes="25vw"
                />
                {i === display.length - 2 && remaining > 0 && (
                  <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-sm font-semibold">
                    +{remaining} photos
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center overscroll-contain"
          onClick={() => setLightboxIndex(null)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setLightboxIndex(null);
            if (e.key === 'ArrowRight')
              setLightboxIndex((p) =>
                p !== null ? (p + 1) % images.length : null,
              );
            if (e.key === 'ArrowLeft')
              setLightboxIndex((p) =>
                p !== null ? (p - 1 + images.length) % images.length : null,
              );
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
          tabIndex={0}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
            aria-label="Close gallery"
          >
            &times;
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + images.length) % images.length,
              );
            }}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm z-10"
            aria-label="Previous image"
          >
            &lsaquo;
          </button>

          <div
            className="relative w-[90vw] h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`${name} — photo ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % images.length);
            }}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm z-10"
            aria-label="Next image"
          >
            &rsaquo;
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-mono">
            {lightboxIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
