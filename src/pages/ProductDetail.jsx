import { useNavigate } from 'react-router-dom'
import { Button, Tag, Text } from '@herbalifedev/leaf'

function ProductDetail() {
  const navigate = useNavigate()

  return (
    <div className="lf:min-h-screen lf:bg-(--lf-bg-2)">
      <main className="lf:max-w-(--lf-container-sm) lf:mx-auto lf:p-(--lf-spacing-6) md:lf:p-(--lf-spacing-12)">
        <div className="lf:flex lf:flex-col lf:gap-(--lf-spacing-6) lf:rounded-(--lf-shape-card) lf:border lf:border-(--lf-border-muted) lf:bg-(--lf-bg-1) lf:p-(--lf-spacing-6) md:lf:p-(--lf-spacing-10)">
          <div className="lf:flex lf:flex-wrap lf:items-center lf:gap-(--lf-spacing-3)">
            <Tag label="Popular" severity="primary" />
          </div>

          <Text type="heading" size="medium" className="lf:text-(--lf-heading-color)">
            Formula 1 Nutritional Shake Mix
          </Text>

          <Text type="paragraph" size="large" className="lf:text-(--lf-heading-color)">
            $45.95
          </Text>

          <Text type="paragraph" size="small" className="lf:text-(--lf-paragraph-color)">
            Placeholder product detail — swap copy and media when wiring a real catalog.
          </Text>

          <Button size="large" className="lf:w-full" onClick={() => navigate('/cart')}>
            Add to cart
          </Button>
        </div>
      </main>
    </div>
  )
}

export default ProductDetail
