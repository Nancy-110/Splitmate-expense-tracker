/**
 * History.jsx
 * Placeholder page for the transaction history feature.
 */

import { Clock } from 'lucide-react'
import EmptyState from '../components/common/EmptyState'
import PageHeader from '../components/common/PageHeader'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import useDemoStore from '../store/useDemoStore'
import { formatCurrency, formatDate } from '../utils/formatters'

export default function History() {
  const { expenses, user } = useDemoStore()

  // Show expenses sorted by date descending as history
  const historyItems = [...expenses].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )

  return (
    <div className="max-w-3xl mx-auto">
      <PageHeader
        title="History"
        subtitle="A chronological record of all your past transactions."
      />

      {/* Coming-soon notice */}
      <div className="mb-6 flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
        <span className="text-amber-500 text-lg">🚧</span>
        <p className="text-sm text-amber-700">
          <span className="font-semibold">Coming soon:</span> Full transaction history with search, date range filtering, export to CSV, and monthly summaries.
        </p>
      </div>

      {/* Timeline */}
      <Card>
        <div className="px-5 py-4 border-b border-slate-100">
          <p className="text-sm font-semibold text-slate-800">Activity Timeline</p>
          <p className="text-xs text-slate-400 mt-0.5">Demo entries sorted by date</p>
        </div>

        <ul className="relative divide-y divide-slate-50">
          {historyItems.map((item, idx) => (
            <li key={item.id} className="flex items-start gap-4 px-5 py-4">
              {/* Timeline dot */}
              <div className="flex flex-col items-center mt-1 flex-shrink-0">
                <div className={[
                  'w-2.5 h-2.5 rounded-full',
                  item.paidBy === user.name ? 'bg-emerald-400' : 'bg-red-400',
                ].join(' ')} />
                {idx < historyItems.length - 1 && (
                  <div className="w-px flex-1 bg-slate-100 mt-1" style={{ minHeight: 24 }} />
                )}
              </div>

              <div className="flex-1 min-w-0 pb-2">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-800 truncate">{item.description}</p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {item.group} · Paid by {item.paidBy === user.name ? 'you' : item.paidBy}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <p className="text-sm font-bold text-slate-800">{formatCurrency(item.amount)}</p>
                    <Badge variant={item.paidBy === user.name ? 'success' : 'danger'}>
                      {item.paidBy === user.name
                        ? `+${formatCurrency(item.amount - item.yourShare)}`
                        : `-${formatCurrency(item.yourShare)}`}
                    </Badge>
                  </div>
                </div>
                <p className="text-xs text-slate-300 mt-2">{formatDate(item.date)}</p>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      <div className="mt-8">
        <EmptyState
          icon={Clock}
          title="Your full history lives here"
          description="Every expense you create or participate in will be recorded here. Use filters and search to find anything instantly."
        />
      </div>
    </div>
  )
}
