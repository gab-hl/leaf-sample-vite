/** Vite `base` with trailing slash (`/` or `/leaf-sample-vite/`). */
export const APP_BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`

/**
 * Absolute path for `<a href>` (Leaf Menu uses anchors). Hash fragments unchanged.
 * @param {string} path Route path like `/` or `/foundations`
 */
export function toAppHref(path) {
  if (path.startsWith('#')) return path
  const rel = path === '/' ? '' : path.replace(/^\//, '')
  return `${APP_BASE}${rel}`.replace(/\/{2,}/g, '/')
}

/**
 * Browser `pathname` with app base removed for comparison to route paths.
 * @param {string} pathname e.g. `location.pathname`
 */
export function stripAppBase(pathname) {
  const base = APP_BASE.replace(/\/$/, '')
  if (!base) return pathname
  if (pathname === base || pathname === `${base}/`) return '/'
  if (pathname.startsWith(`${base}/`)) return pathname.slice(base.length) || '/'
  return pathname
}
