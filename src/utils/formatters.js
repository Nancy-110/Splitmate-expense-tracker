/**
 * formatters.js
 * Utility functions for formatting currency and dates throughout SplitMate.
 */

/**
 * Format a number as a currency string.
 * @param {number} amount
 * @param {string} currency - ISO 4217 currency code (default: 'USD')
 * @returns {string}
 */
export function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

/**
 * Format a Date or ISO string as a short readable date.
 * @param {Date|string} date
 * @returns {string} e.g. "Oct 2, 2026"
 */
export function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}

/**
 * Format a Date or ISO string as a relative time string.
 * @param {Date|string} date
 * @returns {string} e.g. "2 days ago"
 */
export function formatRelativeTime(date) {
  const now = new Date()
  const then = new Date(date)
  const diffMs = now - then
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`
  return formatDate(date)
}
