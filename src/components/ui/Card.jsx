/**
 * Card.jsx — Surface container with consistent padding, border, and shadow.
 */

export default function Card({ children, className = '', onClick, hover = false }) {
  return (
    <div
      onClick={onClick}
      className={[
        'bg-white rounded-2xl border border-slate-100 shadow-sm',
        hover ? 'cursor-pointer transition-shadow duration-200 hover:shadow-md hover:border-slate-200' : '',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}
