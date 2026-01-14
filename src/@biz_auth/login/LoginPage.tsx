import { IonContent, IonPage } from '@ionic/react'

import UiPageWrapper from '~/src/@app_ui/components/UiPageWrapper'
import LoginPageTitles from './components/LoginPageTitles'
import LoginPageBgImage from './components/LoginPageBgImage'
import LoginPageFooterLinks from './components/LoginPageFooterLinks'
import LoginPageButtons from './components/LoginPageButtons'

const LoginPage = () => {
  return (
    <IonPage>
      <IonContent>
        <UiPageWrapper>
          <LoginPageBgImage />

          <div className='relative w-full z-10 h-full flex flex-col justify-center pt-[429px]'>
            <LoginPageTitles />
            <LoginPageButtons />
            <LoginPageFooterLinks />
          </div>
        </UiPageWrapper>
      </IonContent>
    </IonPage>
  )
}

export default LoginPage
