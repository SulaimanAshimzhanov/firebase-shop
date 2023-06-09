

import React from 'react';
import genericName from '../../../helpers/genericName';
import { Providers } from '../../../providers';
import { Components } from '../../../components/apps';
import { MdAdminPanelSettings } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";

import cls from "./index.module.scss";

const Profile = () => {
    const {
       user, 
       token, 
       logOut, 
       changeState 
    } = Providers.useAuth();
    

    if(!user) return <Components.Loader fullHeight={"50vh"}/>


  return (
    <React.Fragment>
      <Components.Container>
        <section className={cls.profile_page}>
            <div className={cls.profile_page_wrapper}>
                <Components.Divider>
                {
                      (user && token) 
                        ? <Components.Avatar 
                            avatar={user?.avatar}
                            w={"200px"}
                            h={"200px"}
                          /> 
                        : null
                    }
                </Components.Divider>

                <div className={cls.profile_page_wrapper_info}>
                    <h1>{user.displayName || genericName()}</h1>

                    <p>{user?.email}</p>
                </div>
            </div>

            <button onClick={() => changeState("admin")} className={cls.admin}>
              <MdAdminPanelSettings/>  
              Admin
            </button>
            <button onClick={logOut} className={cls.signOut}>
              <VscSignOut/>    
              Sign Out
            </button>
        </section>
      </Components.Container>
    </React.Fragment>
  )
}

export default Profile
