import UISmallText from '~/src/@app_ui/components/UiSmallText'

const PremiumPageFooter = () => {
  return (
    <div className='flex flex-row justify-center items-center pt-[24px] gap-[24px]'>
      <UISmallText color='white' text='Restore purchase' />
      <UISmallText color='white' text='Cancel any time' />
    </div>
  )
}

export default PremiumPageFooter
