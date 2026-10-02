/**
 * Groups.jsx
 * Placeholder page for the Groups feature.
 */

import { Plus, Users } from 'lucide-react'
import EmptyState from '../components/common/EmptyState'
import PageHeader from '../components/common/PageHeader'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import useDemoStore from '../store/useDemoStore'
import { formatCurrency, formatRelativeTime } from '../utils/formatters'

export default function Groups() {
  const { groups } = useDemoStore()

  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader
        title="Groups"
        subtitle="Manage all your shared expense groups in one place."
        action={
          <Button size="sm">
            <Plus size={15} />
            New Group
          </Button>
        }
      />

      {/* Coming-soon notice */}
      <div className="mb-6 flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
        <span className="text-amber-500 text-lg">🚧</span>
        <p className="text-sm text-amber-700">
          <span className="font-semibold">Coming soon:</span> Full group management — create groups, invite members, and manage shared expenses per group.
        </p>
      </div>

      {/* Demo group cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {groups.map((group) => (
          <Card key={group.id} hover className="p-5">
            <div className="flex items-start justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center">
                <Users size={20} className="text-violet-600" />
              </div>
              <Badge variant={group.yourBalance >= 0 ? 'success' : 'danger'}>
                {group.yourBalance >= 0 ? 'You are owed' : 'You owe'}
              </Badge>
            </div>

            <h3 className="text-base font-semibold text-slate-800 mb-1">{group.name}</h3>
            <p className="text-xs text-slate-400 mb-4">
              {group.members} members · Updated {formatRelativeTime(group.updatedAt)}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <div>
                <p className="text-xs text-slate-400">Total expenses</p>
                <p className="text-sm font-semibold text-slate-700">{formatCurrency(group.totalExpenses)}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400">Your balance</p>
                <p className={[
                  'text-sm font-bold',
                  group.yourBalance >= 0 ? 'text-emerald-600' : 'text-red-500',
                ].join(' ')}>
                  {group.yourBalance >= 0
                    ? `+${formatCurrency(group.yourBalance)}`
                    : formatCurrency(group.yourBalance)}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty state teaser */}
      <div className="mt-10">
        <EmptyState
          icon={Users}
          title="More groups will appear here"
          description="When you create or join a group, it will show up here with your shared expenses and balances."
          actionLabel="Create Your First Group"
          onAction={() => {}}
        />
      </div>
    </div>
  )
}
