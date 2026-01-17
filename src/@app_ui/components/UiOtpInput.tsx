import * as React from 'react'
import { OTPInput, OTPInputContext } from 'input-otp'
import { cn } from '~/src/@lib_integrations/shadcn/utils'

type UiOtpInputProps = {
  inputClassName?: string
  value: string
  length?: number
  labelText: string
  id: string
  wrapperClassName?: string
  containerClassName?: string
  disabled?: boolean
  placeholderChar?: string
  onChange: (value: string) => void
}

const UiOtpInput = (props: UiOtpInputProps) => {
  const {
    value,
    onChange,
    length = 6,
    labelText,
    id,
    wrapperClassName,
    containerClassName,
    inputClassName,
    disabled = false,
    placeholderChar = '',
  } = props

  return (
    <div className={cn('space-y-2', wrapperClassName)}>
      <label
        htmlFor={id}
        className='text-[16px] text-[#d5d5d5] font-[500] tracking-[0.01em] leading-[100%]'
      >
        {labelText}
      </label>

      <InputOTPControlled
        id={id}
        maxLength={length}
        value={value}
        onChange={onChange}
        disabled={disabled}
        containerClassName={cn(
          'flex items-center justify-center gap-2',
          containerClassName
        )}
        className='disabled:cursor-not-allowed'
      >
        <InputOTPGroup className='gap-[10px]'>
          {Array.from({ length }).map((_, i) => (
            <InputOTPSlot
              key={i}
              index={i}
              className={cn(
                'h-[56px] w-[56px] rounded-[16px] bg-[#302D31] border border-[#302D31]',
                'text-[20px] font-[500] tracking-[-0.01em] text-white text-center',
                "data-[char='']:text-[#d5d5d5] data-[char='']:opacity-60",
                'data-[active=true]:border-white data-[active=true]:ring-0 data-[active=true]:shadow-[0_0_0_3px_rgba(255,255,255,0.15)]',
                'aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive/30',
                inputClassName
              )}
            >
              {placeholderChar}
            </InputOTPSlot>
          ))}
        </InputOTPGroup>
      </InputOTPControlled>
    </div>
  )
}

function InputOTPControlled({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot='input-otp'
      containerClassName={cn(
        'flex items-center has-disabled:opacity-50',
        containerClassName
      )}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='input-otp-group'
      className={cn('flex items-center', className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot='input-otp-slot'
      data-active={isActive}
      className={cn(
        'relative flex items-center justify-center border-y border-r',
        'transition-all outline-none',
        'first:rounded-l-[16px] first:border-l last:rounded-r-[16px]',
        'data-[active=true]:z-10',
        className
      )}
      {...props}
    >
      {char || children}
      {hasFakeCaret && (
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
          <div className='animate-caret-blink bg-white h-5 w-px duration-1000' />
        </div>
      )}
    </div>
  )
}

export default UiOtpInput
