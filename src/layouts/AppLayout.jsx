/**
 * AppLayout.jsx
 * The authenticated app shell: sidebar (desktop) + topbar + content area + mobile nav.
 * All inner pages are rendered as children via React Router's <Outlet />.
 */

import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MobileNav, { MobileDrawer } from '../components/layout/MobileNav'
import Sidebar from '../components/layout/Sidebar'
import TopBar from '../components/layout/TopBar'

export default function AppLayout() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* ── Desktop sidebar ── */}
      <Sidebar />

      {/* ── Mobile drawer ── */}
      <MobileDrawer
        open={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
      />

      {/* ── Main area ── */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar onMobileMenuToggle={() => setMobileDrawerOpen(true)} />

        {/* Scrollable page content */}
        <main
          id="main-content"
          className="flex-1 overflow-y-auto px-4 py-6 md:px-6 md:py-8 pb-24 md:pb-8"
        >
          <Outlet />
        </main>
      </div>

      {/* ── Mobile bottom nav ── */}
      <MobileNav />
    </div>
  )
}
