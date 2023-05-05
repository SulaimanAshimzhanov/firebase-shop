

import React from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase/firebase';
import { IUser } from '../types/types';
import { HOOKS } from '../hooks';

interface IAuthProvider {
  children: React.ReactNode
};


const AuthProvider: React.FunctionComponent<IAuthProvider> = (props: IAuthProvider) => {
  const [ user, setUser] = React.useState<IUser | null>(null);
  const [token, setToken] = React.useState<string | null | undefined>(null);
  const [render, setRender] = React.useState<string>("");
  const [state, setState] = React.useState<string | null>("screen");
  const { actions } = HOOKS.useRedirect();


  React.useEffect(() => {
    if(!localStorage.getItem("state")) {
      localStorage.setItem("state", "screen");
    } else {
      const st = localStorage.getItem("state");
      setState(st);
    }
  }, [state]);


  const changeState = React.useCallback((st: string) => {
    localStorage.setItem("state", st);
    setState(st);

    switch(st) {
      case "screen":
        actions.goToMain();
        break
      case "web":
        actions.goToMain();
        break
      case "admin":
        actions.goToAdmin();
        break
      default:
        actions.goToMain();
    }
  }, [actions]);


  const getToken = React.useCallback(() => {
    const tokenData = localStorage.getItem("accessToken");

    if(tokenData) {
      setToken(tokenData)
    } else {
      setToken(undefined);
    }
  }, []);

  const getUser = React.useCallback(() => {
    onAuthStateChanged(auth, res => {
      setUser({
        displayName: res?.displayName || "",
        email: res?.email || "",
        avatar: res?.photoURL || "",
        dates: res?.metadata 
      })
    })
  }, []);


  const logOut = React.useCallback(() => {
    localStorage.clear();
    setUser(null);
    setToken(undefined);
    setRender("Exit!");
    signOut(auth);
    changeState("screen");
  }, [changeState]);



  React.useEffect(() => {
    getToken()
    getUser()
  }, [getToken, getUser, render]);

  

  const values = React.useMemo(() => ({
    token,
    user,
    setRender,
    logOut,
    state,
    setState,
    changeState,
    render
  }),
    [
      token,
      user,
      setRender,
      logOut,
      state,
      setState,
      changeState,
      render
    ]
  );

  return (
    <React.Fragment>
      <AuthContext.Provider value={values}>
        {props.children}
      </AuthContext.Provider>
    </React.Fragment>
  )
}

export default AuthProvider;
