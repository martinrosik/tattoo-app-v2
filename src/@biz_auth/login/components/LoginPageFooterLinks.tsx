import UiSmallText from '~/src/@app_ui/components/UiSmallText'

const LoginPageFooterLinks = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-6 mt-[15px]'>
      <UiSmallText
        className='!font-[500]'
        color='lightGrey'
        text=' Privacy Policy'
      />

      <UiSmallText
        className='!font-[500]'
        color='lightGrey'
        text='Terms of Service'
      />
    </div>
  )
}

export default LoginPageFooterLinks
