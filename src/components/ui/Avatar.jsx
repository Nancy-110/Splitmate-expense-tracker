/**
 * Avatar.jsx — User avatar with initials fallback.
 */

const sizeClasses = {
  sm: 'w-7 h-7 text-xs',
  md: 'w-9 h-9 text-sm',
  lg: 'w-11 h-11 text-base',
  xl: 'w-14 h-14 text-lg',
}

export default function Avatar({ initials, src, alt = '', size = 'md', className = '' }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={[
          'rounded-full object-cover flex-shrink-0',
          sizeClasses[size] ?? sizeClasses.md,
          className,
        ].join(' ')}
      />
    )
  }

  return (
    <div
      aria-label={alt || initials}
      className={[
        'rounded-full bg-indigo-600 text-white font-semibold flex items-center justify-center flex-shrink-0 select-none',
        sizeClasses[size] ?? sizeClasses.md,
        className,
      ].join(' ')}
    >
      {initials?.slice(0, 2).toUpperCase()}
    </div>
  )
}
