import React, { FC } from 'react';

export const Layout:FC<any> = ({ children, ...props }) => (
    <div {...props}>{children}</div>
);