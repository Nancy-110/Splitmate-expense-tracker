/**
 * App.jsx — Root router configuration for SplitMate.
 *
 * Routes:
 *   /               → Landing (public, no AppLayout)
 *   /dashboard      → Dashboard (inside AppLayout)
 *   /groups         → Groups (inside AppLayout)
 *   /expenses       → Expenses (inside AppLayout)
 *   /settlements    → Settlements (inside AppLayout)
 *   /history        → History (inside AppLayout)
 */

import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Dashboard from './pages/Dashboard'
import Expenses from './pages/Expenses'
import Groups from './pages/Groups'
import History from './pages/History'
import Landing from './pages/Landing'
import Settlements from './pages/Settlements'

export default function App() {
  return (
    <Routes>
      {/* Public landing page — no app shell */}
      <Route path="/" element={<Landing />} />

      {/* Authenticated app shell */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard"   element={<Dashboard />} />
        <Route path="/groups"      element={<Groups />} />
        <Route path="/expenses"    element={<Expenses />} />
        <Route path="/settlements" element={<Settlements />} />
        <Route path="/history"     element={<History />} />
      </Route>

      {/* Fallback — redirect unknown routes to landing */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
