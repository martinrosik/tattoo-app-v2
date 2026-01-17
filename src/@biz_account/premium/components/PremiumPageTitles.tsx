import UiTitle from '~/src/@app_ui/components/UiTitle'
import UiGradientTitle from '~/src/@app_ui/components/UiGradientTitle'
import UiLogo from '~/src/@app_ui/components/UiLogo'

type Props = {
  className?: string
}

const PremiumPageTitles = (props: Props) => {
  return (
    <div
      className={`flex flex-col z-50 justify-center items-center gap-[16px] w-full ${
        props.className ?? ''
      }`}
    >
      <div className='flex flex-row gap-[10px] justify-center w-full'>
        <UiLogo className='w-[20px]' />
        <UiTitle className='!text-[24px] !font-[400] !tracking-[0em] text-center'>
          acradabra
        </UiTitle>
      </div>

      <div className='flex flex-col justify-center items-center w-full text-center'>
        <UiTitle className='!m-0 !font-semibold !text-[36px] !tracking-[-0.06em]'>
          Embody the stories
        </UiTitle>

        <UiGradientTitle
          className='!m-0 !font-semibold !text-[36px] !tracking-[-0.06em] text-center'
          gradientHashFrom='#fff2bc'
          gradientHashTo='#ffc414'
        >
          living within.
        </UiGradientTitle>
      </div>
    </div>
  )
}

export default PremiumPageTitles
