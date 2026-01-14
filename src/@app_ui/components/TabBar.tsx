import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react'

import home from '~/src/@app_ui/assets/home.svg'
import folder from '~/src/@app_ui/assets/folder.svg'
import generatephoto from '~/src/@app_ui/assets/generate-photo.svg'

const TabBar = () => {
  return (
    <IonTabBar slot='bottom' color='acracolor'>
      <IonTabButton tab='home' href='/tabs/home'>
        <IonIcon icon={home} />
        <IonLabel>Home</IonLabel>
      </IonTabButton>

      <IonTabButton tab='collection' href='/tabs/collections'>
        <IonIcon icon={folder} />
        <IonLabel>Collections</IonLabel>
      </IonTabButton>

      <IonTabButton tab='tryon' href='/tabs/tryon'>
        <IonIcon icon={generatephoto} />
        <IonLabel>Try On</IonLabel>
      </IonTabButton>
    </IonTabBar>
  )
}

export default TabBar
