import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  className?: string
}

const UiPageWrapper = (props: Props) => {
  return (
    <div
      className={`relative w-full h-full flex flex-col items-center pt-[47px] pb-[34px] px-[20px] bg-[var(--app-bg-color)] ${props.className}`}
    >
      {props.children}
    </div>
  )
}

export default UiPageWrapper
