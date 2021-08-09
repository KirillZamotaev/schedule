import styled from '@emotion/styled';
import React, { FC } from 'react';

const ButtonComponent:FC<any> = ({ children, className, ...props }) => (
    <div {...props} className={className}>{children}</div>
);

export const Button = styled(ButtonComponent)`
  color: ${(props: any) => props.selected ? 'white' : 'black'};
  padding: 10px;
  box-shadow: 0px 2px 3px #bbb;
  background-color: ${(props: any) => props.selected ? '#4c4c56' : 'white'};
  border-radius: 4px;
  &:hover {
      cursor: pointer;
      background-color: #4c4c56;
      color: white;
      transform: 0.5s background-color ease;
  }
  &.selected {
    background-color: #4c4c56;
    color: white;
  }
`;
