

import React from 'react';
import { AdminComponents } from '../components/admin';


const Admin: React.FunctionComponent = () => {
  const auth = true;


  return (
    <React.Fragment>
      {
        auth 
          ? <AdminComponents.AdminLayout/> 
          : <AdminComponents.AccessAdmin/>
      }
    </React.Fragment>
  )
}

export default Admin;
