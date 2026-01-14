import { Redirect, Route } from 'react-router-dom'
import { IonTabs, IonRouterOutlet } from '@ionic/react'

import HomePage from '~/src/@biz_account/home/HomePage'
import TattooCollectionsPage from '~/src/@biz_account/collections/TattooCollectionsPage'
import TryOnPage from '~/src/@biz_account/tryon/TryOnPage'

import TabBar from './TabBar'

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path='/tabs/home' component={HomePage} />

        <Route
          exact
          path='/tabs/collections'
          component={TattooCollectionsPage}
        />
        <Route exact path='/tabs/tryon' component={TryOnPage} />

        <Route exact path='/tabs'>
          <Redirect to='/tabs/home' />
        </Route>
      </IonRouterOutlet>

      <TabBar />
    </IonTabs>
  )
}

export default Tabs
