

import React from 'react';
import { Route, Routes as Switch } from "react-router-dom";
import { Routers } from '../pages';
import { Roads } from '../service/Path';
import { Components } from '../components/apps';

const Routes: React.FunctionComponent = () => {
  return (
    <React.Fragment>
        <Components.Header/>
      <React.Suspense fallback={<>Loader...</>}>
        <Switch>
            <Route path={Roads.MainPath.layout} element={<Routers.LayoutRoutes/>}/>
            <Route path={Roads.MainPath.auth} element={<Routers.AuthRoutes/>}/>
        </Switch>
      </React.Suspense>
    </React.Fragment>
  )
}

export default Routes;
