/**
 * demo.js
 * Static placeholder data for SplitMate UI development.
 * Replace with real API data when the backend is integrated.
 */

export const demoUser = {
  id: 'u1',
  name: 'Alex Morgan',
  email: 'alex@example.com',
  avatarInitials: 'AM',
}

export const demoGroups = [
  {
    id: 'g1',
    name: 'Barcelona Trip 🇪🇸',
    members: 5,
    totalExpenses: 1840.0,
    yourBalance: -124.5,
    category: 'Travel',
    updatedAt: '2026-09-28T10:00:00Z',
  },
  {
    id: 'g2',
    name: 'Apartment — Downtown',
    members: 3,
    totalExpenses: 3200.0,
    yourBalance: 210.0,
    category: 'Home',
    updatedAt: '2026-09-30T08:30:00Z',
  },
  {
    id: 'g3',
    name: 'Friday Lunch Crew',
    members: 6,
    totalExpenses: 480.0,
    yourBalance: 35.0,
    category: 'Food',
    updatedAt: '2026-10-01T13:00:00Z',
  },
]

export const demoExpenses = [
  {
    id: 'e1',
    description: 'Hotel — Hotel Arts Barcelona',
    amount: 620.0,
    paidBy: 'Alex Morgan',
    group: 'Barcelona Trip 🇪🇸',
    date: '2026-09-25T18:00:00Z',
    splitBetween: 5,
    yourShare: 124.0,
  },
  {
    id: 'e2',
    description: 'October Rent',
    amount: 2400.0,
    paidBy: 'Jordan Lee',
    group: 'Apartment — Downtown',
    date: '2026-10-01T09:00:00Z',
    splitBetween: 3,
    yourShare: 800.0,
  },
  {
    id: 'e3',
    description: 'Groceries — Whole Foods',
    amount: 134.5,
    paidBy: 'Alex Morgan',
    group: 'Apartment — Downtown',
    date: '2026-10-01T14:30:00Z',
    splitBetween: 3,
    yourShare: 44.83,
  },
  {
    id: 'e4',
    description: 'Team lunch @ Nobu',
    amount: 210.0,
    paidBy: 'Sam Rivera',
    group: 'Friday Lunch Crew',
    date: '2026-09-27T12:30:00Z',
    splitBetween: 6,
    yourShare: 35.0,
  },
  {
    id: 'e5',
    description: 'Flights — BCN return',
    amount: 890.0,
    paidBy: 'Taylor Nguyen',
    group: 'Barcelona Trip 🇪🇸',
    date: '2026-09-20T07:00:00Z',
    splitBetween: 5,
    yourShare: 178.0,
  },
]

export const demoStats = {
  totalBalance: 120.5,
  youOwe: 302.5,
  youAreOwed: 423.0,
  activeGroups: 3,
}
