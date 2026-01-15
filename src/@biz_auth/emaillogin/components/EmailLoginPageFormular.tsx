import { useState } from 'react'

import UiInput from '~/src/@app_ui/components/UiInput'
import UISmallText from '~/src/@app_ui/components/UiSmallText'

const EmailLoginPageFormular = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <UiInput
        wrapperClassName='mt-[46px]'
        labelText='E-mail adress or username'
        placeholder='Start typing...'
        type='text'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <UiInput
        wrapperClassName='mt-[20px] w-full'
        labelText='Password'
        placeholder='Start typing...'
        type='password'
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className='mt-[10px] w-full text-left'>
        <UISmallText color='white' text='Forgot password?' />
      </div>
    </>
  )
}
export default EmailLoginPageFormular
