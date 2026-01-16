import { IonImg } from '@ionic/react'

import UISmallText from '~/src/@app_ui/components/UiSmallText'
import checkmarkCircle from '~/src/@app_ui/assets/checkmark-circle.svg'

const PremiumPageList = () => {
  return (
    <div className='flex flex-col z-50 mt-[36px] mb-[30px] mr-[60px] justify-start items-start gap-4'>
      <div className='flex flex-row justify-center items-center gap-2'>
        <IonImg src={checkmarkCircle} className='w-5 h-5' />
        <UISmallText
          className='text-[16px]'
          color='white'
          text='Unlock Pro tattoos'
        />
      </div>

      <div className='flex flex-row justify-center items-center gap-2'>
        <IonImg src={checkmarkCircle} className='w-5 h-5' />
        <UISmallText
          className='text-[16px]'
          color='white'
          text='Unlimited credits'
        />
      </div>

      <div className='flex flex-row justify-center items-center gap-2'>
        <IonImg src={checkmarkCircle} className='w-5 h-5' />
        <UISmallText
          className='text-[16px]'
          color='white'
          text='Unlock themes, new styles'
        />
      </div>

      <div className='flex flex-row justify-center items-center gap-2'>
        <IonImg src={checkmarkCircle} className='w-5 h-5' />
        <UISmallText
          className='text-[16px]'
          color='white'
          text='Higher resolution of images'
        />
      </div>
    </div>
  )
}
export default PremiumPageList
