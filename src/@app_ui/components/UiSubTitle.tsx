import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  className?: string
}

const UiSubTitle = (props: Props) => {
  return (
    <h1
      className={`m-0! !text-[16px] tracking-[-0.01em] leading-[100%] text-[#D5D5D5] ${props.className}`}
    >
      {props.children}
    </h1>
  )
}

export default UiSubTitle
