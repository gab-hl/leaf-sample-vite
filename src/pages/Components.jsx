import { useNavigate } from 'react-router-dom'
import { OutlinedButton, SimpleCard, Tag } from '@herbalifedev/leaf'
import DocPageLayout from '../layouts/DocPageLayout.jsx'

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

function Components() {
  const navigate = useNavigate()

  return (
    <DocPageLayout
      title="Components"
      description="Leaf UI building blocks grouped by role. Open a category to explore patterns and usage in context."
      actions={
        <>
          <OutlinedButton size="small">Open in Storybook</OutlinedButton>
          <OutlinedButton size="small">Open in Figma</OutlinedButton>
        </>
      }
    >
      <div className="p-(--lf-spacing-8) grid grid-cols-2 gap-(--lf-spacing-6) sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {COMPONENT_CARDS.map((card) => (
          <div key={card.title} className="relative min-w-0">
            {card.new ? (
              <div className="absolute right-(--lf-spacing-4) top-(--lf-spacing-4) z-10">
                <Tag label="New" severity="primary" />
              </div>
            ) : null}
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
    </DocPageLayout>
  )
}

export default Components
