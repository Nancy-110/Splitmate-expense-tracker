/**
 * Landing.jsx
 * Public landing page for SplitMate.
 * No authentication — "Get Started" and "Log in" both navigate to /dashboard for now.
 */

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  HandCoins,
  Receipt,
  Shield,
  Users,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const features = [
  {
    icon: Users,
    title: 'Create Groups Instantly',
    description:
      'Organize expenses by trip, household, or event. Add friends in seconds and start splitting right away.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Receipt,
    title: 'Track Every Expense',
    description:
      'Log expenses with categories, notes, and receipts. SplitMate keeps a clear record so nobody forgets.',
    color: 'bg-violet-100 text-violet-600',
  },
  {
    icon: HandCoins,
    title: 'Settle Up Easily',
    description:
      'See who owes what at a glance. Smart settlement suggestions minimize the number of transactions.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: BarChart3,
    title: 'Visual Spending Insights',
    description:
      'Beautiful charts that show your spending patterns, category breakdowns, and group trends over time.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Shield,
    title: 'Transparent & Honest',
    description:
      'Every calculation is visible and verifiable. No hidden fees, no opaque math — just clear, fair splits.',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Add an expense in under 10 seconds. SplitMate is designed for real life — quick, simple, and reliable.',
    color: 'bg-sky-100 text-sky-600',
  },
]

const socialProof = [
  'No credit card required',
  'Free forever for personal use',
  'Works across all devices',
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo wordmark */}
          <div className="flex items-center gap-2.5 select-none">
            <div className="w-8 h-8 flex-shrink-0">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
                <circle cx="16" cy="16" r="15" fill="#6366f1" />
                <line x1="16" y1="4" x2="16" y2="28" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M8 13 C8 10 11 9 13.5 10 C15 10.5 15.5 11.5 15.5 13 C15.5 15 13.5 16 11.5 16.5 C9.5 17 8 18 8 20 C8 22 10 23 13 23 C14.5 23 15.5 22.5 15.5 22" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                <path d="M20 12 L24 16 L20 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              Split<span className="text-indigo-600">Mate</span>
            </span>
          </div>

          {/* Nav actions */}
          <div className="flex items-center gap-3">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link to="/dashboard">
              <Button size="sm">
                Get Started
                <ArrowRight size={14} />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-20 pb-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-indigo-100">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
          Now in open beta — join for free
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] max-w-3xl mb-6">
          Split expenses.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
            Stay friends.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-slate-500 max-w-xl leading-relaxed mb-10">
          SplitMate makes it effortless to track shared expenses, split bills fairly,
          and settle up with the people you share life with.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-10">
          <Link to="/dashboard">
            <Button size="lg">
              Get Started — It&apos;s Free
              <ArrowRight size={18} />
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="secondary" size="lg">
              View Dashboard
            </Button>
          </Link>
        </div>

        {/* Social proof */}
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {socialProof.map((item) => (
            <li key={item} className="flex items-center gap-1.5 text-sm text-slate-500">
              <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Hero visual — stylised dashboard preview */}
        <div className="mt-16 w-full max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-indigo-100">
            {/* Fake browser chrome */}
            <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-slate-400 border border-slate-200">
                splitmate.app/dashboard
              </div>
            </div>

            {/* Dashboard preview mockup */}
            <div className="bg-slate-50 flex" style={{ minHeight: 320 }}>
              {/* Fake sidebar */}
              <div className="hidden sm:flex w-48 bg-[#1e1b4b] flex-col p-3 gap-2">
                <div className="flex items-center gap-2 px-2 py-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-indigo-500" />
                  <div className="w-16 h-3 bg-indigo-300/40 rounded-full" />
                </div>
                {['Dashboard','Groups','Expenses','Settlements','History'].map((item, i) => (
                  <div
                    key={item}
                    className={['flex items-center gap-2 rounded-lg px-3 py-2', i === 0 ? 'bg-white/15' : ''].join(' ')}
                  >
                    <div className={['w-4 h-4 rounded', i === 0 ? 'bg-indigo-300' : 'bg-white/20'].join(' ')} />
                    <div className={['h-2.5 rounded-full', i === 0 ? 'w-16 bg-white/80' : 'w-12 bg-white/30'].join(' ')} />
                  </div>
                ))}
              </div>

              {/* Fake content */}
              <div className="flex-1 p-5">
                <div className="h-5 w-32 bg-slate-200 rounded-full mb-4" />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  {['bg-indigo-100','bg-emerald-100','bg-red-100','bg-amber-100'].map((bg, i) => (
                    <div key={i} className={['rounded-xl p-3', bg].join(' ')}>
                      <div className="w-6 h-6 rounded-lg bg-white/60 mb-2" />
                      <div className="h-2 w-12 bg-white/70 rounded-full mb-1" />
                      <div className="h-4 w-16 bg-white/80 rounded-full" />
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-100">
                  <div className="h-3 w-28 bg-slate-200 rounded-full mb-3" />
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-slate-50 last:border-0">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="h-2.5 w-28 bg-slate-200 rounded-full mb-1" />
                        <div className="h-2 w-16 bg-slate-100 rounded-full" />
                      </div>
                      <div className="h-3 w-12 bg-emerald-100 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -bottom-8 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"
          />
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-20 px-4 sm:px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Everything you need to split bills
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Powerful features wrapped in a simple, beautiful interface.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, description, color }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-200"
              >
                <div className={['w-11 h-11 rounded-xl flex items-center justify-center mb-4', color].join(' ')}>
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-indigo-600 to-violet-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Ready to start splitting?
          </h2>
          <p className="text-indigo-200 text-lg mb-8">
            Join thousands of people who manage shared expenses with SplitMate.
          </p>
          <Link to="/dashboard">
            <Button
              size="lg"
              className="bg-white text-indigo-700 hover:bg-indigo-50 shadow-xl"
            >
              Open the Dashboard
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 px-4 sm:px-6 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 select-none">
            <div className="w-6 h-6">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="16" cy="16" r="15" fill="#6366f1" />
                <line x1="16" y1="4" x2="16" y2="28" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-bold text-sm text-slate-700">
              Split<span className="text-indigo-600">Mate</span>
            </span>
          </div>
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} SplitMate. Built as a portfolio project.
          </p>
        </div>
      </footer>
    </div>
  )
}
