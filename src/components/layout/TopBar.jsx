/**
 * TopBar.jsx
 * Top navigation bar — page-level context, search, notifications, user avatar.
 */

import { Bell, Menu, Plus, Search } from 'lucide-react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Avatar from '../ui/Avatar'
import Button from '../ui/Button'
import useDemoStore from '../../store/useDemoStore'

const pageTitles = {
  '/dashboard':   { title: 'Dashboard',    subtitle: 'Your financial overview' },
  '/groups':      { title: 'Groups',       subtitle: 'Manage your shared expense groups' },
  '/expenses':    { title: 'Expenses',     subtitle: 'All your expenses in one place' },
  '/settlements': { title: 'Settlements',  subtitle: 'Settle up with friends' },
  '/history':     { title: 'History',      subtitle: 'Review past transactions' },
}

export default function TopBar({ onMobileMenuToggle }) {
  const location = useLocation()
  const { user } = useDemoStore()
  const [notifOpen, setNotifOpen] = useState(false)

  const page = pageTitles[location.pathname] ?? { title: 'SplitMate', subtitle: '' }

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="flex items-center gap-3 px-4 md:px-6 h-16">
        {/* Mobile hamburger */}
        <button
          onClick={onMobileMenuToggle}
          aria-label="Open navigation"
          className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <Menu size={20} />
        </button>

        {/* Page title (desktop) */}
        <div className="hidden md:block flex-1">
          <h2 className="text-base font-semibold text-slate-900 leading-tight">{page.title}</h2>
          <p className="text-xs text-slate-400">{page.subtitle}</p>
        </div>

        {/* Search bar */}
        <div className="flex-1 md:flex-none md:w-64">
          <div className="relative">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="search"
              placeholder="Search expenses, groups…"
              aria-label="Search"
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Add expense button (desktop) */}
        <Button size="sm" className="hidden md:inline-flex">
          <Plus size={15} />
          Add Expense
        </Button>

        {/* Notification bell */}
        <div className="relative">
          <button
            onClick={() => setNotifOpen((v) => !v)}
            aria-label="Notifications"
            className="relative p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <Bell size={19} />
            {/* Unread dot */}
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full ring-2 ring-white" />
          </button>

          {/* Notification dropdown */}
          {notifOpen && (
            <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 z-50 overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-100">
                <p className="text-sm font-semibold text-slate-800">Notifications</p>
              </div>
              <div className="p-4 text-sm text-slate-500 text-center py-8">
                No new notifications
              </div>
            </div>
          )}
        </div>

        {/* User avatar */}
        <Avatar
          initials={user.avatarInitials}
          size="sm"
          className="ring-2 ring-indigo-100 cursor-pointer"
        />
      </div>
    </header>
  )
}
