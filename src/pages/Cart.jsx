import { useNavigate } from 'react-router-dom'
import { Button, SimpleCard, Text } from '@herbalifedev/leaf'

const CART_ITEMS = [
  { title: 'Formula 1 Shake Mix', description: 'Vanilla, 750g — Qty 2', icon: 'storefront' },
  { title: 'Herbal Tea Concentrate', description: 'Peach — Qty 3', icon: 'grid_view' },
]

function Cart() {
  const navigate = useNavigate()

  return (
    <div className="lf:min-h-screen lf:bg-(--lf-bg-2)">
      <main className="lf:max-w-(--lf-max-w-2xl) lf:mx-auto lf:p-(--lf-spacing-6) md:lf:p-(--lf-spacing-12)">
        <div className="lf:flex lf:flex-col lf:gap-(--lf-spacing-10)">
          <Text type="heading" size="large" className="lf:text-(--lf-heading-color)">
            Cart
          </Text>

          <div className="lf:flex lf:flex-col lf:gap-(--lf-spacing-4)">
            {CART_ITEMS.map((item) => (
              <SimpleCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
                appearance="bordered"
              />
            ))}
          </div>

          <div className="lf:flex lf:flex-col lf:gap-(--lf-spacing-2) lf:rounded-(--lf-shape-card) lf:border lf:border-(--lf-border-muted) lf:bg-(--lf-bg-1) lf:p-(--lf-spacing-6)">
            <div className="lf:flex lf:items-center lf:justify-between">
              <Text type="paragraph" size="medium" className="lf:text-(--lf-paragraph-color)">
                Subtotal (5 items)
              </Text>
              <Text type="small-title" size="medium" className="lf:text-(--lf-heading-color)">
                $360.00
              </Text>
            </div>
            <Text type="caption" className="lf:text-(--lf-description-color)">
              Shipping and taxes calculated at checkout.
            </Text>
          </div>

          <Button
            size="large"
            className="lf:w-full md:lf:max-w-xs"
            onClick={() => navigate('/checkout')}
          >
            Checkout
          </Button>
        </div>
      </main>
    </div>
  )
}

export default Cart
