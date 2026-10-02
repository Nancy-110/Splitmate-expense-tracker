/**
 * useDemoStore.js
 * Zustand store for SplitMate demo state.
 * Seeded with static data from data/demo.js.
 * No API calls — replace with real async actions when the backend is ready.
 */

import { create } from 'zustand'
import { demoExpenses, demoGroups, demoStats, demoUser } from '../data/demo'

const useDemoStore = create((set) => ({
  // ── State ──
  user: demoUser,
  groups: demoGroups,
  expenses: demoExpenses,
  stats: demoStats,
  sidebarOpen: true,

  // ── Actions ──
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
}))

export default useDemoStore
