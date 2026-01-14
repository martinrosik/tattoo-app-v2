import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  className?: string
}

const UiTitle = (props: Props) => {
  return (
    <h1
      className={`m-0! tracking-[-0.03em] leading-[100%] text-white ${props.className}`}
    >
      {props.children}
    </h1>
  )
}

export default UiTitle
