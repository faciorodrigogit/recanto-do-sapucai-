/** Logo: quadrado com 3 arcos concêntricos (SVG próprio). */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={className} aria-hidden="true">
      <rect x="1.5" y="1.5" width="41" height="41" rx="6" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <g fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M8 38V18a14 14 0 0 1 28 0v20" />
        <path d="M14 38V19a8 8 0 0 1 16 0v19" />
        <path d="M20 38V20a2 2 0 0 1 4 0v18" />
      </g>
    </svg>
  );
}
