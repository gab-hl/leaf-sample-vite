import { useNavigate } from 'react-router-dom'
import { OutlinedButton, SimpleCard, Tag } from '@herbalifedev/leaf'
import DocPageLayout from '../layouts/DocPageLayout.jsx'

const FOUNDATION_CARDS = [
  { title: 'Colors', count: 3, label: 'Variables' },
  { title: 'Spacing', count: 3, label: 'Variables' },
  { title: 'Typography', count: 3, label: 'Remutables' },
  { title: 'Blur', count: 3, label: 'Variables' },
  { title: 'Border Radius', count: 3, label: 'Variables' },
  { title: 'Shadows', count: 3, label: 'Variables' },
]

function Foundations() {
  const navigate = useNavigate()

  return (
    <DocPageLayout
      title="Foundations"
      description="Design tokens and primitives—colors, spacing, type, elevation, and shape—that everything else builds on."
      actions={
        <>
          <OutlinedButton size="small">Open in Storybook</OutlinedButton>
          <OutlinedButton size="small">Open in Figma</OutlinedButton>
        </>
      }
    >
      <div className="p-(--lf-spacing-8) grid grid-cols-2 gap-(--lf-spacing-6) sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {FOUNDATION_CARDS.map((card) => (
          <div key={card.title} className="relative min-w-0">
            {card.new ? (
              <div className="absolute right-(--lf-spacing-4) top-(--lf-spacing-4) z-10">
                <Tag label="New" severity="primary" />
              </div>
            ) : null}
            <SimpleCard
              title={card.title}
              description={`${card.count} ${card.label}`}
              icon="tri_leaf"
              appearance="bordered"
              clickable
              onClick={() => navigate('/product')}
            />
          </div>
        ))}
      </div>
    </DocPageLayout>
  )
}

export default Foundations
