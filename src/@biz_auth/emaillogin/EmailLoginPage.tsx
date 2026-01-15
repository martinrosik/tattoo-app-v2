import { IonContent, IonImg, IonPage, useIonRouter } from '@ionic/react'

import UiButton from '~/src/@app_ui/components/UiButton'
import UiPageWrapper from '~/src/@app_ui/components/UiPageWrapper'
import UiHeader from '~/src/@app_ui/components/UiHeader'
import arrow_back from '~/src/@app_ui/assets/arrow-back.svg'
import EmailLoginPageTitles from './components/EmailLoginPageTitles'
import EmailLoginPageFormular from './components/EmailLoginPageFormular'
import EmailLoginPageFooter from './components/EmailLoginPageFooter'

const EmailLoginPage = () => {
  const router = useIonRouter()
  return (
    <IonPage>
      <IonContent>
        <UiPageWrapper>
          <UiHeader
            left={
              <UiButton
                variant='ghost'
                size='icon'
                onClick={() => router.back()}
              >
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
