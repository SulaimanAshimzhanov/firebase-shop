

import React from 'react';

import "./index.scss";

interface ILoader {
  fullHeight: string
}

const Loader: React.FunctionComponent<ILoader> = ({fullHeight}) => {
  return (
    <div className="loader_container" style={{height: fullHeight}}>
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader;
