import { useState, useEffect } from 'react'

import UiInput from '~/src/@app_ui/components/UiInput'
import UiTitle from '~/src/@app_ui/components/UiTitle'

type Props = {
  onBack: () => void
  onNext: () => void
  onValidChange: (valid: boolean) => void
}

const RegisterPagePasswordStep = ({ onBack, onNext, onValidChange }: Props) => {
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  useEffect(() => {
    const valid =
      password.length >= 6 &&
      password === confirmPassword &&
      confirmPassword !== ''
    onValidChange(valid)
  }, [password, confirmPassword, onValidChange])

  return (
    <>
      <UiTitle className='!mt-[34px] !mb-[34px] !mr-[136px]'>
        Set your password
      </UiTitle>

      <div className='space-y-6'>
        <UiInput
          labelText='Password'
          type='password'
          placeholder='Start typing...'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <UiInput
          labelText='Confirm password'
          type='password'
          placeholder='Start typing...'
          id='confirm-password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
    </>
  )
}

export default RegisterPagePasswordStep
