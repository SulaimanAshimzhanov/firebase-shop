

import React from 'react';

import cls from "./index.module.scss";

const Container = ({children}: any) => {
  return (
    <div className={cls.container}>
      {children}
    </div>
  )
}

export default Container;
