import { useState, useEffect } from 'react'

import UiOtpInput from '~/src/@app_ui/components/UiOtpInput'
import UiTitle from '~/src/@app_ui/components/UiTitle'
import UiSubTitle from '~/src/@app_ui/components/UiSubTitle'
import AuthTextLink from '~/src/@app_ui/components/AuthTextLink'

type Props = {
  onBack: () => void
  onNext: () => void
  onValidChange: (valid: boolean) => void
}

const RegisterPageVerificationCodeStep = ({
  onBack,
  onNext,
  onValidChange,
}: Props) => {
  const [code, setCode] = useState<string>('')

  useEffect(() => {
    const valid = code.length === 5
    onValidChange(valid)
  }, [code, onValidChange])

  return (
    <>
      <UiTitle className='!mt-[34px]'>Enter verification code</UiTitle>

      <UiSubTitle className='!mb-8'>
        Enter the 5 digit code sent to your email
      </UiSubTitle>

      <UiOtpInput
        id='verification-code'
        labelText=''
        length={5}
        value={code}
        onChange={setCode}
      />

      <AuthTextLink
        className='mt-5'
        prefixText="Didn't receive the code?"
        actionText='Resend it.'
      />
    </>
  )
}

export default RegisterPageVerificationCodeStep
