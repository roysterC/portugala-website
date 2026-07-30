import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { villas } from '@/lib/villas';
import { AREA_LABELS, type VillaArea } from '@/lib/types';
import { FadeIn } from '@/components/fade-in';

export const metadata: Metadata = {
  title: 'Our Villas',
  description:
    'Browse our hand-picked collection of private villas with pools across the Algarve — from Albufeira to Vilamoura.',
};

const usedAreas = [...new Set(villas.map((v) => v.area))] as VillaArea[];

export default function VillasPage() {
  return (
    <>
      {/* Header */}
      <section className="px-6 pt-16 pb-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <span className="accent-rule" />
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-5 leading-[1.1]">
              Our collection
            </h1>
            <p className="text-foreground-muted text-lg max-w-xl leading-relaxed">
              Seven private villas across four Algarve locations. Each one
              personally inspected, each one with its own pool.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Villa grid — grouped by area */}
      {usedAreas.map((area) => {
        const areaVillas = villas.filter((v) => v.area === area);
        const areaLabel = AREA_LABELS[area];
        return (
          <section
            key={area}
            id={area}
            className="px-6 pb-20 md:pb-28"
          >
            <div className="mx-auto max-w-6xl">
              <FadeIn>
                <div className="flex items-baseline gap-3 mb-8">
                  <h2 className="font-display text-xl md:text-2xl font-semibold">
                    {areaLabel}
                  </h2>
                  <span className="text-xs text-foreground-muted font-mono">
                    {areaVillas.length}{' '}
                    {areaVillas.length === 1 ? 'villa' : 'villas'}
                  </span>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {areaVillas.map((villa, i) => (
                  <FadeIn key={villa.slug} delay={i * 80}>
                    <Link
                      href={`/villas/${villa.slug}`}
                      className="group block"
                    >
                      <div className="rounded-[1.5rem] bg-border/30 p-1.5 ring-1 ring-border/50 transition-shadow duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-accent/30 hover:shadow-lg">
                        <div className="rounded-[calc(1.5rem-6px)] overflow-hidden bg-background">
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                              src={villa.heroImage}
                              alt={`${villa.name} — ${villa.location}`}
                              fill
                              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            />
                          </div>
                          <div className="p-5">
                            <h3 className="font-display text-lg font-semibold mb-2">
                              {villa.name}
                            </h3>
                            <p className="text-sm text-foreground-muted leading-relaxed mb-3 line-clamp-2">
                              {villa.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex gap-3 text-xs text-foreground-muted font-mono">
                                <span>{villa.bedrooms} bed</span>
                                <span className="text-border">|</span>
                                <span>{villa.bathrooms} bath</span>
                                <span className="text-border">|</span>
                                <span>{villa.maxGuests} guests</span>
                              </div>
                              <span className="text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                View &rarr;
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
