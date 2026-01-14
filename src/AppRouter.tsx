import { Route, Redirect } from 'react-router-dom'
import { IonRouterOutlet } from '@ionic/react'

import LoginPage from './@biz_auth/login/LoginPage'
import EmailLogin from './@biz_auth/emaillogin/EmailLoginPage'
import RegisterPage from './@biz_auth/register/RegisterPage'
import OnBoardingPage from './@biz_account/onboarding/OnBoardingPage'
import PremiumPage from './@biz_account/premium/PremiumPage'
import Tabs from '~/src/@app_ui/components/Tabs'

const AppRouter = () => {
  return (
    <IonRouterOutlet>
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/email-login' component={EmailLogin} />
      <Route exact path='/register' component={RegisterPage} />
      <Route exact path='/on-boarding' component={OnBoardingPage} />
      <Route exact path='/premium' component={PremiumPage} />

      <Route path='/tabs' component={Tabs} />

      <Route exact path='/'>
        <Redirect to='/login' />
      </Route>

      <Route>
        <Redirect to='/login' />
      </Route>
    </IonRouterOutlet>
  )
}

export default AppRouter
