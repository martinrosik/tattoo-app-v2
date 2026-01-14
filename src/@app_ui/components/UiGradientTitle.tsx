import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  className?: string
  gradientHashFrom: string
  gradientHashTo: string
}

const AcraGradientTitle = (props: Props) => {
  return (
    <h1
      className={`w-full inline-block m-0 bg-clip-text text-transparent tracking-[-0.03em] leading-[100%] ${
        props.className ?? ''
      }`}
      style={{
        WebkitTextFillColor: 'transparent',
        backgroundImage: `linear-gradient(
          180deg,
          ${props.gradientHashFrom} 0.03%,
          ${props.gradientHashTo} 82.74%
        )`,
      }}
    >
      {props.children}
    </h1>
  )
}

export default AcraGradientTitle
