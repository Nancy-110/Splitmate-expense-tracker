/**
 * Button.jsx — Reusable button component with variant and size support.
 */

const variants = {
  primary:
    'bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-500 shadow-sm',
  secondary:
    'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 focus-visible:ring-slate-300 shadow-sm',
  ghost:
    'bg-transparent text-slate-600 hover:bg-slate-100 focus-visible:ring-slate-300',
  danger:
    'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-400 shadow-sm',
}

const sizes = {
  sm: 'px-3 py-1.5 text-xs font-medium rounded-lg gap-1.5',
  md: 'px-4 py-2 text-sm font-medium rounded-xl gap-2',
  lg: 'px-6 py-3 text-base font-semibold rounded-xl gap-2',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={[
        'inline-flex items-center justify-center transition-all duration-150',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        'cursor-pointer select-none',
        variants[variant] ?? variants.primary,
        sizes[size] ?? sizes.md,
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
