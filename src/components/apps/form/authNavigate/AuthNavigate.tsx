

import React from 'react';
import { Link } from 'react-router-dom';
import { Roads } from '../../../../service/Path';

interface INavigate {
    location: React.ReactNode
};

const AuthNavigate: React.FunctionComponent<INavigate> = ({location}) => {
  return (
    <Link
        style={{color: "white"}}
        to={
            location === "Sign Up"
                ? Roads.AllPath.login
                : Roads.AllPath.register
        }
    >
        {
            location === "Sign Up"
                ? "Alredy have an account"
                : "You don't have account"
        }
    </Link>
  )
}

export default AuthNavigate;
