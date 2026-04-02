import {
  Button,
  OutlinedButton,
  Text,
  InputText,
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

function Home() {
  return (
    <div className="lf:mx-auto lf:w-full lf:max-w-7xl lf:box-border lf:px-8 lf:py-12 lf:md:px-12 lf:md:py-16">
      <section className="lf:flex lf:flex-col lf:lg:flex-row lf:items-start lf:justify-between lf:gap-12 lf:mb-24">
        <div className="lf:flex-1 lf:max-w-2xl">
          <Text
            type="heading"
            size="xlarge"
            className="lf:text-(--lf-heading-color) lf:mb-4"
          >
            Leaf Design System
          </Text>
          <Text
            type="paragraph"
            size="medium"
            className="lf:text-(--lf-description-color) lf:mb-8"
          >
            Here you can find our design guidelines, component documentation,
            and resources for building apps with Herbalife.
          </Text>
          <div className="lf:flex lf:gap-4">
            <Button>Getting Started</Button>
            <OutlinedButton>Explore</OutlinedButton>
          </div>
        </div>
        <div className="lf:w-full lf:lg:w-80 lf:shrink-0 lf:bg-(--lf-bg-selected) lf:rounded-(--lf-shape-card) lf:p-6 lf:border lf:border-(--lf-border-muted)">
          <div className="lf:flex lf:flex-col lf:gap-4">
            <div className="lf:flex lf:gap-4 lf:items-center" />

            <InputText label="Label" content="" onChange={() => {}} />
            <InputText
              label="Placeholder"
              content=""
              placeholder="Enter text"
              onChange={() => {}}
            />
            <div className="lf:grid lf:grid-cols-2 lf:gap-2">
              <div className="lf:h-12 lf:rounded-lg lf:bg-(--lf-primary-lighter)" />
              <div className="lf:h-12 lf:rounded-lg lf:bg-(--lf-bg-2)" />
              <div className="lf:h-12 lf:rounded-lg lf:bg-(--lf-bg-2)" />
              <div className="lf:h-12 lf:rounded-lg lf:bg-(--lf-primary-lighter)" />
            </div>
          </div>
        </div>
      </section>

      <section className="lf:mb-24">
        <Text
          type="heading"
          size="large"
          className="lf:text-(--lf-heading-color) lf:mb-8"
        >
          What&apos;s Inside
        </Text>
        <div className="lf:grid lf:grid-cols-2 lf:md:grid-cols-3 lf:lg:grid-cols-5 lf:gap-4">
          {WHATS_INSIDE_ITEMS.map((item) => (
            <SimpleCard
              key={item}
              title={item}
              icon="arrow_upward_alt"
              appearance="container"
              alignCenter
            />
          ))}
        </div>
      </section>

      <section className="lf:mb-24">
        <div className="lf:flex lf:flex-col lf:md:flex-row lf:md:items-center lf:md:justify-between lf:gap-4 lf:mb-8">
          <Text
            type="heading"
            size="large"
            className="lf:text-(--lf-heading-color)"
          >
            Components
          </Text>
          <div className="lf:flex lf:gap-3">
            <OutlinedButton size="small">Open in Storybook</OutlinedButton>
            <OutlinedButton size="small">Open in Figma</OutlinedButton>
          </div>
        </div>
        <div className="lf:grid lf:grid-cols-2 lf:lg:grid-cols-3 lf:gap-6">
          {COMPONENT_CARDS.map((card) => (
            <div key={card.title} className="lf:relative">
              {card.new && (
                <div className="lf:absolute lf:top-3 lf:right-3 lf:z-10">
                  <Tag label="New" severity="primary" />
                </div>
              )}
              <SimpleCard
                title={card.title}
                description={`${card.count} Components`}
                icon="grid_view"
                appearance="bordered"
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="lf:flex lf:flex-col lf:md:flex-row lf:md:items-center lf:md:justify-between lf:gap-4 lf:mb-8">
          <Text
            type="heading"
            size="large"
            className="lf:text-(--lf-heading-color)"
          >
            Foundations
          </Text>
          <div className="lf:flex lf:gap-3">
            <OutlinedButton size="small">Open in Storybook</OutlinedButton>
            <OutlinedButton size="small">Open in Figma</OutlinedButton>
          </div>
        </div>
        <div className="lf:grid lf:grid-cols-2 lf:lg:grid-cols-3 lf:gap-6">
          {FOUNDATION_CARDS.map((card) => (
            <SimpleCard
              key={card.title}
              title={card.title}
              description={`${card.count} ${card.label}`}
              icon="tri_leaf"
              appearance="bordered"
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
