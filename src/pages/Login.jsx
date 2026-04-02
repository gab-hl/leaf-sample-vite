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
    <div className="p-(--lf-spacing-4) h-screen w-full flex  items-end ">
      <Image src={bgLogin} className="absolute -z-10 top-0 left-0 w-full h-full object-cover" />
      {/* Login card */}
      <div
        className="h-fit min-h-(--lf-container-sm) lg:h-full flex flex-col w-full lg:w-(--lf-max-w-2xl) ml-0 md:ml-auto gap-(--lf-spacing-6) md:gap-(--lf-spacing-10) lf:bg-(--lf-bg-1) border border-(--lf-border-muted) rounded-(--lf-shape-card) shadow-(--lf-shadow-xl) p-(--lf-spacing-6) md:p-(--lf-spacing-12) ">
        <div className="block md:hidden">
          <Brand brand="herbalife" size="xsmall" type="symbol" color="base" />
        </div>
        <div className="hidden md:block">
          <Brand brand="herbalife" size="xsmall" type="extended" color="base" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-(--lf-spacing-6) md:gap-(--lf-spacing-10)"
        >
          <Text
            type="heading"
            size="medium"
            className='max-w-(--lf-container-sm)'
          >
            Login with my credentials
          </Text>

          <div className="flex-1">
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
