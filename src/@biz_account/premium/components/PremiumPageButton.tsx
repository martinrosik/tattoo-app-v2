import { IonIcon } from '@ionic/react'

import crown from '~/src/@biz_account/premium/assets/premiumCrown.svg'

type Props = {
  title: string
  price: string
  subtitle: string
  icon?: string
  planType?: 'annual' | 'monthly'
  isSelected?: boolean
  isCrownShowing?: boolean
  withGradientText?: boolean
  withGradientBackground?: boolean
  onClick?: () => void
  className?: string
}

const PremiumPageButton = ({
  title,
  price,
  subtitle,
  icon,
  planType = 'monthly',
  isSelected = false,
  isCrownShowing = false,
  withGradientText = false,
  withGradientBackground = false,
  onClick,
  className = '',
}: Props) => {
  const selectedBg = planType === 'annual' ? 'bg-yellow-500' : 'bg-[#3e3b40]'
  const defaultBg = 'bg-[#302D31]'
  const bgClass = withGradientBackground
    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950'
    : isSelected
    ? selectedBg
    : defaultBg

  const titleClass = withGradientText
    ? 'bg-gradient-to-b from-[#FFEEBC] to-[#FECD3C] bg-clip-text text-transparent'
    : 'text-white'

  return (
    <button
      onClick={onClick}
      className={`
        relative w-full h-[89px] flex flex-col justify-center overflow-hidden
        rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-100
        ${bgClass} ${className}
      `}
    >
      <div className='!px-[16px] !pb-[16px] text-left'>
        <div className='flex items-center gap-[4px]'>
          {isCrownShowing && <IonIcon icon={crown} />}
          {icon && (
            <img src={icon} alt='icon' className='w-5 h-5 flex-shrink-0' />
          )}
          <h3
            className={titleClass}
            style={{
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '-1%',
              WebkitBackgroundClip: withGradientText ? 'text' : undefined,
              WebkitTextFillColor: withGradientText ? 'transparent' : undefined,
            }}
          >
            {title}
          </h3>
        </div>

        <p
          style={{
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '-1%',
            color: '#FFFFFF',
          }}
        >
          {price}
        </p>

        <p
          className='pt-[7px]'
          style={{
            fontSize: '14px',
            fontWeight: 500,
            letterSpacing: '-1%',
            color: '#D5D5D5',
          }}
        >
          {subtitle}
        </p>
      </div>

      <div className='absolute inset-0 opacity-0 hover:opacity-20 transition-opacity pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000' />
      </div>
    </button>
  )
}

export default PremiumPageButton
