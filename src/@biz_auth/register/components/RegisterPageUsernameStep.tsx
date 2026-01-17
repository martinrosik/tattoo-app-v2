import { useState, useEffect } from 'react'

import UiInput from '~/src/@app_ui/components/UiInput'
import UiTitle from '~/src/@app_ui/components/UiTitle'

type Props = {
  onBack: () => void
  onFinish: () => void
  onValidChange: (valid: boolean) => void
}

const RegisterPageUsernameStep = ({
  onBack,
  onFinish,
  onValidChange,
}: Props) => {
  const [username, setUsername] = useState<string>('')

  useEffect(() => {
    const valid = username.trim().length >= 3
    onValidChange(valid)
  }, [username, onValidChange])

  return (
    <>
      <UiTitle className='!mt-[34px] !mb-[34px] !mr-[84px]'>
        Choose your username
      </UiTitle>

      <UiInput
        labelText='Username'
        type='text'
        placeholder='Start typing...'
        id='username'
        value={username}
        onChange={(e) => setUsername(e.target.value.trim())}
      />
    </>
  )
}

export default RegisterPageUsernameStep
