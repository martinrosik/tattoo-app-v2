import { useIonRouter } from '@ionic/react'

import AuthTextLink from '~/src/@app_ui/components/AuthTextLink'
import UiButton from '~/src/@app_ui/components/UiButton'

const EmailLoginPageFooter = () => {
  const router = useIonRouter()

  return (
    <>
      <UiButton className='mt-6' variant='acra' size='acra48px' disabled={true}>
        Continue
      </UiButton>

      <AuthTextLink
        className='mt-5'
        prefixText='Don’t have an account?'
        actionText='Create one'
        onClick={() => router.push('/register', 'forward', 'push')}
      />
    </>
  )
}
export default EmailLoginPageFooter
