import { IonImg, useIonRouter } from '@ionic/react'

import UiButton from '~/src/@app_ui/components/UiButton'
import UiHeader from '~/src/@app_ui/components/UiHeader'
import arrow_back from '~/src/@app_ui/assets/arrow-back.svg'
import arrow_rotate_counterclockwise from '~/src/@app_ui/assets/arrow-rotate-counterclockwise.svg'

const PremiumPageHeader = () => {
  const router = useIonRouter()

  const handleBack = () => {
    if (router.canGoBack()) {
      router.goBack()
    } else {
      router.push('/', 'root', 'replace')
    }
  }

  return (
    <>
      <UiHeader
        left={
          <UiButton
            className='rounded-full'
            variant='acraHeader'
            size='icon'
            onClick={handleBack}
          >
            <IonImg src={arrow_back} className='w-5 h-5' />
          </UiButton>
        }
        right={
          <UiButton variant='acraHeader' size='acraHeader'>
            <IonImg src={arrow_rotate_counterclockwise} className='w-4 h-4' />
            Restore
          </UiButton>
        }
      />
    </>
  )
}

export default PremiumPageHeader
