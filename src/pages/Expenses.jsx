/**
 * Expenses.jsx
 * Placeholder page for the Expenses feature.
 */

import { Filter, Plus, Receipt } from 'lucide-react'
import EmptyState from '../components/common/EmptyState'
import PageHeader from '../components/common/PageHeader'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import useDemoStore from '../store/useDemoStore'
import { formatCurrency, formatDate } from '../utils/formatters'

const categoryColors = {
  Travel:  'brand',
  Home:    'neutral',
  Food:    'success',
  default: 'neutral',
}

export default function Expenses() {
  const { expenses, user } = useDemoStore()

  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader
        title="Expenses"
        subtitle="A complete log of all your shared expenses."
        action={
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm">
              <Filter size={14} />
              Filter
            </Button>
            <Button size="sm">
              <Plus size={15} />
              Add Expense
            </Button>
          </div>
        }
      />

      {/* Coming-soon notice */}
      <div className="mb-6 flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
        <span className="text-amber-500 text-lg">🚧</span>
        <p className="text-sm text-amber-700">
          <span className="font-semibold">Coming soon:</span> Add, edit, and categorize expenses with receipt uploads, custom splits, and date filtering.
        </p>
      </div>

      {/* Expense list */}
      <Card>
        <div className="px-5 py-4 border-b border-slate-100">
          <p className="text-sm font-semibold text-slate-800">All Expenses</p>
          <p className="text-xs text-slate-400 mt-0.5">Showing {expenses.length} demo entries</p>
        </div>

        <ul className="divide-y divide-slate-50">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                <Receipt size={18} className="text-indigo-500" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800 truncate">{expense.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-slate-400">{expense.group}</span>
                  <span className="text-slate-200">·</span>
                  <span className="text-xs text-slate-400">{formatDate(expense.date)}</span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                <p className="text-sm font-bold text-slate-800">{formatCurrency(expense.amount)}</p>
                <Badge
                  variant={expense.paidBy === user.name ? 'success' : 'danger'}
                >
                  {expense.paidBy === user.name
                    ? 'You paid'
                    : `Your share: ${formatCurrency(expense.yourShare)}`}
                </Badge>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      <div className="mt-8">
        <EmptyState
          icon={Receipt}
          title="More expenses will appear here"
          description="When you add expenses to any of your groups, they'll be listed here with full split details."
          actionLabel="Add Your First Expense"
          onAction={() => {}}
        />
      </div>
    </div>
  )
}
