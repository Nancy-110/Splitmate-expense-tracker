/**
 * Badge.jsx — Status badge with semantic color variants.
 */

const variants = {
  success: 'bg-emerald-100 text-emerald-700',
  danger:  'bg-red-100 text-red-600',
  warning: 'bg-amber-100 text-amber-700',
  neutral: 'bg-slate-100 text-slate-600',
  brand:   'bg-indigo-100 text-indigo-700',
}

export default function Badge({ children, variant = 'neutral', className = '' }) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium',
        variants[variant] ?? variants.neutral,
        className,
      ].join(' ')}
    >
      {children}
    </span>
  )
}
