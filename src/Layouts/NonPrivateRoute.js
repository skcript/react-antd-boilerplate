import React from 'react';

import {
  Route,
} from 'react-router-dom';

import Authenticator from './Authenticator';
import { Layout } from 'antd';

const NonPrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (

    <Authenticator reverse={true}>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout>
          <div>
            <Component {...props} />
          </div>
        </Layout>
      </Layout>
    </Authenticator>
  )} />
)

export default NonPrivateRoute;