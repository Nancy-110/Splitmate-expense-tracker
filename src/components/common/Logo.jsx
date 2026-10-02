/**
 * Logo.jsx — SplitMate wordmark/logo component.
 * variant="full"  → icon + wordmark (sidebar expanded, landing page)
 * variant="icon"  → icon only (sidebar collapsed)
 */

export default function Logo({ variant = 'full', className = '' }) {
  return (
    <div className={['flex items-center gap-2.5 select-none', className].join(' ')}>
      {/* Split-coin icon */}
      <div className="relative w-8 h-8 flex-shrink-0">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Coin circle */}
          <circle cx="16" cy="16" r="15" fill="#6366f1" />
          {/* Split line */}
          <line x1="16" y1="4" x2="16" y2="28" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          {/* Left dollar half */}
          <path
            d="M8 13 C8 10 11 9 13.5 10 C15 10.5 15.5 11.5 15.5 13 C15.5 15 13.5 16 11.5 16.5 C9.5 17 8 18 8 20 C8 22 10 23 13 23 C14.5 23 15.5 22.5 15.5 22"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Right arrow hint */}
          <path
            d="M20 12 L24 16 L20 20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {variant === 'full' && (
        <span className="text-white font-bold text-xl tracking-tight leading-none">
          Split<span className="text-indigo-300">Mate</span>
        </span>
      )}
    </div>
  )
}
