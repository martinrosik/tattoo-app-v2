import UISmallText from '~/src/@app_ui/components/UiSmallText'

const PremiumPageFooter = () => {
  return (
    <div className='flex flex-row justify-center items-center pt-[24px] gap-[24px]'>
      <UISmallText
        className='!font-[500]'
        color='lightGrey'
        text='Restore purchase'
      />
      <UISmallText
        className='!font-[500]'
        color='lightGrey'
        text='Cancel any time'
      />
    </div>
  )
}

export default PremiumPageFooter
