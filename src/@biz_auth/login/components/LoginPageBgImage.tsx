import UiLogo from '~/src/@app_ui/components/UiLogo'
import loginEye from '~/src/@app_ui/assets/cosmic-eye.png'

const LoginPageBgImage = () => {
  return (
    <div className='fixed top-0 inset-x-0 bg-[var(--app-bg-color)]'>
      <UiLogo className='fixed top-[71px] left-1/2 -translate-x-1/2 z-10' />
      <img
        className='w-full h-auto scale-x-[1] select-none'
        src={loginEye}
        alt='Login Eye Background'
        draggable={false}
      />

      <div className='absolute top-0 z-[1]! h-[43%] inset-x-0 bg-gradient-to-b from-[var(--app-bg-color)] to-transparent pointer-events-none' />

      <div className='absolute bottom-0 z-[1]! h-[50%] inset-x-0 bg-gradient-to-t from-[var(--app-bg-color)] via-[var(--app-bg-color)] via-[57%] to-[#100B0B00] pointer-events-none' />
    </div>
  )
}

export default LoginPageBgImage
