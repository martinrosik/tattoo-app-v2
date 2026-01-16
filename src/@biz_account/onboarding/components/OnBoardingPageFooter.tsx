import { IonImg } from '@ionic/react'

import UiButton from '~/src/@app_ui/components/UiButton'
import arrowNext from '~/src/@app_ui/assets/arrow-next.svg'

type Props = {
  isLastStep: boolean
  onNext?: () => void
}

const OnBoardingPageFooter = (props: Props) => {
  return (
    <div className='flex justify-center items-center mt-[60px] '>
      <UiButton
        variant='acra'
        size='icon'
        className='rounded-full w-[60px] h-[60px]'
        onClick={props.onNext}
      >
        <IonImg src={arrowNext} className='w-5 h-5' />
      </UiButton>
    </div>
  )
}

export default OnBoardingPageFooter
