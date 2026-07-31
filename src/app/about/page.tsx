import type { Metadata } from 'next';
import Image from 'next/image';
import { FadeIn } from '@/components/fade-in';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'A family-run villa rental agency with a London office and on-the-ground support in the Algarve. We know every villa personally.',
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
              Portugala is a family-run agency. We personally inspect — and stay
              in — every property we offer. When we recommend a villa for your
              trip, we are speaking from experience, not a listing database.
            </p>
            <p className="text-foreground-muted text-lg leading-relaxed">
              Arranged from our London office with support on the ground in the
              Algarve. The convenience of a UK-based team with local expertise
              where it matters most.
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

      {/* Values */}
      <section className="px-6 py-28 md:py-40 bg-background-alt">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-14 max-w-2xl leading-[1.1]">
              Holiday rentals, done properly
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Personal knowledge',
                text: 'We stay in every villa ourselves, so when we recommend a property for your family, group, or honeymoon, we speak from experience — not a database.',
              },
              {
                title: 'Honest guidance',
                text: 'We will tell you which villa suits your needs, not just the one with availability. If a property is not right for you, we will say so.',
              },
              {
                title: 'On-the-ground support',
                text: 'Our Algarve team handles meet-and-greets, local recommendations, and anything you need during your stay. You are never on your own.',
              },
            ].map(({ title, text }, i) => (
              <FadeIn key={title} delay={i * 100}>
                <h3 className="font-body text-base font-semibold mb-3">
                  {title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {text}
                </p>
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
                  src="/images/villas/chico/05.jpg"
                  alt="Private swimming pool surrounded by gardens"
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
                Over 25 Blue Flag beaches, dramatic golden cliffs, charming
                fishing villages, and some of the best seafood in Europe. More
                than 300 days of sunshine a year make it one of Europe's most
                reliable holiday destinations.
              </p>
              <p className="text-foreground-muted text-lg leading-relaxed">
                Our villas are in and around Albufeira — close to beautiful
                beaches, excellent restaurants, and the historic Old Town, yet
                private and peaceful enough to truly relax.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
