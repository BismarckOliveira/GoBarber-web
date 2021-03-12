import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/signIn';
import SignUp from '../pages/signup';
import Route from './Route';

import Dashboard from '../pages/Dashboard';
import FogotPassword from '../pages/FogotPassword';
import ResetPassword from '../pages/ResetPassword';
import teste from '../pages/DashboardTest';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={FogotPassword} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route path="/teste" component={teste} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
