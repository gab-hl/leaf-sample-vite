import { useNavigate } from 'react-router-dom'
import {
  Button,
  OutlinedButton,
  Text,
  Shortcut,
  SimpleCard,
  Tag,
} from '@herbalifedev/leaf'

const WHATS_INSIDE_ITEMS = [
  'Foundations',
  'Components',
  'Assets',
  'Changelog',
  'Support',
]

const COMPONENT_CARDS = [
  { title: 'Actions', count: 4, new: true },
  { title: 'Overlays', count: 4 },
  { title: 'Content', count: 4 },
  { title: 'Inputs', count: 4, new: true },
  { title: 'Navigation', count: 4, new: true },
  { title: 'Typography', count: 4 },
  { title: 'Feedback', count: 4 },
  { title: 'Media', count: 4 },
  { title: 'Illustrations', count: 4 },
]

const FOUNDATION_CARDS = [
  { title: 'Colors', count: 3, label: 'Variables' },
  { title: 'Spacing', count: 3, label: 'Variables' },
  { title: 'Typography', count: 3, label: 'Remutables' },
  { title: 'Blur', count: 3, label: 'Variables' },
  { title: 'Border Radius', count: 3, label: 'Variables' },
  { title: 'Shadows', count: 3, label: 'Variables' },
]

const WHATS_INSIDE_TARGETS = {
  Foundations: 'section-foundations',
  Components: 'section-components',
}

function Home() {
  const navigate = useNavigate()

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleWhatsInsideClick = (item) => {
    const id = WHATS_INSIDE_TARGETS[item]
    if (id) scrollToSection(id)
    else navigate('/product')
  }

  return (
    <div className="max-w-(--lf-container-7xl) mx-auto bg-(--lf-bg-1) rounded-(--lf-shape-card) w-full box-border px-8 py-12 md:px-12 flex flex-col gap-(--lf-section-gap) md:py-16">
      <section className="flex flex-col lg:flex-row lg:items-start lg:justify-between border border-(--lf-border-muted) lf:rounded-(--lf-shape-card) shadow-(--lf-shadow-xl) p-(--lf-spacing-6) md:p-(--lf-spacing-12)">
        <div className="flex flex-col gap-(--lf-gap-elements) max-w-(--lf-max-w-ml)">
          <Text
            type="heading"
            size="xlarge"
            className="lf:text-(--lf-heading-color)"
          >
            Leaf Design System
          </Text>
          <div className="flex flex-col gap-(--lf-spacing-6)">
            <Text
              type="paragraph"
              size="medium"
              className="lf:text-(--lf-description-color)"
            >
              Here you can find our design guidelines, component documentation,
              and resources for building apps with Herbalife.
            </Text>
            <div className="flex gap-(--lf-spacing-4)">
              <Button>Getting Started</Button>
              <OutlinedButton>Explore</OutlinedButton>
            </div>
          </div>
        </div>
      </section>

      <section id="section-whats-inside" className="flex flex-col gap-(--lf-gap-elements)">
        <Text
          type="heading"
          size="large"
          className="lf:text-(--lf-heading-color)"
        >
          What&apos;s Inside
        </Text>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-(--lf-spacing-4)">
          {WHATS_INSIDE_ITEMS.map((item) => (
            <Shortcut
              key={item}
              Title={item}
              IconName="arrow_upward_alt"
              onClick={() => handleWhatsInsideClick(item)}
            />
          ))}
        </div>
      </section>

      <section id="section-components" className="flex flex-col gap-(--lf-gap-elements)">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-(--lf-spacing-4)">
          <Text
            type="heading"
            size="large"
            className="lf:text-(--lf-heading-color)"
          >
            Components
          </Text>
          <div className="flex gap-(--lf-spacing-4)">
            <OutlinedButton size="small">Open in Storybook</OutlinedButton>
            <OutlinedButton size="small">Open in Figma</OutlinedButton>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-(--lf-spacing-6)">
          {COMPONENT_CARDS.map((card) => (
            <div key={card.title} className="relative">
              {card.new && (
                <div className="absolute top-(--lf-spacing-4) right-(--lf-spacing-4) z-10">
                  <Tag label="New" severity="primary" />
                </div>
              )}
              <SimpleCard
                title={card.title}
                description={`${card.count} Components`}
                icon="grid_view"
                appearance="bordered"
                clickable
                onClick={() => navigate('/product')}
              />
            </div>
          ))}
        </div>
      </section>

      <section id="section-foundations" className="flex flex-col gap-(--lf-gap-elements)">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-(--lf-spacing-4)">
          <Text
            type="heading"
            size="large"
            className="lf:text-(--lf-heading-color)"
          >
            Foundations
          </Text>
          <div className="flex gap-(--lf-spacing-4)">
            <OutlinedButton size="small">Open in Storybook</OutlinedButton>
            <OutlinedButton size="small">Open in Figma</OutlinedButton>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-(--lf-spacing-6)">
          {FOUNDATION_CARDS.map((card) => (
            <SimpleCard
              key={card.title}
              title={card.title}
              description={`${card.count} ${card.label}`}
              icon="tri_leaf"
              appearance="bordered"
              clickable
              onClick={() => navigate('/product')}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
