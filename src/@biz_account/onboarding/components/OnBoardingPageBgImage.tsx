type Props = {
  backgroundImage: string
}

const OnBoardingPageBgImage = (props: Props) => {
  return (
    <>
      <img
        src={props.backgroundImage}
        alt=''
        aria-hidden='true'
        className='
          absolute top-0 left-0 w-full h-[70%]
          object-cover object-center
          pointer-events-none
        '
      />

      <div className='absolute top-0 z-[1]! h-[43%] inset-x-0 bg-gradient-to-b from-[var(--app-bg-color)] to-transparent pointer-events-none' />

      <div className='absolute top-[426px] left-1/2 z-[1] w-full h-[200px] pointer-events-none -translate-x-1/2 bg-gradient-to-t from-[var(--app-bg-color)] via-[var(--app-bg-color)] via-[20%] to-[#100B0B00]' />
    </>
  )
}

export default OnBoardingPageBgImage
