

import React, { ReactNode } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { Providers } from '../../../../providers';
import { HOOKS } from '../../../../hooks';
import { JoinWithGoogleProvider, auth } from '../../../../firebase/firebase';

import cls from "./index.module.scss";


interface IGog {
  location: ReactNode
};

const AuthGoogle: React.FunctionComponent<IGog> = ({location}) => {
  const { actions } = HOOKS.useRedirect();
  const { setRender } = Providers.useAuth();

    const handleLogin = () => {
        signInWithPopup(auth, JoinWithGoogleProvider)
            .then((res: any) => {
                localStorage.setItem("accessToken", res?.user.accessToken);
                actions.goToMain();
                setRender("Reload!");
            })
    };

  return (
    <React.Fragment>
      <div className={cls.goog}>
        <button onClick={handleLogin} className={cls.google}>
          <p>
              {location}
          </p>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/471px-Google_%22G%22_Logo.svg.png' alt=''/>
        </button>
      </div>
    </React.Fragment>
  )
}

export default AuthGoogle;
