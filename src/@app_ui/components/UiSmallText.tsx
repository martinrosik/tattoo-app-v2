type Props = {
  className?: string
  text: string
  color: 'lightGrey' | 'white'
  onClick?: (...args: any[]) => void
}

const UISmallText = (props: Props) => {
  return (
    <span
      className={`text-[14px] ${
        props.color === 'lightGrey' ? 'text-[#d5d5d5]' : 'text-white'
      } text-center font-[600] tracking-[-0.01em] leading-[100%] ${
        props.className
      }`}
    >
      <span onClick={props.onClick}>{props.text}</span>
    </span>
  )
}

export default UISmallText
