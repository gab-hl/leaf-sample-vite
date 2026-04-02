import { useState } from 'react'
import {
  Button,
  Header,
  InputCreditCard,
  InputCheckbox,
  ListSelect,
  InputSelect,
  InputText,
  OutlinedButton,
  Text,
  ListNavigation,
  ListContent,
} from '@herbalifedev/leaf'

const NAV_ITEMS = [
  'Achieve your Goals',
  'Products',
  'Wellness Resources',
  'Business Opportunity',
  'About Herbalife',
]

const PRIMARY_PAYMENT_METHODS = [
  { title: 'Visa 31x4', description: 'Primary card on file', badgeFlag: 'visa' },
  { title: 'Mastercard 39x0', description: 'Recently used', badgeFlag: 'mastercard' },
]
const OTHER_PAYMENT_METHODS = [
  { title: 'Apple Pay', description: 'Pay with Apple Wallet', badgeFlag: 'apple-pay' },
  { title: 'Google Pay', description: 'Pay with Google Wallet', badgeFlag: 'google-pay' },
  { title: 'Klarna', description: 'Split payment options', badgeFlag: 'klarna' },
  { title: 'PayPal', description: 'Pay with your PayPal account', badgeFlag: 'paypal' },
  { title: 'Amazon Pay', description: 'Use your Amazon account', badgeFlag: 'amazon-pay' },
]


