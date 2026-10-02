/**
 * MobileNav.jsx
 * Mobile navigation: bottom tab bar (≤ md) + slide-in drawer overlay.
 */

import {
  Clock,
  HandCoins,
  LayoutDashboard,
  Receipt,
  Users,
  X,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Logo from '../common/Logo'
import Avatar from '../ui/Avatar'
import useDemoStore from '../../store/useDemoStore'

const navItems = [
  { to: '/dashboard',   label: 'Home',        Icon: LayoutDashboard },
  { to: '/groups',      label: 'Groups',       Icon: Users },
  { to: '/expenses',    label: 'Expenses',     Icon: Receipt },
  { to: '/settlements', label: 'Settle',       Icon: HandCoins },
  { to: '/history',     label: 'History',      Icon: Clock },
]

/* ── Slide-in drawer (triggered by hamburger in TopBar) ── */
export function MobileDrawer({ open, onClose }) {
  const { user } = useDemoStore()

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={[
          'fixed top-0 left-0 h-full w-72 bg-[#1e1b4b] z-40 flex flex-col transition-transform duration-300 ease-in-out md:hidden',
          open ? 'translate-x-0' : '-translate-x-full',
        ].join(' ')}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
          <Logo variant="full" />
          <button
            onClick={onClose}
            aria-label="Close navigation"
            className="p-2 rounded-lg text-indigo-300 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                [
                  'flex items-center gap-3 rounded-xl px-4 py-3 transition-colors',
                  isActive
                    ? 'bg-white/15 text-white'
                    : 'text-indigo-300 hover:bg-white/10 hover:text-white',
                ].join(' ')
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={20} className={isActive ? 'text-white' : 'text-indigo-400'} />
                  <span className="text-sm font-medium">{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* User */}
        <div className="border-t border-white/10 px-4 py-4 flex items-center gap-3">
          <Avatar initials={user.avatarInitials} size="sm" />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white truncate">{user.name}</p>
            <p className="text-xs text-indigo-400 truncate">{user.email}</p>
          </div>
        </div>
      </div>
    </>
  )
}

/* ── Bottom tab bar ── */
export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 z-20 md:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-around px-2 h-16">
        {navItems.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              [
                'flex flex-col items-center gap-1 px-3 py-2 rounded-xl flex-1 text-center transition-colors',
                isActive ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600',
              ].join(' ')
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={20}
                  className={isActive ? 'text-indigo-600' : 'text-slate-400'}
                />
                <span className={[
                  'text-[10px] font-medium',
                  isActive ? 'text-indigo-600' : 'text-slate-400',
                ].join(' ')}>
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
