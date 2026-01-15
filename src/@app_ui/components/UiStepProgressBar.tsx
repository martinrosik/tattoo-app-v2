import { PropsWithChildren } from 'react'

type Mode = 'cumulative' | 'current'

type Props = PropsWithChildren & {
  className?: string
  progress: number
  totalSteps?: number
  mode?: Mode
  width?: string | number
  height?: string | number
  activeColor?: string
  inactiveColor?: string
}

const AcraStepProgressBar = ({
  className,
  progress,
  totalSteps = 4,
  mode = 'cumulative',
  width,
  height = '8px',
  activeColor = 'bg-green-400',
  inactiveColor = 'bg-gray-500',
}: Props) => {
  const clampedProgress = Math.min(Math.max(progress, 1), totalSteps)
  const currentIndex = clampedProgress - 1

  return (
    <div className={`flex items-center ${className ?? ''}`} style={{ width }}>
      <div className='w-full flex gap-1'>
        {Array.from({ length: totalSteps }).map((_, index) => {
          const isActive =
            mode === 'current' ? index === currentIndex : index <= currentIndex

          const bgClass = isActive ? activeColor : inactiveColor

          return (
            <div
              className={`flex-1 rounded-full transition-colors duration-300 ease-out ${bgClass}`}
              style={{ height }}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default AcraStepProgressBar
