import { cn } from '~/src/lib/utils'

import { Input } from '~/src/components/ui/input'

type Props = {
  inputClassName?: string
  value: string
  type: React.ComponentProps<'input'>['type']
  placeholder?: string
  wrapperClassName?: string
  labelText: string
  id: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UiInput = (props: Props) => {
  return (
    <div className={props.wrapperClassName}>
      <label
        className='text-[16px] text-[#d5d5d5] font-[500] tracking-[0.01em] leading-[100%]'
        htmlFor={props.id}
      >
        {props.labelText}
      </label>

      <Input
        className={cn(
          'w-full! h-[56px] mt-[8px]! rounded-[16px] bg-[#302D31] border border-[#302D31] px-[20px] text-[16px] font-[500] tracking-[-0.01em] text-white placeholder:text-[#d5d5d5] placeholder:opacity-100 focus-visible:border-white focus-visible:ring-0',
          props.inputClassName
        )}
        id={props.id}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder ?? ''}
        onChange={props.onChange}
      />
    </div>
  )
}

export default UiInput
