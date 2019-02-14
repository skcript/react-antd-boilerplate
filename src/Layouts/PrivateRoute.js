import React from 'react';
import {
  Route,
} from 'react-router-dom';
import AppLayout from '../Components/Shared/AppLayout';
import Authenticator from './Authenticator';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Authenticator>
      <AppLayout>
        <Component {...props} />
      </AppLayout>
    </Authenticator>
  )} />
)

export default PrivateRoute;