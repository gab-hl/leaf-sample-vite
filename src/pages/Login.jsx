import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Brand,
  Button,
  Divider,
  Image,
  InputText,
  MiniButton,
  OutlinedButton,
  Text,
} from '@herbalifedev/leaf'
import bgLogin from '../assets/images/bg-login.png'

function Login() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', email)
    navigate('/')
  }

  const handleForgotPassword = () => {
    console.log('Forgot password')
  }

  const handleForgotUsername = () => {
    console.log('Forgot username')
  }

  const handleCreateAccount = () => {
    console.log('Create account')
  }

  return (
    <div className="relative isolate h-full flex min-h-0 w-full flex-1 flex-col justify-end overflow-hidden p-(--lf-spacing-4)">
      <Image
        src={bgLogin}
        alt=""
        decoding="async"
        className="pointer-events-none absolute inset-0 z-0 min-h-0 !lf:aspect-auto size-full [&_img]:object-[center_20%] md:[&_img]:object-center"
      />
      {/* Login card */}
      <div
        className="relative z-10 flex min-h-0 flex-1 w-full flex-col gap-(--lf-spacing-6) md:gap-(--lf-spacing-10) overflow-y-auto ml-0 md:ml-auto lg:w-(--lf-max-w-2xl) lf:bg-(--lf-bg-1) border border-(--lf-border-muted) rounded-(--lf-shape-card) shadow-(--lf-shadow-xl) p-(--lf-spacing-6) md:p-(--lf-spacing-12)">
        <div className="block md:hidden">
          <Brand brand="herbalife" size="xsmall" type="symbol" color="base" />
        </div>
        <div className="hidden md:block">
          <Brand brand="herbalife" size="xsmall" type="extended" color="base" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex min-h-0 flex-1 flex-col gap-(--lf-spacing-6) md:gap-(--lf-spacing-10)"
        >
          <Text as="h1" type="heading" size="large">
            Login with my credentials
          </Text>

          <div className="min-h-0 flex-1">
            <InputText
              label="Email or Username"
              content={email}
              placeholder="Enter your email or username"
              onChange={setEmail}
            />
          </div>

          <div>
            <Button size='large' type="submit" className="w-full" >
              Access my Account
            </Button>
          </div>

          <div className="w-full flex items-center justify-center gap-(--lf-spacing-6)">
            <MiniButton onClick={handleForgotPassword}>
              Forgot password?
            </MiniButton>
            <MiniButton onClick={handleForgotUsername}>
              Forgot Username?
            </MiniButton>
          </div>

          <Divider text="Not registered?" />

          <OutlinedButton size="large" onClick={handleCreateAccount}>
            Create Account
          </OutlinedButton>
        </form>
      </div>
    </div>

  )
}
export default Login
