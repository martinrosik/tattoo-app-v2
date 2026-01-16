import UiTitle from '~/src/@app_ui/components/UiTitle'
import UiGradientTitle from '~/src/@app_ui/components/UiGradientTitle'

type Props = {
  titlePart1: string
  titlePart2: string
  gradientFrom: string
  gradientTo: string
}

const OnBoardingPageTitles = (props: Props) => {
  return (
    <div className='mt-[32px] text-start'>
      <UiTitle className='!m-0 !text-[36px] !font-semibold !tracking-[-0.03em]'>
        {props.titlePart1}
      </UiTitle>

      <UiGradientTitle
        className='!m-0 !text-[36px] !font-semibold !tracking-[-0.03em]'
        gradientHashFrom={props.gradientFrom}
        gradientHashTo={props.gradientTo}
      >
        {props.titlePart2}
      </UiGradientTitle>
    </div>
  )
}

export default OnBoardingPageTitles
