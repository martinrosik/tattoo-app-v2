import { IonImg } from '@ionic/react'

import acraLogo from '~/src/@app_ui/assets/app-logo.svg'

type Props = {
  className?: string
}

const AcradabraLogo = (props: Props) => {
  return (
    <IonImg className={props.className ?? ''} src={acraLogo} alt='flower' />
  )
}

export default AcradabraLogo
