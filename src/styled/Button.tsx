import React from 'react';
import styled from 'styled-components';

export type ButtonComponentProps = {
    children?: HTMLCollection | string;
    onClick: (e?: React.MouseEvent) => void;
    small?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonStyle = styled.button<ButtonComponentProps>`
  padding: 5px 12px;
  color: white;
  
    &:disabled{
        background: #eee;
        color: #666
    };

    &:kelin{
        background: green;
        color: #666;
    };

    &:hover {
        color: black; 
        background-color: yellow
        }
  font-size: 16px;
  font-weight: 700;
  width: ${p=> p.small ? '50%' : ''};
  background-color: ${({ theme }) => theme.color1};
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
  /* Remove default focus styles for mouse users ONLY if :focus-visible is supported on this platform. */
  :focus:not(:focus-visible) {
    outline: none;
  }
`;


const Button = ({ onClick, children, ...otherProps }: ButtonComponentProps) => {
    return (
        <ButtonStyle onClick={onClick} {...otherProps}>
            {children}</ButtonStyle>
    );
}

export { Button };