function Checkout() {
  const [country, setCountry] = useState('United States')
  const [city, setCity] = useState('Los Angeles')
  const [couponCode, setCouponCode] = useState('')
  const [selectedPrimaryPayment, setSelectedPrimaryPayment] = useState('Mastercard 39x0')
  const [selectedOtherPayment, setSelectedOtherPayment] = useState('')

  return (
    <div className="min-h-screen bg-(--lf-bg-2)">
      <Header >
        {NAV_ITEMS.map((item) => (
          <Header.NavContent key={item} title={item} href="#" />
        ))}
      </Header>

      <main className="w-(--lf-max-w-2xl) mx-auto p-(--lf-spacing-6) md:p-(--lf-spacing-12)">
        <div className="flex flex-col lg:flex-row gap-(--lf-spacing-10)">
          <section className="flex-1 max-w-(--lf-container-sm) flex flex-col gap-(--lf-spacing-10)">
            <Text type="heading" size="large" className="text-(--lf-heading-color)">
              Checkout
            </Text>

            <div className="flex flex-col gap-(--lf-spacing-6)">
              <Text type="heading" size="small" className="text-(--lf-heading-color)">
                Welcome
              </Text>
              <div className="bg-(--lf-bg-1) border border-(--lf-border-muted) rounded-(--lf-shape-card) p-(--lf-spacing-6) flex flex-col gap-(--lf-spacing-4)">
                <Text type="small-title" size="medium">Ashley Ramsden</Text>
                <Text type="paragraph" size="small">
                  johndoe@example.com
                </Text>
                <Text type="paragraph" size="small">
                  79111 23456
                </Text>
                <Text type="paragraph" size="small">
                  English
                </Text>
              </div>
            </div>

            <div className="flex flex-col gap-(--lf-spacing-6)">
              <Text type="heading" size="small" className="text-(--lf-heading-color)">
                Shipping address
              </Text>
              <div className="flex flex-col gap-(--lf-spacing-6)">
                <InputSelect
                  label="Country"
                  placeholder="Select country"
                  options={['United States', 'Mexico', 'Brazil']}
                  value={country}
                  onChange={setCountry}
                />
                <InputText label="First Name" content="Ashley" onChange={() => {}} />
                <InputText label="Last Name" content="Ramsden" onChange={() => {}} />
                <InputText label="Postal Code" content="90001" onChange={() => {}} />
                <InputSelect
                  label="City"
                  placeholder="Select city"
                  options={['Los Angeles', 'San Diego', 'San Jose']}
                  value={city}
                  onChange={setCity}
                />
                <InputText label="Phone Number" content="79111 23456" onChange={() => {}} />
                <InputText label="Shopping Address" content="123 Green Ave" onChange={() => {}} />
                <InputText label="Address Line 2" content="Apt 04" onChange={() => {}} />
                <InputCheckbox
                  label="Save this as my primary address"
                  selected
                  onChange={() => {}}
                />

              </div>
            </div>

            <div className="flex flex-col gap-(--lf-spacing-6)">
              <Text type="heading" size="small" className="text-(--lf-heading-color)">
                Payment
              </Text>

              <ListSelect
                label="Card (Credit/Debit)"
                description="Pay using Visa, Mastercard or Amex"
                inputType="radioButton"
                content="icon"
                nameIcon="credit_card"
                selectedRadio
                valueRadio="card-credit-debit"
                onChangeRadio={() => {
                  setSelectedPrimaryPayment(PRIMARY_PAYMENT_METHODS[0].title)
                  setSelectedOtherPayment('')
                }}
              />

              <Text type="paragraph" size="small" className="text-(--lf-paragraph-color)">Add a new Credit Card</Text>
              <InputCreditCard label="Credit Card Number" number="9999 9999 9999 9999" onChange={() => {}} />
              <InputText label="Cardholder Name" content="Ashley Ramsden" onChange={() => {}} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lf-spacing-6)">
                <InputText label="Expiration (MM/YY)" content="01/29" onChange={() => {}} />
                <InputText label="Security Code" content="123" onChange={() => {}} />
              </div>

              <InputCheckbox label="Save this card for future payments" selected onChange={() => {}} />
              <InputCheckbox label="Billing address same as shipping" selected onChange={() => {}} />

              <div className="flex flex-col gap-(--lf-spacing-4)">
                <Text type="paragraph" size="small" className="text-(--lf-description-color)">
                  Choose your payment method from the options below.
                </Text>
                {PRIMARY_PAYMENT_METHODS.map((method) => (
                  <ListSelect
                    key={method.title}
                    label={method.title}
                    description={method.description}
                    inputType="radioButton"
                    content="creditCard"
                    type="flag"
                    badgeType="logotype"
                    badgeFlag={method.badgeFlag}
                    selectedRadio={selectedPrimaryPayment === method.title}
                    valueRadio={method.title}
                    onChangeRadio={setSelectedPrimaryPayment}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-(--lf-spacing-4)">
                <Text type="paragraph" size="small" className="text-(--lf-description-color)">
                  Other payment methods
                </Text>
                {OTHER_PAYMENT_METHODS.map((method) => (
                  <ListSelect
                    key={method.title}
                    label={method.title}
                    description={method.description}
                    inputType="radioButton"
                    content="creditCard"
                    type="flag"
                    badgeType="logotype"
                    badgeFlag={method.badgeFlag}
                    selectedRadio={selectedOtherPayment === method.title}
                    valueRadio={method.title}
                    onChangeRadio={setSelectedOtherPayment}
                  />
                ))}
              </div>
            </div>
          </section>

          <aside className="w-full lg:w-[448px]">
            <div className="lg:sticky top-6 bg-(--lf-bg-1) border border-(--lf-border-muted) rounded-(--lf-shape-card) shadow-(--lf-shadow-xl) p-(--lf-spacing-6) md:p-(--lf-spacing-10) flex flex-col gap-(--lf-spacing-6)">
              <Text type="heading" size="small" className="text-(--lf-heading-color)">
                Summary
              </Text>

                <ListNavigation
                  items={[]}
                  title="Item subtotal (5)"
                  subtitle="$ 360.00"
                  iconName="credit_card"
                />
      

              <div className="border-b border-(--lf-border-muted) pb-(--lf-spacing-6) flex flex-col gap-(--lf-spacing-4)">

                <ListContent>
                  <ListContent.Content title="Item subtotal" description="5 items" />
                  <ListContent.Right currencySize="small" currencyType="default" currencyValue={360.00} />
                </ListContent>

              </div>

              <div className="flex flex-col items-end gap-(--lf-spacing-4)">
                <InputText
                  label="Coupon Code"
                  content={couponCode}
                  placeholder="Enter your code"
                  onChange={setCouponCode}
                />
                <OutlinedButton size="small">Apply Code</OutlinedButton>
              </div>

              <Button size="large" className="w-full">
                Finish Order
              </Button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

export default Checkout
