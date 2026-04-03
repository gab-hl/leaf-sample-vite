import { useState } from 'react'
import {
  Button,
  InputCheckbox,
  InputPhoneNumber,
  InputSelect,
  InputText,
  OutlinedButton,
  Text,
} from '@herbalifedev/leaf'
import PageHeading from '../../components/PageHeading.jsx'

const LANGUAGE_OPTIONS = ['English', 'Español', 'Português']
const CONTACT_CHANNEL_OPTIONS = ['Email', 'SMS', 'Email and SMS']

const INITIAL = {
  firstName: 'Ashley',
  lastName: 'Ramsden',
  email: 'ashley.ramsden@example.com',
  phone: '79111 23456',
  language: 'English',
  contactChannel: 'Email and SMS',
  optInEmail: true,
  optInSms: false,
  termsAccepted: true,
}

function Form() {
  const [firstName, setFirstName] = useState(INITIAL.firstName)
  const [lastName, setLastName] = useState(INITIAL.lastName)
  const [email, setEmail] = useState(INITIAL.email)
  const [phone, setPhone] = useState(INITIAL.phone)
  const [language, setLanguage] = useState(INITIAL.language)
  const [contactChannel, setContactChannel] = useState(INITIAL.contactChannel)
  const [optInEmail, setOptInEmail] = useState(INITIAL.optInEmail)
  const [optInSms, setOptInSms] = useState(INITIAL.optInSms)
  const [termsAccepted, setTermsAccepted] = useState(INITIAL.termsAccepted)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Loyalty profile submit', {
      firstName,
      lastName,
      email,
      phone,
      language,
      contactChannel,
      optInEmail,
      optInSms,
      termsAccepted,
    })
  }

  const reset = () => {
    setFirstName(INITIAL.firstName)
    setLastName(INITIAL.lastName)
    setEmail(INITIAL.email)
    setPhone(INITIAL.phone)
    setLanguage(INITIAL.language)
    setContactChannel(INITIAL.contactChannel)
    setOptInEmail(INITIAL.optInEmail)
    setOptInSms(INITIAL.optInSms)
    setTermsAccepted(INITIAL.termsAccepted)
  }

  return (
    <div className="lf:mx-auto lf:box-border lf:flex lf:min-h-full lf:w-full lf:max-w-(--lf-container-7xl) lf:flex-1 lf:flex-col lf:px-(--lf-spacing-6) lf:py-(--lf-spacing-10) md:lf:px-(--lf-spacing-12) md:lf:py-(--lf-spacing-16)">
      <div className="lf:flex lf:flex-col lf:gap-(--lf-section-gap)">
        <PageHeading
          title="Form"
          description="Loyalty profile example: contact details, preferences, and communications (Leaf inputs and actions)."
        />

        <form
          onSubmit={handleSubmit}
          className="lf:flex lf:max-w-(--lf-container-sm) lf:flex-col lf:gap-(--lf-spacing-10)"
          aria-label="Loyalty profile form"
        >
          <div className="lf:flex lf:flex-col lf:gap-(--lf-spacing-6)">
            <Text type="heading" size="small">
              Contact information
            </Text>
            <div className="lf:flex lf:flex-col lf:gap-(--lf-spacing-6) lf:rounded-(--lf-shape-card) lf:border lf:border-(--lf-border-muted) lf:bg-(--lf-bg-1) lf:p-(--lf-spacing-6)">
              <InputText label="First name" content={firstName} onChange={setFirstName} required />
              <InputText label="Last name" content={lastName} onChange={setLastName} required />
              <InputText
                label="Email"
                content={email}
                placeholder="you@example.com"
                onChange={setEmail}
                required
              />
              <InputPhoneNumber label="Phone number" content={phone} onChange={setPhone} />
              <InputSelect
                label="Preferred language"
                placeholder="Select language"
                content={language}
                dataOptions={LANGUAGE_OPTIONS}
                onChange={setLanguage}
              />
            </div>
          </div>

          <div className="lf:flex lf:flex-col lf:gap-(--lf-spacing-6)">
            <Text type="heading" size="small">
              Communication preferences
            </Text>
            <div className="lf:flex lf:flex-col lf:gap-(--lf-spacing-6) lf:rounded-(--lf-shape-card) lf:border lf:border-(--lf-border-muted) lf:bg-(--lf-bg-1) lf:p-(--lf-spacing-6)">
              <InputSelect
                label="How we reach you"
                placeholder="Select channel"
                content={contactChannel}
                dataOptions={CONTACT_CHANNEL_OPTIONS}
                onChange={setContactChannel}
              />
              <InputCheckbox
                label="Product offers and promotions (email)"
                description="Personalized recommendations and loyalty rewards by email."
                selected={optInEmail}
                onChange={setOptInEmail}
              />
              <InputCheckbox
                label="Reminders and updates (SMS)"
                description="Order and program notifications by text when you opt in."
                selected={optInSms}
                onChange={setOptInSms}
              />
              <InputCheckbox
                label="I agree to the program terms"
                description="Required to save changes to your loyalty profile."
                selected={termsAccepted}
                onChange={setTermsAccepted}
              />
            </div>
          </div>

          <div className="lf:flex lf:flex-col lf:gap-(--lf-spacing-4) sm:lf:flex-row sm:lf:flex-wrap">
            <Button size="large" type="submit" className="lf:w-full sm:lf:min-w-40 sm:lf:flex-1">
              Save profile
            </Button>
            <OutlinedButton
              size="large"
              type="button"
              className="lf:w-full sm:lf:min-w-40 sm:lf:flex-1"
              onClick={reset}
            >
              Reset
            </OutlinedButton>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
