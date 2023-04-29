

import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { HOOKS } from '../../hooks';
import { Providers } from '../../providers';
import { Roads } from '../../service/Path';
import { AuthPages } from '../Lazy';
import { Components } from '../../components/apps';

const AuthRoutes: React.FunctionComponent = () => {
  const { token, user } = Providers.useAuth();
  const { actions } = HOOKS.useRedirect();

  React.useEffect(() => {
    if(token && user) {
      actions.goToMain();
    } 
  }, [token, user]);

  if(token) return <Components.Loader fullHeight={"50vh"}/>

  return (
    <React.Fragment>
      <Switch>
        <Route path={Roads.AuthPath.register} element={<AuthPages.Register/>}/>
        <Route path={Roads.AuthPath.login} element={<AuthPages.Login/>}/>
      </Switch>
    </React.Fragment>
  )
}

export default AuthRoutes;
