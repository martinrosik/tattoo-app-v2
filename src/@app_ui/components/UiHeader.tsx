type Props = {
  className?: string
  title?: string
  left?: React.ReactNode
  center?: React.ReactNode
  right?: React.ReactNode
}

const UiHeader = (props: Props) => {
  return (
    <header
      className={`w-full h-14 z-10 flex justify-center items-center text-white ${
        props.className ?? ''
      }`}
    >
      <div className='flex flex-1 justify-start items-center'>{props.left}</div>

      <div className='flex flex-12 justify-center items-center font-semibold text-lg'>
        {props.center ?? props.title}
      </div>

      <div className='flex flex-1 justify-end items-center'>{props.right}</div>
    </header>
  )
}

export default UiHeader
