import React from "react";

interface IError {
    err: string | any
};


export const Errors: React.FunctionComponent<IError> = ({err}) => 
    <p style={{color: "red"}}>{err}</p>