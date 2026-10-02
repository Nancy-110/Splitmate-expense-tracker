/**
 * Dashboard.jsx
 * Main dashboard view — stats overview, recent expenses, and group summary.
 * Uses static demo data; no API calls yet.
 */

import {
  ArrowRight,
  ArrowUpRight,
  HandCoins,
  Plus,
  Receipt,
  TrendingDown,
  TrendingUp,
  Users,
  Wallet,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/common/PageHeader'
import StatCard from '../components/common/StatCard'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import useDemoStore from '../store/useDemoStore'
import { formatCurrency, formatRelativeTime } from '../utils/formatters'

export default function Dashboard() {
  const { stats, expenses, groups, user } = useDemoStore()

  const recentExpenses = expenses.slice(0, 5)
  const recentGroups = groups.slice(0, 3)

  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader
        title={`Welcome back, ${user.name.split(' ')[0]} 👋`}
        subtitle="Here's your financial snapshot for this month."
        action={
          <Button size="sm">
            <Plus size={15} />
            Add Expense
          </Button>
        }
      />

      {/* ── Stat cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Net Balance"
          value={formatCurrency(stats.totalBalance)}
          icon={Wallet}
          iconBg="bg-indigo-100"
          iconColor="text-indigo-600"
          trend="12%"
          trendPositive={true}
          subtext="Compared to last month"
        />
        <StatCard
          label="You Owe"
          value={formatCurrency(stats.youOwe)}
          icon={TrendingDown}
          iconBg="bg-red-100"
          iconColor="text-red-500"
          subtext="Across 2 groups"
        />
        <StatCard
          label="You Are Owed"
          value={formatCurrency(stats.youAreOwed)}
          icon={TrendingUp}
          iconBg="bg-emerald-100"
          iconColor="text-emerald-600"
          subtext="From 3 people"
        />
        <StatCard
          label="Active Groups"
          value={stats.activeGroups}
          icon={Users}
          iconBg="bg-violet-100"
          iconColor="text-violet-600"
          subtext="3 with recent activity"
        />
      </div>

      {/* ── Two-column layout: expenses + groups ── */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">

        {/* ── Recent Expenses ── */}
        <div className="xl:col-span-3">
          <Card>
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <div>
                <h2 className="text-sm font-semibold text-slate-800">Recent Expenses</h2>
                <p className="text-xs text-slate-400 mt-0.5">Your latest shared expenses</p>
              </div>
              <Link to="/expenses">
                <Button variant="ghost" size="sm">
                  View all
                  <ArrowRight size={13} />
                </Button>
              </Link>
            </div>

            <ul className="divide-y divide-slate-50">
              {recentExpenses.map((expense) => (
                <li
                  key={expense.id}
                  className="flex items-center gap-4 px-5 py-3.5 hover:bg-slate-50 transition-colors"
                >
                  {/* Icon */}
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                    <Receipt size={16} className="text-indigo-500" />
                  </div>

                  {/* Description */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 truncate">
                      {expense.description}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {expense.group} · {formatRelativeTime(expense.date)}
                    </p>
                  </div>

                  {/* Amount + share */}
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-semibold text-slate-800">
                      {formatCurrency(expense.amount)}
                    </p>
                    <p className="text-xs mt-0.5">
                      {expense.paidBy === user.name ? (
                        <span className="text-emerald-600 font-medium">you paid</span>
                      ) : (
                        <span className="text-red-500 font-medium">
                          your share: {formatCurrency(expense.yourShare)}
                        </span>
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* ── Your Groups ── */}
        <div className="xl:col-span-2">
          <Card>
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <div>
                <h2 className="text-sm font-semibold text-slate-800">Your Groups</h2>
                <p className="text-xs text-slate-400 mt-0.5">Recently active</p>
              </div>
              <Link to="/groups">
                <Button variant="ghost" size="sm">
                  View all
                  <ArrowRight size={13} />
                </Button>
              </Link>
            </div>

            <ul className="divide-y divide-slate-50">
              {recentGroups.map((group) => (
                <li
                  key={group.id}
                  className="flex items-center gap-3 px-5 py-3.5 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  {/* Group icon */}
                  <div className="w-9 h-9 rounded-xl bg-violet-50 flex items-center justify-center flex-shrink-0">
                    <Users size={16} className="text-violet-500" />
                  </div>

                  {/* Name + members */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 truncate">{group.name}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{group.members} members</p>
                  </div>

                  {/* Balance */}
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <Badge variant={group.yourBalance >= 0 ? 'success' : 'danger'}>
                      {group.yourBalance >= 0
                        ? `+${formatCurrency(group.yourBalance)}`
                        : formatCurrency(group.yourBalance)}
                    </Badge>
                    <ArrowUpRight size={12} className="text-slate-300" />
                  </div>
                </li>
              ))}
            </ul>

            {/* Quick summary */}
            <div className="px-5 py-4 mt-1 bg-indigo-50 rounded-b-2xl border-t border-indigo-100">
              <div className="flex items-center gap-2 mb-2">
                <HandCoins size={14} className="text-indigo-500" />
                <p className="text-xs font-semibold text-indigo-700">Overall balance</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-indigo-500">You owe</p>
                  <p className="text-sm font-bold text-red-500">{formatCurrency(stats.youOwe)}</p>
                </div>
                <div className="w-px h-8 bg-indigo-200" />
                <div>
                  <p className="text-xs text-indigo-500">You are owed</p>
                  <p className="text-sm font-bold text-emerald-600">{formatCurrency(stats.youAreOwed)}</p>
                </div>
                <div className="w-px h-8 bg-indigo-200" />
                <div>
                  <p className="text-xs text-indigo-500">Net</p>
                  <p className={['text-sm font-bold', stats.totalBalance >= 0 ? 'text-emerald-600' : 'text-red-500'].join(' ')}>
                    {formatCurrency(stats.totalBalance)}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
