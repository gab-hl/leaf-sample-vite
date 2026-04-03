import { Text } from '@herbalifedev/leaf'

/** Page title block: Leaf `Text` with default typography; layout/spacing uses tokens on the shell only. */
function PageHeading({ title, description, actions }) {
  return (
    <header className=" p-(--lf-spacing-8)">
      <div className="flex flex-col gap-(--lf-spacing-6) md:flex-row md:items-start md:justify-between">
        <div className="flex min-w-0 flex-col gap-(--lf-spacing-4)">
          <Text as="h1" type="heading" size="large">
            {title}
          </Text>
          {description ? (
            <Text as="p" type="paragraph" size="medium">
              {description}
            </Text>
          ) : null}
        </div>
        {actions ? (
          <div className="flex shrink-0 flex-wrap gap-(--lf-spacing-4)">{actions}</div>
        ) : null}
      </div>
    </header>
  )
}

export default PageHeading
