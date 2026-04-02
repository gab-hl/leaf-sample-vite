import { Link, Outlet, useLocation } from 'react-router-dom'
import { OutlinedButton } from '@herbalifedev/leaf'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Login', href: '/login' },
  { label: 'Cart', href: '/cart' },
  { label: 'Product', href: '/product' },
  { label: 'Checkout', href: '/checkout' },
  { label: 'Foundations', href: '#' },
  { label: 'Components', href: '#' },
  { label: 'Templates', href: '#' },
  { label: 'Assets', href: '#' },
  { label: 'Changelog', href: '#' },
  { label: 'Support', href: '#' },
]

function AppShellLayout() {
  const location = useLocation()

  return (
    <div className="lf:relative lf:min-h-screen lf:bg-(--lf-bg-1)">
      <aside
        aria-label="Main navigation"
        className="lf:fixed lf:inset-y-0 lf:left-0 lf:z-30 lf:flex lf:h-screen lf:w-[var(--app-nav-width)] lf:shrink-0 lf:flex-col lf:overflow-y-auto lf:border-r lf:border-(--lf-border-muted) lf:bg-(--lf-bg-1)"
      >
        <div className="lf:p-6 lf:pb-4" />
        <nav className="lf:flex-1 lf:flex lf:flex-col lf:px-4 lf:pb-2">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href.startsWith('/') && location.pathname === item.href
            const navClass = `lf:px-4 lf:py-3 lf:rounded-lg lf:text-base lf:font-medium lf:transition-colors lf:mb-1 ${
              isActive
                ? 'lf:bg-(--lf-bg-selected) lf:text-(--lf-primary-color)'
                : 'lf:text-(--lf-paragraph-color) lf:hover:bg-(--lf-bg-hover)'
            }`
            return item.href.startsWith('/') ? (
              <Link key={item.label} to={item.href} className={navClass}>
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className={navClass}>
                {item.label}
              </a>
            )
          })}
        </nav>
        <div className="lf:p-4 lf:pt-0">
          <OutlinedButton className="lf:w-full">
            Configure your Sample
          </OutlinedButton>
        </div>
      </aside>

      <main className="lf:ml-[var(--app-nav-width)] lf:min-h-screen lf:min-w-0 lf:overflow-x-auto lf:bg-(--lf-bg-2)">
        <Outlet />
      </main>
    </div>
  )
}

export default AppShellLayout
