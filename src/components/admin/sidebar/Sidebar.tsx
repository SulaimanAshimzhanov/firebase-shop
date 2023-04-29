

import React from 'react';

import { Providers } from '../../../providers';
import cls from "./index.module.scss";
import { LIST } from '../../../utils/List';
import { NavLink } from 'react-router-dom';


interface IAdminLeftList {
  id: number
  title: string | null
  img: string
  event: () => void | undefined
}



const Sidebar: React.FunctionComponent<any> = () => {
  const { changeState, user } = Providers.useAuth();
  const [ava, setAvatar] = React.useState<string>("");

  const noneAvatar = "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png";

  React.useLayoutEffect(() => {
    if(user?.avatar) {
      setAvatar(user?.avatar)
    } else {
      setAvatar(noneAvatar)
    }
  }, [user]);

  const adminSidebarLeftList: IAdminLeftList[] = [
    {
      id: 1,
      title: "web",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Emblem-web.svg/1200px-Emblem-web.svg.png",
      event: () => {
        changeState("web")
      }
    },
    {
      id: 2,
      title: null,
      img: ava,
      event: () => {

      }
    }
  ];


  return (
    <React.Fragment>
      <section className={cls.sidebar}>
        <section className={cls.sidebar_left}>
          {
            adminSidebarLeftList.map(item => (
              <div 
                className={cls.sidebar_left_list} 
                key={item.id}
                onClick={() => item.event()}
              >
                <img
                  src={item.img}
                  alt=''
                />
                <p>{item.title}</p>
            </div>
            ))
          }
        </section>
        <section className={cls.sidebar_right}>
          <h1>Administration</h1>

          <ul className={cls.sidebar_right_list}>
            {
              LIST.adminList.map(item => (
                <li key={item.id}>
                  <NavLink className={({isActive}) => isActive ? cls.active : null} to={item.route}>
                    <item.icons/>
                    {item.title}
                  </NavLink>
                </li>
              ))
            }
          </ul>

        </section>
      </section>
    </React.Fragment>
  )
}

export default Sidebar;
