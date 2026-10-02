/**
 * Sidebar.jsx
 * Fixed deep-indigo sidebar for desktop/tablet navigation.
 * Collapses to icon-only at md breakpoint via sidebarOpen state from Zustand.
 */

import {
  ChevronLeft,
  ChevronRight,
  Clock,
  HandCoins,
  LayoutDashboard,
  Receipt,
  Users,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Logo from '../common/Logo'
import Avatar from '../ui/Avatar'
import useDemoStore from '../../store/useDemoStore'

const navItems = [
  { to: '/dashboard',   label: 'Dashboard',   Icon: LayoutDashboard },
  { to: '/groups',      label: 'Groups',       Icon: Users },
  { to: '/expenses',    label: 'Expenses',     Icon: Receipt },
  { to: '/settlements', label: 'Settlements',  Icon: HandCoins },
  { to: '/history',     label: 'History',      Icon: Clock },
]

export default function Sidebar() {
  const { user, sidebarOpen, toggleSidebar } = useDemoStore()

  return (
    <aside
      className={[
        'hidden md:flex flex-col h-screen sticky top-0 bg-[#1e1b4b] transition-all duration-300 ease-in-out flex-shrink-0 overflow-hidden',
        sidebarOpen ? 'w-64' : 'w-[72px]',
      ].join(' ')}
    >
      {/* ── Logo ── */}
      <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
        {sidebarOpen && <Logo variant="full" />}
        {!sidebarOpen && <Logo variant="icon" className="mx-auto" />}
      </div>

      {/* ── Nav ── */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto overflow-x-hidden">
        {navItems.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            title={!sidebarOpen ? label : undefined}
            className={({ isActive }) =>
              [
                'flex items-center rounded-xl px-3 py-2.5 transition-colors duration-150 group',
                isActive
                  ? 'bg-white/15 text-white'
                  : 'text-indigo-300 hover:bg-white/10 hover:text-white',
                !sidebarOpen ? 'justify-center' : 'gap-3',
              ].join(' ')
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={20}
                  className={[
                    'flex-shrink-0 transition-colors',
                    isActive ? 'text-white' : 'text-indigo-400 group-hover:text-white',
                  ].join(' ')}
                />
                {sidebarOpen && (
                  <span className="text-sm font-medium truncate">{label}</span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* ── Toggle button ── */}
      <button
        onClick={toggleSidebar}
        aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        className="flex items-center justify-center mx-3 mb-3 rounded-xl px-3 py-2.5 text-indigo-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
      >
        {sidebarOpen ? (
          <>
            <ChevronLeft size={18} />
            <span className="ml-2 text-sm font-medium">Collapse</span>
          </>
        ) : (
          <ChevronRight size={18} />
        )}
      </button>

      {/* ── User profile ── */}
      <div className={[
        'border-t border-white/10 px-3 py-4 flex items-center',
        sidebarOpen ? 'gap-3' : 'justify-center',
      ].join(' ')}>
        <Avatar initials={user.avatarInitials} size="sm" className="flex-shrink-0" />
        {sidebarOpen && (
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white truncate">{user.name}</p>
            <p className="text-xs text-indigo-400 truncate">{user.email}</p>
          </div>
        )}
      </div>
    </aside>
  )
}
