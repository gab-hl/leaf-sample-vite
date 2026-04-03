import { Outlet, useNavigate } from 'react-router-dom'
import { FixedBar, Text, Tooltip, IconButton } from '@herbalifedev/leaf'

function TemplatesShellLayout() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-dvh w-full flex-1 flex-col ">
      <div className="flex min-h-0 w-full flex-1 flex-col overflow-y-auto">
        <Outlet />
      </div>
      <FixedBar className="hidden z-50">
        <div className="flex w-full min-w-0 items-center  gap-(--lf-spacing-4)">
        <Tooltip
            trigger={
              <IconButton
                icon="keyboard_arrow_left"
                size="medium"
                aria-label="Back to home"
                onClick={() => navigate('/')}
              />
            }
          >
            Back to home
          </Tooltip>
          <Text type="heading" size="xsmall">
            This is a preview.
          </Text>

        </div>
      </FixedBar>
    </div>
  )
}

export default TemplatesShellLayout
