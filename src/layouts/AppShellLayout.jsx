import { Outlet, useMatch } from 'react-router-dom'
import GlobalHeader from './GlobalHeader.jsx'

function AppShellLayout() {
  const templateLive = useMatch({ path: 'templates/:example', end: true })

  return (
    <div className="relative flex min-h-screen flex-col bg-(--lf-bg-1)">
      {templateLive ? null : <GlobalHeader />}
      <div
        className={`min-h-0 min-w-0 flex-1 overflow-x-auto bg-(--lf-bg-2)${templateLive ? '' : ' mt-(--lf-spacing-20) p-(--lf-spacing-10)'}`}
      >
        <Outlet />
      </div>
    </div>
  )
}

export default AppShellLayout
