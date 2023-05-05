import { UserMetadata } from "firebase/auth";
import React from "react";


export type TypeSetState<T> = React.Dispatch<React.SetStateAction<T>>

export interface IFirebaseConfig {
    apiKey: string
    authDomain: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
  };



export interface IForwardRef {
  type: string,
  placeholder: string,
}


export interface IUser {
  displayName: string,
  email: string,
  avatar: string,
  dates: UserMetadata | undefined
}


export interface IContext {
  token: string | null | undefined
  user: IUser | null
  setRender: TypeSetState<string>
  logOut: React.MouseEventHandler<HTMLButtonElement>
  state: string | null
  setState: TypeSetState<string | null>
  changeState: React.RefCallback<any>
  render: string
}


