import UiGradientTitle from '~/src/@app_ui/components/UiGradientTitle'
import UiTitle from '~/src/@app_ui/components/UiTitle'

const LoginPageTitles = () => {
  return (
    <div className='mb-7'>
      <div className='mb-3'>
        <UiTitle className='!text-[32px] !font-semibold'>
          Turn ideas into tattoos,
        </UiTitle>

        <UiGradientTitle
          className='!m-0 !text-[32px] !font-semibold !tracking-[-0.03em]'
          gradientHashFrom='#BCFFCD'
          gradientHashTo='#3CFE6C'
        >
          uniquely yours.
        </UiGradientTitle>
      </div>

      <UiTitle className='!text-[16px] text-[#D5D5D5] !font-[400]'>
        Embody your essence today.
      </UiTitle>
    </div>
  )
}

export default LoginPageTitles
