import { useNavigate } from 'react-router-dom'
import { SimpleCard } from '@herbalifedev/leaf'
import DocPageLayout from '../layouts/DocPageLayout.jsx'

const TEMPLATE_CARDS = [
  {
    title: 'Login',
    description: 'Credential sign-in with branded hero background',
    icon: 'person',
    path: '/templates/login',
  },
  {
    title: 'Cart',
    description: 'Line items, subtotal, and checkout handoff',
    icon: 'local_mall',
    path: '/templates/cart',
  },
  {
    title: 'Checkout',
    description: 'Shipping, payment methods, and order summary',
    icon: 'credit_card',
    path: '/templates/checkout',
  },
  {
    title: 'Form',
    description: 'Loyalty-style profile, selects, checkboxes, and actions',
    icon: 'edit',
    path: '/templates/form',
  },
]

function Templates() {
  const navigate = useNavigate()

  return (
    <DocPageLayout
      title="Templates"
      description="Sample full-screen layouts built with Leaf. Open a card to launch the live example; use the bar at the bottom there to return home."
    >
      <div className="p-(--lf-spacing-8) grid grid-cols-1 gap-(--lf-spacing-6) sm:grid-cols-2 lg:grid-cols-3">
        {TEMPLATE_CARDS.map((card) => (
          <SimpleCard
            key={card.path}
            title={card.title}
            description={card.description}
            icon={card.icon}
            appearance="bordered"
            clickable
            onClick={() => navigate(card.path)}
          />
        ))}
      </div>
    </DocPageLayout>
  )
}

export default Templates
