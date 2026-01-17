import { cn } from '~/src/@lib_integrations/shadcn/utils'
import { Progress } from '~/src/@app_ui/shadcn/ui/progress'

type Mode = 'cumulative' | 'current'

type Props = {
  className?: string
  progress: number
  totalSteps?: number
  mode?: Mode
  height?: number | string
  activeClassName?: string
  inactiveClassName?: string
}
const UiProgress = ({
  className,
  progress,
  totalSteps = 4,
  mode = 'cumulative',
  height = 8,
  activeClassName = 'bg-green-400',
  inactiveClassName = 'bg-primary/20',
}: Props) => {
  const clamped = Math.min(Math.max(progress, 1), totalSteps)
  const percent =
    mode === 'current' ? (1 / totalSteps) * 100 : (clamped / totalSteps) * 100

  return (
    <Progress
      value={percent}
      className={cn(inactiveClassName, className)}
      style={{ height }}
      indicatorClassName={activeClassName}
    />
  )
}

export default UiProgress
