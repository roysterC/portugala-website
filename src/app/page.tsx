import Link from "next/link";
import Image from "next/image";
import { villas } from "@/lib/villas";
import { FadeIn } from "@/components/fade-in";

export default function HomePage() {
  const featured = villas.slice(0, 3);

  return (
    <>
      {/* Hero — editorial split */}
      <section className="relative min-h-[90dvh] flex items-center px-6 overflow-hidden -mt-24">
        <Image
          src="/images/villas/borboleta/06.jpg"
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

      {/* Value proposition */}
      <section className="px-6 py-28 md:py-40">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <span className="accent-rule" />
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 max-w-2xl leading-[1.1]">
              We stay in every villa we offer
            </h2>
            <p className="text-foreground-muted text-lg leading-relaxed max-w-xl mb-16">
              That first-hand knowledge means we match the right property to your
              trip — whether it is a family beach holiday, a group celebration,
              or a quiet escape for two.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <div className="rounded-[1.5rem] bg-border/30 p-1.5 ring-1 ring-border/50">
                  <div className="rounded-[calc(1.5rem-6px)] bg-background p-8">
                    <h3 className="font-body text-base font-semibold mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {text}
                    </p>
                  </div>
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
                <span className="accent-rule" />
                <h2 className="font-display text-3xl md:text-5xl font-bold">
                  Our villas
                </h2>
              </div>
              <Link
                href="/villas"
                prefetch={true}
                className="hidden md:inline-flex text-sm font-medium text-accent hover:text-foreground transition-colors duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
              >
                View all &rarr;
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((villa, i) => (
              <FadeIn key={villa.slug} delay={i * 100}>
                <Link
                  href={`/villas/${villa.slug}`}
                  prefetch={true}
                  className="group block rounded-[1.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
                >
                  <div className="rounded-[1.5rem] bg-border/30 p-1.5 ring-1 ring-border/50 transition-shadow duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-accent/30 hover:shadow-lg">
                    <div className="rounded-[calc(1.5rem-6px)] overflow-hidden bg-background">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={villa.heroImage}
                          alt={`${villa.name} — ${villa.location}`}
                          fill
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                          sizes="(min-width: 768px) 33vw, 100vw"
                        />
                      </div>
                      <div className="p-5">
                        <p className="text-xs text-foreground-muted mb-1">
                          {villa.location}
                        </p>
                        <h3 className="font-display text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-highlight">
                          {villa.name}
                        </h3>
                        <div className="flex gap-3 text-xs text-foreground-muted font-mono">
                          <span>{villa.bedrooms} bed</span>
                          <span className="text-border">|</span>
                          <span>{villa.bathrooms} bath</span>
                          <span className="text-border">|</span>
                          <span>{villa.maxGuests} guests</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link
              href="/villas"
              className="text-sm font-medium text-accent rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
            >
              View all villas &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 md:py-40">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="accent-rule mx-auto" />
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
