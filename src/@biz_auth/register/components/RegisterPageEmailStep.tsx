import { useState, useEffect } from 'react'

import UiInput from '~/src/@app_ui/components/UiInput'
import UiSubTitle from '~/src/@app_ui/components/UiSubTitle'
import UiTitle from '~/src/@app_ui/components/UiTitle'

type Props = {
  onNext: () => void
  onValidChange: (valid: boolean) => void
}

const RegisterPageEmailStep = ({ onNext, onValidChange }: Props) => {
  const [email, setEmail] = useState<string>('')

  useEffect(() => {
    const valid = email.trim().length > 0 && /\S+@\S+\.\S+/.test(email)
    onValidChange(valid)
  }, [email, onValidChange])

  return (
    <>
      <UiTitle className='!mt-[34px] !mr-[120px]'>Register with e-mail</UiTitle>

      <UiSubTitle className='!mb-8 !mr-[21px]'>
        To continue, please fill out the required fields
      </UiSubTitle>

      <UiInput
        labelText='E-mail address'
        type='email'
        placeholder='Start typing...'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </>
  )
}

export default RegisterPageEmailStep
