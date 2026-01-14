import { IonButton } from '@ionic/react'

const LoginPageFooterLinks = () => {
  return (
    <div className='flex flex-row justify-center items-center'>
      <IonButton fill='clear' className='text-[#D5D5D5]'>
        Privacy Policy
      </IonButton>

      <IonButton fill='clear' className='text-[#D5D5D5]'>
        Terms of Service
      </IonButton>
    </div>
  )
}

export default LoginPageFooterLinks
