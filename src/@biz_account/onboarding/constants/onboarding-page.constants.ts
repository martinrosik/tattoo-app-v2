import cosmicEye from '~/src/@app_ui/assets/cosmic-eye.png'
import armBg from '~/src/@biz_account/onboarding/assets/arm-bg.png'
import forestBg from '~/src/@biz_account/onboarding/assets/forest-bg.png'

export type OnboardingStep = {
  backgroundImage: string
  titlePart1: string
  titlePart2: string
  gradientFrom: string
  gradientTo: string
}

export const ONBOARDING_STEPS: readonly OnboardingStep[] = [
  {
    backgroundImage: cosmicEye,
    titlePart1: 'Embody the spirit',
    titlePart2: 'you harbour.',
    gradientFrom: '#FFCFCF',
    gradientTo: '#F47171',
  },
  {
    backgroundImage: armBg,
    titlePart1: 'Try your new made',
    titlePart2: 'tattoos on you.',
    gradientFrom: '#CBAEFF',
    gradientTo: '#8B48FF',
  },
  {
    backgroundImage: forestBg,
    titlePart1: 'Your journey',
    titlePart2: 'begins now.',
    gradientFrom: '#AAC8FF',
    gradientTo: '#4888FF',
  },
] as const
