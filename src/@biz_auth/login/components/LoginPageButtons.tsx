import { IonImg } from '@ionic/react'

import UiButton from '~/src/@app_ui/components/UiButton'
import logoApple from '~/src/@biz_auth/login/assets/apple-logo.svg'
import logoGoogle from '~/src/@biz_auth/login/assets/google-logo.svg'
import emailIcon from '~/src/@biz_auth/login/assets/email.svg'

const LoginPageButtons = () => {
  return (
    <>
      <UiButton>
        <IonImg src={logoApple} className='w-5 h-5' />
        Continue with Apple
      </UiButton>
      <UiButton>
        <IonImg src={logoGoogle} className='w-5 h-5' />
        Continue with Apple
      </UiButton>
      <UiButton>
        <IonImg src={emailIcon} className='w-5 h-5' />
        Continue with Apple
      </UiButton>
    </>
  )
}

export default LoginPageButtons
