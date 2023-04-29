

import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import { Roads } from '../../service/Path'


const AdminRoutes: React.FunctionComponent<any> = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path={Roads.AdminPath.profile} element={<h1>Profile</h1>}/>
        <Route path={Roads.AdminPath.category} element={<h1>Category</h1>}/>
        <Route path={Roads.AdminPath.contacts} element={<h1>Contacts</h1>}/>
        <Route path={Roads.AdminPath.products} element={<h1>Products</h1>}/>
      </Switch>
    </React.Fragment>
  )
}

export default AdminRoutes
