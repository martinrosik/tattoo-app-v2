import { IonContent, IonPage } from '@ionic/react'
import { useState } from 'react'

import UiButton from '~/src/@app_ui/components/UiButton'
import UiInput from '~/src/@app_ui/components/UiInput'
import UiPageWrapper from '~/src/@app_ui/components/UiPageWrapper'
import UISmallText from '~/src/@app_ui/components/UiSmallText'
import UiSubTitle from '~/src/@app_ui/components/UiSubTitle'
import UiTitle from '~/src/@app_ui/components/UiTitle'

const EmailLoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <IonPage>
      <IonContent>
        <UiPageWrapper>
          <UiTitle className='mt-[34px]'>Welcome back</UiTitle>
          <UiSubTitle className='mt-[8px]'>
            We're happy to see you back
          </UiSubTitle>

          <UiInput
            wrapperClassName='mt-[46px]'
            labelText='E-mail address'
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

          <UISmallText
            className='mt-[10px] !text-left leading-none'
            color='white'
            text='Forgot password?'
          />

          <UiButton
            className='mt-6'
            variant='acra'
            size='acra48px'
            disabled={true}
          >
            Continue
          </UiButton>

          <UISmallText
            className='mt-[10px] !text-left leading-none'
            color='white'
            text="Don't have an account? Create one."
          />
        </UiPageWrapper>
      </IonContent>
    </IonPage>
  )
}

export default EmailLoginPage
