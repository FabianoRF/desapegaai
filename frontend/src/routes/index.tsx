import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'
import UserItems from '../pages/UserItems'
import Register from '../pages/Register'

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' component={SignIn} exact />
    <Route path='/signup' component={SignUp} />

    <Route path='/dashboard' component={Dashboard} isPrivate />
    <Route path='/user-items' component={UserItems} isPrivate />
    <Route path='/register' component={Register} isPrivate />
  </Switch>
)

export default Routes
