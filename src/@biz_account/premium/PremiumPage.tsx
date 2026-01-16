import { IonContent, IonPage } from '@ionic/react'

import UiPageWrapper from '~/src/@app_ui/components/UiPageWrapper'
import PremiumPageBgImage from './components/PremiumPageBgImage'
import PremiumPageTitles from './components/PremiumPageTitles'
import PremiumPageList from './components/PremiumPageList'
import PremiumPageContent from './components/PremiumPageContent'
import PremiumPageHeader from './components/PremiumPageHeader'

const PremiumPage = () => {
  return (
    <IonPage>
      <IonContent>
        <UiPageWrapper>
          <PremiumPageHeader />
          <PremiumPageBgImage />
          <PremiumPageTitles className='mt-[133px]' />
          <PremiumPageList />
          <PremiumPageContent />
        </UiPageWrapper>
      </IonContent>
    </IonPage>
  )
}
export default PremiumPage
