import { Header } from '@herbalifedev/leaf'
import { APP_NAV_ITEMS } from '../navigation/mainNav.js'
import { toAppHref } from '../utils/appPaths.js'

/** Top-of-shell navigation (Leaf `Header`). */
function GlobalHeader() {
  return (
    <div
      className="app-shell-global-header lf:shrink-0 lf:z-40 lf:w-full lf:border-b lf:border-(--lf-border-muted) lf:bg-(--lf-bg-1)"
      role="banner"
    >
      <Header>
        {APP_NAV_ITEMS.map((item) => (
          <Header.NavContent key={item.path} title={item.label} href={toAppHref(item.path)} />
        ))}
      </Header>
    </div>
  )
}

export default GlobalHeader
