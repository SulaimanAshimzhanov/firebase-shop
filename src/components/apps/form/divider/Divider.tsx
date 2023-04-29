import React from "react";

import cls from "./index.module.scss";

interface IDivider {
    children: React.ReactNode
};

export const Divider: React.FunctionComponent<IDivider> = ({children}) => 
    <section className={cls.divider}>{children}</section>