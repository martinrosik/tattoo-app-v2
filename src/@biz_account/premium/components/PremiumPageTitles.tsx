import UiGradientTitle from '~/src/@app_ui/components/UiGradientTitle'
import UiLogo from '~/src/@app_ui/components/UiLogo'
import UiTitle from '~/src/@app_ui/components/UiTitle'

type Props = {
  className?: string
}

const PremiumPageTitles = (props: Props) => {
  return (
    <div
      className={`flex flex-col z-50 justify-center items-center gap-[16px] ${
        props.className ?? ''
      }`}
    >
      <div className='flex flex-row gap-[10px]'>
        <UiLogo className='w-[20px]' />

        <UiTitle className='!text-[24px] !tracking-[0em]'>acradabra</UiTitle>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <UiTitle className='!m-0 !font-semibold !text-[36px] !tracking-[-0.06em]'>
          Embody the stories
        </UiTitle>

        <UiGradientTitle
          className='!m-0 !font-semibold !text-[36px] !tracking-[-0.06em]'
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
