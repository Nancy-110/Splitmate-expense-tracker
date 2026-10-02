/**
 * Settlements.jsx
 * Placeholder page for the Settlements feature.
 */

import { ArrowRight, HandCoins } from 'lucide-react'
import EmptyState from '../components/common/EmptyState'
import PageHeader from '../components/common/PageHeader'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Avatar from '../components/ui/Avatar'
import useDemoStore from '../store/useDemoStore'
import { formatCurrency } from '../utils/formatters'

// Derive simplified settlement suggestions from demo data
const demoSettlements = [
  { id: 's1', from: 'Alex Morgan', to: 'Jordan Lee',    amount: 800.0,  fromInitials: 'AM', toInitials: 'JL' },
  { id: 's2', from: 'Sam Rivera',  to: 'Alex Morgan',   amount: 35.0,   fromInitials: 'SR', toInitials: 'AM' },
  { id: 's3', from: 'Alex Morgan', to: 'Taylor Nguyen', amount: 178.0,  fromInitials: 'AM', toInitials: 'TN' },
]

export default function Settlements() {
  const { user } = useDemoStore()

  return (
    <div className="max-w-3xl mx-auto">
      <PageHeader
        title="Settlements"
        subtitle="Minimize transactions and settle up cleanly."
      />

      {/* Coming-soon notice */}
      <div className="mb-6 flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
        <span className="text-amber-500 text-lg">🚧</span>
        <p className="text-sm text-amber-700">
          <span className="font-semibold">Coming soon:</span> Smart settlement suggestions that minimize the number of transactions needed to settle all debts in a group.
        </p>
      </div>

      {/* Demo settlement cards */}
      <div className="space-y-3 mb-10">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-1 mb-3">
          Suggested Settlements
        </p>

        {demoSettlements.map((s) => {
          const youAre = s.from === user.name ? 'payer' : s.to === user.name ? 'receiver' : 'other'

          return (
            <Card key={s.id} className="px-5 py-4">
              <div className="flex items-center gap-4">
                {/* From */}
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <Avatar initials={s.fromInitials} size="sm" />
                  <span className="text-sm font-medium text-slate-700 truncate">
                    {s.from === user.name ? 'You' : s.from}
                  </span>
                </div>

                {/* Arrow + amount */}
                <div className="flex flex-col items-center gap-1">
                  <p className="text-base font-bold text-slate-900">{formatCurrency(s.amount)}</p>
                  <ArrowRight size={16} className="text-slate-300" />
                </div>

                {/* To */}
                <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
                  <span className="text-sm font-medium text-slate-700 truncate">
                    {s.to === user.name ? 'You' : s.to}
                  </span>
                  <Avatar initials={s.toInitials} size="sm" />
                </div>

                {/* Badge + action */}
                <div className="flex flex-col items-end gap-2 flex-shrink-0 ml-4">
                  <Badge variant={youAre === 'payer' ? 'danger' : youAre === 'receiver' ? 'success' : 'neutral'}>
                    {youAre === 'payer' ? 'You owe' : youAre === 'receiver' ? 'You get' : 'Between others'}
                  </Badge>
                  {youAre !== 'other' && (
                    <Button size="sm" variant={youAre === 'payer' ? 'primary' : 'secondary'}>
                      {youAre === 'payer' ? 'Settle Now' : 'Remind'}
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <EmptyState
        icon={HandCoins}
        title="All settled up? 🎉"
        description="When everyone has settled, you'll see confirmation here. Smart suggestions keep the number of payments minimal."
      />
    </div>
  )
}
