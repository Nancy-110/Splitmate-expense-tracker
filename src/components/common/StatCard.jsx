/**
 * StatCard.jsx — Metric card for dashboard KPIs.
 */

import Card from '../ui/Card'

export default function StatCard({
  label,
  value,
  icon: Icon,
  iconBg = 'bg-indigo-100',
  iconColor = 'text-indigo-600',
  trend,
  trendPositive = true,
  subtext,
}) {
  return (
    <Card className="p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div className={['w-11 h-11 rounded-xl flex items-center justify-center', iconBg].join(' ')}>
          {Icon && <Icon size={22} className={iconColor} />}
        </div>
        {trend !== undefined && (
          <span
            className={[
              'text-xs font-medium px-2 py-1 rounded-full',
              trendPositive
                ? 'bg-emerald-100 text-emerald-700'
                : 'bg-red-100 text-red-600',
            ].join(' ')}
          >
            {trendPositive ? '↑' : '↓'} {trend}
          </span>
        )}
      </div>

      <div>
        <p className="text-sm text-slate-500 font-medium">{label}</p>
        <p className="text-2xl font-bold text-slate-900 mt-0.5 tracking-tight">{value}</p>
        {subtext && <p className="text-xs text-slate-400 mt-1">{subtext}</p>}
      </div>
    </Card>
  )
}
