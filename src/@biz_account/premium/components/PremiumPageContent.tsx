import { useState } from 'react'

import UiButton from '~/src/@app_ui/components/UiButton'
import PremiumPageFooter from './PremiumPageFooter'
import PremiumPageButton from './PremiumPageButton'

const PremiumPageContent = () => {
  const [selectedPlan, setSelectedPlan] = useState<'annual' | 'monthly'>(
    'annual'
  )

  return (
    <div className='w-full h-[231px] p-4 bg-black rounded-2xl'>
      <div className='flex flex-row gap-2 pb-4'>
        <PremiumPageButton
          title='Annual'
          price='$49.99/year'
          subtitle='$4.17/month'
          showCrown={true}
          planType='annual'
          isSelected={selectedPlan === 'annual'}
          onClick={() => setSelectedPlan('annual')}
        />

        <PremiumPageButton
          title='Monthly'
          price='$6.99/month'
          subtitle='Start now'
          planType='monthly'
          isSelected={selectedPlan === 'monthly'}
          onClick={() => setSelectedPlan('monthly')}
        />
      </div>

      <UiButton variant='acra' size='acra48px'>
        Start 3 day trial for FREE
      </UiButton>

      <PremiumPageFooter />
    </div>
  )
}

export default PremiumPageContent
