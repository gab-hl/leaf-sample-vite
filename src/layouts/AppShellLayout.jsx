import { Outlet, useLocation } from 'react-router-dom'
import { Menu, Brand } from '@herbalifedev/leaf'

const NAV_ITEMS = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Login', href: '/login', icon: 'person' },
  { label: 'Cart', href: '/cart', icon: 'local_mall' },
  { label: 'Product', href: '/product', icon: 'storefront' },
  { label: 'Checkout', href: '/checkout', icon: 'credit_card' },
  { label: 'Foundations', href: '#foundations', icon: 'tri_leaf' },
  { label: 'Components', href: '#components', icon: 'grid_view' },
  { label: 'Templates', href: '#templates', icon: 'article' },
  { label: 'Assets', href: '#assets', icon: 'package2' },
  { label: 'Changelog', href: '#changelog', icon: 'new_releases' },
  { label: 'Support', href: '#support', icon: 'forum' },
]

function AppShellLayout() {
  const location = useLocation()
  const menuItems = NAV_ITEMS.map((item) => ({
    label: item.label,
    href: item.href,
    icon: item.icon,
    selected: item.href.startsWith('/') && location.pathname === item.href,
  }))

  return (
    <div className="relative min-h-screen lf:bg-(--lf-bg-1)">
      <aside className="app-shell-aside flex h-screen shrink-0 flex-col overflow-y-auto lf:border-r lf:border-(--lf-border-muted) lf:bg-(--lf-bg-2)">
        <nav
          aria-label="Main navigation"
          className="flex flex-col gap-(--lf-spacing-8) p-(--lf-spacing-6)"
        >
          <Brand brand="herbalife" size="xsmall" type="extended" color="base" />
          <Menu items={menuItems} />
        </nav>
        {/* <div className="mt-auto p-(--lf-spacing-6)">
          <OutlinedButton size="small">Themes</OutlinedButton>
        </div> */}
      </aside>

      <main className="app-shell-main lf:overflow-x-auto lf:bg-(--lf-bg-2) p-(--lf-spacing-4)">
        <Outlet />
      </main>
    </div>
  )
}

export default AppShellLayout
