import { IonImg } from '@ionic/react'

import crown from '~/src/@app_ui/assets/crown.svg'

type PlanType = 'monthly' | 'annual'

type Props = {
  className?: string
  title: string
  price: string
  subtitle: string
  icon?: string
  planType?: PlanType
  isSelected?: boolean
  showCrown?: boolean
  withGradientText?: boolean
  withGradientBg?: boolean
  onClick?: () => void
}

const PremiumPageButton = ({
  title,
  price,
  subtitle,
  icon,
  planType = 'monthly',
  isSelected = false,
  showCrown = false,
  withGradientText = false,
  withGradientBg = false,
  onClick,
  className = '',
}: Props) => {
  const baseBg = 'bg-[#302D31]'
  const selectedBg = planType === 'annual' ? 'bg-yellow-500' : 'bg-[#3e3b40]'

  const bgClass = withGradientBg
    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950'
    : isSelected
      ? selectedBg
      : baseBg

  const titleClass = withGradientText
    ? 'bg-gradient-to-b from-[#FFEEBC] to-[#FECD3C] bg-clip-text text-transparent'
    : 'text-white'

  return (
    <button
      type='button'
      onClick={onClick}
      className={`
        relative w-full h-[89px] flex flex-col justify-center overflow-hidden
        rounded-2xl transition-all duration-300
        hover:scale-105 hover:shadow-2xl
        active:scale-100
        ${bgClass} ${className}
      `}
    >
      <div className='px-[16px] pb-[16px] text-left'>
        <div className='flex items-center'>
          {showCrown && (
            <IonImg src={crown} className='mr-1.5 h-4 w-4 mt-2' alt='crown' />
          )}
          {icon && <IonImg src={icon} alt='icon' className='mr-1.5 h-6 w-6' />}
          <h3
            className={`
              ${titleClass}
              !text-[16px] font-semibold leading-none tracking-[-0.01em]
            `}
            style={
              withGradientText
                ? {
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }
                : undefined
            }
          >
            {title}
          </h3>
        </div>

        <p className='mt-1 text-[14px] font-semibold leading-none tracking-[-0.01em] text-white'>
          {price}
        </p>

        <p className='mt-[7px] text-[14px] font-medium leading-none tracking-[-0.01em] text-[#D5D5D5]'>
          {subtitle}
        </p>
      </div>

      <div className='pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-20'>
        <div
          className='
            absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent
            -skew-x-12 translate-x-full group-hover:translate-x-[-100%]
            transition-transform duration-1000
          '
        />
      </div>
    </button>
  )
}

export default PremiumPageButton
