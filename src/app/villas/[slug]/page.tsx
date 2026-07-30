import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { villas, getVillaBySlug } from '@/lib/villas';
import { ImageGallery } from '@/components/image-gallery';
import { FadeIn } from '@/components/fade-in';
import { AMENITY_ICONS } from '@/components/amenity-icons';

export function generateStaticParams() {
  return villas.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const villa = getVillaBySlug(slug);
  if (!villa) return {};
  return {
    title: villa.name,
    description: villa.description.slice(0, 160),
  };
}

export default async function VillaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const villa = getVillaBySlug(slug);
  if (!villa) notFound();

  return (
    <>
      <ImageGallery images={villa.images} name={villa.name} />

      <div className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-14 lg:gap-20">
          {/* Main */}
          <div>
            <FadeIn>
              <span className="accent-rule" />
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3 font-mono">
                {villa.location}
              </p>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {villa.name}
              </h1>
              <div className="flex gap-4 text-sm text-foreground-muted font-mono mb-10">
                <span>{villa.bedrooms} bedrooms</span>
                <span className="text-border">|</span>
                <span>{villa.bathrooms} bathrooms</span>
                <span className="text-border">|</span>
                <span>{villa.maxGuests} guests</span>
              </div>
            </FadeIn>

            <FadeIn>
              <p className="text-foreground-muted text-lg leading-relaxed mb-12">
                {villa.description}
              </p>
            </FadeIn>

            {/* Highlights */}
            <FadeIn>
              <div className="mb-12">
                <h2 className="font-display text-xl font-semibold mb-5">
                  Highlights
                </h2>
                <ul className="space-y-3">
                  {villa.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-foreground-muted"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Amenities */}
            <FadeIn>
              <div className="mb-12">
                <h2 className="font-display text-xl font-semibold mb-5">
                  Amenities
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {villa.amenities.map((a) => {
                    const info = AMENITY_ICONS[a];
                    const Icon = info?.icon;
                    return (
                      <div
                        key={a}
                        className="flex items-center gap-3 rounded-[1rem] border border-border bg-background-alt px-4 py-3.5 text-sm"
                      >
                        {Icon && (
                          <span className="text-accent shrink-0">
                            <Icon />
                          </span>
                        )}
                        <span className="text-foreground-muted">
                          {info?.label ?? a}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start space-y-6">
            <FadeIn delay={200}>
              {/* Booking card */}
              <div className="rounded-[1.5rem] bg-border/30 p-1.5 ring-1 ring-border/50 mb-6">
                <div className="rounded-[calc(1.5rem-6px)] bg-background-alt p-6">
                  <h3 className="font-display text-lg font-semibold mb-4">
                    Book this villa
                  </h3>
                  <p className="text-sm text-foreground-muted mb-6 leading-relaxed">
                    Check availability and make a booking through our secure
                    reservation system.
                  </p>
                  <a
                    href={villa.supercontrolUrl ?? 'https://www.portugala.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 w-full rounded-full bg-accent text-white px-6 py-4 text-sm font-semibold transition-[background-color,transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent/90 active:scale-[0.98]"
                  >
                    Check availability
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>

              {/* Quick facts */}
              <div className="rounded-[1.5rem] bg-border/30 p-1.5 ring-1 ring-border/50 mb-6">
                <div className="rounded-[calc(1.5rem-6px)] bg-background-alt p-6 space-y-4">
                  <h3 className="font-display text-lg font-semibold">
                    Quick facts
                  </h3>
                  {villa.pool.size && (
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground-muted">Pool size</span>
                      <span className="font-medium">{villa.pool.size}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground-muted">Pool type</span>
                    <span className="font-medium">
                      {[
                        villa.pool.heated && 'Heated',
                        villa.pool.saltwater ? 'Saltwater' : 'Freshwater',
                      ]
                        .filter(Boolean)
                        .join(', ')}
                    </span>
                  </div>
                  {villa.distances.beach && (
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground-muted">Beach</span>
                      <span className="font-medium">
                        {villa.distances.beach}
                      </span>
                    </div>
                  )}
                  {villa.distances.restaurant && (
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground-muted">Restaurants</span>
                      <span className="font-medium">
                        {villa.distances.restaurant}
                      </span>
                    </div>
                  )}
                  {villa.distances.shops && (
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground-muted">Shops</span>
                      <span className="font-medium">
                        {villa.distances.shops}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact nudge */}
              <div className="text-center pt-2">
                <p className="text-sm text-foreground-muted mb-2">
                  Have a question about this villa?
                </p>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-accent hover:text-foreground transition-colors duration-300"
                >
                  Get in touch &rarr;
                </Link>
              </div>
            </FadeIn>
          </aside>
        </div>
      </div>
    </>
  );
}
