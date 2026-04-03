import { useNavigate } from 'react-router-dom'
import { Button, Tag, Text } from '@herbalifedev/leaf'
import PageHeading from '../components/PageHeading.jsx'

function ProductDetail() {
  const navigate = useNavigate()

  return (
    <div className="lf:min-h-screen lf:bg-(--lf-bg-2)">
      <main className="lf:max-w-(--lf-container-sm) lf:mx-auto lf:flex lf:flex-col lf:gap-(--lf-spacing-8) lf:p-(--lf-spacing-6) md:lf:p-(--lf-spacing-12)">
        <PageHeading
          title="Formula 1 Nutritional Shake Mix"
          description="Placeholder product detail — swap copy and media when wiring a real catalog."
        />
        <div className="lf:flex lf:flex-col lf:gap-(--lf-spacing-6) lf:rounded-(--lf-shape-card) lf:border lf:border-(--lf-border-muted) lf:bg-(--lf-bg-1) lf:p-(--lf-spacing-6) md:lf:p-(--lf-spacing-10)">
          <div className="lf:flex lf:flex-wrap lf:items-center lf:gap-(--lf-spacing-3)">
            <Tag label="Popular" severity="primary" />
          </div>

          <Text type="paragraph" size="large">
            $45.95
          </Text>

          <Button size="large" className="lf:w-full" onClick={() => navigate('/templates/cart')}>
            Add to cart
          </Button>
        </div>
      </main>
    </div>
  )
}

export default ProductDetail
