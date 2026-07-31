import Link from "next/link";
import Image from "next/image";
import { villas } from "@/lib/villas";
import type { Villa } from "@/lib/types";
import { FadeIn } from "@/components/fade-in";
import { AzulejoDivider } from "@/components/azulejo-divider";

export default function HomePage() {
  const featured = villas.slice(0, 3);

  return (
    <>
      {/* Hero — editorial split */}
      <section className="relative min-h-[90dvh] flex items-center px-6 overflow-hidden -mt-24">
        <Image
          src="/images/villas/estrelicia-3bed/05.jpg"
          alt="Algarve coastline with golden cliffs and turquoise sea"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-6xl w-full pt-32 pb-20">
          <span className="accent-rule" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-6 font-mono">
            Private villas in the Algarve
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.05] max-w-2xl mb-8">
            Hand-picked
            <br />
            <span className="text-warm">by people</span>
            <br />
            who stay in them
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-md mb-10 leading-relaxed">
            Seven private villas, personally inspected by our family team.
            London office, Algarve support on the ground.
          </p>
          <Link
            href="/villas"
            prefetch={true}
            className="group inline-flex items-center gap-3 rounded-full bg-white text-foreground px-7 py-4 text-sm font-semibold transition-[background-color,transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
          >
            Browse our villas
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </section>

      {/* Signature — azulejo tile course */}
      <AzulejoDivider label="A Portuguese azulejo tile motif" />

      {/* Value proposition — editorial split */}
      <section className="px-6 py-28 md:py-40">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <FadeIn>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-[1.1]">
                We stay in every villa we offer
              </h2>
              <p className="text-foreground-muted text-lg leading-relaxed">
                That first-hand knowledge means we match the right property to
                your trip — whether it is a family beach holiday, a group
                celebration, or a quiet escape for two.
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-7">
            {[
              {
                title: 'Personally inspected',
                text: 'Every property is visited and vetted by us. We know the layout, the light, the neighbours, and the best beach nearby.',
              },
              {
                title: 'London + Algarve',
                text: 'Book through our London office. On arrival, our Algarve team handles the meet-and-greet and is on call throughout your stay.',
              },
              {
                title: '25 Blue Flag beaches',
                text: 'The Albufeira coastline alone holds 25 Blue Flag awards. Our villas put you within easy reach of the best stretches.',
              },
            ].map(({ title, text }, i) => (
              <FadeIn key={title} delay={i * 100}>
                <div className="border-t border-border pt-6 pb-8 last:pb-0">
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {title}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed max-w-md">
                    {text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured villas */}
      <section className="px-6 py-28 md:py-40 bg-background-alt">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="flex items-end justify-between mb-14">
              <div>
                <h2 className="font-display text-3xl md:text-5xl font-bold">
                  Our villas
                </h2>
              </div>
              <Link
                href="/villas"
                prefetch={true}
                className="group hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-foreground transition-colors duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
              >
                <span className="link-cta">View all</span>
                <span className="transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FadeIn>
              <FeaturedVilla villa={featured[0]} variant="lead" />
            </FadeIn>
            <div className="grid grid-rows-2 gap-6">
              {featured.slice(1, 3).map((villa, i) => (
                <FadeIn key={villa.slug} delay={(i + 1) * 100}>
                  <FeaturedVilla villa={villa} variant="compact" />
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link
              href="/villas"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
            >
              <span className="link-cta">View all villas</span>
              <span className="transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Full-bleed photographic band */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/images/villas/estrelicia-3bed/03.jpg"
          alt="Villa pool terrace with a glimpse of the Algarve sea beyond"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/45" />
        <div className="relative z-10 mx-auto max-w-6xl w-full px-6">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-5 font-mono">
              The Albufeira coast
            </p>
            <p className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-2xl">
              Over 300 days of sunshine a year
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 md:py-40">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-5">
              Ready for the Algarve?
            </h2>
            <p className="text-foreground-muted text-lg mb-10">
              Tell us what you are looking for and we will recommend the right
              villa.
            </p>
            <Link
              href="/contact"
              prefetch={true}
              className="group inline-flex items-center gap-3 rounded-full bg-accent text-white px-7 py-4 text-sm font-semibold transition-[background-color,transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
            >
              Contact us
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

function FeaturedVilla({
  villa,
  variant,
}: {
  villa: Villa;
  variant: 'lead' | 'compact';
}) {
  const facts = (
    <div className="flex gap-3 text-xs text-foreground-muted font-mono">
      <span>{villa.bedrooms} bed</span>
      <span className="text-border">|</span>
      <span>{villa.bathrooms} bath</span>
      <span className="text-border">|</span>
      <span>{villa.maxGuests} guests</span>
    </div>
  );

  return (
    <Link
      href={`/villas/${villa.slug}`}
      prefetch={true}
      className="group block h-full rounded-[1.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
    >
      <div className="h-full rounded-[1.5rem] bg-border/30 p-1.5 ring-1 ring-border/50 transition-shadow duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-accent/30 hover:shadow-lg">
        {variant === 'lead' ? (
          <div className="h-full rounded-[calc(1.5rem-6px)] overflow-hidden bg-background flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={villa.heroImage}
                alt={`${villa.name} — ${villa.location}`}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="p-7">
              <p className="text-xs text-foreground-muted mb-1">
                {villa.location}
              </p>
              <h3 className="font-display text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-highlight">
                {villa.name}
              </h3>
              {facts}
            </div>
          </div>
        ) : (
          <div className="h-full rounded-[calc(1.5rem-6px)] overflow-hidden bg-background grid grid-cols-[40%_1fr]">
            <div className="relative overflow-hidden">
              <Image
                src={villa.heroImage}
                alt={`${villa.name} — ${villa.location}`}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                sizes="(min-width: 1024px) 20vw, 40vw"
              />
            </div>
            <div className="p-5 flex flex-col justify-center">
              <p className="text-xs text-foreground-muted mb-1">
                {villa.location}
              </p>
              <h3 className="font-display text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-highlight">
                {villa.name}
              </h3>
              {facts}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
