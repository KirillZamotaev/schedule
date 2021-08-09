import React, { FC } from 'react';
import styled from '@emotion/styled';

const RowComponent:FC<any> = ({ children, ...props }) => (
    <div {...props}>{children}</div>
);

export const Row = styled(RowComponent)`
    display: flex;
    justify-content: space-between; 
`;
