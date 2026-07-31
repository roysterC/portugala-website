'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Lightbox = dynamic(() => import('./lightbox').then((m) => m.Lightbox), {
  ssr: false,
});

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
              aria-label={`View ${name} photo 1 in fullscreen gallery`}
              className="relative col-span-2 row-span-2 cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
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
                aria-label={`View ${name} photo ${i + 2} in fullscreen gallery`}
                className="relative cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
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

      {/* Lightbox — dynamically loaded */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          name={name}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex(
              (lightboxIndex - 1 + images.length) % images.length,
            )
          }
          onNext={() =>
            setLightboxIndex((lightboxIndex + 1) % images.length)
          }
        />
      )}
    </>
  );
}
