import { IonImg, useIonRouter } from '@ionic/react'

import UiButton from '~/src/@app_ui/components/UiButton'
import logoApple from '~/src/@biz_auth/login/assets/apple-logo.svg'
import logoGoogle from '~/src/@biz_auth/login/assets/google-logo.svg'
import emailIcon from '~/src/@biz_auth/login/assets/email.svg'

const LoginPageButtons = () => {
  const router = useIonRouter()

  return (
    <div className='flex flex-col justify-center items-center mb-4 gap-2'>
      <UiButton variant='acra' size='acra48px'>
        <IonImg src={logoApple} className='w-5 h-5' />
        Continue with Apple
      </UiButton>
      <UiButton variant='acra' size='acra48px'>
        <IonImg src={logoGoogle} className='w-5 h-5' />
        Continue with Apple
      </UiButton>
      <UiButton
        variant='acraAuthEmail'
        size='acra48px'
        onClick={() => router.push('/email-login')}
      >
        <IonImg src={emailIcon} className='w-5 h-5' />
        Continue with email
      </UiButton>
    </div>
  )
}

export default LoginPageButtons
