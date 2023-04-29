

import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { HOOKS } from '../../hooks';
import { Providers } from '../../providers';
import { Roads } from '../../service/Path';
import { LayoutPages } from '../Lazy';
import { Components } from '../../components/apps';


const LayoutRoutes = () => {
  const { token } = Providers.useAuth();
  const { actions } = HOOKS.useRedirect()

  React.useEffect(() => {
    if(token === undefined) {
      actions.goToLogin();
    }
  }, [token]);

  if(!token) return <Components.Loader fullHeight={"50vh"}/>

  return (
    <React.Fragment>
      <Switch>
        <Route path={Roads.LayoutPath.main} element={<LayoutPages.Main/>}/>
        <Route path={Roads.LayoutPath.profile} element={<LayoutPages.Profile/>}/>
        <Route path={Roads.LayoutPath.products} element={<LayoutPages.Products/>}/>
      </Switch>
    </React.Fragment>
  )
}

export default LayoutRoutes;
