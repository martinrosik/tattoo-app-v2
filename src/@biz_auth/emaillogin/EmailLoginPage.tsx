import { IonContent, IonImg, IonPage, useIonRouter } from '@ionic/react'

import UiButton from '~/src/@app_ui/components/UiButton'
import UiPageWrapper from '~/src/@app_ui/components/UiPageWrapper'
import UiHeader from '~/src/@app_ui/components/UiHeader'
import EmailLoginPageTitles from './components/EmailLoginPageTitles'
import EmailLoginPageFormular from './components/EmailLoginPageFormular'
import EmailLoginPageFooter from './components/EmailLoginPageFooter'
import arrow_back from '~/src/@app_ui/assets/arrow-back.svg'

const EmailLoginPage = () => {
  const router = useIonRouter()

  const handleBack = () => {
    if (router.canGoBack()) {
      router.goBack()
    } else {
      router.push('/', 'root', 'replace')
    }
  }

  return (
    <IonPage>
      <IonContent>
        <UiPageWrapper>
          <UiHeader
            left={
              <UiButton variant='ghost' size='icon' onClick={handleBack}>
                <IonImg src={arrow_back} className='w-5 h-5' />
              </UiButton>
            }
          />

          <EmailLoginPageTitles />
          <EmailLoginPageFormular />
          <EmailLoginPageFooter />
        </UiPageWrapper>
      </IonContent>
    </IonPage>
  )
}

export default EmailLoginPage
