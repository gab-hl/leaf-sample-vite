import { useNavigate } from 'react-router-dom'
import { Button, OutlinedButton, Text, Shortcut } from '@herbalifedev/leaf'
import PageHeading from '../components/PageHeading.jsx'

const WHATS_INSIDE_ITEMS = [
  'Foundations',
  'Components',
  'Templates',
  'Assets',
  'Changelog',
  'Support',
]

const WHATS_INSIDE_NAV = {
  Foundations: '/foundations',
  Components: '/components',
  Templates: '/templates',
}

function Home() {
  const navigate = useNavigate()

  const handleWhatsInsideClick = (item) => {
    const path = WHATS_INSIDE_NAV[item]
    if (path) {
      navigate(path)
      return
    }
    navigate('/product')
  }

  return (
    <div className="mx-auto max-w-(--lf-container-7xl) w-full box-border rounded-(--lf-shape-card) bg-(--lf-bg-1) px-8 py-12 md:px-12 md:py-16 flex flex-col gap-(--lf-section-gap)">
      <section className="flex flex-col border border-(--lf-border-muted) rounded-(--lf-shape-card) shadow-(--lf-shadow-xl) p-(--lf-spacing-6) md:p-(--lf-spacing-12)">
        <PageHeading
          title="Leaf Design System"
          description="Here you can find our design guidelines, component documentation, and resources for building apps with Herbalife. Use the header or What's Inside to open Foundations, Components, or Templates."
          actions={
            <>
              <Button>Getting Started</Button>
              <OutlinedButton>Explore</OutlinedButton>
            </>
          }
        />
      </section>

      <section id="section-whats-inside" className="flex flex-col gap-(--lf-gap-elements)">
        <Text type="heading" size="large">
          What&apos;s Inside
        </Text>
        <div className="grid grid-cols-2 gap-(--lf-spacing-4) md:grid-cols-3 lg:grid-cols-5">
          {WHATS_INSIDE_ITEMS.map((item) => (
            <Shortcut key={item} Title={item} IconName="arrow_upward_alt" onClick={() => handleWhatsInsideClick(item)} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
