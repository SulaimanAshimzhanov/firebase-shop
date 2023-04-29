import React from "react";
import { IForwardRef } from "../../../../types/types";

export const TextInput = React.forwardRef(({
    type="",
    placeholder="",
    ...rest
}: IForwardRef, ref: React.ForwardedRef<HTMLInputElement>) => (
    <input
        type={type}
        placeholder={placeholder}
        {...rest}
        ref={ref}
    />
))