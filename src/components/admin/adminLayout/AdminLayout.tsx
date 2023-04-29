

import React from 'react';
import { AdminComponents } from '..';
import { Route, Routes as Switch } from 'react-router-dom';
import { Roads } from '../../../service/Path';
import { Providers } from '../../../providers';
import { HOOKS } from '../../../hooks';
import { AdminPages } from '../../../pages/Lazy';


const AdminLayout: React.FunctionComponent = () => {
  const { state } = Providers.useAuth();
  const { actions } = HOOKS.useRedirect();

  React.useEffect(() => {
    if(state === "admin") {
      actions.goToAdmin();
    }
  }, [state]);


  return (
    <React.Fragment>
      <section className='admin_layout'>
        <aside>
            <AdminComponents.Sidebar/>
        </aside>
        <main>
          <React.Suspense fallback={<h1>Loader...</h1>}>
              <Switch>
                <Route path={Roads.AdminPath.profile} element={<AdminPages.AdminProfile/>}/>
                <Route path={Roads.AdminPath.category} element={<h1>Category</h1>}/>
                <Route path={Roads.AdminPath.contacts} element={<h1>Contacts</h1>}/>
                <Route path={Roads.AdminPath.products} element={<h1>Products</h1>}/>
                <Route path={Roads.AdminPath.slider} element={<h1>Slider</h1>}/>
              </Switch>
          </React.Suspense>
        </main>
      </section>
    </React.Fragment>
  )
}

export default AdminLayout;
