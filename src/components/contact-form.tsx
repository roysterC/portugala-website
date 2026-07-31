'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    // TODO: replace with real API route / email service
    await new Promise((r) => setTimeout(r, 800));
    setStatus('success');
  }

  if (status === 'success') {
    return (
      <div className="rounded-[1.5rem] bg-border/30 p-1.5 ring-1 ring-border/50">
        <div className="rounded-[calc(1.5rem-6px)] bg-background-alt p-8 flex flex-col items-center justify-center min-h-[320px] text-center">
          <span className="block w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xl mb-4">✓</span>
          <h3 className="font-display text-xl font-semibold mb-2">Message sent</h3>
          <p className="text-sm text-foreground-muted leading-relaxed max-w-xs">
            Thanks — we will get back to you within one business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[1.5rem] bg-border/30 p-1.5 ring-1 ring-border/50">
      <div className="rounded-[calc(1.5rem-6px)] bg-background-alt p-8">
        <h2 className="font-display text-xl font-semibold mb-6">
          Send us a message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            {status === 'error' && 'Something went wrong — please try again.'}
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:border-accent transition-colors duration-300"
              placeholder="Your name…"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              spellCheck={false}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:border-accent transition-colors duration-300"
              placeholder="you@example.com…"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              autoComplete="off"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:border-accent transition-colors duration-300"
              placeholder="Villa enquiry…"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:border-accent transition-colors duration-300 resize-none"
              placeholder="Tell us about your ideal Algarve holiday…"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="group inline-flex items-center gap-3 rounded-full bg-accent text-white px-7 py-4 text-sm font-semibold transition-[background-color,transform,opacity] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent/90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
              &rarr;
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
