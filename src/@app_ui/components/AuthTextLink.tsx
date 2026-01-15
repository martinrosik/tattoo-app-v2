type Props = {
  className?: string
  prefixText?: string
  actionText: string
  onClick?: () => void
}

const AuthTextLink = ({
  className,
  prefixText,
  actionText,
  onClick,
}: Props) => {
  return (
    <span
      className={`text-[14px] font-[600] tracking-[-0.01em] leading-[100%] text-center ${
        className ?? ''
      }`}
    >
      <span className='text-[#D5D5D5]'>{prefixText} </span>

      <span
        className='text-white cursor-pointer hover:underline'
        role='button'
        tabIndex={0}
        onClick={onClick}
      >
        {actionText}
      </span>
    </span>
  )
}

export default AuthTextLink
