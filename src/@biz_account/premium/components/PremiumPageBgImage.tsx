import treeBg from '~/src/@biz_account/premium/assets/tree-bg.png'

const PremiumPageBgImage = () => {
  return (
    <>
      <img
        src={treeBg}
        alt='Premium Background'
        className='absolute top-0 left-0 w-full h-[50%] object-cover object-center z-0 select-none'
        draggable={false}
      />

      <div className='absolute z-0 h-96 mt-32 mb-300 inset-0 bg-gradient-to-t from-[var(--app-bg-color)] via-[var(--app-bg-color)] via-[57%] to-transparent pointer-events-none' />
    </>
  )
}

export default PremiumPageBgImage
