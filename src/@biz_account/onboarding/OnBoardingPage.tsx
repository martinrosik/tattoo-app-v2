import { useState } from 'react'
import { IonPage, IonContent, useIonRouter } from '@ionic/react'

import {
  ONBOARDING_STEPS,
  type OnboardingStep,
} from './constants/onboarding-page.constants'

import UiPageWrapper from '~/src/@app_ui/components/UiPageWrapper'
import UiProgress from '~/src/@app_ui/components/UiProgress'
import OnBoardingPageBgImage from './components/OnBoardingPageBgImage'
import OnBoardingPageTitles from './components/OnBoardingPageTitles'
import OnBoardingPageFooter from './components/OnBoardingPageFooter'

const OnBoardingPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const router = useIonRouter()

  const step: OnboardingStep = ONBOARDING_STEPS[currentStep - 1]
  const totalSteps = ONBOARDING_STEPS.length
  const isLastStep = currentStep === totalSteps

  const goNext = () => {
    if (!isLastStep) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleFinish = () => {
    router.push('/tabs/home', 'forward')
  }

  return (
    <IonPage>
      <IonContent>
        <UiPageWrapper>
          <OnBoardingPageBgImage backgroundImage={step.backgroundImage} />

          <div className='absolute inset-0 z-10 flex flex-col px-5 pt-[542px]'>
            <UiProgress
              className='w-[150px]'
              progress={currentStep}
              totalSteps={totalSteps}
              height={7}
              activeClassName='bg-white'
              inactiveClassName='bg-[#302D31]'
            />

            <OnBoardingPageTitles
              titlePart1={step.titlePart1}
              titlePart2={step.titlePart2}
              gradientFrom={step.gradientFrom}
              gradientTo={step.gradientTo}
            />

            <OnBoardingPageFooter
              isLastStep={isLastStep}
              onNext={isLastStep ? handleFinish : goNext}
            />
          </div>
        </UiPageWrapper>
      </IonContent>
    </IonPage>
  )
}

export default OnBoardingPage
