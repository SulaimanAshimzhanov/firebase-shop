

import React from 'react';

import cls from "./index.module.scss";
import Routes from '../routes/Routes';
import Admin from '../routes/Admin';
import { Providers } from '../providers';

const Screen: React.FunctionComponent<any> = () => {
  const { state, changeState } = Providers.useAuth();



  return (
    <React.Fragment>
      {
        state === "screen" && (
          <aside className={cls.screen_container}>
            <section className={cls.screen_container_card}>
              <h1>How do you want to assign?</h1>

              <div className={cls.screen_container_card_btn}>
                <button 
                  onClick={() => changeState("web")}>
                  Website
                </button>
                <button 
                  onClick={() => changeState("admin")}>
                  Admin
                </button>
              </div>
            </section>
          </aside>
        )
      }

      {state === "web" && <Routes/>}

      {state === "admin" && <Admin/>}
    </React.Fragment>
  )
}

export default Screen;