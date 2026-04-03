import PageHeading from '../components/PageHeading.jsx'

/**
 * Documentation index pages (Foundations, Components, Templates catalog).
 * Page heading is visually separated from body content below.
 */
function DocPageLayout({ title, description, actions, children }) {
  return (
    <div className="lf:mx-auto lf:box-border lf:flex lf:w-full lf:max-w-(--lf-container-7xl) lf:flex-col lf:rounded-(--lf-shape-card) lf:bg-(--lf-bg-1) lf:px-(--lf-spacing-6) lf:py-(--lf-spacing-10) md:lf:px-(--lf-spacing-12) md:lf:py-(--lf-spacing-16)">
      <PageHeading title={title} description={description} actions={actions} />
      <div className="lf:pt-(--lf-section-gap)">{children}</div>
    </div>
  )
}

export default DocPageLayout
