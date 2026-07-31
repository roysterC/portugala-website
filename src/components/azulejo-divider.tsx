/**
 * Signature element — an azulejo tile course.
 *
 * The classic Portuguese interlocking-circle + four-petal rosette weave,
 * hand-drawn as a single seamless SVG tile. Rendered monochrome in the
 * ocean accent at low opacity and framed by hairline rules, so it reads as
 * tilework set into a wall rather than tourist decoration. Used once, as the
 * transition from the photographic hero into the editorial content.
 */
export function AzulejoDivider({ label }: { label?: string }) {
  return (
    <div className="border-y border-border bg-accent-surface/30" aria-hidden="true">
      <div className="relative h-20 md:h-28 overflow-hidden text-accent/30">
        <svg
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="azulejo"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <g fill="none" stroke="currentColor" strokeWidth="1.25">
                {/* Corner arcs — tile into full circles on the grid
                    vertices and a four-petal rosette in each tile centre. */}
                <path d="M30 0 A30 30 0 0 1 0 30" />
                <path d="M60 30 A30 30 0 0 1 30 0" />
                <path d="M0 30 A30 30 0 0 1 30 60" />
                <path d="M30 60 A30 30 0 0 1 60 30" />
              </g>
              {/* Dots at circle centres and rosette centre. */}
              <circle cx="30" cy="30" r="2.25" fill="currentColor" />
              <circle cx="0" cy="0" r="2.25" fill="currentColor" />
              <circle cx="60" cy="0" r="2.25" fill="currentColor" />
              <circle cx="0" cy="60" r="2.25" fill="currentColor" />
              <circle cx="60" cy="60" r="2.25" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#azulejo)" />
        </svg>
      </div>
      {label && (
        <p className="sr-only">{label}</p>
      )}
    </div>
  );
}
