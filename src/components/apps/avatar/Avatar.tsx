

import React from 'react';
import { HOOKS } from '../../../hooks';

import cls from "./index.module.scss";

interface IAvatar {
  avatar: string
  w: string
  h: string
}

const Avatar: React.FunctionComponent<IAvatar> = ({avatar, w, h}) => {
  const { actions } = HOOKS.useRedirect();
  const [ava, setAvatar] = React.useState<string>("");

    const noneAvatar = "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png"

  React.useLayoutEffect(() => {
    if(avatar) {
      setAvatar(avatar)
    } else {
      setAvatar(noneAvatar)
    }
  }, [avatar]);

  return (
    <React.Fragment>
      <img
        onClick={actions.goToProfile}
        className={cls.avatar} 
        src={ava} 
        alt=""
        width={w}
        height={h}
      />
    </React.Fragment>
  )
}

export default Avatar;
