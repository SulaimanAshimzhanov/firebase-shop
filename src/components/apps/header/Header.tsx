

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Components } from '..';
import { Providers } from '../../../providers';
import { LIST } from '../../../utils/List';

import cls from "./index.module.scss";


const Header = () => {
  const { user, token } = Providers.useAuth();

  const handleSearch = (e: any) => {
    if(e.key === "Enter") {
      
    }
  }

  return (
    <React.Fragment>
      <Components.Container>
        <header>
          <section className={cls.header_top}>
              <Components.Logo/>

              <aside className={cls.header_top_icons}>
                  <div className={cls.header_top_icons_inline}>
                    {
                         LIST.HeaderTopIcons.filter((item, i) => (user && token) ? i < 2 : i < 5).map(item => (
                          <React.Fragment key={item.id}>
                            {
                              !user
                                ? null
                                : <p key={item.id}>
                                    <Link to={item.route || ""}>
                                        {item.icon && <item.icon/>}
                                        {
                                          item?.caption
                                        }
                                    </Link>
                                  </p>
                            }
                          </React.Fragment>
                      ))
                    }
                  </div>
                  <div>
                    {
                      (user && token) 
                        ? <Components.Avatar 
                            avatar={user?.avatar}
                            w={"35px"}
                            h={"35px"}
                          /> 
                        : null
                    }
                  </div>
              </aside>
          </section>

          <section className={cls.header_bottom}>
              <ul>
                {
                  LIST.HeaderBottomList.map(item => (
                    <li key={item.id}>
                      <NavLink to={item.route || ""}>
                        {item.caption}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>

              <form onKeyDown={handleSearch}>
                <Components.SearchInput/>
              </form>
          </section>
        </header>
      </Components.Container>
    </React.Fragment>
  )
}

export default Header;
