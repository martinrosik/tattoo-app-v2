import { useState } from 'react'
import { IonContent, IonImg, IonPage, useIonRouter } from '@ionic/react'

import UiPageWrapper from '~/src/@app_ui/components/UiPageWrapper'
import UiProgress from '~/src/@app_ui/components/UiProgress'
import UiHeader from '~/src/@app_ui/components/UiHeader'
import UiButton from '~/src/@app_ui/components/UiButton'
import RegisterPageUsernameStep from './components/RegisterPageUsernameStep'
import RegisterPagePasswordStep from './components/RegisterPagePasswordStep'
import RegisterPageVerificationCodeStep from './components/RegisterPageVerificationCodeStep'
import RegisterPageEmailStep from './components/RegisterPageEmailStep'
import arrow_back from '~/src/@app_ui/assets/arrow-back.svg'

const REGISTER_STEPS_COUNT = 4

const RegisterPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [isCurrentStepValid, setIsCurrentStepValid] = useState<boolean>(false)

  const router = useIonRouter()

  const getProgress = (): number => {
    return currentStep
  }

  const goNext = () => {
    if (currentStep < REGISTER_STEPS_COUNT) {
      setCurrentStep((prev) => prev + 1)
      setIsCurrentStepValid(false)
    } else {
      router.push('/on-boarding', 'forward', 'replace')
    }
  }

  const goToPrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
      setIsCurrentStepValid(false)
    } else {
      router.push('/email-login', 'back', 'pop')
    }
  }

  const renderStep = () => {
    const shared = {
      onValidChange: setIsCurrentStepValid,
    }

    if (currentStep === 1) {
      return <RegisterPageEmailStep {...shared} onNext={goNext} />
    }
    if (currentStep === 2) {
      return (
        <RegisterPageVerificationCodeStep
          {...shared}
          onBack={goToPrevious}
          onNext={goNext}
        />
      )
    }
    if (currentStep === 3) {
      return (
        <RegisterPagePasswordStep
          {...shared}
          onBack={goToPrevious}
          onNext={goNext}
        />
      )
    }
    if (currentStep === 4) {
      return (
        <RegisterPageUsernameStep
          {...shared}
          onBack={goToPrevious}
          onFinish={goNext}
        />
      )
    }
    return null
  }

  return (
    <IonPage>
      <IonContent>
        <UiPageWrapper className='pb-24'>
          <UiProgress
            className='w-full'
            progress={getProgress()}
            totalSteps={REGISTER_STEPS_COUNT}
            height={4}
            activeClassName='bg-[#FFFFFF]'
            inactiveClassName='bg-[#302D31]'
          />

          <UiHeader
            left={
              <UiButton variant='ghost' size='icon' onClick={goToPrevious}>
                <IonImg src={arrow_back} className='w-5 h-5' />
              </UiButton>
            }
          />

          {renderStep()}
          <UiButton
            className='!mt-[330px]'
            variant='acra'
            size='acra48px'
            disabled={!isCurrentStepValid}
            onClick={goNext}
          >
            {currentStep === REGISTER_STEPS_COUNT
              ? 'Finish registration'
              : 'Continue'}
          </UiButton>
        </UiPageWrapper>
      </IonContent>
    </IonPage>
  )
}

export default RegisterPage
