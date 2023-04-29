

import React from 'react';

import cls from "./index.module.scss";

interface ISubmit {
    location: React.ReactNode
}

const AuthSubmit: React.FunctionComponent<ISubmit> = ({location}) => {
  return (
    <React.Fragment>
      <button className={cls.submit} type='submit'>
        {location}
      </button>
    </React.Fragment>
  )
}

export default AuthSubmit;
