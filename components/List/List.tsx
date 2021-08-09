import React, { FC, ReactElement } from 'react';
import styled from  '@emotion/styled';

interface ListProps<T = any> {
    className?: string;
    data: T[],
    renderer: (item: T, index: number) => ReactElement;
}

const ListComponent:FC<ListProps> = ({className, data, renderer }) => (
    <div className={className}>{Array.isArray(data) && data.map(renderer)}</div>
);

export const List = styled(ListComponent)`
    & > li {
        list-style: none;
        margin-right: 10px;
        margin-bottom: 10px;
    }
`;