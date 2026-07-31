import type { Metadata } from 'next';
import Image from 'next/image';
import { FadeIn } from '@/components/fade-in';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Portugala offers Portugal from the inside — hand-picked Algarve villas personally arranged by our own team in London and the Algarve.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <FadeIn>
            <span className="accent-rule" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.05]">
              We know every villa from the inside
            </h1>
            <p className="text-foreground-muted text-lg leading-relaxed mb-6">
              Portugala offers you Portugal from the inside. Every villa is
              hand-picked with the insight that comes from experience — chosen
              with you in mind, never pulled from a database.
            </p>
            <p className="text-foreground-muted text-lg leading-relaxed">
              We are a small team working from London and the Algarve, and we
              think of ourselves as good hosts. Book with our London office; our
              Algarve team looks after the details that matter most, from the
              moment you arrive until the day you leave.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="rounded-[1.5rem] bg-border/30 p-1.5 ring-1 ring-border/50">
              <div className="relative aspect-[4/3] rounded-[calc(1.5rem-6px)] overflow-hidden">
                <Image
                  src="/images/villas/borboleta/10.jpg"
                  alt="Algarve villa terrace overlooking gardens"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Signature pull-quote */}
      <section className="px-6 py-24 md:py-32">
        <FadeIn>
          <figure className="mx-auto max-w-3xl text-center">
            <blockquote className="font-display text-2xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.25] text-balance">
              <span className="text-warm">&ldquo;</span>Our home is your home,
              for your all-too-short stay.<span className="text-warm">&rdquo;</span>
            </blockquote>
            <figcaption className="mt-6 text-xs font-mono uppercase tracking-[0.2em] text-foreground-muted">
              The Portugala promise
            </figcaption>
          </figure>
        </FadeIn>
      </section>

      {/* Values — editorial split */}
      <section className="px-6 py-28 md:py-40 bg-background-alt">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <FadeIn>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1]">
                Holiday rentals, done properly
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-7">
            {[
              {
                title: 'Chosen with you in mind',
                text: 'Every villa is hand-picked with the insight that comes from experience. We stay in them ourselves, so a recommendation is a genuine one — never the property that simply has availability.',
              },
              {
                title: 'Good hosts, on the ground',
                text: 'Book through our London office; our Algarve team handles the meet-and-greet, local recommendations, and anything you need during your stay. You are never on your own.',
              },
              {
                title: "Whoever you're travelling with",
                text: 'A young family, a carefree crowd of singles, honeymooners, even second honeymooners — we know just what you are looking for, and we match the villa to the trip.',
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

      {/* The Algarve */}
      <section className="px-6 py-28 md:py-40">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <FadeIn>
            <div className="rounded-[1.5rem] bg-border/30 p-1.5 ring-1 ring-border/50 order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-[calc(1.5rem-6px)] overflow-hidden">
                <Image
                  src="/images/villas/borboleta/06.jpg"
                  alt="The historic Old Town of Albufeira — whitewashed streets and calçada paving"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-[1.1]">
                Why the Algarve?
              </h2>
              <p className="text-foreground-muted text-lg leading-relaxed mb-4">
                Twenty-five Blue Flag beaches around Albufeira alone, dramatic
                golden cliffs, charming fishing villages, and some of the best
                seafood in Europe. With more than 300 days of sunshine a year, it
                is one of Europe&rsquo;s most reliable holiday destinations.
              </p>
              <p className="text-foreground-muted text-lg leading-relaxed">
                Our villas sit in and around Albufeira — a short walk or drive
                from the beaches, the restaurants, and the historic Old Town, yet
                private and peaceful enough to truly relax.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
